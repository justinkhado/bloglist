describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    // this visit seems unnecessary but otherwise an error occurs after logging
    // in twice
    cy.visit('http://localhost:3000')
    const user = {
      name: 'Test User',
      username: 'username1',
      password: 'password123'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('log in')
    cy.contains('username')
    cy.contains('password')
  })

  describe('Login', function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('username1')
      cy.get('#password').type('password123')
      cy.get('#login-button').click()

      cy.contains('Test User logged in')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('username1')
      cy.get('#password').type('wrongpass')
      cy.get('#login-button').click()

      cy.get('#notification')
        .should('contain', 'wrong username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
    })
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'username1', password: 'password123' })
    })

    it('a blog can be created', function() {
      cy.contains('create new blog').click()
      cy.get('#title-input').type('Blog title')
      cy.get('#author-input').type('Au Thor')
      cy.get('#url-input').type('url.com')
      cy.get('#submit-blog-form').click()
    })

    describe('a blog exists', function() {
      beforeEach(function() {
        cy.createBlog({
          title: 'Blog title',
          author: 'Au Thor',
          url: 'url.com'
        })
      })

      it('', function(){
        // this function exists because the blogs aren't resetting before
        // the next test which causes an error because the test blog above
        // exists although the user that created that blog doesn't
      })

      it('user can like blog', function() {
        cy.contains('view').click()
        cy.get('#like-button').click()
        cy.contains('likes: 1')
      })

      it('user can delete own blog', function() {
        cy.contains('view').click()
        cy.contains('remove').click()
        cy.contains('Blog title').should('not.exist')
      })
    })

    describe('multiple blogs exist', function() {
      beforeEach(function() {
        cy.createBlog({
          title: 'blog 1',
          author: 'author1',
          url: '1.com'
        })
        cy.createBlog({
          title: 'blog 2',
          author: 'author2',
          url: '2.com'
        })
        cy.createBlog({
          title: 'blog 3',
          author: 'author3',
          url: '3.com'
        })
      })

      it.only('blogs are ordered by likes', function() {
        cy.contains('blog 2').parent().find('button').click()
        cy.contains('2.com').parent().find('#like-button').click()
        cy.contains('2.com').parent().find('#like-button').click()
        cy.contains('hide').click()
        cy.contains('blog 3').parent().find('button').click()
        cy.contains('3.com').parent().find('#like-button').click()
        cy.contains('hide').click()

        cy.get('.blog')
          .then(blogs => {
            cy.wrap(blogs[0][0]).contains('blog 2')
            cy.wrap(blogs[0][1]).contains('blog 3')
            cy.wrap(blogs[0][2]).contains('blog 1')
          })
      })
    })
  })
})
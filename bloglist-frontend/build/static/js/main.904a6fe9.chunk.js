(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(33),s=n.n(c),i=n(17),u=n(22),o=n(60),l=n(96),d=n(98),j=n(11),b=n.n(j),f=n(15),x=n(18),p=n(20),O=n(31),h=n.n(O),m="/api/blogs",g=null,v=null,w={setToken:function(e){g="bearer ".concat(e),v={headers:{Authorization:g}}},getAll:function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(m);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(m,t,v);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(m,"/").concat(t),n,v);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(m,"/").concat(t),v);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),comment:function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(m,"/").concat(t,"/comments"),n,v);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},y="/api/users",k={getAll:function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(y);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(y,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(y,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),register:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(y,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=Object(x.a)(Object(x.a)({},e),{},{user:{username:t.username,name:t.name,id:e.user}}),r({type:"NEW_BLOG",data:a});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(f.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.remove(e.id);case 2:n({type:"DELETE",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(r){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.comment(e,t);case 2:r({type:"COMMENT",data:{id:e,commentObject:t}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},D=function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(r){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.update(e,{url:t});case 2:r({type:"EDIT_URL",data:{id:e,url:t}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},I=function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(r){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.update(e,{text:t});case 2:r({type:"EDIT_TEXT",data:{id:e,text:t}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data;case"NEW_BLOG":return[].concat(Object(p.a)(e),[t.data]);case"LIKE":return e.map((function(e){return e.id!==t.data.id?e:t.data}));case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));case"COMMENT":return e.map((function(e){return e.id!==t.data.id?e:Object(x.a)(Object(x.a)({},e),{},{comments:e.comments.concat(t.data.commentObject)})}));case"EDIT_URL":return e.map((function(e){return e.id!==t.data.id?e:Object(x.a)(Object(x.a)({},e),{},{url:t.data.url})}));case"EDIT_TEXT":return e.map((function(e){return e.id!==t.data.id?e:Object(x.a)(Object(x.a)({},e),{},{text:t.data.text})}));default:return e}},U={login:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.login({username:e,password:t});case 2:(a=n.sent)&&(window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),w.setToken(a.token),r({type:"SET_USER",data:a}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},L=function(){return function(e){window.localStorage.removeItem("loggedBlogAppUser"),e({type:"LOG_OUT"})}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_USER":case"SET_USER":return t.data;case"LOG_OUT":return null;case"USER_LIKES":return Object(x.a)(Object(x.a)({},e),{},{likedBlogs:t.data});default:return e}},R=function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.register({username:e,password:t});case 2:a=n.sent,r({type:"REGISTER",data:a});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e,t){return function(n){n({type:"ADD_USER_BLOG",data:{id:t.id,blog:e}})}},G=function(e,t){return function(n){n({type:"REMOVE_USER_BLOG",data:{userId:t.id,blogId:e.id}})}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;case"REGISTER":return[].concat(Object(p.a)(e),[t.data]);case"ADD_USER_BLOG":return e.map((function(e){return e.id!==t.data.id?e:Object(x.a)(Object(x.a)({},e),{},{blogs:e.blogs.concat(t.data.blog)})}));case"REMOVE_USER_BLOG":return e.map((function(e){return e.id!==t.data.userId?e:Object(x.a)(Object(x.a)({},e),{},{blogs:e.blogs.filter((function(e){return e.id!==t.data.blogId}))})}));default:return e}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return function(){var n=Object(f.a)(b.a.mark((function n(a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r&&(clearTimeout(r),r=null),a({type:"SET_NOTIFICATION",data:e}),n.next=4,setTimeout((function(){a({type:"REMOVE_NOTIFICATION"})}),t);case 4:r=n.sent;case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t.data;case"REMOVE_NOTIFICATION":return null;default:return e}},z=Object(o.combineReducers)({blogs:C,currentUser:B,users:W,notification:q}),M=Object(o.createStore)(z,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),J=n(16),F=n(12),K=n(197),V=n(188),X=n(195),H=n(1),$=function(e){var t=e.blog,n=e.setToggleEdit,r=Object(i.b)(),c="link"===t.type?Object(a.useState)(t.url):Object(a.useState)(t.text),s=Object(F.a)(c,2),u=s[0],o=s[1],l=function(){var e=Object(f.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),"link"!==t.type){e.next=6;break}return e.next=4,r(D(t.id,u));case 4:e.next=8;break;case 6:return e.next=8,r(I(t.id,u));case 8:n(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(H.jsxs)(K.a,{sx:{p:1},component:"form",onSubmit:l,children:["link"===t.type?Object(H.jsx)(V.a,{label:"url",value:u,fullWidth:!0,onChange:function(e){var t=e.target;return o(t.value)}}):Object(H.jsx)(V.a,{label:"text",value:u,rows:3,multiline:!0,fullWidth:!0,onChange:function(e){var t=e.target;return o(t.value)}}),Object(H.jsx)(X.a,{sx:{mt:1},variant:"contained",size:"small",type:"submit",children:"Save"})]})},P=n(201),Q=n(202),Y=n(187),Z=n(203),ee=n(204),te=function(e){var t=e.blog,n=Object(i.b)(),r=Object(i.c)((function(e){return e.currentUser})),c=Object(a.useState)(""),s=Object(F.a)(c,2),o=s[0],l=s[1],d=function(){var e=Object(f.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==o&&null===o.match(/^ *$/)&&(-1===o.indexOf("\n")||1!==o.length)){e.next=4;break}return n(A({message:"comment can't be empty",error:!0})),l(""),e.abrupt("return");case 4:return e.prev=4,a={comment:o,username:r.username,userId:r.id},e.next=8,n(T(t.id,a));case 8:l(""),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),n(A({message:"Token expired - log in again",error:!0})),n(L());case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}();return Object(H.jsx)(P.a,{sx:{margin:2},variant:"elevation",elevation:5,children:Object(H.jsxs)(Q.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(H.jsx)(V.a,{value:o,rows:3,onChange:function(e){return l(e.target.value)},multiline:!0}),Object(H.jsx)(X.a,{sx:{mt:1},variant:"contained",size:"small",onClick:d,children:"submit"}),Object(H.jsx)(Y.a,{mt:3,spacing:1,children:t.comments.map((function(e,t){return Object(H.jsxs)(P.a,{sx:{border:1,padding:1},variant:"outlined",square:!0,children:[Object(H.jsx)(Z.a,{children:e.comment}),Object(H.jsxs)(Z.a,{variant:"body2",color:"text.secondary",children:["- ",Object(H.jsx)(ee.a,{sx:{textDecoration:"none"},component:u.b,to:"/users/".concat(e.userId),children:e.username})]})]},t)}))})]})})},ne=n(205),re=n(102),ae=n.n(re),ce=n(103),se=n.n(ce),ie=function(e){var t=e.blog,n=Object(i.b)(),r=Object(i.c)((function(e){return e.currentUser})),a=function(){var e,a=r.likedBlogs.includes(t.id)?Object(x.a)(Object(x.a)({},t),{},{likes:t.likes-1}):Object(x.a)(Object(x.a)({},t),{},{likes:t.likes+1}),c=r.likedBlogs.includes(t.id)?Object(x.a)(Object(x.a)({},r),{},{likedBlogs:r.likedBlogs.filter((function(e){return e!==t.id}))}):Object(x.a)(Object(x.a)({},r),{},{likedBlogs:r.likedBlogs.concat(t.id)});n(function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(r){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.update(e.id,{likes:e.likes});case 2:return n.next=4,k.update(t.id,t);case 4:r({type:"LIKE",data:e});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(a,c)),n((e=c.likedBlogs,function(t){var n=JSON.parse(window.localStorage.getItem("loggedBlogAppUser")),r=Object(x.a)(Object(x.a)({},n),{},{likedBlogs:e});window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(r)),t({type:"USER_LIKES",data:e})}))};return Object(H.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignSelf:"flex-start",marginTop:15},children:[Object(H.jsx)(Z.a,{sx:{alignSelf:"center"},variant:"body",children:t.likes}),Object(H.jsx)(ne.a,{sx:{paddingTop:0},color:"primary",onClick:function(){return a()},children:r.likedBlogs.includes(t.id)?Object(H.jsx)(ae.a,{}):Object(H.jsx)(se.a,{})})]})},ue=n(206),oe=function(e){var t=e.blog,n=Object(i.b)(),r=Object(J.g)(),c=Object(i.c)((function(e){return e.currentUser})),s=Object(a.useState)(!1),o=Object(F.a)(s,2),l=o[0],d=o[1],j=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author))){e.next=13;break}return e.prev=1,e.next=4,n(E(t));case 4:n(G(t,c)),r("/"),n(A({message:"blog successfully deleted"})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(A({message:"Token expired - log in again",error:!0})),n(L());case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return t?Object(H.jsxs)("div",{children:[Object(H.jsxs)(P.a,{sx:{display:"flex",margin:2},elevation:5,children:[Object(H.jsx)(ue.a,{children:Object(H.jsx)(ie,{blog:t})}),Object(H.jsxs)(Q.a,{sx:{display:"flex",flexDirection:"column",paddingLeft:0,flexGrow:1},children:[Object(H.jsx)(Z.a,{variant:"h6",children:t.title}),l?Object(H.jsx)($,{blog:t,setToggleEdit:d}):Object(H.jsx)("div",{children:"link"===t.type?Object(H.jsx)(ee.a,{href:-1!==t.url.indexOf("http")?t.url:"//".concat(t.url),children:Object(H.jsx)(Z.a,{sx:{overflowWrap:"anywhere"},children:t.url})}):Object(H.jsx)(P.a,{variant:"outlined",square:!0,children:Object(H.jsx)(Z.a,{m:1,children:t.text})})}),Object(H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:16},children:[Object(H.jsxs)(Z.a,{variant:"body2",color:"text.secondary",children:["submitted on ".concat(new Date(t.date).toLocaleDateString()," by "),Object(H.jsx)(ee.a,{sx:{textDecoration:"none"},component:u.b,to:"/users/".concat(t.user.id),children:t.user.username})]}),c.username===t.user.username&&Object(H.jsxs)("div",{children:[l?Object(H.jsx)(X.a,{sx:{mr:1},size:"small",onClick:function(){return d(!1)},children:"cancel"}):Object(H.jsx)(X.a,{sx:{mr:1},variant:"contained",color:"success",size:"small",onClick:function(){return d(!0)},children:"edit"}),Object(H.jsx)(X.a,{variant:"contained",color:"error",size:"small",onClick:function(){return j()},children:"delete"})]})]})]})]}),Object(H.jsx)(te,{blog:t})]}):(r("/"),n(A({message:"page no longer exists",error:!0})),null)},le=n(207),de=n(196),je=n(208),be=function(){var e=Object(J.g)(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.currentUser})),r=Object(a.useState)(""),c=Object(F.a)(r,2),s=c[0],u=c[1],o=Object(a.useState)("link"),l=Object(F.a)(o,2),d=l[0],j=l[1],x=Object(a.useState)(""),p=Object(F.a)(x,2),O=p[0],h=p[1],m=Object(a.useState)(""),g=Object(F.a)(m,2),v=g[0],y=g[1],k=function(){var r=Object(f.a)(b.a.mark((function r(a){var c,i;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),c="link"===d?{title:s,type:d,url:O,date:new Date}:{title:s,type:d,text:v,date:new Date},r.prev=2,r.next=5,w.create(c);case 5:return i=r.sent,r.next=8,t(S(i,n));case 8:t(N(i,n)),u(""),h(""),t(A({message:"blog succesfully created"})),e("/"),r.next=19;break;case 15:r.prev=15,r.t0=r.catch(2),t(A({message:"Token expired - log in again",error:!0})),t(L());case 19:case"end":return r.stop()}}),r,null,[[2,15]])})));return function(e){return r.apply(this,arguments)}}();return Object(H.jsx)(le.a,{sx:{mt:5,ml:0,display:"flex",flexDirection:"column",alignItems:"stretch"},maxWidth:"md",children:Object(H.jsx)(P.a,{sx:{margin:2},variant:"elevation",elevation:5,children:Object(H.jsxs)(Q.a,{children:[Object(H.jsx)(Z.a,{variant:"h5",children:"share new blog"}),Object(H.jsxs)(de.a,{sx:{m:1},size:"small",value:d,onChange:function(e,t){j(t)},exclusive:!0,children:[Object(H.jsx)(je.a,{value:"link",children:"link"}),Object(H.jsx)(je.a,{value:"text",children:"text"})]}),Object(H.jsxs)("form",{onSubmit:k,children:[Object(H.jsx)(V.a,{label:"title",value:s,onChange:function(e){return u(e.target.value)},margin:"dense",size:"small",fullWidth:!0,required:!0}),"link"===d?Object(H.jsx)(V.a,{label:"url",value:O,onChange:function(e){return h(e.target.value)},margin:"dense",size:"small",fullWidth:!0,required:!0}):Object(H.jsx)(V.a,{label:"text",value:v,onChange:function(e){return y(e.target.value)},margin:"dense",rows:4,multiline:!0,fullWidth:!0,required:!0}),Object(H.jsx)(X.a,{sx:{mt:2},type:"submit",variant:"contained",children:"create"})]})]})})})},fe=n(191),xe=n(192),pe=function(e){var t=e.sort,n=e.handleSortChange;return Object(H.jsxs)(fe.a,{sx:{background:"white",alignSelf:"flex-end",margin:1,marginRight:3,paddingLeft:1},variant:"standard",value:t,onChange:n,children:[Object(H.jsx)(xe.a,{value:"date",children:"date"}),Object(H.jsx)(xe.a,{value:"likes",children:"likes"})]})},Oe=n(209),he=function(){var e,t=Object(a.useState)("date"),n=Object(F.a)(t,2),r=n[0],c=n[1],s=Object(i.c)((function(e){return e.blogs}));return e="date"===r?s.sort((function(e,t){return new Date(t.date)-new Date(e.date)})):s.sort((function(e,t){return t.likes-e.likes})),Object(H.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(H.jsx)(pe,{sort:r,handleSortChange:function(e){c(e.target.value)}}),e.map((function(e){return Object(H.jsxs)(P.a,{sx:{display:"flex",m:2,mb:0},elevation:5,children:[Object(H.jsx)(ue.a,{children:Object(H.jsx)(ie,{blog:e})}),Object(H.jsx)(u.b,{style:{textDecoration:"none",flexGrow:1},component:Oe.a,to:"/blogs/".concat(e.id),children:Object(H.jsxs)(Q.a,{sx:{display:"flex",flexDirection:"column",paddingLeft:0},children:[Object(H.jsx)(Z.a,{variant:"h6",children:e.title}),Object(H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(H.jsxs)(Z.a,{variant:"body2",color:"text.secondary",children:[e.comments.length," comment(s)"]}),Object(H.jsxs)(Z.a,{variant:"body2",color:"text.secondary",children:["submitted on ",new Date(e.date).toLocaleDateString()," by ",e.user.username]})]})]})})]},e.id)}))]})},me=function(){return Object(H.jsx)(P.a,{sx:{background:"mediumpurple"},square:!0,children:Object(H.jsx)(Z.a,{sx:{display:"flex",justifyContent:"center",padding:1},variant:"h2",color:"white",children:"bloglist"})})},ge=n(210),ve=n(211),we=n(212),ye=n(213),ke=n(214),Se=function(){var e=Object(i.c)((function(e){return e.currentUser})),t=Object(i.c)((function(e){return e.blogs})).filter((function(t){return e.likedBlogs.includes(t.id)})).sort((function(e,t){return new Date(e.date)-new Date(t.date)}));return Object(H.jsx)(P.a,{sx:{margin:2},children:Object(H.jsxs)(Q.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(H.jsx)(Z.a,{sx:{alignSelf:"center"},variant:"h4",children:"liked blogs"}),Object(H.jsxs)(ge.a,{children:[Object(H.jsx)(ve.a,{children:Object(H.jsxs)(we.a,{children:[Object(H.jsx)(ye.a,{children:Object(H.jsx)(Z.a,{sx:{fontWeight:"bold"},children:"title"})}),Object(H.jsx)(ye.a,{children:Object(H.jsx)(Z.a,{sx:{fontWeight:"bold"},children:"user"})})]})}),Object(H.jsx)(ke.a,{children:t.map((function(e,t){return Object(H.jsxs)(we.a,{children:[Object(H.jsx)(ye.a,{width:"100%",children:Object(H.jsx)(Z.a,{component:u.b,to:"/blogs/".concat(e.id),children:e.title})}),Object(H.jsx)(ye.a,{width:"100%",children:Object(H.jsx)(Z.a,{component:u.b,to:"/users/".concat(e.user.id),children:e.user.username})})]},t)}))})]})]})})},Ee=function(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(F.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),u=Object(F.a)(s,2),o=u[0],l=u[1],d=Object(a.useState)(""),j=Object(F.a)(d,2),x=j[0],p=j[1],O=Object(a.useState)(!1),h=Object(F.a)(O,2),m=h[0],g=h[1],v=function(){var t=Object(f.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e(_(r,o));case 4:t.next=11;break;case 6:t.prev=6,t.t0=t.catch(1),e(A({message:"wrong username or password",error:!0})),c(""),l("");case 11:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(f.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),o===x){t.next=4;break}return e(A({message:"password does not match",error:!0})),t.abrupt("return");case 4:return t.prev=4,t.next=7,e(R(r,o));case 7:return t.next=9,e(_(r,o));case 9:e(A({message:"account successfully created"})),t.next=18;break;case 12:t.prev=12,t.t0=t.catch(4),r.length<6?e(A({message:"username must be at least 5 characters",error:!0})):o.length<9&&e(A({message:"password must be at least 8 characters",error:!0})),c(""),l(""),p("");case 18:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(H.jsx)(le.a,{maxWidth:"xs",children:Object(H.jsx)(P.a,{sx:{mt:10},variant:"elevation",elevation:5,children:Object(H.jsx)(Q.a,{children:Object(H.jsxs)(K.a,{sx:{mt:1,display:"flex",flexDirection:"column"},component:"form",onSubmit:m?w:v,children:[Object(H.jsx)(Z.a,{sx:{alignSelf:"center",mb:1},variant:"h4",children:m?"register":"log in"}),Object(H.jsx)(V.a,{label:"username",value:r,onChange:function(e){var t=e.target;return c(t.value)},margin:"dense",required:!0,autoFocus:!0}),Object(H.jsx)(V.a,{label:"password",type:"password",value:o,onChange:function(e){var t=e.target;return l(t.value)},margin:"dense",autoComplete:"off",required:!0}),m&&Object(H.jsx)(V.a,{label:"confirm password",type:"password",value:x,onChange:function(e){var t=e.target;return p(t.value)},margin:"dense",autoComplete:"off",required:!0}),Object(H.jsx)(X.a,{sx:{mt:2},variant:"contained",id:"login-button",type:"submit",fullWidth:!0,children:m?"register":"log in"}),Object(H.jsx)(ee.a,{sx:{mt:2,alignSelf:"flex-end"},component:X.a,onClick:function(){g(!m)},children:m?"Have an account? Log in":"Not signed up? Register"})]})})})})},Te=n(215),De=n(216),Ie=n(104),Ce=function(){var e=Object(a.useState)(null),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Boolean(n),s=Object(i.b)(),o=Object(i.c)((function(e){return e.currentUser})),l=function(){r(null)};return Object(H.jsx)(Te.a,{sx:{background:"dimgrey"},position:"static",elevation:0,children:Object(H.jsxs)(De.a,{sx:{display:"flex"},variant:"dense",children:[Object(H.jsx)(X.a,{color:"inherit",component:u.b,to:"/",children:"blogs"}),Object(H.jsx)(X.a,{color:"inherit",component:u.b,to:"/blogs/submit",children:"submit"}),Object(H.jsx)(X.a,{sx:{marginLeft:"auto"},color:"inherit","aria-controls":"user-menu",onClick:function(e){r(e.currentTarget)},children:o.username}),Object(H.jsxs)(Ie.a,{id:"user-menu",anchorEl:n,open:c,onClose:l,children:[Object(H.jsx)(xe.a,{component:u.b,to:"/users/".concat(o.id),onClick:l,children:"my blogs"}),Object(H.jsx)(xe.a,{component:u.b,to:"/users/".concat(o.id,"/liked"),onClick:l,children:"liked blogs"}),Object(H.jsx)(xe.a,{color:"inherit",onClick:function(){return s(L())},component:u.b,to:"/",children:"log out"})]})]})})},Ue=n(190),_e=function(){var e=Object(i.c)((function(e){return e.notification}));return e?e.error?Object(H.jsx)(Ue.a,{sx:{mt:1},severity:"error",children:e.message}):Object(H.jsx)(Ue.a,{sx:{mt:1},children:e.message}):null},Le=function(e){var t=e.user;if(!t)return null;var n,r=Object(a.useState)("date"),c=Object(F.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return e.blogs})).filter((function(e){return e.user.id===t.id}));return n="date"===s?l.sort((function(e,t){return new Date(t.date)-new Date(e.date)})):l.sort((function(e,t){return t.likes-e.likes})),Object(H.jsx)(P.a,{sx:{margin:2},children:Object(H.jsxs)(Q.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(H.jsx)(pe,{sort:s,handleSortChange:function(e){o(e.target.value)}}),Object(H.jsx)(Z.a,{sx:{alignSelf:"center"},variant:"h4",children:t.username}),Object(H.jsxs)(ge.a,{children:[Object(H.jsx)(ve.a,{children:Object(H.jsxs)(we.a,{children:[Object(H.jsx)(ye.a,{children:Object(H.jsx)(Z.a,{sx:{fontWeight:"bold"},children:"title"})}),Object(H.jsx)(ye.a,{children:Object(H.jsx)(Z.a,{sx:{fontWeight:"bold"},children:"likes"})}),Object(H.jsx)(ye.a,{children:Object(H.jsx)(Z.a,{sx:{fontWeight:"bold"},children:"date"})})]})}),Object(H.jsx)(ke.a,{children:n.map((function(e,t){return Object(H.jsxs)(we.a,{children:[Object(H.jsx)(ye.a,{width:"100%",children:Object(H.jsx)(Z.a,{component:u.b,to:"/blogs/".concat(e.id),children:e.title})}),Object(H.jsx)(ye.a,{children:Object(H.jsx)(Z.a,{children:e.likes})}),Object(H.jsx)(ye.a,{children:Object(H.jsx)(Z.a,{children:new Date(e.date).toLocaleDateString()})})]},t)}))})]})]})})},Be=function(){var e=Object(i.b)();Object(a.useEffect)((function(){e(function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=window.localStorage.getItem("loggedBlogAppUser"))&&(r=JSON.parse(n),w.setToken(r.token),t({type:"LOGGED_USER",data:r}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(i.c)((function(e){return e.currentUser})),n=Object(i.c)((function(e){return e.users})),r=Object(i.c)((function(e){return e.blogs})),c=Object(J.f)("/users/:id"),s=c?n.find((function(e){return e.id===c.params.id})):null,u=Object(J.f)("/blogs/:id"),o=u?r.find((function(e){return e.id===u.params.id})):null;return t?Object(H.jsxs)(le.a,{maxWidth:"xl",children:[Object(H.jsx)(me,{}),Object(H.jsx)(Ce,{}),Object(H.jsx)(_e,{}),Object(H.jsxs)(J.c,{children:[Object(H.jsx)(J.a,{path:"/",element:Object(H.jsx)("div",{children:Object(H.jsx)(he,{})})}),Object(H.jsx)(J.a,{path:"/blogs/:id",element:Object(H.jsx)(oe,{blog:o})}),Object(H.jsx)(J.a,{path:"/blogs/submit",element:Object(H.jsx)(be,{})}),Object(H.jsx)(J.a,{path:"/users/:id",element:Object(H.jsx)(Le,{user:s})}),Object(H.jsx)(J.a,{path:"/users/:id/liked",element:Object(H.jsx)(Se,{})})]})]}):Object(H.jsxs)(le.a,{children:[Object(H.jsx)(me,{}),Object(H.jsx)(_e,{}),Object(H.jsx)(Ee,{})]})};n(145);s.a.render(Object(H.jsx)(i.a,{store:M,children:Object(H.jsx)(u.a,{children:Object(H.jsx)(Be,{})})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.904a6fe9.chunk.js.map
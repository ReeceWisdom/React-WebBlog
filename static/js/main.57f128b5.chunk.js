(this["webpackJsonp002-tutorial"]=this["webpackJsonp002-tutorial"]||[]).push([[0],{34:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(26),a=n.n(r),o=n(5),i=n(3),j=(n(34),n(15)),l=n(4),b=function(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=function(){s({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},u=n(1),d=function(e){var t=e.title,n=b().width;return Object(u.jsxs)("header",{className:"Header",children:[Object(u.jsx)("h1",{children:t}),n<768?Object(u.jsx)(j.b,{}):n<992?Object(u.jsx)(j.c,{}):Object(u.jsx)(j.a,{})]})},h=n(8),O=n.n(h),p=n(9),x=n(12),m=n.n(x),f=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(null),o=Object(l.a)(a,2),i=o[0],j=o[1],b=Object(c.useState)(!0),u=Object(l.a)(b,2),d=u[0],h=u[1];return Object(c.useEffect)((function(){var t=!0,n=m.a.CancelToken.source(),c=function(){var e=Object(p.a)(O.a.mark((function e(c){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get(c,{cancelToken:n.token});case 3:s=e.sent,t&&(r(s.data),j(null)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t&&(j(e.t0.message),r([]));case 10:return e.prev=10,t&&setTimeout((function(){return h(!1)}),2e3),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}();c(e);return function(){t=!1,n.cancel()}}),[e]),{data:s,fetchError:i,isLoading:d}},g=Object(c.createContext)({}),v=function(e){var t=e.children,n=Object(c.useState)([]),s=Object(l.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],b=i[1],d=Object(c.useState)([]),h=Object(l.a)(d,2),O=h[0],p=h[1],x=f("http://localhost:3100/posts"),m=x.data,v=x.fetchError,y=x.isLoading;return Object(c.useEffect)((function(){a(m)}),[m]),Object(c.useEffect)((function(){var e=r.filter((function(e){return e.title.toLowerCase().includes(j.toLowerCase())||e.body.toLowerCase().includes(j.toLowerCase())}));p(e.reverse())}),[r,j]),Object(u.jsx)(g.Provider,{value:{posts:r,setPosts:a,search:j,setSearch:b,searchResults:O,setSearchResults:p,isLoading:y,fetchError:v},children:t})},y=g,S=function(){var e=Object(c.useContext)(y),t=e.search,n=e.setSearch;return Object(u.jsxs)("nav",{className:"Nav",children:[Object(u.jsxs)("form",{className:"searchForm",onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search Posts"}),Object(u.jsx)("input",{id:"search",type:"text",placeholder:"Search Posts",value:t,onChange:function(e){return n(e.target.value)}})]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/post",children:"Post"})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/about",children:"About"})})]})]})},w=function(){return Object(u.jsx)("footer",{className:"Footer",children:Object(u.jsxs)("p",{children:["Reece Wisdom ~-~ Copyright \xa9 ",(new Date).getFullYear()]})})},N=function(e){var t=e.title;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{title:t}),Object(u.jsx)(S,{}),Object(u.jsx)(i.a,{}),Object(u.jsx)(w,{})]})},R=function(e){var t=e.post;return Object(u.jsx)("article",{className:"post",children:Object(u.jsxs)(o.b,{to:"/post/".concat(t.id),children:[Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{className:"postDate",children:t.datetime}),Object(u.jsx)("p",{className:"postBody",children:t.body.length<=25?t.body:"".concat(t.body.slice(0,25),"...")})]})})},P=function(e){var t=e.posts;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(R,{post:e},e.id)}))})},L=n(17),C=function(){var e=Object(c.useContext)(y),t=e.searchResults,n=e.isLoading,s=e.fetchError;return Object(u.jsxs)("main",{className:"Home",children:[n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(L.b,{className:"image loader"}),Object(u.jsx)("p",{className:"msg load",children:"Loading..."})]}),!n&&s&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(L.a,{className:"image err"}),Object(u.jsx)("p",{className:"msg err",children:s})]}),!n&&!s&&(t.length?Object(u.jsx)(P,{posts:t}):Object(u.jsx)("p",{children:"No Posts!"}))]})},F=function(){return Object(u.jsxs)("main",{className:"About",children:[Object(u.jsx)("h2",{children:"About"}),Object(u.jsxs)("p",{style:{marginTop:"1rem"},children:["This personal blog app is a project I created to Learn React using the React Router Library & Axios API Requests. React Router is a standard library for routing in React. It enables navigation across different views of various components in a React Application, and changes the browser URL accordingly (maintaining synchronisation between the UI and URL).",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"JSX (JavaScript XML) syntax is neither a string nor HTML, it\u2019s a syntax extension to JavaScript. JSX is used in React to write HTML in JavaScript in the DOM to design the UI. Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names, e.g. class becomes className in JSX, and tabindex becomes tabIndex.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"React separates concerns with loosely coupled units called \u201ccomponents\u201d that contain both markup (HTML) & logic (JavaScript). Babel compiles JSX down and produces React \u201celements\u201d with React.createElement() calls. After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"By default, React DOM escapes any values embedded in JSX before rendering them. Thus ensuring that you can never inject anything that\u2019s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks."]})]})},E=m.a.create({baseURL:"http://localhost:3100"}),M=function(){var e=Object(c.useContext)(y),t=e.posts,n=e.setPosts,s=Object(i.g)(),r=Object(i.h)().id,a=t.find((function(e){return e.id.toString()===r})),j=function(){var e=Object(p.a)(O.a.mark((function e(c){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.delete("/posts/".concat(c));case 3:r=t.filter((function(e){return e.id!==c})),n(r),s("/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error: ".concat(e.t0.response.status,":")),console.log(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("main",{className:"PostPage",children:Object(u.jsxs)("article",{className:"post",children:[a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:a.title}),Object(u.jsx)("p",{className:"postDate",children:a.datetime}),Object(u.jsx)("p",{className:"postBody",children:a.body}),Object(u.jsx)(o.b,{to:"/post/".concat(a.id,"/edit"),children:Object(u.jsx)("button",{className:"editButton",children:"Edit Post"})}),Object(u.jsx)("button",{className:"deleteButton",onClick:function(){return j(a.id)},children:"Delete Post"})]}),!a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Post Not Found!"}),Object(u.jsx)(o.b,{to:"/",children:"Return to Homepage"})]})]})})},T=n(27),k=n(56),J=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(l.a)(r,2),o=a[0],j=a[1],b=Object(c.useContext)(y),d=b.posts,h=b.setPosts,x=Object(i.g)(),m=function(){var e=Object(p.a)(O.a.mark((function e(t){var c,r,a,i,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=d.length?d[d.length-1].id+1:1,r=Object(k.a)(new Date,"MMMM dd, yyyy pp"),a={id:c,title:n,datetime:r,body:o},e.prev=4,e.next=7,E.post("/posts",a);case 7:i=e.sent,l=[].concat(Object(T.a)(d),[i.data]),h(l),s(""),j(""),x("/"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.log("Error: ".concat(e.t0.response.status,":")),console.log(e.t0.response.data.message);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("main",{className:"NewPost",children:[Object(u.jsx)("h2",{children:"New Post"}),Object(u.jsxs)("form",{className:"newPostForm",onSubmit:m,children:[Object(u.jsx)("label",{htmlFor:"postTitle",children:"Title:"}),Object(u.jsx)("input",{id:"postTitle",type:"text",required:!0,value:n,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"postBody",children:"Body:"}),Object(u.jsx)("textarea",{id:"postBody",required:!0,value:o,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})]})},B=n(28),D=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(l.a)(r,2),j=a[0],b=a[1],d=Object(c.useContext)(y),h=d.posts,x=d.setPosts,m=Object(i.g)(),f=Object(i.h)().id,g=h.find((function(e){return e.id.toString()===f}));Object(c.useEffect)((function(){g&&(s(g.title),b(g.body))}),[g,s,b]);var v=function(){var e=Object(p.a)(O.a.mark((function e(t){var c,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(k.a)(new Date,"MMMM dd, yyyy pp"),r={id:t,title:n,datetime:c,body:j},e.prev=2,e.next=5,E.put("/posts/".concat(t),r);case 5:a=e.sent,x(h.map((function(e){return e.id===t?Object(B.a)({},a.data):e}))),s(""),b(""),m("/"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("Error: ".concat(e.t0.response.status,":")),console.log(e.t0.response.data.message);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("main",{className:"NewPost",children:[n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Edit Post"}),Object(u.jsxs)("form",{className:"newPostForm",onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsx)("label",{htmlFor:"postTitle",children:"Title:"}),Object(u.jsx)("input",{id:"postTitle",type:"text",required:!0,value:n,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"postBody",children:"Body:"}),Object(u.jsx)("textarea",{id:"postBody",required:!0,value:j,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("button",{type:"submit",onClick:function(){return v(g.id)},children:"Submit"})]})]}),!n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Post Not Found!"}),Object(u.jsx)(o.b,{to:"/",children:"Return to Homepage"})]})]})},H=function(){return Object(u.jsxs)("main",{className:"Missing",children:[Object(u.jsx)("h2",{children:"Page Not Found!"}),Object(u.jsx)(o.b,{to:"/",children:"Return to Homepage"})]})};var X=function(){return Object(u.jsx)(v,{children:Object(u.jsx)(i.d,{children:Object(u.jsxs)(i.b,{path:"/",element:Object(u.jsx)(N,{title:"React JS Blog"}),children:[Object(u.jsx)(i.b,{index:!0,element:Object(u.jsx)(C,{})}),Object(u.jsxs)(i.b,{path:"post",children:[Object(u.jsx)(i.b,{index:!0,element:Object(u.jsx)(J,{})}),Object(u.jsx)(i.b,{path:":id",element:Object(u.jsx)(M,{})}),Object(u.jsx)(i.b,{path:":id/edit",element:Object(u.jsx)(D,{})})]}),Object(u.jsx)(i.b,{path:"about",element:Object(u.jsx)(F,{})}),Object(u.jsx)(i.b,{path:"*",element:Object(u.jsx)(H,{})})]})})})};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(i.d,{children:Object(u.jsx)(i.b,{path:"/*",element:Object(u.jsx)(X,{})})})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.57f128b5.chunk.js.map
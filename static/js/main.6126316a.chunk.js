(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{75:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(24),s=a.n(n),i=a(22),j=a(8),d=a(21),o=a.n(d),l=a(28),b=a(16),u=a(85),h=a(83),O=a(81),x=a(54),p=a(50),m=(a(62),p.a.initializeApp({apiKey:"AIzaSyD0Jrad6GQdR57Nkeo64QLaqKlHiPYhAa8",authDomain:"shredevfood.firebaseapp.com",projectId:"shredevfood",storageBucket:"shredevfood.appspot.com",messagingSenderId:"440880650200",appId:"1:440880650200:web:d0c9e7302404f7a90004ad",measurementId:"G-ZL73PBKCLX"})),f=m.auth(),g=a(2),v=r.a.createContext();function w(){return Object(c.useContext)(v)}function y(e){var t=e.children,a=Object(c.useState)(),r=Object(b.a)(a,2),n=r[0],s=r[1],i=Object(c.useState)(!0),j=Object(b.a)(i,2),d=j[0],o=j[1];Object(c.useEffect)((function(){return f.onAuthStateChanged((function(e){s(e),o(!1)}))}),[]);var l={currentUser:n,login:function(e,t){return f.signInWithEmailAndPassword(e,t)},signup:function(e,t){return f.createUserWithEmailAndPassword(e,t)},logout:function(){return f.signOut()},resetPassword:function(e){return f.sendPasswordResetEmail(e)},updateEmail:function(e){return n.updateEmail(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(g.jsx)(v.Provider,{value:l,children:!d&&t})}function k(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=w().login,r=Object(c.useState)(""),n=Object(b.a)(r,2),s=n[0],d=n[1],p=Object(c.useState)(!1),m=Object(b.a)(p,2),f=m[0],v=m[1],y=Object(j.g)();function k(){return(k=Object(l.a)(o.a.mark((function c(r){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,d(""),v(!0),c.next=6,a(e.current.value,t.current.value);case 6:y.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),d("Failed to Login or Password wrong");case 12:v(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{children:Object(g.jsxs)(u.a.Body,{children:[Object(g.jsx)("h1",{className:"text-center mb-5 text-primary",children:"ShreeDev Foody"}),Object(g.jsx)("h2",{className:"text-center mb-4",children:"Login "}),s&&Object(g.jsx)(h.a,{variant:"danger",children:s}),Object(g.jsxs)(O.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(g.jsxs)(O.a.Group,{id:"email",children:[Object(g.jsx)(O.a.Label,{children:"Email"}),Object(g.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(g.jsxs)(O.a.Group,{id:"password",children:[Object(g.jsx)(O.a.Label,{children:"Password"}),Object(g.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(g.jsx)(x.a,{disabled:f,className:"w-100",type:"submit",children:"Login"})]})]})}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account ",Object(g.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})}var S=a(82),P=a(84),I=a(80),T=a.p+"static/media/palak.b05b8f8b.jpg",B=a.p+"static/media/Butter-Naan-Recipe1.453d197d.jpg",N=a.p+"static/media/paaner.97a69f08.jpg",L=a.p+"static/media/paneer-paratha.f51d389f.jpg",C=a.p+"static/media/veg-biryani.8479b798.jpg";function F(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],n=w(),s=n.currentUser,i=n.logout,d=Object(j.g)();function O(){return(O=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,i();case 4:d.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(S.a,{bg:"light",expand:"lg",children:[Object(g.jsx)(S.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(g.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(S.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsxs)(P.a,{className:"mr-auto",children:[Object(g.jsx)(P.a.Link,{href:"#home",children:"Home"}),Object(g.jsxs)(I.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(g.jsx)(I.a.Item,{href:"#action/3.1",children:"Action"}),Object(g.jsx)(I.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(I.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(I.a.Divider,{}),Object(g.jsx)(I.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(g.jsx)("div",{className:"w-100 text-center mt-2",children:Object(g.jsx)(x.a,{variant:"link",onClick:function(){return O.apply(this,arguments)},children:"Log Out"})})]})]}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(u.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Foody Profile"}),a&&Object(g.jsx)(h.a,{variant:"danger",children:a}),Object(g.jsx)("strong",{children:"Email:"})," ",s.email]})}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Img,{variant:"top",src:T}),Object(g.jsxs)(u.a.Body,{children:[Object(g.jsx)(u.a.Title,{children:"Palak Panner"}),Object(g.jsx)(u.a.Title,{children:"300 rupees"}),Object(g.jsx)(u.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(g.jsx)(x.a,{variant:"primary",children:"Order now"})]})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Img,{variant:"top",src:C}),Object(g.jsxs)(u.a.Body,{children:[Object(g.jsx)(u.a.Title,{children:"Veg Briyani"}),Object(g.jsx)(u.a.Title,{children:"300 rupees"}),Object(g.jsx)(u.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(g.jsx)(x.a,{variant:"primary",children:"Order now"})]})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Img,{variant:"top",src:L}),Object(g.jsxs)(u.a.Body,{children:[Object(g.jsx)(u.a.Title,{children:"Partha"}),Object(g.jsx)(u.a.Title,{children:"300 rupees"}),Object(g.jsx)(u.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(g.jsx)(x.a,{variant:"primary",children:"Order Now"})]})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Img,{variant:"top",src:N}),Object(g.jsxs)(u.a.Body,{children:[Object(g.jsx)(u.a.Title,{children:"Panner"}),Object(g.jsx)(u.a.Title,{children:"300 rupees"}),Object(g.jsx)(u.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(g.jsx)(x.a,{variant:"primary",children:"Order Now"})]})]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Img,{variant:"top",src:B}),Object(g.jsxs)(u.a.Body,{children:[Object(g.jsx)(u.a.Title,{children:"Butter Roti"}),Object(g.jsx)(u.a.Title,{children:"300 rupees"}),Object(g.jsx)(u.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(g.jsx)(x.a,{variant:"primary",children:"Order Now"})]})]})]})}function q(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=w().signup,n=Object(c.useState)(""),s=Object(b.a)(n,2),d=s[0],p=s[1],m=Object(c.useState)(!1),f=Object(b.a)(m,2),v=f[0],y=f[1],k=Object(j.g)();function S(){return(S=Object(l.a)(o.a.mark((function c(n){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",p("Passwords do not match"));case 3:return c.prev=3,p(""),y(!0),c.next=8,r(e.current.value,t.current.value);case 8:k.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),p("Failed to create an account");case 14:y(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{children:Object(g.jsxs)(u.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),d&&Object(g.jsx)(h.a,{variant:"danger",children:d}),Object(g.jsxs)(O.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(g.jsxs)(O.a.Group,{id:"email",children:[Object(g.jsx)(O.a.Label,{children:"Email"}),Object(g.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(g.jsxs)(O.a.Group,{id:"password",children:[Object(g.jsx)(O.a.Label,{children:"Password"}),Object(g.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(g.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(g.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(O.a.Control,{type:"password",ref:a,required:!0})]}),Object(g.jsx)(x.a,{disabled:v,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(g.jsx)(i.b,{to:"/login",children:"Log In"})]})]})}var E=a(43),R=a(56);function A(e){var t=e.component,a=Object(R.a)(e,["component"]),c=w().currentUser;return Object(g.jsx)(j.b,Object(E.a)(Object(E.a)({},a),{},{render:function(e){return c?Object(g.jsx)(t,Object(E.a)({},e)):Object(g.jsx)(j.a,{to:"/login"})}}))}var D=function(){return Object(g.jsx)("div",{className:"main",children:Object(g.jsx)(i.a,{children:Object(g.jsx)(y,{children:Object(g.jsxs)(j.d,{children:[Object(g.jsx)(A,{exact:!0,path:"/",component:F}),Object(g.jsx)(j.b,{path:"/login",component:k}),Object(g.jsx)(j.b,{path:"/signup",component:q})]})})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};a(74);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root")),G()}},[[75,1,2]]]);
//# sourceMappingURL=main.6126316a.chunk.js.map
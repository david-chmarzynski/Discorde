(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(n,e,t){},79:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),i=t.n(o),c=t(38),a=t.n(c),u=(t(47),t(4)),s=t(20),l=t.n(s),b=t(2),d=t(3);function j(){var n=Object(b.a)(["\n  border: none;\n  background-color: yellowgreen;\n"]);return j=function(){return n},n}function f(){var n=Object(b.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: black;\n  color: yellowgreen;\n"]);return f=function(){return n},n}var g=d.a.div(f()),h=d.a.button(j());function O(){var n=Object(b.a)(["\n  width: 50%;\n  height: 10%;\n  margin: auto;\n  color: yellowgreen;\n  background-color: transparent;\n  border: 2px solid yellowgreen;\n  font-weight: 700;\n\n  :focus {\n    background-color: yellowgreen;\n    color: white;\n    border: none;\n  }\n"]);return O=function(){return n},n}function p(){var n=Object(b.a)(["\n  border: 2px solid yellowgreen;\n  width: 80%;\n  height: 10%;\n  background: transparent;\n  margin: auto;\n  color: yellowgreen;\n  font-weight: 800;\n\n  ::placeholder {\n    color: yellowgreen\n  }\n"]);return p=function(){return n},n}function x(){var n=Object(b.a)(["\n  width: 25%;\n  height: 25%;\n  border: 3px solid yellowgreen;\n  display: flex;\n  flex-direction: column;\n"]);return x=function(){return n},n}function v(){var n=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return v=function(){return n},n}var w=d.a.div(v()),m=d.a.form(x()),y=d.a.input(p()),k=d.a.button(O()),S=function(n){var e=n.signin,t=n.setUsername,o=n.setPassword;return Object(r.jsx)(w,{children:Object(r.jsxs)(m,{onSubmit:function(n){return e(n)},children:[Object(r.jsx)(y,{placeholder:"Username",type:"text",onChange:function(n){return t(n.target.value)}}),Object(r.jsx)(y,{placeholder:"Password",type:"password",onChange:function(n){return o(n.target.value)}}),Object(r.jsx)(k,{type:"submit",children:"ACCESS"})]})})};function C(){var n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 16px;\n  height: 16px;\n  background-color: white;\n"]);return C=function(){return n},n}function F(){var n=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  font-size: 2em;\n  color: yellowgreen;\n  font-weight: 800;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  position: relative;\n"]);return F=function(){return n},n}function U(){var n=Object(b.a)(["\n  width: 35%;\n  height: 20%;\n  border: 1px solid yellowgreen;\n"]);return U=function(){return n},n}function P(){var n=Object(b.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  background-color: rgba(0,0,0, .9);\n  display: flex;\n  justify-content: center;\n"]);return P=function(){return n},n}var E=d.a.div(P()),A=d.a.div(U()),D=d.a.p(F()),B=d.a.div(C()),I=function(n){var e=n.message,t=n.setAlert;return Object(r.jsx)(E,{children:Object(r.jsx)(A,{children:Object(r.jsxs)(D,{children:[Object(r.jsx)(B,{onClick:function(){t(!1)}}),e]})})})};function J(){var n=Object(b.a)(["\n  background-color: yellowgreen;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n"]);return J=function(){return n},n}function L(){var n=Object(b.a)(["\n  width: 12px;\n  height: 12px;\n  background-color: green;\n  border-radius: 50%;\n  margin-left: 1rem;\n  margin-right: 1rem;\n"]);return L=function(){return n},n}function T(){var n=Object(b.a)(["\n\n"]);return T=function(){return n},n}function z(){var n=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return z=function(){return n},n}function M(){var n=Object(b.a)(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 20%;\n  height: 35%;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid yellowgreen;\n  border-top: 8px solid yellowgreen;\n"]);return M=function(){return n},n}var _,q,G=d.a.div(M()),H=d.a.div(z()),K=d.a.p(T()),N=d.a.div(L()),Q=d.a.div(J()),R=function(n){var e=n.onlineUsers,t=Object(o.useState)(!1),i=Object(u.a)(t,2),c=i[0],a=i[1],s=function(){a(!c)};return Object(r.jsxs)(r.Fragment,{children:[c&&Object(r.jsx)(G,{onClick:s,children:e&&e.map((function(n){return Object(r.jsxs)(H,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(K,{children:n.username})]})}))}),!c&&Object(r.jsx)(Q,{onClick:s})]})},V=function(){var n=Object(o.useState)(""),e=Object(u.a)(n,2),t=e[0],i=e[1],c=Object(o.useState)(""),a=Object(u.a)(c,2),s=a[0],b=a[1],d=Object(o.useState)(!1),j=Object(u.a)(d,2),f=j[0],O=j[1],p=Object(o.useState)(""),x=Object(u.a)(p,2),v=x[0],w=x[1],m=Object(o.useState)(!1),y=Object(u.a)(m,2),k=y[0],C=y[1],F=Object(o.useState)(""),U=Object(u.a)(F,2),P=U[0],E=U[1],A=Object(o.useState)(),D=Object(u.a)(A,2),B=D[0],J=D[1];Object(o.useEffect)((function(){_=l()()}),[]),Object(o.useEffect)((function(){f&&(q=l()("/chatroom")).on("connect",(function(){q.on("getUsers",(function(n){J(n)}))}))}),[f]);return Object(r.jsxs)(g,{children:[!f&&Object(r.jsx)(S,{signin:function(n){n.preventDefault();var e={username:t,password:s};_.emit("signin",e,(function(n){200===n.status?(O(!0),C(!0),E(n.message),w(n.user_id)):(C(!0),E(n.message))}))},setUsername:i,setPassword:b}),k&&Object(r.jsx)(I,{message:P,setAlert:C}),f&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{onClick:function(n){return function(n){n.preventDefault();var e=v;q.emit("signout",e,(function(n){200===n.status?(O(!1),C(!0),E(n.message),w("")):(C(!0),E(n.message))}))}(n)},children:"Signout"}),Object(r.jsx)(R,{onlineUsers:B})]})]})},W=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(V,{})}),document.getElementById("root")),W()}},[[79,1,2]]]);
//# sourceMappingURL=main.bc99578f.chunk.js.map
(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{106:function(e,t,c){},117:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c(10),a=c.n(j),s=c(29),r=(c(106),c(40)),i=c(11),l=c(146),o=c(148),b=c(150),h=c(169),d=c(39),O=c(153),x=c(77),u=c.n(x),f=c(2),m=Object(l.a)({logo:{fontWeight:"bold"},input:{display:"flex",justifyContent:"flex-end",flexGrow:1}}),p=function(e){var t=e.setIsLog,c=m(),n=Object(i.f)();return Object(f.jsx)(o.a,{elevation:0,children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(h.a,{arrow:!0,className:c.logo,title:Object(f.jsx)(d.a,{children:"Dashboard"}),children:Object(f.jsx)(d.a,{variant:"h6",children:"SQUEEGEE SQUAD"})}),Object(f.jsx)(d.a,{className:c.input,children:"Squeegee Squad - Headquarters"}),Object(f.jsx)(h.a,{arrow:!0,title:Object(f.jsx)(d.a,{children:"Logout"}),children:Object(f.jsx)(O.a,{color:"inherit",onClick:function(){n.push("/"),t(!1)},children:Object(f.jsx)(u.a,{})})})]})})},g=c(168),v=c(166),S=c(170),w=c(154),y=c(155),C=c(156),L=c(157),E=c(158),N=c(78),k=c.n(N),D=c(79),q=c.n(D),F=c(80),I=c.n(F),W=c(81),A=c.n(W),J=c(82),G=c.n(J),H=c(83),Q=c.n(H),R=c(84),T=c.n(R),U=c(85),B=c.n(U),z=[{title:"Dashbroand",href:"/dashboard",icon:Object(f.jsx)(k.a,{})},{title:"Employess",href:"/employess",icon:Object(f.jsx)(q.a,{})},{title:"Customers",href:"/customers",icon:Object(f.jsx)(I.a,{})},{title:"Schedules",href:"/schedules",icon:Object(f.jsx)(A.a,{})},{title:"Job Completion",href:"/jobcompletion",icon:Object(f.jsx)(G.a,{})},{title:"Reports",href:"/reports",icon:Object(f.jsx)(Q.a,{})},{title:"Settings",href:"/settings",icon:Object(f.jsx)(T.a,{})},{title:"Help",href:"/help",icon:Object(f.jsx)(B.a,{})}],K=c(86),M=c.n(K),P=c(87),V=c.n(P),X=Object(l.a)({drawer:{width:240,marginTop:64,padding:6},avatar:{width:60,height:60},box:{height:120,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},active:{backgroundColor:"red"}}),Y=function(){var e=Object(i.f)(),t=Object(i.g)(),c=X(),j=Object(n.useState)(!1),a=Object(s.a)(j,2),r=a[0];a[1];return Object(f.jsx)(g.a,{variant:"permanent",classes:{paper:c.drawer},children:Object(f.jsxs)("div",{children:[Object(f.jsxs)(v.a,{className:c.box,children:[Object(f.jsx)(S.a,{className:c.avatar}),Object(f.jsx)(d.a,{children:"hello"})]}),Object(f.jsx)(w.a,{}),Object(f.jsx)(y.a,{children:z.map((function(n){return Object(f.jsxs)(C.a,{button:!0,onClick:function(){return e.push(n.href)},className:t.pathname==n.href?c.active:null,children:[Object(f.jsx)(L.a,{children:n.icon}),Object(f.jsx)(E.a,{primary:n.title}),r?Object(f.jsx)(M.a,{}):Object(f.jsx)(V.a,{})]})}))})]})})},Z=Object(l.a)({root:{display:"flex"},page:{width:"100%",padding:40,marginLeft:240,marginTop:60}}),$=function(e){var t=e.children,c=e.handleLogged,n=Z();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{setIsLog:c}),Object(f.jsxs)("div",{className:n.root,children:[Object(f.jsx)(Y,{}),Object(f.jsx)("div",{className:n.page,children:t})]})]})},_=c(159),ee=c(91),te=c(160),ce=c(161),ne=c(88),je=c.n(ne),ae=function(){return Object(f.jsxs)(_.a,{container:!0,spacing:2,children:[Object(f.jsx)(_.a,{item:!0,md:10,children:Object(f.jsxs)(ee.a,{children:[Object(f.jsx)(je.a,{}),Object(f.jsx)(te.a,{placeholder:"hello"})]})}),Object(f.jsx)(_.a,{item:!0,md:2,children:Object(f.jsx)(ce.a,{children:"CLEAR"})})]})},se=c(162),re=c(163),ie=c(89),le=c.n(ie),oe=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),c=t[0];t[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(se.a,{children:Object(f.jsx)(re.a,{children:Object(f.jsxs)(_.a,{container:!0,justifyContent:"space-between",children:[Object(f.jsxs)(_.a,{item:!0,children:[Object(f.jsx)(d.a,{children:"bid to do"}),Object(f.jsx)(d.a,{children:c})]}),Object(f.jsx)(_.a,{item:!0,children:Object(f.jsx)(S.a,{children:Object(f.jsx)(le.a,{})})})]})})})})},be=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),c=t[0],j=t[1];return Object(n.useEffect)((function(){fetch("https://picsum.photos/v2/list").then((function(e){return e.json()})).then((function(e){return j(e)}))}),[]),console.log(c),Object(f.jsx)(f.Fragment,{children:"rrr"})},he=function(){return Object(f.jsxs)(_.a,{container:!0,spacing:4,children:[Object(f.jsx)(_.a,{item:!0,md:12,children:Object(f.jsx)(ae,{})}),Object(f.jsx)(_.a,{item:!0,md:3,children:Object(f.jsx)(oe,{})}),Object(f.jsx)(_.a,{item:!0,md:3,children:Object(f.jsx)(oe,{})}),Object(f.jsx)(_.a,{item:!0,md:3,children:Object(f.jsx)(oe,{})}),Object(f.jsx)(_.a,{item:!0,md:3,children:Object(f.jsx)(oe,{})}),Object(f.jsx)(_.a,{item:!0,children:Object(f.jsx)(be,{})})]})},de=function(){return Object(f.jsx)(f.Fragment,{children:"hello"})},Oe=function(e){var t=e.handleSi;return Object(f.jsx)(r.a,{children:Object(f.jsx)($,{handleLogged:t,children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/dashboard",children:Object(f.jsx)(he,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/employess",children:Object(f.jsx)(de,{})})]})})})},xe=function(){var e=Object(i.f)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("span",{onClick:function(){return e.push("/")},children:"login pager"})})},ue=c(164),fe=c(165),me=Object(l.a)((function(e){return{root:{width:500,margin:"auto",display:"flex",justifyContent:"center",flexDirection:"column"},title:{textAlign:"center"}}})),pe=function(e){var t=e.isLog,c=me(),j=Object(n.useState)({email:"",pass:""}),a=Object(s.a)(j,2),r=a[0];a[1];console.log(r.email);var i=function(e){e.preventDefault(),t(!0)},l=function(e){var t=e.target;t.name,t.value};return Object(f.jsx)("form",{onSubmit:i,children:Object(f.jsxs)(se.a,{className:c.root,children:[Object(f.jsx)(ue.a,{title:"SWelcome to Squeegee Squad"}),Object(f.jsx)(w.a,{}),Object(f.jsxs)(re.a,{children:[Object(f.jsx)(fe.a,{label:"username",variant:"outlined",fullWidth:!0,onChange:l}),Object(f.jsx)(fe.a,{label:"password",variant:"outlined",fullWidth:!0,onChange:l}),Object(f.jsx)(ce.a,{type:"submit",onSubmit:i,children:"Sign in now"})]})]})})};var ge=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],j=t[1],a=function(){return j(!c)};return Object(f.jsx)(r.a,{children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/",render:function(){return c?Object(f.jsx)(Oe,{handleSi:a}):Object(f.jsx)(pe,{isLog:a})}}),Object(f.jsx)(i.a,{path:"*",children:Object(f.jsx)(xe,{})})]})})};a.a.render(Object(f.jsx)(ge,{}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.71d26d29.chunk.js.map
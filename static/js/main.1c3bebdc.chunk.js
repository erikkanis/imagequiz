(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{44:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(18),o=t.n(s),c=(t(44),t(8)),i=[],l=t(61),b=t(56),h=t(7),j=t(1),p=function(){var e=Object(r.useState)(""),a=Object(c.a)(e,2),t=a[0],n=a[1],s=Object(r.useState)(""),o=Object(c.a)(s,2),p=o[0],u=o[1],d=Object(h.f)();return Object(j.jsxs)(l.a,{onSubmit:function(e){e.preventDefault();var a=i.find((function(e){return e.username===t&e.password===p}));console.log(i),a&&(console.log(a),d.push({pathname:"/",state:{username:t}}))},children:[Object(j.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(l.a.Label,{children:"Username:"}),Object(j.jsx)(l.a.Control,{type:"email",placeholder:"Enter email",value:t,onChange:function(e){n(e.target.value)}})]}),Object(j.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(j.jsx)(l.a.Label,{children:"Password:"}),Object(j.jsx)(l.a.Control,{type:"password",placeholder:"Password",value:p,onChange:function(e){u(e.target.value)}})]}),Object(j.jsx)(b.a,{variant:"primary",type:"submit",children:"Log In"})]})},u=t(62),d=t(57),m=[{name:"Acacia",picture:"https://habahram.blob.core.windows.net/flowers/acacia.jpg"},{name:"Alyssum",picture:"https://habahram.blob.core.windows.net/flowers/alyssum.jpg"},{name:"Amaryllis",picture:"https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"},{name:"Aster",picture:"https://habahram.blob.core.windows.net/flowers/aster.jpg"},{name:"Azalea",picture:"https://habahram.blob.core.windows.net/flowers/azalea.jpg"},{name:"Begonia",picture:"https://habahram.blob.core.windows.net/flowers/begonia.jpg"},{name:"Buttercup",picture:"https://habahram.blob.core.windows.net/flowers/buttercup.jpg"},{name:"Calluna",picture:"https://habahram.blob.core.windows.net/flowers/calluna.jpg"},{name:"Camellia",picture:"https://habahram.blob.core.windows.net/flowers/camellia.jpg"},{name:"Cardinal",picture:"https://habahram.blob.core.windows.net/flowers/cardinal.jpg"},{name:"Carnation",picture:"https://habahram.blob.core.windows.net/flowers/carnation.jpg"},{name:"Clover",picture:"https://habahram.blob.core.windows.net/flowers/clover.jpg"},{name:"Crown Imperial",picture:"https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"},{name:"Daffodil",picture:"https://habahram.blob.core.windows.net/flowers/daffodil.jpg"},{name:"Dahlia",picture:"https://habahram.blob.core.windows.net/flowers/dahlia.jpg"},{name:"Daisy",picture:"https://habahram.blob.core.windows.net/flowers/daisy.jpg"},{name:"Gladiolus",picture:"https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"},{name:"Lantana",picture:"https://habahram.blob.core.windows.net/flowers/lantana.jpg"},{name:"Lily",picture:"https://habahram.blob.core.windows.net/flowers/lily.jpg"},{name:"Lotus",picture:"https://habahram.blob.core.windows.net/flowers/lotus.jpg"},{name:"Marigold",picture:"https://habahram.blob.core.windows.net/flowers/Marigold.jpg"},{name:"Orchid",picture:"https://habahram.blob.core.windows.net/flowers/orchid.jpg"},{name:"Primrose",picture:"https://habahram.blob.core.windows.net/flowers/primrose.jpg"},{name:"Sunflower",picture:"https://habahram.blob.core.windows.net/flowers/sunflower.jpg"},{name:"Tickseed",picture:"https://habahram.blob.core.windows.net/flowers/tickseed.jpg"},{name:"Tulip",picture:"https://habahram.blob.core.windows.net/flowers/tulip.jpg"},{name:"Zinnia",picture:"https://habahram.blob.core.windows.net/flowers/zinnia.jpg"}],w=function(){var e=Object(r.useState)(""),a=(Object(c.a)(e,1)[0],Object(h.g)(),m.map((function(e){return Object(j.jsxs)(u.a,{style:{width:"18rem"},children:[Object(j.jsx)(u.a.Img,{variant:"top",src:e.picture}),Object(j.jsx)(u.a.Body,{children:Object(j.jsx)(u.a.Title,{children:e.name})})]})})));return Object(j.jsx)(d.a,{style:{display:"flex",flexWrap:"wrap"},children:a})},f=function(){var e=Object(r.useState)(""),a=Object(c.a)(e,2),t=a[0],n=a[1],s=Object(r.useState)(""),o=Object(c.a)(s,2),h=o[0],p=o[1];console.log("Hello");return Object(j.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),i.push({username:t,password:h})},children:[Object(j.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(l.a.Label,{children:"Create a username:"}),Object(j.jsx)(l.a.Control,{type:"email",placeholder:"Enter email",value:t,onChange:function(e){n(e.target.value)}})]}),Object(j.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(j.jsx)(l.a.Label,{children:"Choose a password:"}),Object(j.jsx)(l.a.Control,{type:"password",placeholder:"Password",value:h,onChange:function(e){p(e.target.value)}})]}),Object(j.jsx)(b.a,{variant:"primary",type:"submit",children:"Register"})]})},g=t(59),O=t(60),x=function(){var e=Object(h.g)();return Object(j.jsx)(g.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(g.a.Brand,{href:"/",children:"Practicum 5"}),Object(j.jsx)(g.a.Toggle,{}),Object(j.jsxs)(g.a.Collapse,{className:"justify-content-end",children:[Object(j.jsx)(O.a.Link,{href:"/login",children:"Log In"}),Object(j.jsx)(O.a.Link,{href:"/register",children:"Sign Up"}),e.state&&e.state.username?Object(j.jsxs)(g.a.Text,{children:["Signed in as: ",Object(j.jsx)("a",{href:"/login",children:e.state.username})]}):""]})]})})},v=(t(52),t(58)),y=t(36),C=(t(53),t(20));var L=function(){return Object(j.jsx)(C.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(v.a,{children:Object(j.jsx)(y.a,{children:"This is my header."})}),Object(j.jsx)(v.a,{children:Object(j.jsx)(y.a,{children:Object(j.jsx)(x,{})})}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",children:Object(j.jsx)(w,{})}),Object(j.jsx)(h.a,{path:"/login",children:Object(j.jsx)(p,{})}),Object(j.jsx)(h.a,{path:"/register",children:Object(j.jsx)(f,{})})]})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,s=a.getLCP,o=a.getTTFB;t(e),r(e),n(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),S()}},[[54,1,2]]]);
//# sourceMappingURL=main.1c3bebdc.chunk.js.map
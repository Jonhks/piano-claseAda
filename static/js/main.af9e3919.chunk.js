(this["webpackJsonppiano-react"]=this["webpackJsonppiano-react"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/do.a2508143.wav"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/re.419c7811.wav"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/mi.51e5702c.wav"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/fa.fdf4ed24.wav"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/sol.e5e79dda.wav"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/la.5351f634.wav"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/si.42883966.wav"},function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),a=n(4),o=n.n(a),s=(n(9),n(2)),r=(n(10),n(0));var d=function(){var t=[{nombre:"Do",link:n(12),sostenido:!0},{nombre:"Re",link:n(13),sostenido:!0},{nombre:"Mi",link:n(14)},{nombre:"Fa",link:n(15),sostenido:!0},{nombre:"Sol",link:n(16),sostenido:!0},{nombre:"La",link:n(17),sostenido:!0},{nombre:"Si",link:n(18)}],e=Object(i.useState)(0),c=Object(s.a)(e,2),a=c[0],o=c[1],d=Object(i.useState)(""),u=Object(s.a)(d,2),l=u[0],b=u[1],f=Object(i.useState)(""),j=Object(s.a)(f,2),m=(j[0],j[1]);return setTimeout((function(){b(""),m("")}),300),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"titulo",children:[Object(r.jsx)("h1",{children:"Piano con React, subiendo un cambio"}),Object(r.jsx)("h2",{children:"Hecho por Male \ud83d\ude00"}),Object(r.jsx)("h3",{className:"esta-sonando",children:l}),Object(r.jsxs)("button",{onClick:function(){m("color-fondo"),o(a+1)},children:["Has dado ",a," clicks "]})]}),Object(r.jsx)("div",{className:"container",children:t.map((function(t){return Object(r.jsx)("div",{className:"nota ".concat(l===t.nombre&&"sonando"),onClick:function(){return function(t){b(t.nombre),new Audio(t.link.default).play(),m("color-azul")}(t)},children:t.sostenido&&Object(r.jsx)("div",{className:"negra"})},100*Math.random())}))})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.af9e3919.chunk.js.map
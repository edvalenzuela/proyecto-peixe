(this["webpackJsonpomdbapi-app"]=this["webpackJsonpomdbapi-app"]||[]).push([[0],{23:function(e,a,t){e.exports=t(34)},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),m=t(6),s=t(1),o=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-success"},r.a.createElement(m.b,{className:"navbar-brand",to:"/"},"Peixe"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement(m.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/"},"Inicio"),r.a.createElement(m.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/favorite"},"FavoritesMovies"))))},i=function(e,a){a.history;var t=e.location.masDetalles,n=Object(s.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container mt-5"},!t&&r.a.createElement("div",{className:"alert alert-danger mt-2"},"Hubo un error en los datos"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,'Movie Detalle "',t.Title,'"'),r.a.createElement("div",{className:"card mt-5 animate__animated animate__fadeIn"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:t.Poster,className:"card-img",alt:t.Title})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.Title),r.a.createElement("p",{className:"card-text"},"Actores : ",t.Actors),r.a.createElement("p",{className:"card-text"},"Premios : ",t.Awards),r.a.createElement("p",{className:"card-text"},"Director : ",t.Director),r.a.createElement("p",{className:"card-text"},"Producci\xf3n : ",t.Production),r.a.createElement("p",{className:"card-text"},"Clasificaci\xf3n : ",t.Rated),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"A\xf1o : ",t.Year)),r.a.createElement("button",{onClick:function(){n.length<=2?n.push("/"):n.goBack()},className:"btn btn-outline-success"},"Volver"))))))))},u=t(7),d=t(22),v=t(20),E=function(e){var a=e.setCategmovie,t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),t=Object(u.a)(a,2),r=t[0],c=t[1],l=function(){c(e)},m=function(e){var a=e.target;c(Object(v.a)({},a.name,a.value))};return[r,m,l]}(""),c=Object(u.a)(t,3),l=c[0],m=c[1],s=c[2],o=l.nuevoValor,i=void 0===o?"":o;Object(n.useEffect)((function(){console.log("cambio el nuevo valor")}),[i]);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>1&&(a((function(e){return[i].concat(Object(d.a)(e))})),s())}},r.a.createElement("label",{htmlFor:"movie"},"Movie :"),r.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Escribe una movie o serie",id:"movie",autoComplete:"off",name:"nuevoValor",value:i,onChange:m}),r.a.createElement("button",{type:"submit",className:"btn mt-3 btn-block btn-outline-success"},"Buscar"),1==i.length&&r.a.createElement("div",{className:"alert alert-danger mt-2"},"Ingrese alguna palabra mayor a un caracter!"),""===i&&r.a.createElement("div",{className:"alert alert-info mt-2"},"Peliculas a buscar"))},b=t(15),p=t.n(b),g=t(21),f=function(){var e=Object(g.a)(p.a.mark((function e(a){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"3f2b5781",t="https://www.omdbapi.com/?t=".concat(encodeURI(a),"&apikey=").concat("3f2b5781","&r=json"),e.next=5,fetch(t);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(a){return e.apply(this,arguments)}}(),N=function(e){var a=e.detalle;return console.log(a),r.a.createElement("div",{className:"card mt-5 animate__animated animate__fadeIn",style:{width:"20rem"}},r.a.createElement("img",{src:a.Poster,className:"card-img-top img-fluid img-thumbnail",alt:a.Title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-uppercase"},a.Title),r.a.createElement("p",{className:"card-text text-muted"},a.Year),r.a.createElement(m.b,{to:{pathname:"./detalle/".concat(a.Title),masDetalles:a},className:"btn btn-success"},"Ver m\xe1s")))},h=function(e){var a=e.categ,t=function(e){var a=Object(n.useState)({data:[],cargando:!0}),t=Object(u.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:[e],cargando:!1})}))}),[e]),r}(a),c=t.data,l=t.cargando;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"mt-5 text-uppercase"}," ",a," "),l&&r.a.createElement("button",{className:"btn btn-danger animate__animated animate__flash",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm mx-2",role:"status","aria-hidden":"true"}),"cargando..."),c.map((function(e){return r.a.createElement(N,{key:e.Title,detalle:e})})))},x=function(){var e=Object(n.useState)(["batman"]),a=Object(u.a)(e,2),t=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",null," Buscar Movie / ",r.a.createElement("strong",null,"omdbapi")," "),r.a.createElement(E,{setCategmovie:c}),t.map((function(e){return r.a.createElement(h,{key:e,categ:e})}))))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement("div",null,r.a.createElement("h1",null," Movie Favorite ")))},y=function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:x}),r.a.createElement(s.a,{path:"/favorite",component:j}),r.a.createElement(s.a,{path:"/detalle/:categoria",component:i}))))},O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement(x,null)))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.de535c7a.chunk.js.map
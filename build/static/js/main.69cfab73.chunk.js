(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,a,n){e.exports=n(72)},69:function(e,a,n){},72:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),o=n(35);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(36),r=n.n(i),s=n(37),l=n.n(s),m=(r.a.create(),window.localStorage,window.location.href),u=l.a.parse(m).path,d=!m.includes("netlify")&&u.includes("/admin"),p={app:document.getElementById("app"),lightbox:document.getElementById("lightbox"),sidebar:document.getElementById("sidebar")},f=n(7),h=n(8),b=n(10),E=n(9),v=n(11),y=n(29),g=n(33),j=n(17),w=n(38),O=n.n(w),N=n(34),k=n.n(N),C=n(40),x=(t.Component,function(e){var a=e.heading;return t.createElement("h2",{className:"ada-heading",dangerouslySetInnerHTML:{__html:a}})}),M=function(e){var a=e.name,n=t.createElement("i",{className:"ada-icon far fa-sync-alt fa-spin"});return"bars"===a&&(n=t.createElement("i",{className:"ada-icon fas fa-bars"})),"intro"===a&&(n=t.createElement("i",{className:"ada-icon far fa-home-heart"})),"friends"===a&&(n=t.createElement("i",{className:"ada-icon far fa-users"})),"night"===a&&(n=t.createElement("i",{className:"ada-icon fa fa-cloud-moon"})),"morning"===a&&(n=t.createElement("i",{className:"ada-icon fal fa-sunrise"})),"professor"===a&&(n=t.createElement("i",{className:"ada-icon fal fa-university"})),"police"===a&&(n=t.createElement("i",{className:"ada-icon fal fa-star"})),"b&b"===a&&(n=t.createElement("i",{className:"ada-icon fal fa-building"})),"twitter"===a&&(n=t.createElement("i",{className:"ada-icon fab fa-twitter"})),"facebook"===a&&(n=t.createElement("i",{className:"ada-icon fab fa-facebook"})),"web"===a&&(n=t.createElement("i",{className:"ada-icon fal fa-globe"})),n},B=function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){document.title=this.props.name}},{key:"render",value:function(){var e=this.props,a=e.page,n=e.children;return t.createElement("div",{className:"adp-".concat(a)},t.createElement("div",{className:"ada-container"},n))}}]),a}(t.Component),D=n(30),I=(t.Component,[{path:"/",component:function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){k()("#app").addClass("index")}},{key:"componentWillUnmount",value:function(){k()("#app").removeClass("index")}},{key:"render",value:function(){var e=this.props.name;return c.a.createElement(B,{page:"index",name:e})}}]),a}(c.a.Component),name:"Fisher: 1 Year Later"},{path:"/story/:section",component:function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){document.title=this.props.name}},{key:"render",value:function(){this.props.name;return t.createElement("div",{className:"adt-section"},t.createElement("div",{className:"ada-container"},t.createElement(x,{heading:"Section"})))}}]),a}(t.Component),name:"Section"}]),S=(n(69),function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){d&&(window.location.href="/404")}},{key:"render",value:function(){return t.createElement(y.a,null,t.createElement(O.a,{id:"UA-70067860-2",debug:!0},t.createElement(g.a,null,I.map(function(e,a){return t.createElement(j.a,{exact:0===a,path:e.path,key:"route-".concat(a),render:function(a){return t.createElement(e.component,Object.assign({},a,e))}})}))))}}]),a}(t.Component));o.render(t.createElement(S,null),p.app),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.69cfab73.chunk.js.map
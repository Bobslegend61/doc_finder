(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"abea7923"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise(function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"7061bef3"}[t]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.request=n,delete o[t],f.parentNode.removeChild(f),r(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[t]=0}));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,r[1](s)}a[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/doc_finder/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},1189:function(t,e,r){"use strict";var n=r("a880"),o=r.n(n);o.a},"14d6":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("app-header"),r("router-view"),r("app-footer")],1)},a=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[t._v("\n    Courtsey: "),r("a",{attrs:{href:"https://betterdoctor.com"}},[t._v("Better Doctor")])])}],c={name:"app-footer"},l=c,u=(r("cdda"),r("2877")),d=Object(u["a"])(l,s,i,!1,null,"6d006f8e",null);d.options.__file="Footer.vue";var f=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" |\n        "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},v=[],_={name:"app-header"},m=_,h=(r("e7cb"),Object(u["a"])(m,p,v,!1,null,"7210583e",null));h.options.__file="Header.vue";var g=h.exports,b={components:{AppFooter:f,AppHeader:g}},y=b,w=(r("034f"),Object(u["a"])(y,o,a,!1,null,null,null));w.options.__file="App.vue";var x=w.exports,C=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("i",{staticClass:"fas fa-user-md fa-4x"}),r("h1",{staticClass:"text-black-50"},[t._v("Doctor Finder")]),r("p",{staticClass:"text-dark"},[t._v("Find certified doctors based on your location")]),r("search-from",{on:{"search-doctors":t.searchDoctors}}),r("hr"),r("div",[r("h3",{staticClass:"font-weight-bold"},[t._v("Doctors within "+t._s(t.distance)+" miles of your current location")]),t.docs||t.error?0!=t.docs.length||t.error?t.error?r("p",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.error))]):r("div",[r("card",{attrs:{docs:t.docs}})],1):r("p",{staticClass:"text-info font-weight-lighter"},[t._v("No Doctor found within 100 miles of your current location")]):r("div",{staticClass:"spinner-grow text-primary",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])])],1)},P=[],j=(r("386d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.errorMsg,expression:"errorMsg"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.errorMsg))]),r("form",{on:{submit:t.searchDoctors}},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"Enter text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",[t._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:t.distance,expression:"distance"}],attrs:{type:"number",id:"distance",placeholder:"Distance from your current location"},domProps:{value:t.distance},on:{input:function(e){e.target.composing||(t.distance=e.target.value)}}})]),r("div",[r("label",{attrs:{for:"select"}},[t._v("Filtered By:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],attrs:{id:"select"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.filter=e.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),r("option",[t._v("Name")]),r("option",[t._v("First name")]),r("option",[t._v("Last name")]),r("option",[t._v("Gender")]),r("option",[t._v("Problem")])])]),t._m(1)])])}),E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"distance"}},[t._v("Distance "),r("small",[t._v("(Miles)")]),t._v(":")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span"),r("input",{attrs:{type:"submit",value:"Find"}})])}],O=r("e814"),T=r.n(O),D={name:"search-form",data:function(){return{text:"",filter:"",distance:"",errorMsg:void 0}},methods:{searchDoctors:function(t){if(t.preventDefault(),this.errorMsg=void 0,""==this.text.trim()||""==this.filter.trim()||"number"!=typeof T()(this.distance))return this.errorMsg="Please fill in all fields and make sure they are valid";var e="";switch(this.filter){case"Name":e="name";break;case"First name":e="first_name";break;case"Last name":e="last_name";break;case"Gender":e="gender";break;case"Problem":e="query";break}var r={search:this.text,filter:e,distance:this.distance};this.$emit("search-doctors",r)}}},N=D,S=(r("8527"),Object(u["a"])(N,j,E,!1,null,"600ad5b6",null));S.options.__file="Search.vue";var $=S.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cards"},t._l(t.docs,function(e){return r("div",{key:e.uid,staticClass:"card"},[r("img",{staticClass:"card-img-top",staticStyle:{height:"250px"},attrs:{src:e.profile.image_url,alt:""}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("\n            "+t._s(e.profile.first_name)+" "+t._s(e.profile.last_name)+"\n        ")]),r("p",{staticClass:"card-text text-truncate"},[t._v(t._s(e.profile.bio))]),r("a",{staticClass:"btn btn-primary text-white",on:{click:function(r){t.goToProfile(e)}}},[t._v("View Profile")])]),r("div",{staticClass:"card-footer bg-transparent"},[t._v(t._s(e.profile.title))])])}),0)},M=[],F={name:"card",props:{docs:Array},methods:{goToProfile:function(t){this.$router.push({name:"doctor",params:{doc:t}})}}},L=F,B=(r("a302"),Object(u["a"])(L,A,M,!1,null,"2bfe6b47",null));B.options.__file="Cards.vue";var H=B.exports,q={name:"home",components:{SearchFrom:$,Card:H},data:function(){return{docs:void 0,distance:100,error:void 0}},created:function(){var t=this;if("geolocation"in navigator){this.error=void 0;navigator.geolocation.getCurrentPosition(function(e){var r=e.coords,n=r.latitude,o=r.longitude;fetch("https://api.betterdoctor.com/2016-03-01/doctors?location=".concat(n,"%2C").concat(o,"%2C").concat(t.distance,"&user_location=").concat(n,"%2C").concat(o,"&skip=0&limit=12&user_key=55f62dfd49a130921eba7e7b22b5e733")).then(function(t){return t.json()}).then(function(e){var r=e.data;return t.docs=r}).catch(function(e){return t.error="Something went wrong. Try again"})})}},methods:{searchDoctors:function(t){var e=this,r=t.search,n=t.filter,o=t.distance;this.distance=o,this.error=void 0;navigator.geolocation.getCurrentPosition(function(t){var a=t.coords,s=a.latitude,i=a.longitude;fetch("https://api.betterdoctor.com/2016-03-01/doctors?".concat(n,"=").concat(r.toLowerCase(),"&location=").concat(s,"%2C").concat(i,"%2C").concat(o,"&user_location=").concat(s,"%2C").concat(i,"&skip=0&limit=12&user_key=55f62dfd49a130921eba7e7b22b5e733")).then(function(t){return t.json()}).then(function(t){var r=t.data;return e.docs=r}).catch(function(t){return e.error="Something went wrong. Try again"})})}}},G=q,J=(r("d48f"),Object(u["a"])(G,k,P,!1,null,"c94d42e8",null));J.options.__file="Home.vue";var V=J.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"doctor"},[r("i",{staticClass:"fa fa-arrow-left fa-2x",attrs:{"aria-hidden":"true"},on:{click:t.goToHome}}),r("div",{staticClass:"personal-info"},[r("img",{attrs:{src:t.doc.profile.image_url,alt:"image"}}),r("div",[r("p",[r("strong",[t._v("Title:")]),t._v(" "+t._s(t.doc.profile.title))]),r("p",[r("strong",[t._v("Name:")]),t._v(" "+t._s(t.doc.profile.first_name)+" "+t._s(t.doc.profile.middle_name)+"  "+t._s(t.doc.profile.last_name))]),r("p",[r("strong",[t._v("Gender:")]),t._v(" "+t._s(t.doc.profile.gender))]),r("p",[r("strong",[t._v("Languages:")]),t._l(t.doc.profile.languages,function(e){return r("span",{key:e.code},[t._v(" "+t._s(e.name)+",")])})],2),r("p",[r("strong",[t._v("Bio:")]),t._v(" "+t._s(t.doc.profile.bio))]),r("p",[r("strong",[t._v("Education:")]),0==t.doc.educations.length?r("span",[t._v(" No educational information provided.")]):r("ol",t._l(t.doc.educations,function(e,n){return r("li",{key:n},[e.degree?r("p",[t._v("Degree: "+t._s(e.degree))]):t._e(),r("p",[t._v("School: "+t._s(e.school))])])}),0)]),r("p",[r("strong",[t._v("Specialties:")]),r("ol",t._l(t.doc.specialties,function(e){return r("li",{key:e.uid},[t._v(t._s(e.name)+" - "+t._s(e.description)+" - "+t._s(e.category))])}),0)]),r("p",[r("strong",[t._v("Practices:")]),r("ol",t._l(t.doc.practices,function(e){return r("li",{key:e.uid},[r("p",[r("strong",[t._v("Name:")]),t._v(" "+t._s(e.name))]),r("p",[r("strong",[t._v("Distance:")]),t._v(" "+t._s(Math.round(e.distance))+" miles")]),r("p",[r("strong",[t._v("Website:")]),e.website?r("a",{attrs:{target:"_blank",href:e.website}},[t._v(" "+t._s(e.website))]):r("span",{staticClass:"text-danger"},[t._v(" not avaliable")])]),r("p",[r("strong",[t._v("Accept patients:")]),r("span",{class:e.accepts_new_patients?"text-success":"text-danger"},[t._v(" "+t._s(e.accepts_new_patients?"Yes":"no"))])]),r("p",[r("strong",[t._v("Address:")]),t._v(" "+t._s(e.visit_address.street)+", "+t._s(e.visit_address.city)+" "+t._s(e.visit_address.state_long))]),r("p",[r("strong",[t._v("Contacts:")]),r("ol",t._l(e.phones,function(e){return r("li",{key:e.type},[t._v("\n                                    "+t._s(e.number)+" - "+t._s(e.type)+"\n                                ")])}),0)]),r("p",[r("strong",[t._v("Languages:")]),r("ol",t._l(e.languages,function(e){return r("li",{key:e.code},[t._v("\n                                    "+t._s(e.name)+"\n                                ")])}),0)])])}),0)])])])])},Y=[],z={name:"doctor",props:{doc:Object},methods:{goToHome:function(){history.go(-1)}}},I=z,K=(r("1189"),Object(u["a"])(I,W,Y,!1,null,"7d8296c4",null));K.options.__file="Doctor.vue";var Q=K.exports;n["a"].use(C["a"]);var R=new C["a"]({mode:"history",routes:[{path:"/",name:"home",component:V},{path:"/doctor",name:"doctor",props:!0,component:Q},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],scrollBehavior:function(t,e,r){return r||{x:0,y:0}}});n["a"].config.productionTip=!1,new n["a"]({router:R,render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,r){},6732:function(t,e,r){},8527:function(t,e,r){"use strict";var n=r("a521"),o=r.n(n);o.a},a302:function(t,e,r){"use strict";var n=r("ad20"),o=r.n(n);o.a},a521:function(t,e,r){},a880:function(t,e,r){},ad20:function(t,e,r){},b4b7:function(t,e,r){},cdda:function(t,e,r){"use strict";var n=r("6732"),o=r.n(n);o.a},d48f:function(t,e,r){"use strict";var n=r("b4b7"),o=r.n(n);o.a},e7cb:function(t,e,r){"use strict";var n=r("14d6"),o=r.n(n);o.a}});
//# sourceMappingURL=app.c4b98933.js.map
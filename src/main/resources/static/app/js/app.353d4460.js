(function(e){function n(n){for(var o,c,a=n[0],u=n[1],s=n[2],d=0,p=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);h&&h(n);while(p.length)p.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,c=1;c<t.length;c++){var a=t[c];0!==i[a]&&(o=!1)}o&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},c={app:0},i={app:0},r=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2116a68a":"c8dac27e","chunk-2d0ba0bb":"ed0a5a01","chunk-2d0e8e4b":"3b885e88","chunk-2d207d1a":"6fbc145b","chunk-c851bd20":"f53d09be","chunk-dcc8e972":"d9ec5997","chunk-7437b55a":"4cdfe966","chunk-0d8ef662":"d2ad75e4","chunk-22d46f94":"a0e5bcd5","chunk-7c2b03ee":"52c385d5","chunk-e2add046":"58e2a78f","chunk-ebb6f616":"1170fe7d"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-2116a68a":1,"chunk-c851bd20":1,"chunk-dcc8e972":1,"chunk-7437b55a":1,"chunk-0d8ef662":1,"chunk-22d46f94":1,"chunk-7c2b03ee":1,"chunk-e2add046":1,"chunk-ebb6f616":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-2116a68a":"b04b445f","chunk-2d0ba0bb":"31d6cfe0","chunk-2d0e8e4b":"31d6cfe0","chunk-2d207d1a":"31d6cfe0","chunk-c851bd20":"9196ef73","chunk-dcc8e972":"96f2a8fa","chunk-7437b55a":"d4481170","chunk-0d8ef662":"02c40424","chunk-22d46f94":"32e18bb1","chunk-7c2b03ee":"509272a8","chunk-e2add046":"5de263fd","chunk-ebb6f616":"618e3f5c"}[e]+".css",i=u.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var s=r[a],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===i))return n()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){s=p[a],d=s.getAttribute("data-href");if(d===o||d===i)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var o=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],h.parentNode.removeChild(h),t(r)},h.href=i;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){c[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=i[e]=[n,t]}));n.push(o[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=a(e);var p=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",p.name="ChunkLoadError",p.type=o,p.request=c,t[1](p)}i[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/app/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var h=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";var o=t("2b0e"),c=t("2f62"),i=t("0e44"),r=t("5530");t("d3b7");function a(){var e;return null!==(e=z.state.api)&&void 0!==e&&e.api_token?{Authorization:"Bearer "+z.state.api.api_token,"Content-Type":"application/json"}:{}}var u="https://test-lti.unicon.net",s="http://localhost:8081",d={getApiToken:p,refreshToken:h};function p(e){var n={method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}};return fetch("".concat(u,"/api/oauth/trade"),n).then((function(e){if(e.ok)return e.text()}))}function h(){var e={method:"POST",headers:Object(r["a"])({},a())};return fetch("".concat(s,"/api/oauth/refresh"),e).then((function(e){if(console.log({response:e}),e.ok)return console.log(e.text()),e.text()}))}var l="http://localhost:8081",f={getAll:m,getById:g,create:b,update:k,delete:v};function m(){var e={method:"GET",headers:a()};return fetch("".concat(l,"/api/experiments?conditions=true"),e).then(x)}function b(){var e={method:"POST",headers:Object(r["a"])(Object(r["a"])({},a()),{},{"Content-Type":"application/json"}),body:JSON.stringify({})};return fetch("".concat(l,"/api/experiments"),e).then(x)}function g(e){var n={method:"GET",headers:Object(r["a"])({},a())};return fetch("".concat(l,"/api/experiments/").concat(e,"?conditions=true"),n).then(x)}function k(e){var n={method:"PUT",headers:Object(r["a"])({},a()),body:JSON.stringify(e)};return fetch("".concat(l,"/api/experiments/").concat(e.experimentId),n).then(x)}function v(e){var n={method:"DELETE",headers:a()};return fetch("".concat(l,"/api/experiments/").concat(e),n).then(x)}function x(e){return e.text().then((function(n){var t=n&&JSON.parse(n);return e&&e.ok?(console.log("handleResponse | then",{text:n,data:t,response:e}),t||e):(401===e.status||402===e.status||500===e.status?console.log("handleResponse | 401/402/500",{response:e}):404===e.status&&console.log("handleResponse | 404",{response:e}),e)})).catch((function(e){console.log("handleResponse | catch",{text:e})}))}t("99af");var y="http://localhost:8081",E={create:C,update:S,delete:T};function C(e){var n={method:"POST",headers:Object(r["a"])(Object(r["a"])({},a()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(y,"/api/experiments/").concat(e.experiment_experiment_id,"/conditions"),n).then(O)}function S(e){var n={method:"PUT",headers:Object(r["a"])(Object(r["a"])({},a()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(y,"/api/experiments/").concat(e.experimentId,"/conditions/").concat(e.conditionId),n).then(O)}function T(e){var n={method:"DELETE",headers:Object(r["a"])(Object(r["a"])({},a()),{},{"Content-Type":"application/json"})};return fetch("".concat(y,"/api/experiments/").concat(e.experimentId,"/conditions/").concat(e.conditionId),n).then(O)}function O(e){return e.text().then((function(n){var t=n&&JSON.parse(n);return e&&e.ok?(console.log("handleResponse | then",{text:n,data:t,response:e}),t||e):(401===e.status||402===e.status||500===e.status?console.log("handleResponse | 401/402/500",{response:e}):404===e.status&&console.log("handleResponse | 404",{response:e}),e)})).catch((function(e){console.log("handleResponse | catch",{text:e})}))}var j={lti_token:"",api_token:""},_={setLtiToken:function(e,n){var t=e.commit,o=e.dispatch;t("setLtiToken",n),o("setApiToken",n)},setApiToken:function(e,n){var t=e.commit;return d.getApiToken(n).then((function(e){"string"===typeof e&&t("setApiToken",e)})).catch((function(e){console.log("fetchExperimentById | catch",{response:e})}))},refreshToken:function(e){var n=e.commit;return d.refreshToken().then((function(e){"string"===typeof e&&n("setApiToken",e)})).catch((function(e){console.log("fetchExperimentById | catch",{response:e})}))}},w={setLtiToken:function(e,n){e.lti_token=n},setApiToken:function(e,n){e.api_token=n}},I={},P={namespaced:!0,state:j,actions:_,mutations:w,getters:I},A={type:null,message:null},D={success:function(e,n){var t=e.commit;t("success",n)},error:function(e,n){var t=e.commit;t("error",n)},clear:function(e,n){var t=e.commit;t("success",n)}},L={success:function(e,n){e.type="alert-success",e.message=n},error:function(e,n){e.type="alert-danger",e.message=n},clear:function(e){e.type=null,e.message=null}},B={namespaced:!0,state:A,actions:D,mutations:L},N=(t("c740"),t("4de4"),{experiment:null,experiments:null}),R={resetExperiment:function(e){var n=e.commit;n("setExperiment",{})},createExperiment:function(){return f.create()},fetchExperimentById:function(e,n){var t=e.commit;return f.getById(n).then((function(e){t("setExperiment",e)})).catch((function(e){console.log("fetchExperimentById | catch",{response:e})}))},updateExperiment:function(e,n){var t=e.commit;return f.update(n).then(t("setExperiment",n)).catch((function(e){console.log("updateExperiment | catch",{response:e})}))}},J={setExperiment:function(e,n){e.experiment=n},setConditions:function(e,n){e.experiment.conditions=n},updateConditions:function(e,n){e.experiment.conditions=n},updateCondition:function(e,n){var t=e.experiment.conditions.findIndex((function(e){return e.conditionId===n.conditionId}));t>=0?e.experiment.conditions[t]=n:e.experiment.conditions.push(n)},deleteCondition:function(e,n){e.experiment.conditions=e.experiment.conditions.filter((function(e){return e.conditionId!==n.conditionId}))}},M={},U={namespaced:!0,state:N,actions:R,mutations:J,getters:M},V=(t("159b"),{}),$={resetCondition:function(e){var n=e.commit;n("setCondition",{})},createDefaultConditions:function(e,n){var t=e.dispatch,o=[{name:"",experiment_experiment_id:n},{name:"",experiment_experiment_id:n}];t("createConditions",o)},createConditions:function(e,n){var t=e.dispatch;n.length>0&&n.forEach((function(e){t("createCondition",e)}))},createCondition:function(e,n){var t=e.commit;return E.create(n).then((function(e){t("experiment/updateCondition",e,{root:!0})})).catch((function(e){console.log("setCondition | catch",{response:e})}))},updateConditions:function(e,n){var t=e.dispatch;if(n.length>0)return n.forEach((function(e){null!==e&&void 0!==e&&e.conditionId&&t("updateCondition",e)})),{status:200}},updateCondition:function(e,n){var t=e.commit;return E.update(n).then((function(e){null!==e&&void 0!==e&&e.conditionId&&t("experiment/updateCondition",e,{root:!0})})).catch((function(e){console.log("setCondition | catch",{response:e})}))},setDefaultCondition:function(e,n){var t=e.dispatch;return!!(n&&n.conditions&&n.defaultConditionId)&&(n.conditions.forEach((function(e){return e.defaultCondition=e.conditionId===n.defaultConditionId?1:0,t("updateCondition",e),e})),{status:200})},deleteCondition:function(e,n){var t=e.commit;return E.delete(n).then((function(){t("experiment/deleteCondition",n,{root:!0})})).catch((function(e){console.log("setCondition | catch",{response:e})}))}},F={},G={},H={namespaced:!0,state:V,actions:$,mutations:F,getters:G};o["a"].use(c["a"]);var q=new c["a"].Store({plugins:[Object(i["a"])({key:"terracotta"})],modules:{api:P,alert:B,experiment:U,condition:H}}),z=n["a"]=q},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),t("ac1f"),t("841c"),t("99af");var o=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-main",[t("router-view",{key:e.$route.fullPath})],1)],1)},i=[],r=t("5530"),a=t("2f62"),u=t("4360"),s={name:"App",data:function(){return{}},methods:Object(r["a"])({},Object(a["b"])({refreshToken:"api/refreshToken"})),created:function(){u["a"].state.api.api_token&&setInterval(function(){this.refreshToken()}.bind(this),354e4)}},d=s,p=(t("5c0b"),t("2877")),h=t("6544"),l=t.n(h),f=t("7496"),m=t("f6c4"),b=Object(p["a"])(d,c,i,!1,null,null,null),g=b.exports;l()(b,{VApp:f["a"],VMain:m["a"]});var k=t("8c4f"),v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-row",{staticClass:"text-center"},[t("v-col",{staticClass:"mt-10",attrs:{cols:"12"}},[t("v-btn",{on:{click:e.startExperiment}},[e._v("Get Started")])],1)],1)},x=[],y={name:"Home",components:{},computed:{},methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])({createExperiment:"experiment/createExperiment"})),{},{startExperiment:function(){var e=this;this.createExperiment().then((function(n){console.log("startExperiment -> createExperiment | then",{response:n}),e.$router.push({name:"ExperimentDesignIntro",params:{experiment_id:n.experimentId}})})).catch((function(e){console.log("startExperiment -> createExperiment | catch",{response:e})}))}})},E=y,C=t("8336"),S=t("62ad"),T=t("0fd9"),O=Object(p["a"])(E,v,x,!1,null,null,null),j=O.exports;l()(O,{VBtn:C["a"],VCol:S["a"],VRow:T["a"]}),o["a"].use(k["a"]);var _=[{path:"/",name:"Home",component:j},{path:"/experiment/:experiment_id",component:function(){return t.e("chunk-2d0ba0bb").then(t.bind(null,"3613"))},children:[{path:"",alias:"design",component:function(){return t.e("chunk-ebb6f616").then(t.bind(null,"7f79"))},meta:{currentSection:"design",currentStep:"design"},children:[{path:"",alias:"intro",name:"ExperimentDesignIntro",component:function(){return t.e("chunk-2d207d1a").then(t.bind(null,"a1c7"))},meta:{currentSection:"design",currentStep:"design"}},{path:"title",name:"ExperimentDesignTitle",component:function(){return Promise.all([t.e("chunk-dcc8e972"),t.e("chunk-7437b55a"),t.e("chunk-7c2b03ee")]).then(t.bind(null,"d301"))},meta:{currentSection:"design",currentStep:"design_title"}},{path:"description",name:"ExperimentDesignDescription",component:function(){return Promise.all([t.e("chunk-dcc8e972"),t.e("chunk-7437b55a"),t.e("chunk-22d46f94")]).then(t.bind(null,"9d27"))},meta:{currentSection:"design",currentStep:"design_description"}},{path:"conditions",name:"ExperimentDesignConditions",component:function(){return Promise.all([t.e("chunk-dcc8e972"),t.e("chunk-7437b55a"),t.e("chunk-0d8ef662")]).then(t.bind(null,"8217"))},meta:{currentSection:"design",currentStep:"design_conditions"}},{path:"type",name:"ExperimentDesignType",component:function(){return t.e("chunk-2116a68a").then(t.bind(null,"d97a"))},meta:{currentSection:"design",currentStep:"design_type"}},{path:"default-condition",name:"ExperimentDesignDefaultCondition",component:function(){return Promise.all([t.e("chunk-dcc8e972"),t.e("chunk-e2add046")]).then(t.bind(null,"9075"))},meta:{currentSection:"design",currentStep:"design_type"}},{path:"summary",name:"ExperimentDesignSummary",component:function(){return t.e("chunk-2d0e8e4b").then(t.bind(null,"8ae1"))},meta:{currentSection:"design",currentStep:"design_type",stepsComplete:!0}}]},{path:"participation",component:function(){return t.e("chunk-ebb6f616").then(t.bind(null,"7f79"))},meta:{currentSection:"participation"},children:[]},{path:"assignments",component:function(){return t.e("chunk-ebb6f616").then(t.bind(null,"7f79"))},meta:{currentSection:"assignments"},children:[]},{path:"summary",name:"ExperimentSummary",component:function(){return t.e("chunk-c851bd20").then(t.bind(null,"75c7"))}}]}],w=new k["a"]({base:"/app/",routes:_}),I=w,P=(t("5363"),t("f309"));o["a"].use(P["a"]);var A=new P["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#1D9DFF"}}}}),D=t("688f"),L=t.n(D);o["a"].config.productionTip=!1,o["a"].use(L.a,{router:I});var B=new URL(window.location.href),N=new URLSearchParams(B.search),R=N.get("token");function J(){M(),new o["a"]({store:u["a"],router:I,vuetify:A,render:function(e){return e(g)}}).$mount("#app")}function M(){N.delete("token"),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(N).concat(window.location.hash))}R?u["a"].dispatch("api/setLtiToken",R).then(J):J()},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.353d4460.js.map
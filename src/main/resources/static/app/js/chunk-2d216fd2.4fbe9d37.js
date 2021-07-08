(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216fd2"],{c58b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Create a title for your consent assignment")]),e._m(0),e.experiment&&e.consent?n("form",{staticClass:"my-5",on:{submit:function(t){return t.preventDefault(),e.saveTitle("ParticipationTypeConsentFile")}}},[n("v-text-field",{attrs:{rules:e.rules,label:"Assignment title",placeholder:"e.g. Lorem ipsum",autofocus:"",outlined:"",required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.title||!e.title.trim(),elevation:"0",color:"primary",type:"submit"}},[e._v(" Next ")])],1):e._e()])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("This will create an "),n("strong",[e._v("unpublished consent assignment")]),e._v(" in Canvas and will be the way your students will read, review and sign your study’s informed consent. The consent assignment will be a prerequisite for your first study treatment assignments.")])}],r=n("5530"),a=(n("498a"),n("2f62")),o={name:"ParticipationTypeConsentTitle",props:["experiment"],computed:Object(r["a"])(Object(r["a"])({},Object(a["c"])({consent:"consent/consent"})),{},{title:{get:function(){return this.consent.title},set:function(e){this.titleProxy=e,this.$store.commit("consent/setConsentTitle",e)}}}),data:function(){return{titleProxy:"",rules:[function(e){return e&&!!e.trim()||"Title is required"},function(e){return(e||"").length<=255||"A maximum of 255 characters is allowed"}]}},methods:{saveTitle:function(e){this.$router.push({name:e,params:{experiment:this.experiment.experimentId}})},saveExit:function(){this.saveTitle("Home")}}},l=o,u=n("2877"),c=n("6544"),m=n.n(c),p=n("8336"),d=n("8654"),f=Object(u["a"])(l,i,s,!1,null,null,null);t["default"]=f.exports;m()(f,{VBtn:p["a"],VTextField:d["a"]})}}]);
//# sourceMappingURL=chunk-2d216fd2.4fbe9d37.js.map
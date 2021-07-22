(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b9bda0e"],{"0b4f":function(e,t,n){},"3eb0":function(e,t,n){"use strict";n("0b4f")},4193:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mb-8 pt-5 px-5 mx-auto red lighten-5 rounded-lg",attrs:{outlined:""}},[n("p",[n("strong",[e._v("Are you sure you want to include all students in your experiment automatically?")])]),n("p",[e._v("One of the basic principles of ethical research is showing respect for research participants. One way of showing this respect is by providing people an opportunity to make decisions for themselves about whether they want to participate in a study.")]),n("p",[e._v("Terracotta is designed to make this process easy. If you want, we can create as short assignment where your students will provide consent to be included in this experiment.")])]),n("v-btn",{staticClass:"mb-4",attrs:{elevation:"0",color:"primary",to:{name:"ParticipationDistribution"}}},[e._v("Yes, I want to proceed")]),n("br"),n("v-btn",{staticClass:"consentBtn",attrs:{outlined:"",tile:"",color:"primary",elevation:"0"},on:{click:e.goToConsentPage}},[e._v("No, I want to create a consent assignment instead")]),n("br")],1)},a=[],r=n("5530"),s=n("2f62"),o={name:"ParticipationTypeAutoConfirm",props:["experiment"],methods:Object(r["a"])(Object(r["a"])({},Object(s["b"])({updateExperiment:"experiment/updateExperiment"})),{},{goToConsentPage:function(){var e=this,t=this.experiment;t.participationType="CONSENT",this.updateExperiment(t).then((function(t){200===t.status&&e.$router.push({name:"ParticipationTypeConsentOverview",params:{experiment:e.experiment.experimentId}})}))},saveExit:function(){this.$router.push({name:"Home",params:{experiment:this.experiment.experimentId}})}})},p=o,c=(n("3eb0"),n("2877")),u=n("6544"),m=n.n(u),l=n("8336"),d=n("b0af"),h=Object(c["a"])(p,i,a,!1,null,"f315a308",null);t["default"]=h.exports;m()(h,{VBtn:l["a"],VCard:d["a"]})}}]);
//# sourceMappingURL=chunk-4b9bda0e.1ba669d0.js.map
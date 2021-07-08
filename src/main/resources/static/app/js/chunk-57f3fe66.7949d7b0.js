(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57f3fe66"],{"008c":function(t,e,n){"use strict";n("20a1")},"20a1":function(t,e,n){},"615b":function(t,e,n){},9075:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Select the default condition for your experiment")]),n("p",[t._v("This is the condition students will receive if they do not consent to participate in the experiment or you mark them to be excluded.")]),t.experiment?n("form",{staticClass:"my-5",on:{submit:function(e){return e.preventDefault(),t.saveConditions(e)}}},[t.experiment.conditions?n("fieldset",{staticClass:"rounded-lg p-5 mb-7"},t._l(t.experiment.conditions,(function(e){return n("label",{key:e.conditionId,attrs:{for:"condition-"+e.conditionId}},[n("span",[t._v(t._s(e.name))]),n("span",{staticClass:"radio-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDefault,expression:"selectedDefault"}],attrs:{type:"radio",name:"selectedDefault",id:"condition-"+e.conditionId,required:""},domProps:{value:e.conditionId,checked:t._q(t.selectedDefault,e.conditionId)},on:{change:[function(n){t.selectedDefault=e.conditionId},t.saveConditions]}}),n("span",{staticClass:"rounded-pill px-3 py-1"},[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.selectedDefault===e.conditionId,expression:"selectedDefault === condition.conditionId"}]},[t._v("mdi-check")]),n("span",[t._v("Default")])],1)])])})),0):t._e(),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.selectedDefault,to:{name:"ExperimentDesignSummary",params:{experiment:t.experiment.experimentId}},elevation:"0",color:"primary"}},[t._v(" Next ")])],1):t._e(),n("v-card",{staticClass:"mt-15 pt-5 px-5 mx-auto blue lighten-5 rounded-lg",attrs:{outlined:""}},[n("p",[n("strong",[t._v("Note:")]),t._v(" It's important to specify a default condition so that we know what version of assignments students should receive if they're not participating in the experiment. This condition should be similar to business-as-usual; the sort of assignment that students would complete during the normal conduct of the course.")])])],1)},o=[],s=n("5530"),a=(n("7db0"),n("2f62")),d={name:"DefaultCondition",props:["experiment"],data:function(){return{inputConditionId:null}},computed:{selectedDefault:{get:function(){var t,e=null===(t=this.experiment)||void 0===t?void 0:t.conditions.find((function(t){return!0===t.defaultCondition}));return null!==this.inputConditionId?this.inputConditionId:!!e&&e.conditionId},set:function(t){this.inputConditionId=t}}},methods:Object(s["a"])(Object(s["a"])({},Object(a["b"])({setDefaultCondition:"condition/setDefaultCondition"})),{},{saveConditions:function(){var t=this.experiment.conditions,e=this.selectedDefault;this.setDefaultCondition({conditions:t,defaultConditionId:e}).catch((function(t){console.log("catch",{response:t})}))},saveExit:function(){this.saveConditions(),this.$router.push({name:"Home",params:{experiment:this.experiment.experiment_id}})}})},r=d,c=(n("008c"),n("2877")),l=n("6544"),u=n.n(l),p=n("8336"),h=n("b0af"),f=n("132d"),m=Object(c["a"])(r,i,o,!1,null,"310f4b6e",null);e["default"]=m.exports;u()(m,{VBtn:p["a"],VCard:h["a"],VIcon:f["a"]})},b0af:function(t,e,n){"use strict";var i=n("5530"),o=(n("a9e3"),n("0481"),n("615b"),n("10d2")),s=n("297c"),a=n("1c87"),d=n("58df");e["a"]=Object(d["a"])(s["a"],a["a"],o["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},o["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-57f3fe66.7949d7b0.js.map
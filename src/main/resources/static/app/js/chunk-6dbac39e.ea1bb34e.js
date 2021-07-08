(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dbac39e"],{3860:function(e,t,s){"use strict";var o=s("604c");t["a"]=o["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o["a"].options.computed.classes.call(this)}},methods:{genData:o["a"].options.methods.genData}})},5100:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v(" Because you have "),s("strong",[e._v(e._s(e.numberOfConditions)+" conditions")]),e._v(" and would like your students to be "),"WITHIN"===e.exposureType?[s("strong",[e._v("exposed to every conditions")]),e._v("(within-subject) ")]:[s("strong",[e._v("exposed to only one condition")]),e._v("(within-subject) ")],e._v(" , we will set you up with "+e._s(e.numberOfExperimentSets)+" exposure sets. ")],2),s("div",{staticClass:"mt-3"},[s("strong",[e._v(" Exposure Set: ")]),s("v-btn-toggle",{staticClass:"ml-3",attrs:{color:"primary",mandatory:""},model:{value:e.selectedExposure,callback:function(t){e.selectedExposure=t},expression:"selectedExposure"}},e._l(e.exposures,(function(t,o){return s("v-btn",{key:t.exposureId,attrs:{value:t}},[e._v(e._s(o+1))])})),1)],1),s("v-card",{staticClass:"mt-5 pt-5 px-5 mx-auto lighten-5 rounded-lg",attrs:{outlined:""}},e._l(e.sortedGroups(),(function(t){return s("v-card-title",{key:t},[e._v(" "+e._s(t)+" will receive "),s("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[e._v(" "+e._s(e.groupNameConditionMapping[t]))])],1)})),1),s("v-btn",{staticClass:"mt-5",attrs:{elevation:"0",color:"primary",to:{name:"AssignmentExposureSetsIntro",params:{numberOfExperimentSets:this.numberOfExperimentSets}}}},[e._v("Continue ")])],1)},n=[],r=s("5530"),a=(s("d81d"),s("2f62")),i=s("4360"),u={name:"AssignmentExposureSets",props:["experiment"],data:function(){return{selectedExposure:[]}},computed:Object(r["a"])(Object(r["a"])({},Object(a["c"])({exposures:"exposures/exposures"})),{},{exposureType:function(){return this.experiment.exposureType},numberOfConditions:function(){return this.experiment.conditions.length},numberOfExperimentSets:function(){return this.exposures.length},groupNameConditionMapping:function(){var e,t={};return null===(e=this.selectedExposure.groupConditionList)||void 0===e||e.map((function(e){return t[e.groupName]=e.conditionName})),t}}),methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])({fetchExposures:"exposures/fetchExposures"})),{},{sortedGroups:function(){var e,t,s=null===(e=this.selectedExposure)||void 0===e||null===(t=e.groupConditionList)||void 0===t?void 0:t.map((function(e){return e.groupName}));return null===s||void 0===s?void 0:s.sort()},saveExit:function(){this.$router.push({name:"Home",params:{experiment:this.experiment.experiment_id}})}}),beforeRouteEnter:function(e,t,s){return i["a"].dispatch("exposures/fetchExposures",e.params.experiment_id).then(s,s)},beforeRouteUpdate:function(e,t,s){return i["a"].dispatch("exposures/fetchExposures",e.params.experiment_id).then(s,s)}},c=u,l=s("2877"),d=s("6544"),p=s.n(d),h=s("8336"),g=(s("7e58"),s("3860")),m=s("a9ad"),v=s("58df"),b=Object(v["a"])(g["a"],m["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var e=this.setTextColor(this.color,Object(r["a"])({},g["a"].options.methods.genData.call(this)));return this.group?e:this.setBackgroundColor(this.backgroundColor,e)}}}),f=s("b0af"),x=s("99d9"),_=s("cc20"),O=Object(l["a"])(c,o,n,!1,null,null,null);t["default"]=O.exports;p()(O,{VBtn:h["a"],VBtnToggle:b,VCard:f["a"],VCardTitle:x["b"],VChip:_["a"]})},"615b":function(e,t,s){},"7e58":function(e,t,s){},"99d9":function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return u}));var o=s("b0af"),n=s("80d2"),r=Object(n["f"])("v-card__actions"),a=Object(n["f"])("v-card__subtitle"),i=Object(n["f"])("v-card__text"),u=Object(n["f"])("v-card__title");o["a"]},b0af:function(e,t,s){"use strict";var o=s("5530"),n=(s("a9e3"),s("0481"),s("615b"),s("10d2")),r=s("297c"),a=s("1c87"),i=s("58df");t["a"]=Object(i["a"])(r["a"],a["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(o["a"])(Object(o["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var e=Object(o["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=r["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),s=t.tag,o=t.data;return o.style=this.styles,this.isClickable&&(o.attrs=o.attrs||{},o.attrs.tabindex=0),e(s,this.setBackgroundColor(this.color,o),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-6dbac39e.ea1bb34e.js.map
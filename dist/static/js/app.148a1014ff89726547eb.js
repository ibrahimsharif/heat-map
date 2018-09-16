webpackJsonp([0],{"7zck":function(t,e){},MVwY:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7zck");var s=a("7+uW"),i=a("3EgV"),n=a.n(i),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("v-app",{attrs:{id:"inspire",dark:""}},[a("v-navigation-drawer",{attrs:{clipped:"",fixed:"",width:"320",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-tile",{on:{click:function(e){t.$router.push({name:"about"})}}},[a("v-list-tile-action",[a("v-icon",[t._v("info")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("About the project")])],1)],1),t._v(" "),a("v-list-tile",{on:{click:function(e){t.$router.push({name:"create"})}}},[a("v-list-tile-action",[a("v-icon",[t._v("place")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Create AED locations from incidents")])],1)],1),t._v(" "),a("v-list-tile",{on:{click:function(e){t.$router.push({name:"optimize"})}}},[a("v-list-tile-action",[a("v-icon",[t._v("assessment")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Optimize existing AED locations")])],1)],1)],1)],1),t._v(" "),a("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[a("img",{staticClass:"logo",attrs:{src:"../../static/heart-with-pulse.png",alt:"heart with a heart pulse in it."}}),t._v(" "),a("v-toolbar-title",[t._v("Heart Map")])],1),t._v(" "),a("router-view")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("head",[e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",rel:"stylesheet"}})])}]};var o=a("VU/8")({name:"App",data:function(){return{drawer:!0}}},r,!1,function(t){a("QkvA")},null,null).exports,l=a("/ocq"),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-content",{staticClass:"create"},[a("section",[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("iframe",{attrs:{src:t.iframeUrl,seamless:""}}),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[t.showFullMap?a("v-btn",{attrs:{block:"",color:"rgba(97, 96, 96, 0.28)"},on:{click:function(e){t.optimizeMapWithNewAED()}}},[t._v("Optimize existing AED locations")]):a("v-btn",{attrs:{block:"",color:"rgba(97, 96, 96, 0.28)"},on:{click:function(e){t.updateMapWithNewAED()}}},[t._v("Show map of incidents and AED's")])],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]};var v=a("VU/8")({name:"OptimizeAED",data:function(){return{iframeUrl:"../../static/OverallMap.html",showFullMap:!0}},methods:{optimizeMapWithNewAED:function(){this.showFullMap?this.iframeUrl="../../static/NewAEDs.html":this.iframeUrl="../../static/OverallMap.html",this.showFullMap=!this.showFullMap}}},c,!1,function(t){a("MVwY")},"data-v-7224abe1",null).exports,u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-content",{staticClass:"create"},[a("section",[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("iframe",{attrs:{src:t.iframeUrl,seamless:""}}),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[t.showFullMap?a("v-btn",{attrs:{block:"",color:"rgba(97, 96, 96, 0.28)"},on:{click:function(e){t.updateMapWithNewAED()}}},[t._v("Create new AED locations using incident information")]):a("v-btn",{attrs:{block:"",color:"rgba(97, 96, 96, 0.28)"},on:{click:function(e){t.updateMapWithNewAED()}}},[t._v("Show map of incidents")])],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]};var p=a("VU/8")({name:"CreateAED",data:function(){return{iframeUrl:"../../static/Incidentmap.html",showFullMap:!0}},methods:{updateMapWithNewAED:function(){this.showFullMap?this.iframeUrl="../../static/NewNewAEDMap.html":this.iframeUrl="../../static/Incidentmap.html",this.showFullMap=!this.showFullMap}}},u,!1,function(t){a("bTGT")},"data-v-00c0d612",null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"about"},[a("div",{attrs:{id:"customHtml"}}),t._v(" "),a("section",[a("v-parallax",{attrs:{src:"../../static/Capture2.PNG",height:"600"}},[a("v-layout",{staticClass:"black--text",attrs:{column:"","align-center":""}},[a("h1",{staticClass:"black--text mb-2 display-4 font-weight-bold text-xs-center"},[t._v("Heart Map")]),t._v(" "),a("div",{staticClass:"mb-3 display-2 font-weight-bold text-xs-center"},[t._v("Hacking to save lives")])])],1)],1),t._v(" "),a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-xs-center"},[a("h2",{staticClass:"display-3"},[t._v("A hacked solution to save lives")]),t._v(" "),a("span",{staticClass:"subheader"},[t._v("\n               Data analysis optimizing the placements of AED's\n             ")])])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("place")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Optimize your city's AED placement")])]),t._v(" "),a("v-card-text",[t._v("\n                     Use our software to optimize the locations of new AED's in your city.\n                     If your city already have an existing network of AED's we can help you improve it even further.\n                     We help you with suggestions to new locations, based on data from existing AED locations and locations of incidents in your city.\n                     The software focus on areas with high response times, so the chance of survival until the ambulance arrives increases.\n                   ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("assessment")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Create suggestions for new AED locations")])]),t._v(" "),a("v-card-text",[t._v("\n                     If your city does not have an existing network of AED's we will help you build one.\n                     Use our software to place the new AED's in locations where incident numbers are high.\n                     We collaporate with you and using your city's incident data, we can improve survival rate.\n                     The software focus on areas with high response times, so the chance of survival until the ambulance arrives increases.\n                     "),a("div",[t._v("   ")])])],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("section",[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs8:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"display-1"},[t._v("Heart Hack Info")])]),t._v(" "),a("v-card-text",[t._v("\n                 This project was created during the EMS Heart Hack: Hack to save lives. "),a("br"),t._v("\n                 We have developed a solution which utilizes the power of data-analysis to easily let people in charge of AED networks optimize their placement "),a("br"),t._v("\n                 We have focused on both cities with existing AED networks, and cities without an existing network.\n                 This will allow our software to help the future cities to become even more save, and help save the lives of people suffering from heart attacks. "),a("br")])],1)],1)],1)],1)],1)])},staticRenderFns:[]};var d=a("VU/8")({name:"About"},h,!1,function(t){a("c695")},"data-v-6c9a7539",null).exports;s.default.use(l.a);var f=new l.a({mode:"history",routes:[{path:"/create",name:"create",component:p},{path:"/optimize",name:"optimize",component:v},{path:"/",name:"about",component:d}]});s.default.use(n.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:f,components:{App:o},template:"<App/>"})},QkvA:function(t,e){},bTGT:function(t,e){},c695:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.148a1014ff89726547eb.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"4CIL":function(module,exports){module.exports={snippet:'angular<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">\'app\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">controller</span><span class="token punctuation">(</span><span class="token string">\'ProgressBarDemoCtrl\'</span><span class="token punctuation">,</span> ProgressBarDemoCtrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">ProgressBarDemoCtrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span>percentComplete <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span><span class="token function-variable function">random</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        vm<span class="token punctuation">.</span>percentComplete <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:"angular.module('app').controller('ProgressBarDemoCtrl', ProgressBarDemoCtrl);\n\nfunction ProgressBarDemoCtrl() {\n    var vm = this;\n\n    vm.percentComplete = 15;\n\n    vm.random = function () {\n        vm.percentComplete = Math.floor((Math.random() * 100) + 1);\n    };\n}"}},"5GH2":function(module,exports,__webpack_require__){var map={"./app.html":"hIQ+","./app.ts":"LcJ0"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="5GH2"},"6HwM":function(module,exports,__webpack_require__){var map={"./controller.js":"4CIL","./layout.html":"p3Vb"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="6HwM"},LcJ0:function(module,exports){module.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token punctuation">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">\'./app.component.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n\n    value<span class="token punctuation">:</span> number <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n\n    <span class="token function">randomize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n',example:"import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent {\n\n    value: number = 15;\n\n    randomize() {\n        this.value = Math.floor((Math.random() * 100) + 1);\n    }\n}\n"}},V3TL:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var core=__webpack_require__("CcnG"),documentation_category_component=__webpack_require__("T/2f"),resolver_service=__webpack_require__("YZ8U"),tslib_es6=__webpack_require__("mrSG"),base_documentation_section=__webpack_require__("AVdU"),documentation_section_component=__webpack_require__("yHOM"),progress_bar_ng1_component_ComponentsProgressBarNg1Component=function(_super){function ComponentsProgressBarNg1Component(){var _this=_super.call(this,__webpack_require__("6HwM"))||this;return _this.codepen={html:_this.snippets.raw.layoutHtml,htmlAttributes:{"ng-controller":"ProgressBarDemoCtrl as vm"},js:[_this.snippets.raw.controllerJs]},_this}return Object(tslib_es6.__extends)(ComponentsProgressBarNg1Component,_super),ComponentsProgressBarNg1Component=Object(tslib_es6.__decorate)([Object(documentation_section_component.a)("ComponentsProgressBarNg1Component")],ComponentsProgressBarNg1Component)}(base_documentation_section.a),progress_bar_component_ComponentsProgressBarComponent=function(_super){function ComponentsProgressBarComponent(){var _this=_super.call(this,__webpack_require__("5GH2"))||this;return _this.value=15,_this.plunk={files:{"app.component.html":_this.snippets.raw.appHtml,"app.component.ts":_this.snippets.raw.appTs},modules:[{imports:["ProgressBarModule"],library:"@ux-aspects/ux-aspects"}]},_this}return Object(tslib_es6.__extends)(ComponentsProgressBarComponent,_super),ComponentsProgressBarComponent.prototype.randomize=function(){this.value=Math.floor(100*Math.random()+1)},ComponentsProgressBarComponent=Object(tslib_es6.__decorate)([Object(documentation_section_component.a)("ComponentsProgressBarComponent")],ComponentsProgressBarComponent)}(base_documentation_section.a),\u02750={category:resolver_service.b.resolveCategoryData(resolver_service.a.Components,"Progress")},ComponentsProgressModule=(documentation_category_component.a,function(){return function(componentFactoryResolver,resolverService){resolverService.registerResolver(componentFactoryResolver)}}()),bs_dropdown_container_component_ngfactory=__webpack_require__("WmtN"),tooltip_component_ngfactory=__webpack_require__("yuaN"),popover_component_ngfactory=__webpack_require__("4dkb"),router_ngfactory=__webpack_require__("pMnS"),typeahead_container_component_ngfactory=__webpack_require__("GBPT"),documentation_category_component_ngfactory=__webpack_require__("rYg0"),progress_bar_component=__webpack_require__("wRzz"),tabset_component_ngfactory=__webpack_require__("d+NZ"),tabset_component=__webpack_require__("vPfJ"),tabset_config=__webpack_require__("OQnT"),tab_directive=__webpack_require__("NEdW"),snippet_component_ngfactory=__webpack_require__("r1ng"),snippet_component=__webpack_require__("COk8"),RenderType_ComponentsProgressBarNg1Component=core["\u0275crt"]({encapsulation:2,styles:[],data:{}});function View_ComponentsProgressBarNg1Component_0(_l){return core["\u0275vid"](2,[(_l()(),core["\u0275eld"](0,0,null,null,1,"uxd-progress-bar-wrapper",[],null,null,null,null,null)),core["\u0275did"](1,999424,null,0,progress_bar_component.a,[core.ElementRef,core.Injector],null,null),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](3,0,null,null,0,"hr",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](5,0,null,null,13,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Create a "])),(_l()(),core["\u0275eld"](7,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["progressbar"])),(_l()(),core["\u0275ted"](-1,null,[" element and set the value attribute to the value property. Set "])),(_l()(),core["\u0275eld"](10,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,['type="accent"'])),(_l()(),core["\u0275ted"](-1,null,["\n  and the max attribute to the maximum allowed value. Inside the "])),(_l()(),core["\u0275eld"](13,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["progressbar"])),(_l()(),core["\u0275ted"](-1,null,[" element you can specify a "])),(_l()(),core["\u0275eld"](16,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["span"])),(_l()(),core["\u0275ted"](-1,null,["\n  which can be used to display the current value."])),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](20,0,null,null,16,"tabset",[],[[2,"tab-container",null]],null,null,tabset_component_ngfactory.b,tabset_component_ngfactory.a)),core["\u0275did"](21,180224,null,0,tabset_component.a,[tabset_config.a,core.Renderer2],null,null),(_l()(),core["\u0275ted"](-1,0,["\n  "])),(_l()(),core["\u0275eld"](23,0,null,0,5,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),core["\u0275did"](24,212992,null,0,tab_directive.a,[tabset_component.a,core.ElementRef,core.Renderer2],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,null,["\n    "])),(_l()(),core["\u0275eld"](26,0,null,null,1,"uxd-snippet",[["language","html"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](27,114688,null,0,snippet_component.a,[],{language:[0,"language"],content:[1,"content"]},null),(_l()(),core["\u0275ted"](-1,null,["\n  "])),(_l()(),core["\u0275ted"](-1,0,["\n  "])),(_l()(),core["\u0275eld"](30,0,null,0,5,"tab",[["heading","JavaScript"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),core["\u0275did"](31,212992,null,0,tab_directive.a,[tabset_component.a,core.ElementRef,core.Renderer2],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,null,["\n    "])),(_l()(),core["\u0275eld"](33,0,null,null,1,"uxd-snippet",[["language","javascript"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](34,114688,null,0,snippet_component.a,[],{language:[0,"language"],content:[1,"content"]},null),(_l()(),core["\u0275ted"](-1,null,["\n  "])),(_l()(),core["\u0275ted"](-1,0,["\n"]))],function(_ck,_v){var _co=_v.component;_ck(_v,1,0);_ck(_v,24,0,"HTML");_ck(_v,27,0,"html",_co.snippets.compiled.layoutHtml);_ck(_v,31,0,"JavaScript");_ck(_v,34,0,"javascript",_co.snippets.compiled.controllerJs)},function(_ck,_v){_ck(_v,20,0,core["\u0275nov"](_v,21).clazz),_ck(_v,23,0,core["\u0275nov"](_v,24).id,core["\u0275nov"](_v,24).active,core["\u0275nov"](_v,24).addClass),_ck(_v,30,0,core["\u0275nov"](_v,31).id,core["\u0275nov"](_v,31).active,core["\u0275nov"](_v,31).addClass)})}var ComponentsProgressBarNg1ComponentNgFactory=core["\u0275ccf"]("uxd-progress-bar-ng1",progress_bar_ng1_component_ComponentsProgressBarNg1Component,function(_l){return core["\u0275vid"](0,[(_l()(),core["\u0275eld"](0,0,null,null,1,"uxd-progress-bar-ng1",[],null,null,null,View_ComponentsProgressBarNg1Component_0,RenderType_ComponentsProgressBarNg1Component)),core["\u0275did"](1,49152,null,0,progress_bar_ng1_component_ComponentsProgressBarNg1Component,[],null,null)],null,null)},{},{},[]),progress_bar_component_ngfactory=__webpack_require__("YlJC"),progress_bar_progress_bar_component=__webpack_require__("b+FR"),api_properties_component_ngfactory=__webpack_require__("9hoY"),api_properties_component=__webpack_require__("+gXg"),api_property_component_ngfactory=__webpack_require__("rpQh"),api_property_component=__webpack_require__("2RDK"),RenderType_ComponentsProgressBarComponent=core["\u0275crt"]({encapsulation:2,styles:[],data:{}});function View_ComponentsProgressBarComponent_0(_l){return core["\u0275vid"](0,[(_l()(),core["\u0275eld"](0,0,null,null,5,"ux-progress-bar",[["class","m-b-md"],["max","100"]],null,null,null,progress_bar_component_ngfactory.b,progress_bar_component_ngfactory.a)),core["\u0275did"](1,49152,null,0,progress_bar_progress_bar_component.a,[],{value:[0,"value"],max:[1,"max"]},null),(_l()(),core["\u0275ted"](-1,1,["\n    "])),(_l()(),core["\u0275eld"](3,0,null,1,1,"span",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](4,null,["","%"])),(_l()(),core["\u0275ted"](-1,1,["\n"])),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(_v,en,$event){var ad=!0,_co=_v.component;"click"===en&&(ad=!1!==_co.randomize()&&ad);return ad},null,null)),(_l()(),core["\u0275ted"](-1,null,["Random"])),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](10,0,null,null,0,"hr",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](12,0,null,null,7,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["\n    A progress bar can be created by using the "])),(_l()(),core["\u0275eld"](14,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["ux-progress-bar"])),(_l()(),core["\u0275ted"](-1,null,[" component. Custom content can be added to the\n    bar by adding HTML inside the "])),(_l()(),core["\u0275eld"](17,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["ux-progress-bar"])),(_l()(),core["\u0275ted"](-1,null,[" tag. The following attributes can be used to configure the appearance and behavior of the progress bar:\n"])),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](21,0,null,null,22,"uxd-api-properties",[["tableTitle","Inputs"]],null,null,null,api_properties_component_ngfactory.b,api_properties_component_ngfactory.a)),core["\u0275did"](22,49152,null,0,api_properties_component.a,[],{tableTitle:[0,"tableTitle"]},null),(_l()(),core["\u0275ted"](-1,0,["\n    "])),(_l()(),core["\u0275eld"](24,0,null,0,19,"tbody",[],null,null,null,null,null)),(_l()(),core["\u0275eld"](25,0,null,null,5,"tr",[["name","value"],["type","number"],["uxd-api-property",""]],null,null,null,api_property_component_ngfactory.b,api_property_component_ngfactory.a)),core["\u0275did"](26,49152,null,0,api_property_component.a,[],{name:[0,"name"],type:[1,"type"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        The value the bar should represent. This will be compared to the "])),(_l()(),core["\u0275eld"](28,0,null,0,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["max"])),(_l()(),core["\u0275ted"](-1,0,[" value to determine the width of the bar.\n    "])),(_l()(),core["\u0275ted"](-1,null,["\n    "])),(_l()(),core["\u0275eld"](32,0,null,null,2,"tr",[["defaultValue","100"],["name","max"],["type","number"],["uxd-api-property",""]],null,null,null,api_property_component_ngfactory.b,api_property_component_ngfactory.a)),core["\u0275did"](33,49152,null,0,api_property_component.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        The upper limit of the bar.\n    "])),(_l()(),core["\u0275ted"](-1,null,["\n    "])),(_l()(),core["\u0275eld"](36,0,null,null,2,"tr",[["defaultValue","grey7"],["name","trackColor"],["type","string"],["uxd-api-property",""]],null,null,null,api_property_component_ngfactory.b,api_property_component_ngfactory.a)),core["\u0275did"](37,49152,null,0,api_property_component.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        The color of the track.\n    "])),(_l()(),core["\u0275ted"](-1,null,["\n    "])),(_l()(),core["\u0275eld"](40,0,null,null,2,"tr",[["defaultValue","accent"],["name","barColor"],["type","string"],["uxd-api-property",""]],null,null,null,api_property_component_ngfactory.b,api_property_component_ngfactory.a)),core["\u0275did"](41,49152,null,0,api_property_component.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        The color of the bar. \n    "])),(_l()(),core["\u0275ted"](-1,null,["\n"])),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](45,0,null,null,1,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["The following code can be used to create the example above:"])),(_l()(),core["\u0275ted"](-1,null,["\n\n"])),(_l()(),core["\u0275eld"](48,0,null,null,16,"tabset",[],[[2,"tab-container",null]],null,null,tabset_component_ngfactory.b,tabset_component_ngfactory.a)),core["\u0275did"](49,180224,null,0,tabset_component.a,[tabset_config.a,core.Renderer2],null,null),(_l()(),core["\u0275ted"](-1,0,["\n  "])),(_l()(),core["\u0275eld"](51,0,null,0,5,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),core["\u0275did"](52,212992,null,0,tab_directive.a,[tabset_component.a,core.ElementRef,core.Renderer2],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,null,["\n    "])),(_l()(),core["\u0275eld"](54,0,null,null,1,"uxd-snippet",[["language","html"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](55,114688,null,0,snippet_component.a,[],{language:[0,"language"],content:[1,"content"]},null),(_l()(),core["\u0275ted"](-1,null,["\n  "])),(_l()(),core["\u0275ted"](-1,0,["\n  "])),(_l()(),core["\u0275eld"](58,0,null,0,5,"tab",[["heading","JavaScript"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),core["\u0275did"](59,212992,null,0,tab_directive.a,[tabset_component.a,core.ElementRef,core.Renderer2],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,null,["\n    "])),(_l()(),core["\u0275eld"](61,0,null,null,1,"uxd-snippet",[["language","javascript"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](62,114688,null,0,snippet_component.a,[],{language:[0,"language"],content:[1,"content"]},null),(_l()(),core["\u0275ted"](-1,null,["\n  "])),(_l()(),core["\u0275ted"](-1,0,["\n"]))],function(_ck,_v){var _co=_v.component;_ck(_v,1,0,_co.value,"100");_ck(_v,22,0,"Inputs");_ck(_v,26,0,"value","number");_ck(_v,33,0,"max","number","100");_ck(_v,37,0,"trackColor","string","grey7");_ck(_v,41,0,"barColor","string","accent");_ck(_v,52,0,"HTML");_ck(_v,55,0,"html",_co.snippets.compiled.appHtml);_ck(_v,59,0,"JavaScript");_ck(_v,62,0,"javascript",_co.snippets.compiled.appTs)},function(_ck,_v){_ck(_v,4,0,_v.component.value),_ck(_v,48,0,core["\u0275nov"](_v,49).clazz),_ck(_v,51,0,core["\u0275nov"](_v,52).id,core["\u0275nov"](_v,52).active,core["\u0275nov"](_v,52).addClass),_ck(_v,58,0,core["\u0275nov"](_v,59).id,core["\u0275nov"](_v,59).active,core["\u0275nov"](_v,59).addClass)})}var ComponentsProgressBarComponentNgFactory=core["\u0275ccf"]("uxd-progress-bar",progress_bar_component_ComponentsProgressBarComponent,function(_l){return core["\u0275vid"](0,[(_l()(),core["\u0275eld"](0,0,null,null,1,"uxd-progress-bar",[],null,null,null,View_ComponentsProgressBarComponent_0,RenderType_ComponentsProgressBarComponent)),core["\u0275did"](1,49152,null,0,progress_bar_component_ComponentsProgressBarComponent,[],null,null)],null,null)},{},{},[]),wrappers_module=__webpack_require__("x4zH"),common=__webpack_require__("Ip0R"),fesm5_forms=__webpack_require__("gIcY"),bidi_es5=__webpack_require__("Fzqc"),platform_es5=__webpack_require__("dWZg"),scrolling_es5=__webpack_require__("qAlS"),overlay_es5=__webpack_require__("eDkP"),observers_es5=__webpack_require__("M2Lx"),tooltip_service=__webpack_require__("7Nj1"),persistent_data_service=__webpack_require__("ITMR"),positioning_service=__webpack_require__("S7LP"),component_loader_factory=__webpack_require__("6aHO"),bs_dropdown_state=__webpack_require__("dArN"),tabs_module=__webpack_require__("z+jS"),progress_bar_module=__webpack_require__("ZYhB"),bs_dropdown_module=__webpack_require__("qina"),buttons_module=__webpack_require__("zCE2"),ebox_module=__webpack_require__("pxEr"),portal_es5=__webpack_require__("4c35"),click_outside_module=__webpack_require__("fky3"),tooltip_module=__webpack_require__("DS18"),popover_module=__webpack_require__("zq45"),router=__webpack_require__("ZYCi"),scroll_module=__webpack_require__("GxqR"),typeahead_module=__webpack_require__("FLOw"),persistent_data_module=__webpack_require__("Mb82"),components_module=__webpack_require__("XtaT"),bs_dropdown_config=__webpack_require__("OsAV");__webpack_require__.d(__webpack_exports__,"ComponentsProgressModuleNgFactory",function(){return ComponentsProgressModuleNgFactory});var ComponentsProgressModuleNgFactory=core["\u0275cmf"](ComponentsProgressModule,[],function(_l){return core["\u0275mod"]([core["\u0275mpd"](512,core.ComponentFactoryResolver,core["\u0275CodegenComponentFactoryResolver"],[[8,[bs_dropdown_container_component_ngfactory.a,tooltip_component_ngfactory.a,popover_component_ngfactory.a,router_ngfactory.a,typeahead_container_component_ngfactory.a,documentation_category_component_ngfactory.a,ComponentsProgressBarNg1ComponentNgFactory,ComponentsProgressBarComponentNgFactory]],[3,core.ComponentFactoryResolver],core.NgModuleRef]),core["\u0275mpd"](5120,"flotDataService",wrappers_module.b,["$injector"]),core["\u0275mpd"](5120,"lineDataService",wrappers_module.c,["$injector"]),core["\u0275mpd"](4608,common.NgLocalization,common.NgLocaleLocalization,[core.LOCALE_ID,[2,common["\u0275angular_packages_common_common_a"]]]),core["\u0275mpd"](4608,fesm5_forms.A,fesm5_forms.A,[]),core["\u0275mpd"](6144,bidi_es5.b,null,[common.DOCUMENT]),core["\u0275mpd"](4608,bidi_es5.c,bidi_es5.c,[[2,bidi_es5.b]]),core["\u0275mpd"](4608,platform_es5.a,platform_es5.a,[]),core["\u0275mpd"](5120,scrolling_es5.c,scrolling_es5.a,[[3,scrolling_es5.c],core.NgZone,platform_es5.a]),core["\u0275mpd"](5120,scrolling_es5.f,scrolling_es5.e,[[3,scrolling_es5.f],platform_es5.a,core.NgZone]),core["\u0275mpd"](4608,overlay_es5.f,overlay_es5.f,[scrolling_es5.c,scrolling_es5.f,core.NgZone,common.DOCUMENT]),core["\u0275mpd"](5120,overlay_es5.b,overlay_es5.g,[[3,overlay_es5.b],common.DOCUMENT]),core["\u0275mpd"](4608,overlay_es5.e,overlay_es5.e,[scrolling_es5.f,common.DOCUMENT]),core["\u0275mpd"](5120,overlay_es5.c,overlay_es5.j,[[3,overlay_es5.c],common.DOCUMENT]),core["\u0275mpd"](4608,overlay_es5.a,overlay_es5.a,[overlay_es5.f,overlay_es5.b,core.ComponentFactoryResolver,overlay_es5.e,overlay_es5.c,core.ApplicationRef,core.Injector,core.NgZone,common.DOCUMENT]),core["\u0275mpd"](5120,overlay_es5.h,overlay_es5.i,[overlay_es5.a]),core["\u0275mpd"](4608,observers_es5.b,observers_es5.b,[]),core["\u0275mpd"](4608,tooltip_service.a,tooltip_service.a,[]),core["\u0275mpd"](4608,persistent_data_service.a,persistent_data_service.a,[]),core["\u0275mpd"](4608,positioning_service.a,positioning_service.a,[]),core["\u0275mpd"](4608,component_loader_factory.a,component_loader_factory.a,[core.ComponentFactoryResolver,core.NgZone,core.Injector,positioning_service.a,core.ApplicationRef]),core["\u0275mpd"](4608,bs_dropdown_state.a,bs_dropdown_state.a,[]),core["\u0275mpd"](4608,tabset_config.a,tabset_config.a,[]),core["\u0275mpd"](1073742336,wrappers_module.a,wrappers_module.a,[]),core["\u0275mpd"](1073742336,common.CommonModule,common.CommonModule,[]),core["\u0275mpd"](1073742336,tabs_module.a,tabs_module.a,[]),core["\u0275mpd"](1073742336,progress_bar_module.a,progress_bar_module.a,[]),core["\u0275mpd"](1073742336,bs_dropdown_module.a,bs_dropdown_module.a,[]),core["\u0275mpd"](1073742336,buttons_module.a,buttons_module.a,[]),core["\u0275mpd"](1073742336,ebox_module.a,ebox_module.a,[]),core["\u0275mpd"](1073742336,fesm5_forms.x,fesm5_forms.x,[]),core["\u0275mpd"](1073742336,fesm5_forms.l,fesm5_forms.l,[]),core["\u0275mpd"](1073742336,bidi_es5.a,bidi_es5.a,[]),core["\u0275mpd"](1073742336,portal_es5.c,portal_es5.c,[]),core["\u0275mpd"](1073742336,platform_es5.b,platform_es5.b,[]),core["\u0275mpd"](1073742336,scrolling_es5.b,scrolling_es5.b,[]),core["\u0275mpd"](1073742336,overlay_es5.d,overlay_es5.d,[]),core["\u0275mpd"](1073742336,observers_es5.c,observers_es5.c,[]),core["\u0275mpd"](1073742336,click_outside_module.a,click_outside_module.a,[]),core["\u0275mpd"](1073742336,tooltip_module.a,tooltip_module.a,[]),core["\u0275mpd"](1073742336,popover_module.a,popover_module.a,[]),core["\u0275mpd"](1073742336,router.p,router.p,[[2,router.v],[2,router.m]]),core["\u0275mpd"](1073742336,scroll_module.a,scroll_module.a,[]),core["\u0275mpd"](1073742336,typeahead_module.a,typeahead_module.a,[]),core["\u0275mpd"](1073742336,persistent_data_module.a,persistent_data_module.a,[]),core["\u0275mpd"](1073742336,components_module.a,components_module.a,[]),core["\u0275mpd"](1073742336,ComponentsProgressModule,ComponentsProgressModule,[core.ComponentFactoryResolver,resolver_service.b]),core["\u0275mpd"](256,bs_dropdown_config.a,{autoClose:!0},[]),core["\u0275mpd"](1024,router.k,function(){return[[{path:"**",component:documentation_category_component.a,data:\u02750}]]},[])])})},"hIQ+":function(module,exports){module.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-progress-bar</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-b-md<span class="token punctuation">"</span></span> <span class="token attr-name">[value]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ value }}%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-progress-bar</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>randomize()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Random<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',example:'<ux-progress-bar class="m-b-md" [value]="value" max="100">\n    <span>{{ value }}%</span>\n</ux-progress-bar>\n\n<button type="button" class="btn btn-primary" (click)="randomize()">Random</button>'}},p3Vb:function(module,exports){module.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progressbar</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.percentComplete<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>accent<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">ng-bind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.percentComplete+<span class="token punctuation">\'</span>%<span class="token punctuation">\'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>progressbar</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">ng-click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.random()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Random<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',example:'<progressbar value="vm.percentComplete" type="accent" max="100">\n    <span ng-bind="vm.percentComplete+\'%\'"></span>\n</progressbar>\n<button type="button" class="btn btn-primary" ng-click="vm.random()">Random</button>'}}}]);
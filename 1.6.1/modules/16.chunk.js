(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{GneK:function(module,exports){module.exports='"styles": [\n    "./node_modules/@ux-aspects/ux-aspects/styles/ux-aspects.css"\n],'},WAYH:function(module,exports){module.exports='"baseUrl": ".",\n"paths": {\n    "ux-aspects": [\n        "bower_components/ux-aspects/dist"\n    ]\n}'},ZKvi:function(module,exports){module.exports="import { CheckboxModule } from '@ux-aspects/ux-aspects';\n\n@NgModule({\n    imports: [\n        CheckboxModule,\n        // ...\n    ]\n})\nexport class AppModule() {}"},ZaW9:function(module,exports){module.exports="import { CheckboxComponent } from '@ux-aspects/ux-aspects';\n\nangular.module('app')\n    .directive('checkbox', upgradeAdapter.downgradeNg2Component(CheckboxComponent));"},bxl4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var core=__webpack_require__("CcnG"),app_configuration_service=__webpack_require__("5h3g"),GettingStartedPageComponent=function(){return function(appConfig){this.appConfig=appConfig,this.version=this.appConfig.get("version"),this.angular4Ts=__webpack_require__("ZKvi"),this.angular4UpgradeTs=__webpack_require__("nNtC"),this.angular1DowngradeJs=__webpack_require__("ZaW9"),this.stylesheetCss=__webpack_require__("pB7L"),this.cliJson=__webpack_require__("GneK"),this.tsconfig=__webpack_require__("WAYH")}}(),GettingStartedPageModule=function(){return function(){}}(),bs_dropdown_container_component_ngfactory=__webpack_require__("WmtN"),tooltip_component_ngfactory=__webpack_require__("yuaN"),popover_component_ngfactory=__webpack_require__("4dkb"),router_ngfactory=__webpack_require__("pMnS"),typeahead_container_component_ngfactory=__webpack_require__("GBPT"),page_header_component_ngfactory=__webpack_require__("umu3"),page_header_component=__webpack_require__("f/B4"),text_page_layout_component_ngfactory=__webpack_require__("7eYo"),text_page_layout_component=__webpack_require__("0FDo"),router=__webpack_require__("ZYCi"),common=__webpack_require__("Ip0R"),tabset_component_ngfactory=__webpack_require__("1WoO"),tabset_service=__webpack_require__("yaYn"),tabset_component=__webpack_require__("KH6+"),tab_component_ngfactory=__webpack_require__("Sxhw"),tab_component=__webpack_require__("oHu4"),snippet_component_ngfactory=__webpack_require__("r1ng"),snippet_component=__webpack_require__("COk8"),styles_GettingStartedPageComponent=[["[_nghost-%COMP%]  .nav-tabs{margin-bottom:15px}[_nghost-%COMP%]  .tab-content pre[class*=language-]{border-top:1px solid #ddd}"]],RenderType_GettingStartedPageComponent=core["\u0275crt"]({encapsulation:0,styles:styles_GettingStartedPageComponent,data:{}});function View_GettingStartedPageComponent_0(_l){return core["\u0275vid"](0,[(_l()(),core["\u0275eld"](0,0,null,null,1,"uxd-page-header",[["header","Getting Started"]],null,null,null,page_header_component_ngfactory.b,page_header_component_ngfactory.a)),core["\u0275did"](1,49152,null,0,page_header_component.a,[],{header:[0,"header"]},null),(_l()(),core["\u0275ted"](-1,null,["\n"])),(_l()(),core["\u0275eld"](3,0,null,null,259,"uxd-text-page-layout",[],null,null,null,text_page_layout_component_ngfactory.b,text_page_layout_component_ngfactory.a)),core["\u0275did"](4,49152,null,0,text_page_layout_component.a,[],null,null),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](6,0,null,0,1,"h3",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Installation"])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](9,0,null,0,0,"div",[["class","row-divider"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](11,0,null,0,5,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["UX Aspects components can be used in Angular projects (Angular or AngularJS 1.x), and those shown in the\n        "])),(_l()(),core["\u0275eld"](13,0,null,null,2,"a",[["routerLink","/css"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core["\u0275nov"](_v,14).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad},null,null)),core["\u0275did"](14,671744,null,0,router.o,[router.m,router.a,common.LocationStrategy],{routerLink:[0,"routerLink"]},null),(_l()(),core["\u0275ted"](-1,null,["CSS"])),(_l()(),core["\u0275ted"](-1,null,[" section can be used in non-Angular projects. Details on installing and using the components \n        are shown below. The installation instructions are broken down into four alternative methods as detailed in the \n        following tabsets:"])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](18,0,null,0,112,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,tabset_component_ngfactory.b,tabset_component_ngfactory.a)),core["\u0275prd"](512,null,tabset_service.a,tabset_service.a,[]),core["\u0275did"](20,49152,null,0,tabset_component.a,[tabset_service.a],{minimal:[0,"minimal"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275eld"](22,0,null,0,24,"ux-tab",[["heading","NPM"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](23,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](25,0,null,0,20,"ol",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](27,0,null,null,4,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install "])),(_l()(),core["\u0275eld"](29,0,null,null,1,"a",[["href","https://nodejs.org/"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Node.js"])),(_l()(),core["\u0275ted"](-1,null,[", which provides the npm package manager."])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](33,0,null,null,3,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install the UX Aspects package and its dependencies: "])),(_l()(),core["\u0275eld"](35,0,null,null,1,"kbd",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["npm install @ux-aspects/ux-aspects --save"])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](38,0,null,null,6,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install "])),(_l()(),core["\u0275eld"](40,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["rxjs-compat"])),(_l()(),core["\u0275ted"](-1,null,[" for Angular 6 applications: "])),(_l()(),core["\u0275eld"](43,0,null,null,1,"kbd",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["npm install rxjs-compat --save"])),(_l()(),core["\u0275ted"](-1,null,["\n            "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275eld"](48,0,null,0,44,"ux-tab",[["heading","Bower"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](49,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](51,0,null,0,40,"ol",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](53,0,null,null,4,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install "])),(_l()(),core["\u0275eld"](55,0,null,null,1,"a",[["href","https://nodejs.org/"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Node.js"])),(_l()(),core["\u0275ted"](-1,null,[", which provides the npm package manager."])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](59,0,null,null,6,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install "])),(_l()(),core["\u0275eld"](61,0,null,null,1,"a",[["href","https://www.typescriptlang.org/"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["TypeScript"])),(_l()(),core["\u0275ted"](-1,null,[": "])),(_l()(),core["\u0275eld"](64,0,null,null,1,"kbd",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["npm install typescript --save-dev"])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](67,0,null,null,10,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install "])),(_l()(),core["\u0275eld"](69,0,null,null,1,"a",[["href","https://angular.io/"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Angular"])),(_l()(),core["\u0275ted"](-1,null,[" and other dependencies:\n                    "])),(_l()(),core["\u0275eld"](72,0,null,null,4,"div",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["\n                        "])),(_l()(),core["\u0275eld"](74,0,null,null,1,"kbd",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["npm install @angular/common @angular/compiler @angular/compiler-cli @angular/core @angular/forms\n                            @angular/http @angular/platform-browser @angular/platform-browser-dynamic\n                            @angular/router rxjs rxjs-compat zone.js chart.js ngx-bootstrap ng2-charts @types/chart.js --save"])),(_l()(),core["\u0275ted"](-1,null,["\n                    "])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](79,0,null,null,6,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install "])),(_l()(),core["\u0275eld"](81,0,null,null,1,"a",[["href","https://bower.io/"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Bower"])),(_l()(),core["\u0275ted"](-1,null,[": "])),(_l()(),core["\u0275eld"](84,0,null,null,1,"kbd",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["npm install -g bower"])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](87,0,null,null,3,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install the UX Aspects bower package: "])),(_l()(),core["\u0275eld"](89,0,null,null,1,"kbd",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](90,null,["bower install ux-aspects#",""])),(_l()(),core["\u0275ted"](-1,null,["\n            "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275eld"](94,0,null,0,8,"ux-tab",[["heading","Direct Download"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](95,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](97,0,null,0,4,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["The UX Aspects resources (scripts, CSS, fonts, and images) can be downloaded from the\n                "])),(_l()(),core["\u0275eld"](99,0,null,null,1,"a",[["href","https://github.com/UXAspects/UXAspects/releases"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["GitHub releases page"])),(_l()(),core["\u0275ted"](-1,null,["."])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275eld"](104,0,null,0,25,"ux-tab",[["heading","Building from Source"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](105,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](107,0,null,0,21,"ol",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](109,0,null,null,4,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Clone the "])),(_l()(),core["\u0275eld"](111,0,null,null,1,"a",[["href","https://github.com/UXAspects/UXAspects"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["GitHub repository"])),(_l()(),core["\u0275ted"](-1,null,["."])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](115,0,null,null,3,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Install the dependencies: "])),(_l()(),core["\u0275eld"](117,0,null,null,1,"kbd",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["npm install"])),(_l()(),core["\u0275ted"](-1,null,["\n                "])),(_l()(),core["\u0275eld"](120,0,null,null,7,"li",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Build the project: "])),(_l()(),core["\u0275eld"](122,0,null,null,1,"kbd",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["grunt build"])),(_l()(),core["\u0275ted"](-1,null,[". The resources (scripts, CSS, fonts, and images) can be found in the\n                    "])),(_l()(),core["\u0275eld"](125,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["dist"])),(_l()(),core["\u0275ted"](-1,null,[" folder.\n                "])),(_l()(),core["\u0275ted"](-1,null,["\n            "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n    "])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](132,0,null,0,1,"h3",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Applying the Stylesheet"])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](135,0,null,0,0,"div",[["class","row-divider"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](137,0,null,0,1,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["The UX Aspects stylesheet can be applied in three different ways as outlined in the following tabs:"])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](140,0,null,0,39,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,tabset_component_ngfactory.b,tabset_component_ngfactory.a)),core["\u0275prd"](512,null,tabset_service.a,tabset_service.a,[]),core["\u0275did"](142,49152,null,0,tabset_component.a,[tabset_service.a],{minimal:[0,"minimal"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275eld"](144,0,null,0,11,"ux-tab",[["heading","Angular CLI"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](145,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](147,0,null,0,4,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["If using the CLI, the UX Aspects stylesheet can be added in the "])),(_l()(),core["\u0275eld"](149,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["angular-cli.json"])),(_l()(),core["\u0275ted"](-1,null,[" file:"])),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](153,0,null,0,1,"uxd-snippet",[["language","javascript"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](154,114688,null,0,snippet_component.a,[],{language:[0,"language"],code:[1,"code"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275eld"](157,0,null,0,8,"ux-tab",[["heading","Webpack"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](158,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](160,0,null,0,1,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["When using Webpack the UX Aspects stylesheet can be included in the main stylesheet of the application:"])),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](163,0,null,0,1,"uxd-snippet",[["language","css"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](164,114688,null,0,snippet_component.a,[],{language:[0,"language"],code:[1,"code"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275eld"](167,0,null,0,11,"ux-tab",[["heading","Non-Angular Sites"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](168,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n            "])),(_l()(),core["\u0275eld"](170,0,null,0,7,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["\n                If your application does not use Node or Webpack, you can download UX Aspects and copy the fonts, img, and styles\n                directories to your application. The UX Aspects stylesheet can be applied from "])),(_l()(),core["\u0275eld"](172,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["styles/ux-aspects.css"])),(_l()(),core["\u0275ted"](-1,null,["\n                by adding a "])),(_l()(),core["\u0275eld"](175,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["link"])),(_l()(),core["\u0275ted"](-1,null,[" tag in the page header. This is the only required step for non-Angular sites.\n            "])),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n    "])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](181,0,null,0,1,"h3",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Using UX Aspects"])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](184,0,null,0,0,"div",[["class","row-divider"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](186,0,null,0,1,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["UX Aspects can be used in Angular and AngularJS projects as follows:"])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](189,0,null,0,53,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,tabset_component_ngfactory.b,tabset_component_ngfactory.a)),core["\u0275prd"](512,null,tabset_service.a,tabset_service.a,[]),core["\u0275did"](191,49152,null,0,tabset_component.a,[tabset_service.a],{minimal:[0,"minimal"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275eld"](193,0,null,0,23,"ux-tab",[["heading","Angular"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](194,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n\n            "])),(_l()(),core["\u0275eld"](196,0,null,0,1,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Import the required component module(s) into the module that will be using them."])),(_l()(),core["\u0275ted"](-1,0,["\n\n            "])),(_l()(),core["\u0275eld"](199,0,null,0,1,"uxd-snippet",[["language","javascript"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](200,114688,null,0,snippet_component.a,[],{language:[0,"language"],code:[1,"code"]},null),(_l()(),core["\u0275ted"](-1,0,["\n\n            "])),(_l()(),core["\u0275eld"](202,0,null,0,1,"h4",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Upgrading AngularJS Components"])),(_l()(),core["\u0275ted"](-1,0,["\n\n            "])),(_l()(),core["\u0275eld"](205,0,null,0,7,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["If the component is marked "])),(_l()(),core["\u0275eld"](207,0,null,null,1,"span",[["class","label label-primary"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["AngularJS"])),(_l()(),core["\u0275ted"](-1,null,[" in the documentation, it will need to be\n                upgraded using Angular's "])),(_l()(),core["\u0275eld"](210,0,null,null,1,"a",[["href","https://angular.io/docs/ts/latest/api/upgrade/index/UpgradeAdapter-class.html"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["UpgradeAdapter"])),(_l()(),core["\u0275ted"](-1,null,["."])),(_l()(),core["\u0275ted"](-1,0,["\n\n            "])),(_l()(),core["\u0275eld"](214,0,null,0,1,"uxd-snippet",[["language","javascript"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](215,114688,null,0,snippet_component.a,[],{language:[0,"language"],code:[1,"code"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n\n        "])),(_l()(),core["\u0275eld"](218,0,null,0,23,"ux-tab",[["heading","AngularJS"]],null,null,null,tab_component_ngfactory.b,tab_component_ngfactory.a)),core["\u0275did"](219,180224,null,0,tab_component.a,[tabset_service.a],{heading:[0,"heading"]},null),(_l()(),core["\u0275ted"](-1,0,["\n\n            "])),(_l()(),core["\u0275eld"](221,0,null,0,16,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["The components marked "])),(_l()(),core["\u0275eld"](223,0,null,null,1,"span",[["class","label label-primary"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["AngularJS"])),(_l()(),core["\u0275ted"](-1,null,[" can be included by importing\n                "])),(_l()(),core["\u0275eld"](226,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["@ux-aspects/ux-aspects/ng1/ux-aspects-ng1.js"])),(_l()(),core["\u0275ted"](-1,null,[". Over the coming months, these will be replaced with Angular components, so\n                it is recommended to set up the project as a hybrid AngularJS/Angular site. See the\n                "])),(_l()(),core["\u0275eld"](229,0,null,null,1,"a",[["href","https://github.com/UXAspects/UXAspects/blob/develop/guides/angular-upgrade-guide.md"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Angular Upgrade Guide"])),(_l()(),core["\u0275ted"](-1,null,["\n                for details on modifying a project to support Angular components. Components marked "])),(_l()(),core["\u0275eld"](232,0,null,null,1,"span",[["class","label label-accent"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Angular"])),(_l()(),core["\u0275ted"](-1,null,["\n                in the documentation should be included via the "])),(_l()(),core["\u0275eld"](235,0,null,null,1,"code",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["import"])),(_l()(),core["\u0275ted"](-1,null,[" keyword and downgraded to be used in a hybrid site."])),(_l()(),core["\u0275ted"](-1,0,["\n\n            "])),(_l()(),core["\u0275eld"](239,0,null,0,1,"uxd-snippet",[["language","javascript"]],null,null,null,snippet_component_ngfactory.b,snippet_component_ngfactory.a)),core["\u0275did"](240,114688,null,0,snippet_component.a,[],{language:[0,"language"],code:[1,"code"]},null),(_l()(),core["\u0275ted"](-1,0,["\n        "])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](244,0,null,0,1,"h3",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["Additional Information"])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](247,0,null,0,0,"div",[["class","row-divider"]],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](249,0,null,0,5,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["The "])),(_l()(),core["\u0275eld"](251,0,null,null,2,"a",[["routerLink","/changelog"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core["\u0275nov"](_v,252).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad},null,null)),core["\u0275did"](252,671744,null,0,router.o,[router.m,router.a,common.LocationStrategy],{routerLink:[0,"routerLink"]},null),(_l()(),core["\u0275ted"](-1,null,["changelog"])),(_l()(),core["\u0275ted"](-1,null,[" contains details of current and previous releases of UX Aspects."])),(_l()(),core["\u0275ted"](-1,0,["\n\n    "])),(_l()(),core["\u0275eld"](256,0,null,0,5,"p",[],null,null,null,null,null)),(_l()(),core["\u0275ted"](-1,null,["The "])),(_l()(),core["\u0275eld"](258,0,null,null,2,"a",[["routerLink","/licenses"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core["\u0275nov"](_v,259).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad},null,null)),core["\u0275did"](259,671744,null,0,router.o,[router.m,router.a,common.LocationStrategy],{routerLink:[0,"routerLink"]},null),(_l()(),core["\u0275ted"](-1,null,["licenses page"])),(_l()(),core["\u0275ted"](-1,null,[" contains the licensing details for UX Aspects and the 3rd party libraries that it depends upon."])),(_l()(),core["\u0275ted"](-1,0,["\n\n"])),(_l()(),core["\u0275ted"](-1,null,["\n"]))],function(_ck,_v){var _co=_v.component;_ck(_v,1,0,"Getting Started");_ck(_v,14,0,"/css");_ck(_v,20,0,!1);_ck(_v,23,0,"NPM");_ck(_v,49,0,"Bower");_ck(_v,95,0,"Direct Download");_ck(_v,105,0,"Building from Source");_ck(_v,142,0,!1);_ck(_v,145,0,"Angular CLI");_ck(_v,154,0,"javascript",_co.cliJson);_ck(_v,158,0,"Webpack");_ck(_v,164,0,"css",_co.stylesheetCss);_ck(_v,168,0,"Non-Angular Sites");_ck(_v,191,0,!1);_ck(_v,194,0,"Angular");_ck(_v,200,0,"javascript",_co.angular4Ts);_ck(_v,215,0,"javascript",_co.angular4UpgradeTs);_ck(_v,219,0,"AngularJS");_ck(_v,240,0,"javascript",_co.angular1DowngradeJs);_ck(_v,252,0,"/changelog");_ck(_v,259,0,"/licenses")},function(_ck,_v){var _co=_v.component;_ck(_v,13,0,core["\u0275nov"](_v,14).target,core["\u0275nov"](_v,14).href),_ck(_v,18,0,"left"===core["\u0275nov"](_v,20).stacked,"right"===core["\u0275nov"](_v,20).stacked),_ck(_v,90,0,_co.version),_ck(_v,140,0,"left"===core["\u0275nov"](_v,142).stacked,"right"===core["\u0275nov"](_v,142).stacked),_ck(_v,189,0,"left"===core["\u0275nov"](_v,191).stacked,"right"===core["\u0275nov"](_v,191).stacked),_ck(_v,251,0,core["\u0275nov"](_v,252).target,core["\u0275nov"](_v,252).href),_ck(_v,258,0,core["\u0275nov"](_v,259).target,core["\u0275nov"](_v,259).href)})}var GettingStartedPageComponentNgFactory=core["\u0275ccf"]("uxd-getting-started",GettingStartedPageComponent,function(_l){return core["\u0275vid"](0,[(_l()(),core["\u0275eld"](0,0,null,null,1,"uxd-getting-started",[],null,null,null,View_GettingStartedPageComponent_0,RenderType_GettingStartedPageComponent)),core["\u0275did"](1,49152,null,0,GettingStartedPageComponent,[app_configuration_service.a],null,null)],null,null)},{},{},[]),fesm5_forms=__webpack_require__("gIcY"),bidi_es5=__webpack_require__("Fzqc"),platform_es5=__webpack_require__("dWZg"),scrolling_es5=__webpack_require__("qAlS"),overlay_es5=__webpack_require__("eDkP"),observers_es5=__webpack_require__("M2Lx"),tooltip_service=__webpack_require__("7Nj1"),persistent_data_service=__webpack_require__("ITMR"),positioning_service=__webpack_require__("S7LP"),component_loader_factory=__webpack_require__("6aHO"),bs_dropdown_state=__webpack_require__("dArN"),bs_dropdown_module=__webpack_require__("qina"),buttons_module=__webpack_require__("zCE2"),ebox_module=__webpack_require__("pxEr"),portal_es5=__webpack_require__("4c35"),click_outside_module=__webpack_require__("fky3"),tooltip_module=__webpack_require__("DS18"),popover_module=__webpack_require__("zq45"),scroll_module=__webpack_require__("GxqR"),typeahead_module=__webpack_require__("FLOw"),persistent_data_module=__webpack_require__("Mb82"),components_module=__webpack_require__("XtaT"),tabset_module=__webpack_require__("mVCT"),bs_dropdown_config=__webpack_require__("OsAV");__webpack_require__.d(__webpack_exports__,"GettingStartedPageModuleNgFactory",function(){return GettingStartedPageModuleNgFactory});var GettingStartedPageModuleNgFactory=core["\u0275cmf"](GettingStartedPageModule,[],function(_l){return core["\u0275mod"]([core["\u0275mpd"](512,core.ComponentFactoryResolver,core["\u0275CodegenComponentFactoryResolver"],[[8,[bs_dropdown_container_component_ngfactory.a,tooltip_component_ngfactory.a,popover_component_ngfactory.a,router_ngfactory.a,typeahead_container_component_ngfactory.a,GettingStartedPageComponentNgFactory]],[3,core.ComponentFactoryResolver],core.NgModuleRef]),core["\u0275mpd"](4608,common.NgLocalization,common.NgLocaleLocalization,[core.LOCALE_ID,[2,common["\u0275angular_packages_common_common_a"]]]),core["\u0275mpd"](4608,fesm5_forms.A,fesm5_forms.A,[]),core["\u0275mpd"](6144,bidi_es5.b,null,[common.DOCUMENT]),core["\u0275mpd"](4608,bidi_es5.c,bidi_es5.c,[[2,bidi_es5.b]]),core["\u0275mpd"](4608,platform_es5.a,platform_es5.a,[]),core["\u0275mpd"](5120,scrolling_es5.c,scrolling_es5.a,[[3,scrolling_es5.c],core.NgZone,platform_es5.a]),core["\u0275mpd"](5120,scrolling_es5.f,scrolling_es5.e,[[3,scrolling_es5.f],platform_es5.a,core.NgZone]),core["\u0275mpd"](4608,overlay_es5.f,overlay_es5.f,[scrolling_es5.c,scrolling_es5.f,core.NgZone,common.DOCUMENT]),core["\u0275mpd"](5120,overlay_es5.b,overlay_es5.g,[[3,overlay_es5.b],common.DOCUMENT]),core["\u0275mpd"](4608,overlay_es5.e,overlay_es5.e,[scrolling_es5.f,common.DOCUMENT]),core["\u0275mpd"](5120,overlay_es5.c,overlay_es5.j,[[3,overlay_es5.c],common.DOCUMENT]),core["\u0275mpd"](4608,overlay_es5.a,overlay_es5.a,[overlay_es5.f,overlay_es5.b,core.ComponentFactoryResolver,overlay_es5.e,overlay_es5.c,core.ApplicationRef,core.Injector,core.NgZone,common.DOCUMENT]),core["\u0275mpd"](5120,overlay_es5.h,overlay_es5.i,[overlay_es5.a]),core["\u0275mpd"](4608,observers_es5.b,observers_es5.b,[]),core["\u0275mpd"](4608,tooltip_service.a,tooltip_service.a,[]),core["\u0275mpd"](4608,persistent_data_service.a,persistent_data_service.a,[]),core["\u0275mpd"](4608,positioning_service.a,positioning_service.a,[]),core["\u0275mpd"](4608,component_loader_factory.a,component_loader_factory.a,[core.ComponentFactoryResolver,core.NgZone,core.Injector,positioning_service.a,core.ApplicationRef]),core["\u0275mpd"](4608,bs_dropdown_state.a,bs_dropdown_state.a,[]),core["\u0275mpd"](1073742336,common.CommonModule,common.CommonModule,[]),core["\u0275mpd"](1073742336,bs_dropdown_module.a,bs_dropdown_module.a,[]),core["\u0275mpd"](1073742336,buttons_module.a,buttons_module.a,[]),core["\u0275mpd"](1073742336,ebox_module.a,ebox_module.a,[]),core["\u0275mpd"](1073742336,fesm5_forms.x,fesm5_forms.x,[]),core["\u0275mpd"](1073742336,fesm5_forms.l,fesm5_forms.l,[]),core["\u0275mpd"](1073742336,bidi_es5.a,bidi_es5.a,[]),core["\u0275mpd"](1073742336,portal_es5.c,portal_es5.c,[]),core["\u0275mpd"](1073742336,platform_es5.b,platform_es5.b,[]),core["\u0275mpd"](1073742336,scrolling_es5.b,scrolling_es5.b,[]),core["\u0275mpd"](1073742336,overlay_es5.d,overlay_es5.d,[]),core["\u0275mpd"](1073742336,observers_es5.c,observers_es5.c,[]),core["\u0275mpd"](1073742336,click_outside_module.a,click_outside_module.a,[]),core["\u0275mpd"](1073742336,tooltip_module.a,tooltip_module.a,[]),core["\u0275mpd"](1073742336,popover_module.a,popover_module.a,[]),core["\u0275mpd"](1073742336,router.p,router.p,[[2,router.v],[2,router.m]]),core["\u0275mpd"](1073742336,scroll_module.a,scroll_module.a,[]),core["\u0275mpd"](1073742336,typeahead_module.a,typeahead_module.a,[]),core["\u0275mpd"](1073742336,persistent_data_module.a,persistent_data_module.a,[]),core["\u0275mpd"](1073742336,components_module.a,components_module.a,[]),core["\u0275mpd"](1073742336,tabset_module.a,tabset_module.a,[]),core["\u0275mpd"](1073742336,GettingStartedPageModule,GettingStartedPageModule,[]),core["\u0275mpd"](256,bs_dropdown_config.a,{autoClose:!0},[]),core["\u0275mpd"](1024,router.k,function(){return[[{path:"",component:GettingStartedPageComponent}]]},[])])})},nNtC:function(module,exports){module.exports="const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));\n\n@NgModule({\n    declarations: [\n        upgradeAdapter.upgradeNg1Component('dynamicSelect') // Upgrade 'dynamic-select' directive\n    ]\n})\nexport class AppModule() {}"},pB7L:function(module,exports){module.exports='@import url("~@ux-aspects/ux-aspects/styles/ux-aspects.css");'},r1ng:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return RenderType_SnippetComponent}),__webpack_require__.d(__webpack_exports__,"b",function(){return View_SnippetComponent_0});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("CcnG"),_snippet_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("COk8"),RenderType_SnippetComponent=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275crt"]({encapsulation:2,styles:[],data:{}});function View_SnippetComponent_0(_l){return _angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275vid"](2,[_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275qud"](402653184,1,{codeContainer:0}),(_l()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275eld"](1,16777216,[[1,3],["code",1]],null,0,"pre",[],[[8,"className",0]],null,null,null,null))],null,function(_ck,_v){var _co=_v.component;_ck(_v,1,0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275inlineInterpolate"](1,"language-",_co.language,""))})}_snippet_component__WEBPACK_IMPORTED_MODULE_1__.a}}]);
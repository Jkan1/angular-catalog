(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1YPp":function(t,e,n){"use strict";n.r(e),n.d(e,"CatalogModule",(function(){return M}));var a=n("ofXK"),i=n("tyNb"),o=n("R0Ic"),l=n("fXoL"),c=n("lJxs"),r=n("AytR"),s=n("tk/3");let d=(()=>{class t{constructor(t){this.httpClient=t,this.ITEMS="Items"}fetchCatalog(){return this.httpClient.get(r.a.firebaseUrl+this.ITEMS+".json").pipe(Object(c.a)(t=>{let e=[];return t&&Object.keys(t).length&&Object.keys(t).forEach(n=>{e.push(Object.assign({id:n},t[n]))}),e}))}fetchCatalogItemById(t){return this.httpClient.get(r.a.firebaseUrl+this.ITEMS+"/"+t+".json")}nextItemId(t,e){return this.httpClient.get(r.a.firebaseUrl+this.ITEMS+".json?shallow=true").pipe(Object(c.a)(n=>{let a=n?Object.keys(n):[];if(a&&a.length){let n=a.indexOf(t);return e?n+1<a.length?a[n+1]:a[0]:n-1>=0?a[n-1]:a[a.length-1]}return!1}))}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(s.a))},t.\u0275prov=l.zb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=n("N8jb");let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.xb({type:t,selectors:[["loading-spinner"]],decls:9,vars:0,consts:[[1,"lds-roller"]],template:function(t,e){1&t&&(l.Gb(0,"div",0),l.Eb(1,"div"),l.Eb(2,"div"),l.Eb(3,"div"),l.Eb(4,"div"),l.Eb(5,"div"),l.Eb(6,"div"),l.Eb(7,"div"),l.Eb(8,"div"),l.Fb())},styles:['.lds-roller[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:40px 40px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:red;margin:-4px 0 0 -4px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{animation-delay:-36ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:after{top:63px;left:63px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-72ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after{top:68px;left:56px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.108s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after{top:71px;left:48px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){animation-delay:-.144s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after{top:72px;left:40px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){animation-delay:-.18s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after{top:71px;left:32px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){animation-delay:-.216s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after{top:68px;left:24px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){animation-delay:-.252s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after{top:63px;left:17px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){animation-delay:-.288s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after{top:56px;left:12px}@keyframes lds-roller{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}']}),t})();function u(t,e){1&t&&(l.Gb(0,"div",7),l.Eb(1,"loading-spinner"),l.Fb())}function p(t,e){if(1&t){const t=l.Hb();l.Gb(0,"div",8),l.Gb(1,"div",9),l.Gb(2,"img",10),l.Mb("load",(function(){return l.Vb(t),l.Ob().onImageLoad()})),l.Fb(),l.Fb(),l.Gb(3,"div",11),l.Gb(4,"header"),l.Gb(5,"h2"),l.ac(6),l.Fb(),l.Gb(7,"h3"),l.ac(8),l.Pb(9,"date"),l.Fb(),l.Fb(),l.Gb(10,"p"),l.ac(11),l.Fb(),l.Gb(12,"p"),l.ac(13,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est ligula, ultrices id posuere vitae, rutrum in tellus. Suspendisse vitae aliquam metus. Cras blandit, tortor ut eleifend porttitor, urna lacus porttitor arcu, quis vestibulum metus dolor ut neque. Aenean et nisi venenatis, mollis enim eget, pharetra nunc. Sed blandit non mi nec ultrices. Vestibulum hendrerit tortor id gravida eleifend. Morbi vitae molestie odio. Etiam nec est vel sapien posuere vulputate eget eget mi. Quisque vulputate ligula velit, id accumsan dui fringilla nec. Morbi nisi mauris, placerat sit amet feugiat nec, vehicula ut ex. "),l.Fb(),l.Fb(),l.Fb()}if(2&t){const t=l.Ob();l.ub(2),l.Rb("@animationState",t.imageState)("src",t.catalogItem?t.catalogItem.src:"null",l.Wb)("alt",t.catalogItem?t.catalogItem.src:"Image"),l.ub(1),l.Rb("@textState",t.textState),l.ub(3),l.bc(t.catalogItem?t.catalogItem.category:"New Item"),l.ub(2),l.bc(t.catalogItem?t.catalogItem.updated_at:l.Qb(9,7,null,"fullDate")),l.ub(3),l.cc(" ",t.catalogItem?t.catalogItem.description:"NA"," ")}}let m=(()=>{class t{constructor(t,e,n){this.activeRoute=t,this.catalogService=e,this.router=n,this.loading=!0,this.imageState="loading",this.textState="loading"}ngOnInit(){this.activeRoute.params.subscribe(t=>{this.itemId=t.itemId,this.catalogService.fetchCatalogItemById(this.itemId).subscribe(t=>{t&&t.updated_at&&(t.updated_at=new Date(Date.parse(t.updated_at))),this.catalogItem=t,this.loading=!1})})}onImageLoad(){this.imageState="loaded",this.textState="loaded"}loadPage(t){this.loading=!0,this.itemId?this.catalogService.nextItemId(this.itemId,t).subscribe(t=>{t&&(this.imageState="loading",this.textState="loading",this.router.navigate(["/id",t]))}):this.loading=!1}}return t.\u0275fac=function(e){return new(e||t)(l.Db(i.a),l.Db(d),l.Db(i.b))},t.\u0275cmp=l.xb({type:t,selectors:[["app-catalog-detail"]],decls:7,vars:2,consts:[["id","preview"],["class","loading-spinner",4,"ngIf"],["class","inner",4,"ngIf"],["cssPointer","",1,"nav","previous",3,"click"],[1,"fa","fa-chevron-left"],["cssPointer","",1,"nav","next",3,"click"],[1,"fa","fa-chevron-right"],[1,"loading-spinner"],[1,"inner"],[1,"image","fit"],[3,"src","alt","load"],[1,"content"]],template:function(t,e){1&t&&(l.Gb(0,"div",0),l.Zb(1,u,2,0,"div",1),l.Zb(2,p,14,10,"div",2),l.Gb(3,"a",3),l.Mb("click",(function(){return e.loadPage(!1)})),l.Eb(4,"span",4),l.Fb(),l.Gb(5,"a",5),l.Mb("click",(function(){return e.loadPage(!0)})),l.Eb(6,"span",6),l.Fb(),l.Fb()),2&t&&(l.ub(1),l.Rb("ngIf",e.loading),l.ub(1),l.Rb("ngIf",!e.loading))},directives:[a.k,b.a,g],pipes:[a.d],styles:[""],data:{animation:[Object(o.j)("animationState",[Object(o.g)("loading",Object(o.h)({opacity:0})),Object(o.g)("loaded",Object(o.h)({opacity:100})),Object(o.i)("loading <=> loaded",[Object(o.e)(600)])]),Object(o.j)("textState",[Object(o.g)("loading",Object(o.h)({opacity:0})),Object(o.g)("loaded",Object(o.h)({opacity:100})),Object(o.i)("loading <=> loaded",[Object(o.e)(1e3)])])]}}),t})();const h=function(t){return["/id/",t]};let f=(()=>{class t{constructor(){this.imageState="loading"}ngOnInit(){}onImageLoad(){this.imageState="loaded"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.xb({type:t,selectors:[["app-catalog-item"]],inputs:{catalogItem:"catalogItem"},decls:3,vars:6,consts:[[1,"image","fit"],[3,"routerLink"],[3,"src","alt","load"]],template:function(t,e){1&t&&(l.Gb(0,"div",0),l.Gb(1,"a",1),l.Gb(2,"img",2),l.Mb("load",(function(){return e.onImageLoad()})),l.Fb(),l.Fb(),l.Fb()),2&t&&(l.ub(1),l.Rb("routerLink",l.Tb(4,h,e.catalogItem.id)),l.ub(1),l.Rb("@animationState",e.imageState)("src",e.catalogItem?e.catalogItem.src:null,l.Wb)("alt",e.catalogItem?e.catalogItem.category:null))},directives:[i.c],styles:[""],data:{animation:[Object(o.j)("animationState",[Object(o.g)("loading",Object(o.h)({opacity:0})),Object(o.g)("loaded",Object(o.h)({opacity:100})),Object(o.i)("loading <=> loaded",[Object(o.e)(600)])])]}}),t})();function v(t,e){1&t&&l.Eb(0,"app-catalog-item",4),2&t&&l.Rb("catalogItem",e.$implicit)}const O=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t){this.catalogService=t,this.catalogList=[]}ngOnInit(){this.catalogService.fetchCatalog().subscribe(t=>{this.catalogList=t})}}return t.\u0275fac=function(e){return new(e||t)(l.Db(d))},t.\u0275cmp=l.xb({type:t,selectors:[["app-catalog-list"]],decls:4,vars:1,consts:[["id","main"],[1,"inner"],[1,"columns"],[3,"catalogItem",4,"ngFor","ngForOf"],[3,"catalogItem"]],template:function(t,e){1&t&&(l.Gb(0,"div",0),l.Gb(1,"div",1),l.Gb(2,"div",2),l.Zb(3,v,1,1,"app-catalog-item",3),l.Fb(),l.Fb(),l.Fb()),2&t&&(l.ub(3),l.Rb("ngForOf",e.catalogList))},directives:[a.j,f],styles:[""]}),t})()},{path:"id/:itemId",component:m}]}];let I=(()=>{class t{}return t.\u0275mod=l.Bb({type:t}),t.\u0275inj=l.Ab({factory:function(e){return new(e||t)},imports:[[i.d.forChild(O)],i.d]}),t})();var C=n("PCNd");let M=(()=>{class t{}return t.\u0275mod=l.Bb({type:t}),t.\u0275inj=l.Ab({factory:function(e){return new(e||t)},imports:[[a.b,I,C.a]]}),t})()}}]);
"use strict";(self["webpackChunkvue_project_sn"]=self["webpackChunkvue_project_sn"]||[]).push([[821],{9977:function(e,r,t){t.d(r,{W:function(){return a},w:function(){return n}});var s=t(635);const n=e=>s.A.post("/orders",e),a=()=>s.A.get("/orders")},3906:function(e,r,t){t.d(r,{A:function(){return d}});var s=t(6768);function n(e,r,t,n,a,o){return(0,s.uX)(),(0,s.Wv)((0,s.$y)(o.tagName),{class:"main-title"},{default:(0,s.k6)((()=>[(0,s.RG)(e.$slots,"default",{},void 0,!0)])),_:3})}var a={name:"MainTitle",props:{level:{type:Number,default:1}},computed:{tagName(){return`h${this.level}`}}},o=t(1241);const c=(0,o.A)(a,[["render",n],["__scopeId","data-v-e9d9d0d6"]]);var d=c},7260:function(e,r,t){t.d(r,{A:function(){return i}});var s=t(6768);const n={class:"section-spacer"};function a(e,r,t,a,o,c){return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.RG)(e.$slots,"default",{},void 0,!0)])}var o={name:"SectionSpacer"},c=t(1241);const d=(0,c.A)(o,[["render",a],["__scopeId","data-v-a635e22c"]]);var i=d},1821:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var s=t(6768);const n={class:"my-orders-page"},a={class:"my-orders-page__content"};function o(e,r,t,o,c,d){const i=(0,s.g2)("MainTitle"),u=(0,s.g2)("OrdersList"),l=(0,s.g2)("AppContainer"),p=(0,s.g2)("SectionWithHeaderSpacer");return(0,s.uX)(),(0,s.CE)("main",n,[(0,s.bF)(p,null,{default:(0,s.k6)((()=>[(0,s.bF)(l,null,{default:(0,s.k6)((()=>[(0,s.Lk)("section",a,[(0,s.bF)(i,null,{default:(0,s.k6)((()=>[(0,s.eW)("Заказы")])),_:1}),(0,s.bF)(u,{items:c.orders},null,8,["items"])])])),_:1})])),_:1})])}var c=t(7964),d=t(7260),i=t(3906);const u={class:"orders-list"},l={key:0};function p(e,r,t,n,a,o){const c=(0,s.g2)("OrdersItem");return(0,s.uX)(),(0,s.CE)("div",u,[t.items.length?((0,s.uX)(!0),(0,s.CE)(s.FK,{key:1},(0,s.pI)(t.items,(e=>((0,s.uX)(),(0,s.Wv)(c,{key:e.id,order:e.apartment},null,8,["order"])))),128)):((0,s.uX)(),(0,s.CE)("p",l,"Заказов нет"))])}var _=t(4232);const v={class:"orders-item"},m=["src"],f={class:"orders-item__details"},k={class:"orders-item__text"},y={class:"orders-item__title"},A={class:"orders-item__location"},g={class:"orders-item__cost"},h={class:"orders-item__price"};function L(e,r,t,n,a,o){return(0,s.uX)(),(0,s.CE)("div",v,[(0,s.Lk)("img",{class:"orders-item__photo",src:t.order.imgUrl,alt:"фото апартаментов"},null,8,m),(0,s.Lk)("div",f,[(0,s.Lk)("div",k,[(0,s.Lk)("h2",y,(0,_.v_)(t.order.title),1),(0,s.Lk)("p",A,(0,_.v_)(t.order.location.city),1)]),(0,s.Lk)("div",g,[(0,s.Lk)("span",h,"UAH "+(0,_.v_)(t.order.price),1),(0,s.eW)(" за ночь ")])])])}var C={name:"OrdersItem",props:{order:{type:Object,required:!0}}},b=t(1241);const I=(0,b.A)(C,[["render",L],["__scopeId","data-v-72a96020"]]);var O=I,W={name:"OrdersList",components:{OrdersItem:O},props:{items:{type:Array,required:!0}}};const X=(0,b.A)(W,[["render",p],["__scopeId","data-v-5a42215f"]]);var E=X,S=t(9977),F={name:"MyOrdersPage",components:{SectionWithHeaderSpacer:d.A,AppContainer:c.A,MainTitle:i.A,OrdersList:E},data(){return{orders:[]}},async created(){try{const{data:e}=await(0,S.W)();this.orders=e}catch(e){this.$notify({type:"error",title:"Что-то пошло не так",text:e.message})}}};const $=(0,b.A)(F,[["render",o],["__scopeId","data-v-4f08ba1c"]]);var w=$}}]);
//# sourceMappingURL=821.62fadd58.js.map
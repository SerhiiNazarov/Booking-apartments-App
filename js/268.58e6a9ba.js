"use strict";(self["webpackChunkvue_project_sn"]=self["webpackChunkvue_project_sn"]||[]).push([[268],{3737:function(e,a,t){t.r(a),t.d(a,{default:function(){return F}});var o=t(6768);const n={class:"login"};function l(e,a,t,l,s,i){const r=(0,o.g2)("LoginForm"),u=(0,o.g2)("AuthSection");return(0,o.uX)(),(0,o.CE)("main",n,[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(r)])),_:1})])}var s=t(5130);function i(e,a,t,n,l,i){const r=(0,o.g2)("MainTitle"),u=(0,o.g2)("CustomInput"),m=(0,o.g2)("BtnComponent"),d=(0,o.g2)("Form"),p=(0,o.g2)("AuthContainer");return(0,o.uX)(),(0,o.Wv)(p,{class:"login"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{class:"login__title"},{default:(0,o.k6)((()=>[(0,o.eW)("Логин")])),_:1}),(0,o.bF)(d,{ref:"form",class:"login__form",onSubmit:(0,s.D$)(i.handleSubmit,["prevent"])},{default:(0,o.k6)((()=>[(0,o.bF)(u,{class:"login__input",modelValue:l.formData.email,"onUpdate:modelValue":a[0]||(a[0]=e=>l.formData.email=e),placeholder:"Email",autocomplete:"email",rules:i.emailRules,name:"email"},null,8,["modelValue","rules"]),(0,o.bF)(u,{class:"login__input",modelValue:l.formData.password,"onUpdate:modelValue":a[1]||(a[1]=e=>l.formData.password=e),placeholder:"Password",type:"password",name:"password",autocomplete:"current-password",rules:i.passwordRules},null,8,["modelValue","rules"]),(0,o.bF)(m,{class:"login__btn",type:"submit",loading:l.loading},{default:(0,o.k6)((()=>[(0,o.eW)("Вход")])),_:1},8,["loading"])])),_:1},8,["onSubmit"])])),_:1})}t(4114);var r=t(9765),u=t(7994),m=t(3321),d=t(4669),p=t(3906),c=t(7807),g=t(782),f={name:"AppLogin",components:{Form:r.A,CustomInput:u.A,BtnComponent:m.A,AuthContainer:d.A,MainTitle:p.A},data(){return{loading:!1,formData:{email:"",password:""}}},computed:{rules(){return{emailValidation:c.au,passwordValidation:c.nw,isRequired:c.gx}},emailRules(){return[this.rules.isRequired,this.rules.emailValidation]},passwordRules(){return[this.rules.isRequired]}},methods:{...(0,g.i0)("auth",["login"]),async handleSubmit(){const{form:e}=this.$refs,a=e.validate();if(a)try{this.loading=!0,await this.login(this.formData),this.$router.push({name:"homepage"}),e.reset()}catch(t){this.$notify({type:"error",title:"Произошла ошибка",text:t.message})}finally{this.loading=!1}}}},h=t(1241);const _=(0,h.A)(f,[["render",i],["__scopeId","data-v-395868a1"]]);var b=_,w=t(3230),A={name:"LoginPage",components:{LoginForm:b,AuthSection:w.A}};const v=(0,h.A)(A,[["render",l]]);var F=v}}]);
//# sourceMappingURL=268.58e6a9ba.js.map
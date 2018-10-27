(function(e){function t(t){for(var s,n,i=t[0],l=t[1],u=t[2],c=0,p=[];c<i.length;c++)n=i[c],a[n]&&p.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},a={app:0},o=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"177c":function(e,t,r){},1914:function(e,t,r){},"21bb":function(e,t,r){"use strict";var s=r("1914"),a=r.n(s);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.loggedIn?r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/home"}},[e._v("Home")]),r("button",{on:{click:e.logout}},[e._v("Log Out")])],1):e._e(),r("notifications",{attrs:{position:"bottom right","animation-type":"velocity"}}),r("router-view")],1)},o=[],n=(r("a481"),{name:"App",computed:{loggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},methods:{logout:function(){var e=this;this.$store.dispatch("auth/LOG_OUT").then(function(){e.$store.commit("auth/SET_USER"),e.$router.replace("login")})}}}),i=n,l=r("2877"),u=Object(l["a"])(i,a,o,!1,null,null,null);u.options.__file="App.vue";var d=u.exports,c=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("meme-upload",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{action:"#",method:"POST"}},[r("input",{attrs:{type:"file",name:"meme",accept:"image"}}),r("button",{attrs:{type:"submit"}},[e._v("Upload")])])}],v={name:"HelloWorld",props:{msg:String}},b=v,g=(r("ab51"),Object(l["a"])(b,f,h,!1,null,"097ad1ec",null));g.options.__file="MemeUpload.vue";var w=g.exports,x={name:"home",components:{MemeUpload:w}},_=x,y=(r("21bb"),Object(l["a"])(_,p,m,!1,null,null,null));y.options.__file="Home.vue";var C=y.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full max-w-sm mx-auto mt-12 shadow-md"},[e._m(0),r("form",{staticClass:"bg-white rounded-b px-8 pt-6 pb-8 mb-4",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.preventDefault(),e.validateBeforeLogin(t)):null}}},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("E-mail Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",name:"email",type:"email",placeholder:"john@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errors.has("email")?r("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",name:"password",type:"password",placeholder:"******************",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.errors.has("password")?r("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("password")))]):e._e()]),r("div",{staticClass:"flex items-center justify-between"},[r("button",{ref:"loginButton",staticClass:"bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{disabled:e.isLoginButtonDisabled,type:"button"},on:{click:function(t){return t.preventDefault(),e.validateBeforeLogin(t)}}},[r("fa",{attrs:{icon:"sign-in-alt"}}),e._v("Log In\n      ")],1),r("router-link",{staticClass:"inline-block align-baseline font-bold text-sm text-purple hover:text-purple-dark",attrs:{to:"/reset-password"}},[e._v("Forgot Password?")])],1),r("div",{staticClass:"mt-4 text-center"},[r("span",{staticClass:"text-grey-dark text-xs"},[e._v("Don't have an account?\n        "),r("router-link",{staticClass:"inline-block align-baseline font-bold text-purple-light hover:text-purple",attrs:{to:"/register"}},[e._v("Register here")])],1)])])])},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white border-t-4 border-purple px-4 pt-3"},[r("p",{staticClass:"font-bold text-center text-purple-darkest"},[e._v("Log in")])])}],B={name:"Login",data:function(){return{email:"",password:""}},watch:{isLoginButtonDisabled:{immediate:!0,handler:function(e){var t=this;this.$nextTick(function(){e?t.$refs.loginButton.classList.add("btn-disabled"):t.$refs.loginButton.classList.remove("btn-disabled")})}}},computed:{isLoginButtonDisabled:function(){return""==this.email.trim()||""==this.password.trim()}},methods:{validateBeforeLogin:function(){this.$validator.validateAll(),this.errors.any()||this.login()},login:function(){var e=this;this.isLoginButtonDisabled||(this.$refs.loginButton.classList.add("btn-disabled"),this.$refs.loginButton.classList.add("spinner"),this.$store.dispatch("auth/LOG_IN",{email:this.email,password:this.password}).then(function(){e.$store.commit("auth/SET_USER"),e.$router.replace("home")}).catch(function(t){e.$notify({type:"error",title:"Error!",text:"".concat(t.message),duration:5e3}),e.$refs.loginButton.classList.remove("btn-disabled"),e.$refs.loginButton.classList.remove("spinner")}))}}},E=B,L=Object(l["a"])(E,k,$,!1,null,null,null);L.options.__file="Login.vue";var S=L.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full max-w-sm mx-auto mt-12 shadow-md"},[e._m(0),r("form",{staticClass:"bg-white rounded-b px-8 pt-6 pb-8 mb-4",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.preventDefault(),e.validateBeforeRegister(t)):null}}},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("E-mail Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",name:"email",type:"email",placeholder:"john@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errors.has("email")?r("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password_confirm|min:6",expression:"'required|confirmed:password_confirm|min:6'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",name:"password",type:"password",placeholder:"******************",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.errors.has("password")?r("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("password")))]):e._e()]),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password_confirm"}},[e._v("Confirm Your Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirm,expression:"passwordConfirm"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"password_confirm",staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password_confirm",name:"password_confirm",type:"password",placeholder:"******************",required:""},domProps:{value:e.passwordConfirm},on:{input:function(t){t.target.composing||(e.passwordConfirm=t.target.value)}}}),e.errors.has("password_confirm")?r("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("password_confirm")))]):e._e()]),r("div",{staticClass:"flex items-center"},[r("button",{ref:"registerButton",staticClass:"bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{disabled:e.isRegisterButtonDisabled,type:"button"},on:{click:function(t){return t.preventDefault(),e.validateBeforeRegister(t)}}},[r("fa",{attrs:{icon:"share-square"}}),e._v("Register\n      ")],1),r("button",{staticClass:"mx-4 flex-no-shrink border-transparent border-4 text-grey-dark hover:text-grey-darker text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.resetForm(t)}}},[e._v("Cancel")])])])])},O=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white border-t-4 border-purple px-4 pt-3"},[r("p",{staticClass:"font-bold text-center text-purple-darkest"},[e._v("Register for an account")])])}],P={name:"Register",data:function(){return{email:"",password:"",passwordConfirm:""}},watch:{isRegisterButtonDisabled:{immediate:!0,handler:function(e){var t=this;this.$nextTick(function(){e?t.$refs.registerButton.classList.add("btn-disabled"):t.$refs.registerButton.classList.remove("btn-disabled")})}}},computed:{passwordIsConfirmed:function(){return this.password.trim()===this.passwordConfirm.trim()},isRegisterButtonDisabled:function(){return""==this.email.trim()||""==this.password.trim()||""==this.passwordConfirm.trim()||!this.passwordIsConfirmed}},methods:{validateBeforeRegister:function(){this.$validator.validateAll(),this.errors.any()||this.register()},register:function(){var e=this;this.isRegisterButtonDisabled||(this.$refs.registerButton.classList.add("btn-disabled"),this.$refs.registerButton.classList.add("spinner"),this.$store.dispatch("auth/CREATE_USER",{email:this.email,password:this.password}).then(function(){e.$store.commit("auth/SET_USER"),e.$router.replace("home")}).catch(function(t){e.$notify({type:"error",title:"Error!",text:"".concat(t.message),duration:5e3}),e.$refs.registerButton.classList.remove("btn-disabled"),e.$refs.registerButton.classList.remove("spinner")}))},resetForm:function(){this.email="",this.password="",this.passwordConfirm=""}}},j=P,A=Object(l["a"])(j,R,O,!1,null,null,null);A.options.__file="Register.vue";var q=A.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full max-w-sm mx-auto mt-12 shadow-md"},[e._m(0),r("form",{staticClass:"bg-white rounded-b px-8 pt-6 pb-8 mb-4",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.preventDefault(),e.validateBeforeReset(t)):null}}},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("E-mail Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",name:"email",type:"email",placeholder:"john@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errors.has("email")?r("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"flex items-center justify-between"},[r("button",{ref:"resetButton",staticClass:"bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{disabled:e.isResetButtonDisabled,type:"button"},on:{click:function(t){return t.preventDefault(),e.validateBeforeReset(t)}}},[r("fa",{attrs:{icon:"share-square"}}),e._v("Password Reset\n      ")],1)])])])},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white border-t-4 border-purple px-4 pt-3"},[r("p",{staticClass:"font-bold text-center text-purple-darkest"},[e._v("Reset Password")])])}],N={name:"ResetPassword",data:function(){return{email:""}},watch:{isResetButtonDisabled:{immediate:!0,handler:function(e){var t=this;this.$nextTick(function(){e?t.$refs.resetButton.classList.add("btn-disabled"):t.$refs.resetButton.classList.remove("btn-disabled")})}}},computed:{isResetButtonDisabled:function(){return""==this.email.trim()}},methods:{validateBeforeReset:function(){this.$validator.validateAll(),this.errors.any()||this.resetPassword()},resetPassword:function(){var e=this;this.isResetButtonDisabled||(this.$refs.resetButton.classList.add("btn-disabled"),this.$refs.resetButton.classList.add("spinner"),this.$store.dispatch("auth/RESET_PASSWORD",{email:this.email}).then(function(){e.$notify({type:"success",title:"Success!",text:"A password reset e-mail has been sent to: ".concat(e.email,"."),duration:5e3}),e.$refs.resetButton.classList.remove("btn-disabled"),e.$refs.resetButton.classList.remove("spinner")}).catch(function(){e.$notify({type:"error",title:"Error!",text:"An account with the e-mail ".concat(e.email," was not found. Please verify the e-mail is correct and try again."),duration:5e3})}).finally(function(){e.$refs.resetButton.classList.remove("btn-disabled"),e.$refs.resetButton.classList.remove("spinner")}))}}},U=N,T=Object(l["a"])(U,D,I,!1,null,null,null);T.options.__file="ResetPassword.vue";var M=T.exports,F=r("59ca"),J=r.n(F);r("ea7b");s["default"].use(c["a"]);var W=new c["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"login",component:S},{path:"/register",name:"register",component:q},{path:"/reset-password",name:"reset-password",component:M},{path:"/home",name:"home",component:C,meta:{requiresAuth:!0}}]});W.beforeEach(function(e,t,r){var s=J.a.auth().currentUser,a=e.matched.some(function(e){return e.meta.requiresAuth});a&&!s?r("login"):!a&&s?r("home"):r()});var H=W,G=r("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var V=r("2f62"),z={currentUser:function(){return J.a.auth().currentUser},createUser:function(e,t){return J.a.auth().createUserWithEmailAndPassword(e,t)},login:function(e,t){return J.a.auth().signInWithEmailAndPassword(e,t)},resetPassword:function(e){return J.a.auth().sendPasswordResetEmail(e)},logout:function(){return J.a.auth().signOut()}},Y=r("2ef0"),K={namespaced:!0,state:{user:{}},getters:{isLoggedIn:function(e){var t=JSON.parse(localStorage.getItem("user"));return t&&!Object(Y["isEmpty"])(t)?e.user=t:e.user={},!Object(Y["isEmpty"])(e.user)}},mutations:{SET_USER:function(e){var t=z.currentUser();null!=t?(e.user=t,localStorage.setItem("user",JSON.stringify(t))):(e.user={},localStorage.setItem("user",JSON.stringify({})))}},actions:{CREATE_USER:function(e,t){var r=t.email,s=t.password;return z.createUser(r,s)},LOG_IN:function(e,t){var r=t.email,s=t.password;return z.login(r,s)},RESET_PASSWORD:function(e,t){var r=t.email;return z.resetPassword(r)},LOG_OUT:function(){return localStorage.removeItem("user"),z.logout()}}};s["default"].use(V["a"]);var Z,Q=new V["a"].Store({state:{},mutations:{},actions:{},modules:{auth:K}}),X={apiKey:"AIzaSyBeiJkEHwuM3goV9tE6aZCsT9fNHxjV9Ik",authDomain:"project-bb84c.firebaseapp.com",databaseURL:"https://project-bb84c.firebaseio.com",projectId:"project-bb84c",storageBucket:"project-bb84c.appspot.com",messagingSenderId:"848986655448"},ee=r("7bb1"),te=r("ee98"),re=r.n(te),se=r("589d"),ae=r.n(se),oe=r("ecee"),ne=r("c074"),ie={faShareSquare:ne["a"],faSignInAlt:ne["b"]},le=r("7a55");r("7e7d");s["default"].config.productionTip=!1,s["default"].use(ee["a"]),s["default"].use(re.a,{velocity:ae.a}),oe["library"].add(ie),s["default"].component("fa",le["FontAwesomeIcon"]),J.a.initializeApp(X),J.a.auth().onAuthStateChanged(function(){Z||(Z=new s["default"]({router:H,store:Q,render:function(e){return e(d)}}).$mount("#app"))})},"7e7d":function(e,t,r){},ab51:function(e,t,r){"use strict";var s=r("177c"),a=r.n(s);a.a}});
//# sourceMappingURL=app.ae54d8b0.js.map
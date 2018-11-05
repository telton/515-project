(function(e){function t(t){for(var s,n,i=t[0],l=t[1],d=t[2],c=0,p=[];c<i.length;c++)n=i[c],r[n]&&p.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},o=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2856:function(e,t,a){},"322e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("notifications",{attrs:{position:"bottom right","animation-type":"velocity"}}),a("router-view")],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loggedIn?a("nav",{staticClass:"p-4",attrs:{id:"nav"}},[a("div",{staticClass:"flex justify-between"},[a("router-link",{staticClass:"p-2 no-underline text-teal hover:text-teal-dark",attrs:{to:"/"}},[e._v("Home")]),a("button",{staticClass:"p-2 text-teal hover:text-teal-dark",on:{click:e.logout}},[e._v("Log Out")])],1)]):e._e()},i=[],l=(a("a481"),{name:"NavBar",computed:{loggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},methods:{logout:function(){var e=this;this.$store.dispatch("auth/LOG_OUT").then(function(){e.$store.commit("auth/SET_USER"),e.$router.replace("login")})}}}),d=l,u=a("2877"),c=Object(u["a"])(d,n,i,!1,null,null,null);c.options.__file="NavBar.vue";var p=c.exports,m={name:"App",components:{NavBar:p}},f=m,v=(a("5c0b"),Object(u["a"])(f,r,o,!1,null,null,null));v.options.__file="App.vue";var h=v.exports,b=a("8c4f"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("meme-upload",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},w=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full max-w-sm mx-auto mt-12 shadow-md"},[e._m(0),a("form",{staticClass:"bg-white rounded-b px-8 pt-6 pb-8 mb-4",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.preventDefault(),e.validateBeforeUpload(t)):null}}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"title"}},[e._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"title",name:"title",type:"text",placeholder:"I Can Haz Cheeseburger?",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e.errors.has("title")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("title")))]):e._e()]),a("div",{staticClass:"mb-6"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"image"}},[e._v("Image")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|file",expression:"'required|file'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"image",name:"image",type:"file",required:""}}),e.errors.has("image")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("image")))]):e._e()]),a("div",{staticClass:"mb-6"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"tags"}},[e._v("Tags")]),a("v-select",{attrs:{id:"tags",name:"tags",options:e.availableTags,multiple:""},model:{value:e.selectedTags,callback:function(t){e.selectedTags=t},expression:"selectedTags"}}),e.errors.has("tags")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("tags")))]):e._e()],1),a("div",{staticClass:"flex items-center justify-between"},[a("button",{ref:"uploadButton",staticClass:"bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{disabled:e.isUploadButtonDisabled,type:"button"},on:{click:function(t){return t.preventDefault(),e.validateBeforeUpload(t)}}},[a("fa",{attrs:{icon:"upload"}}),e._v("Upload\n      ")],1)])])])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-white border-t-4 border-teal px-4 pt-3"},[a("p",{staticClass:"font-bold text-center text-teal-darkest"},[e._v("Upload a New Meme")])])}],y=(a("ac6a"),a("bc3a")),C=a.n(y),k=C.a.create({baseURL:"".concat("/","/"),withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),B=k,$=a("4a7a"),E=a.n($),L={name:"MemeUpload",data:function(){return{title:"",image:null,availableTags:[],selectedTags:[]}},mounted:function(){var e=this;B.get("/api/tags").then(function(t){200==t.status&&t.data.data.forEach(function(t){e.availableTags.push({label:t.tag,value:t.id})})}).catch(function(e){console.log(e)})},watch:{isUploadButtonDisabled:{immediate:!0,handler:function(e){var t=this;this.$nextTick(function(){e?t.$refs.uploadButton.classList.add("btn-disabled"):t.$refs.uploadButton.classList.remove("btn-disabled")})}}},computed:{isUploadButtonDisabled:function(){return""!=this.title.trim()||null!=this.image||this.tags!=[]}},methods:{validateBeforeUpload:function(){this.$validator.validateAll(),this.errors.any()||this.uploadMeme()},uploadMeme:function(){}},components:{vSelect:E.a}},R=L,S=(a("7f7c"),Object(u["a"])(R,x,_,!1,null,"9be101ea",null));S.options.__file="MemeUpload.vue";var j=S.exports,O={name:"home",components:{MemeUpload:j}},P=O,q=Object(u["a"])(P,g,w,!1,null,null,null);q.options.__file="Home.vue";var A=q.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full max-w-sm mx-auto mt-12 shadow-md"},[e._m(0),a("form",{staticClass:"bg-white rounded-b px-8 pt-6 pb-8 mb-4",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.preventDefault(),e.validateBeforeLogin(t)):null}}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("E-mail Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",name:"email",type:"email",placeholder:"john@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errors.has("email")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("email")))]):e._e()]),a("div",{staticClass:"mb-6"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",name:"password",type:"password",placeholder:"******************",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.errors.has("password")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("password")))]):e._e()]),a("div",{staticClass:"flex items-center justify-between"},[a("button",{ref:"loginButton",staticClass:"bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{disabled:e.isLoginButtonDisabled,type:"button"},on:{click:function(t){return t.preventDefault(),e.validateBeforeLogin(t)}}},[a("fa",{attrs:{icon:"sign-in-alt"}}),e._v("Log In\n      ")],1),a("router-link",{staticClass:"inline-block align-baseline font-bold text-sm text-teal hover:text-teal-dark",attrs:{to:"/reset-password"}},[e._v("Forgot Password?")])],1),a("div",{staticClass:"mt-4 text-center"},[a("span",{staticClass:"text-grey-dark text-xs"},[e._v("Don't have an account?\n        "),a("router-link",{staticClass:"inline-block align-baseline font-bold text-teal-light hover:text-teal",attrs:{to:"/register"}},[e._v("Register here")])],1)])])])},T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-white border-t-4 border-teal px-4 pt-3"},[a("p",{staticClass:"font-bold text-center text-teal-darkest"},[e._v("Log in")])])}],U={name:"Login",data:function(){return{email:"",password:""}},watch:{isLoginButtonDisabled:{immediate:!0,handler:function(e){var t=this;this.$nextTick(function(){e?t.$refs.loginButton.classList.add("btn-disabled"):t.$refs.loginButton.classList.remove("btn-disabled")})}}},computed:{isLoginButtonDisabled:function(){return""==this.email.trim()||""==this.password.trim()}},methods:{validateBeforeLogin:function(){this.$validator.validateAll(),this.errors.any()||this.login()},login:function(){var e=this;this.isLoginButtonDisabled||(this.$refs.loginButton.classList.add("btn-disabled"),this.$refs.loginButton.classList.add("spinner"),this.$store.dispatch("auth/LOG_IN",{email:this.email,password:this.password}).then(function(){e.$store.commit("auth/SET_USER"),e.$router.replace("/")}).catch(function(t){e.$notify({type:"error",title:"Error!",text:"".concat(t.message),duration:5e3}),e.$refs.loginButton.classList.remove("btn-disabled"),e.$refs.loginButton.classList.remove("spinner")}))}}},N=U,I=Object(u["a"])(N,D,T,!1,null,null,null);I.options.__file="Login.vue";var M=I.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full max-w-sm mx-auto mt-12 shadow-md"},[e._m(0),a("form",{staticClass:"bg-white rounded-b px-8 pt-6 pb-8 mb-4",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.preventDefault(),e.validateBeforeRegister(t)):null}}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("E-mail Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",name:"email",type:"email",placeholder:"john@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errors.has("email")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("email")))]):e._e()]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password_confirm|min:6",expression:"'required|confirmed:password_confirm|min:6'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",name:"password",type:"password",placeholder:"******************",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.errors.has("password")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("password")))]):e._e()]),a("div",{staticClass:"mb-6"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password_confirm"}},[e._v("Confirm Your Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirm,expression:"passwordConfirm"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"password_confirm",staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password_confirm",name:"password_confirm",type:"password",placeholder:"******************",required:""},domProps:{value:e.passwordConfirm},on:{input:function(t){t.target.composing||(e.passwordConfirm=t.target.value)}}}),e.errors.has("password_confirm")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("password_confirm")))]):e._e()]),a("div",{staticClass:"flex items-center"},[a("button",{ref:"registerButton",staticClass:"bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{disabled:e.isRegisterButtonDisabled,type:"button"},on:{click:function(t){return t.preventDefault(),e.validateBeforeRegister(t)}}},[a("fa",{attrs:{icon:"share-square"}}),e._v("Register\n      ")],1),a("button",{staticClass:"mx-4 flex-no-shrink border-transparent border-4 text-grey-dark hover:text-grey-darker text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.resetForm(t)}}},[e._v("Cancel")])])])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-white border-t-4 border-teal px-4 pt-3"},[a("p",{staticClass:"font-bold text-center text-teal-darkest"},[e._v("Register for an account")])])}],H={name:"Register",data:function(){return{email:"",password:"",passwordConfirm:""}},watch:{isRegisterButtonDisabled:{immediate:!0,handler:function(e){var t=this;this.$nextTick(function(){e?t.$refs.registerButton.classList.add("btn-disabled"):t.$refs.registerButton.classList.remove("btn-disabled")})}}},computed:{passwordIsConfirmed:function(){return this.password.trim()===this.passwordConfirm.trim()},isRegisterButtonDisabled:function(){return""==this.email.trim()||""==this.password.trim()||""==this.passwordConfirm.trim()||!this.passwordIsConfirmed}},methods:{validateBeforeRegister:function(){this.$validator.validateAll(),this.errors.any()||this.register()},register:function(){var e=this;this.isRegisterButtonDisabled||(this.$refs.registerButton.classList.add("btn-disabled"),this.$refs.registerButton.classList.add("spinner"),this.$store.dispatch("auth/CREATE_USER",{email:this.email,password:this.password}).then(function(){e.$store.commit("auth/SET_USER"),e.$router.replace("/")}).catch(function(t){e.$notify({type:"error",title:"Error!",text:"".concat(t.message),duration:5e3}),e.$refs.registerButton.classList.remove("btn-disabled"),e.$refs.registerButton.classList.remove("spinner")}))},resetForm:function(){this.email="",this.password="",this.passwordConfirm=""}}},W=H,G=Object(u["a"])(W,F,J,!1,null,null,null);G.options.__file="Register.vue";var z=G.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full max-w-sm mx-auto mt-12 shadow-md"},[e._m(0),a("form",{staticClass:"bg-white rounded-b px-8 pt-6 pb-8 mb-4",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.preventDefault(),e.validateBeforeReset(t)):null}}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("E-mail Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",name:"email",type:"email",placeholder:"john@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errors.has("email")?a("p",{staticClass:"text-red text-xs pt-2"},[e._v(e._s(e.errors.first("email")))]):e._e()]),a("div",{staticClass:"flex items-center justify-between"},[a("button",{ref:"resetButton",staticClass:"bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{disabled:e.isResetButtonDisabled,type:"button"},on:{click:function(t){return t.preventDefault(),e.validateBeforeReset(t)}}},[a("fa",{attrs:{icon:"share-square"}}),e._v("Password Reset\n      ")],1)])])])},Y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-white border-t-4 border-teal px-4 pt-3"},[a("p",{staticClass:"font-bold text-center text-teal-darkest"},[e._v("Reset Password")])])}],K={name:"ResetPassword",data:function(){return{email:""}},watch:{isResetButtonDisabled:{immediate:!0,handler:function(e){var t=this;this.$nextTick(function(){e?t.$refs.resetButton.classList.add("btn-disabled"):t.$refs.resetButton.classList.remove("btn-disabled")})}}},computed:{isResetButtonDisabled:function(){return""==this.email.trim()}},methods:{validateBeforeReset:function(){this.$validator.validateAll(),this.errors.any()||this.resetPassword()},resetPassword:function(){var e=this;this.isResetButtonDisabled||(this.$refs.resetButton.classList.add("btn-disabled"),this.$refs.resetButton.classList.add("spinner"),this.$store.dispatch("auth/RESET_PASSWORD",{email:this.email}).then(function(){e.$notify({type:"success",title:"Success!",text:"A password reset e-mail has been sent to: ".concat(e.email,"."),duration:5e3}),e.$refs.resetButton.classList.remove("btn-disabled"),e.$refs.resetButton.classList.remove("spinner")}).catch(function(){e.$notify({type:"error",title:"Error!",text:"An account with the e-mail ".concat(e.email," was not found. Please verify the e-mail is correct and try again."),duration:5e3})}).finally(function(){e.$refs.resetButton.classList.remove("btn-disabled"),e.$refs.resetButton.classList.remove("spinner")}))}}},Z=K,Q=Object(u["a"])(Z,V,Y,!1,null,null,null);Q.options.__file="ResetPassword.vue";var X=Q.exports,ee=a("2f62"),te=a("59ca"),ae=a.n(te),se=(a("ea7b"),{currentUser:function(){return ae.a.auth().currentUser},createUser:function(e,t){return ae.a.auth().createUserWithEmailAndPassword(e,t)},login:function(e,t){return ae.a.auth().signInWithEmailAndPassword(e,t)},resetPassword:function(e){return ae.a.auth().sendPasswordResetEmail(e)},logout:function(){return ae.a.auth().signOut()}}),re=a("2ef0"),oe={namespaced:!0,state:{user:{}},getters:{isLoggedIn:function(e){var t=JSON.parse(localStorage.getItem("user"));return t&&!Object(re["isEmpty"])(t)?e.user=t:e.user={},!Object(re["isEmpty"])(e.user)}},mutations:{SET_USER:function(e){var t=se.currentUser();null!=t?(e.user=t,localStorage.setItem("user",JSON.stringify(t))):(e.user={},localStorage.setItem("user",JSON.stringify({})))}},actions:{CREATE_USER:function(e,t){var a=t.email,s=t.password;return se.createUser(a,s)},LOG_IN:function(e,t){var a=t.email,s=t.password;return se.login(a,s)},RESET_PASSWORD:function(e,t){var a=t.email;return se.resetPassword(a)},LOG_OUT:function(){return localStorage.removeItem("user"),se.logout()}}};s["default"].use(ee["a"]);var ne=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{auth:oe}});s["default"].use(b["a"]);var ie=new b["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/login"},{path:"/login",name:"login",component:M},{path:"/register",name:"register",component:z},{path:"/reset-password",name:"reset-password",component:X},{path:"/",name:"home",component:A,meta:{requiresAuth:!0}}]});ie.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})&&null==ne.getters["auth/isLoggedIn"]?a({path:"/login",query:{redirect:e.fullPath}}):a()});var le=ie,de=a("9483");Object(de["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ue,ce={apiKey:"AIzaSyBeiJkEHwuM3goV9tE6aZCsT9fNHxjV9Ik",authDomain:"project-bb84c.firebaseapp.com",databaseURL:"https://project-bb84c.firebaseio.com",projectId:"project-bb84c",storageBucket:"project-bb84c.appspot.com",messagingSenderId:"848986655448"},pe=a("7bb1"),me=a("ee98"),fe=a.n(me),ve=a("589d"),he=a.n(ve),be=a("ecee"),ge=a("c074"),we={faShareSquare:ge["a"],faSignInAlt:ge["b"],faUpload:ge["c"]},xe=a("7a55");a("7e7d");s["default"].config.productionTip=!1,s["default"].use(pe["a"]),s["default"].use(fe.a,{velocity:he.a}),be["library"].add(we),s["default"].component("fa",xe["FontAwesomeIcon"]),ae.a.initializeApp(ce),ae.a.auth().onAuthStateChanged(function(){ue||(ue=new s["default"]({router:le,store:ne,render:function(e){return e(h)}}).$mount("#app"))})},"5c0b":function(e,t,a){"use strict";var s=a("2856"),r=a.n(s);r.a},"7e7d":function(e,t,a){},"7f7c":function(e,t,a){"use strict";var s=a("322e"),r=a.n(s);r.a}});
//# sourceMappingURL=app.73fa5060.js.map
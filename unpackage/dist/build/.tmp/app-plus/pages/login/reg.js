(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/reg"],{"494c":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("f691")),o=u(n("b5ea"));u(n("eb61"));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(){return Promise.all([n.e("common/vendor"),n.e("components/header")]).then(n.bind(null,"0117"))},d={components:{iheader:i},data:function(){return{loading:!1,redirect:encodeURIComponent("/pages/me/me")}},onLoad:function(t){r.default.debug&&e("log","onLoad",t," at pages/login/reg.vue:70"),t.redirect&&(this.redirect=t.redirect)},onShow:function(){var e=o.default.getToken();if(e){var t=decodeURIComponent(this.redirect);t.indexOf("?")>-1?a.redirectTo({url:t}):a.switchTab({url:t})}},methods:{submit:function(t){r.default.debug&&e("log","submit",t," at pages/login/reg.vue:90");var n=this;if(!n.loading){var u=t.detail.value;o.default.isEmail(u.email)?u.password==u.re_password?""!=u.username&&""!=u.nickname&&""!=u.password&&""!=u.re_password?(n.loading=!0,o.default.request(r.default.api.register,u,"POST").then(function(t){r.default.debug&&e("log",r.default.api.register,t," at pages/login/reg.vue:115"),o.default.setUser(t.data.user),a.showToast({title:"注册成功"}),setTimeout(function(){var e=decodeURIComponent(n.redirect);e.indexOf("?")>-1?a.redirectTo({url:e}):a.switchTab({url:e})},1500)}).catch(function(t){r.default.debug&&e("log",r.default.api.register,t," at pages/login/reg.vue:133"),o.default.toastError(t.data.message||t.errMsg)}).finally(function(){n.loading=!1})):o.default.toastError("以上资料项均为必填项，请认真填写"):o.default.toastError("两次输入的密码不一致，请重新输入"):o.default.toastError("邮箱格式不正确")}},toLogin:function(){a.navigateTo({url:"/pages/login/login?redirect="+this.redirect})}}};t.default=d}).call(this,n("0de9")["default"],n("6e42")["default"])},"82c5":function(e,t,n){"use strict";(function(e){n("0007"),n("921b");a(n("66fd"));var t=a(n("c40a"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},be85:function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},c40a:function(e,t,n){"use strict";n.r(t);var a=n("be85"),r=n("dafd");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("f7ab");var u,i=n("f0c5"),d=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"20e5c750",null,!1,a["a"],u);t["default"]=d.exports},dafd:function(e,t,n){"use strict";n.r(t);var a=n("494c"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=r.a},e199:function(e,t,n){},f7ab:function(e,t,n){"use strict";var a=n("e199"),r=n.n(a);r.a}},[["82c5","common/runtime","common/vendor"]]]);
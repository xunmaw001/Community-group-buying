(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-address/shop-address"],{"01ab":function(e,t,n){"use strict";(function(e){n("0a61");a(n("66fd"));var t=a(n("eec4"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"50d5":function(e,t,n){"use strict";n.r(t);var a=n("8400"),r=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=r.a},6342:function(e,t,n){"use strict";var a=n("a7e8"),r=n.n(a);r.a},8400:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,a,r,s,u){try{var i=e[s](u),c=i.value}catch(o){return void n(o)}i.done?t(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var u=e.apply(t,n);function i(e){s(u,a,r,i,c,"next",e)}function c(e){s(u,a,r,i,c,"throw",e)}i(void 0)}))}}var i={data:function(){return{source:0,list:[],user:{}}},onLoad:function(t){var n=this;return u(a.default.mark((function t(){var r,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,n.$api.session(r);case 3:return s=t.sent,n.user=s.data,t.next=7,n.$api.list("address",{userid:n.user.id});case 7:s=t.sent,n.list=s.data.list;case 9:case"end":return t.stop()}}),t)})))()},onShow:function(){var t=this;return u(a.default.mark((function n(){var r,s;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,t.$api.session(r);case 3:return s=n.sent,t.user=s.data,n.next=7,t.$api.list("address",{userid:t.user.id});case 7:s=n.sent,t.list=s.data.list;case 9:case"end":return n.stop()}}),n)})))()},methods:{onSelectTap:function(t){e.setStorageSync("address",t),e.navigateBack({delta:1})},onAddressDtailTap:function(e){var t="";t=e?"../shop-address-detail/shop-address-detail?id="+e:"../shop-address-detail/shop-address-detail?id=",this.$utils.jump(t)},onDeleteTap:function(t){var n=this;return u(a.default.mark((function r(){var s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:s=n,e.showModal({title:"提示",content:"是否确认删除",success:function(){var e=u(a.default.mark((function e(n){var r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=9;break}return e.next=3,s.$api.del("address",JSON.stringify([t]));case 3:return r=e.sent,e.next=6,s.$api.list("address",{userid:this.user.id});case 6:r=e.sent,s.list=r.data.list,s.$utils.msg("删除成功");case 9:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()});case 2:case"end":return r.stop()}}),r)})))()}}};t.default=i}).call(this,n("543d")["default"])},a74e:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement;e._self._c},s=[]},a7e8:function(e,t,n){},eec4:function(e,t,n){"use strict";n.r(t);var a=n("a74e"),r=n("50d5");for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);n("6342");var u,i=n("f0c5"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=c.exports}},[["01ab","common/runtime","common/vendor"]]]);
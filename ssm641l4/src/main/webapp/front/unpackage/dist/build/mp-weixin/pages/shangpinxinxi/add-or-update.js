(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"1a41":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function t(n,e,i,a,r,t,u){try{var o=n[t](u),s=o.value}catch(c){return void i(c)}o.done?e(s):Promise.resolve(s).then(a,r)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(a,r){var u=n.apply(e,i);function o(n){t(u,a,r,o,s,"next",n)}function s(n){t(u,a,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("4761"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{shangpinmingcheng:"",shangpintupian:"",shangpinleixing:"",shangjiazhanghao:"",shangpumingcheng:"",shangpinyuanjia:"",shangpinxianjia:"",tuangouzuidirenshu:"",shangpinzhekou:"",tuangoukaishishijian:"",tuangoujieshushijian:"",shangpinmiaoshu:"",ketihuodian:"",reversetime:"",clicknum:"",jifen:"",price:""},shangpinleixingOptions:[],shangpinleixingIndex:0,ketihuodianOptions:[],ketihuodianIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpintupian:!1,shangpinleixing:!1,shangjiazhanghao:!1,shangpumingcheng:!1,shangpinyuanjia:!1,shangpinxianjia:!1,tuangouzuidirenshu:!1,shangpinzhekou:!1,tuangoukaishishijian:!1,tuangoujieshushijian:!1,shangpinmiaoshu:!1,ketihuodian:!1,reversetime:!1,clicknum:!1,jifen:!1,price:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var i=this;return u(a.default.mark((function r(){var t,u,o,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=n.getStorageSync("nowTable"),r.next=3,i.$api.session(t);case 3:return u=r.sent,i.user=u.data,i.ruleForm.shangjiazhanghao=i.user.shangjiazhanghao,i.ruleForm.shangpumingcheng=i.user.shangpumingcheng,r.next=9,i.$api.option("shangpinfenlei","shangpinleixing",{});case 9:return u=r.sent,i.shangpinleixingOptions=u.data,r.next=13,i.$api.option("shequtihuodian","tihuodidian",{});case 13:if(u=r.sent,i.ketihuodianOptions=u.data,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=23;break}return i.ruleForm.id=e.id,r.next=21,i.$api.info("shangpinxinxi",i.ruleForm.id);case 21:u=r.sent,i.ruleForm=u.data;case 23:if(!e.cross){r.next=98;break}o=n.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 26:if((r.t1=r.t0()).done){r.next=98;break}if(s=r.t1.value,"shangpinmingcheng"!=s){r.next=32;break}return i.ruleForm.shangpinmingcheng=o[s],i.ro.shangpinmingcheng=!0,r.abrupt("continue",26);case 32:if("shangpintupian"!=s){r.next=36;break}return i.ruleForm.shangpintupian=o[s],i.ro.shangpintupian=!0,r.abrupt("continue",26);case 36:if("shangpinleixing"!=s){r.next=40;break}return i.ruleForm.shangpinleixing=o[s],i.ro.shangpinleixing=!0,r.abrupt("continue",26);case 40:if("shangjiazhanghao"!=s){r.next=44;break}return i.ruleForm.shangjiazhanghao=o[s],i.ro.shangjiazhanghao=!0,r.abrupt("continue",26);case 44:if("shangpumingcheng"!=s){r.next=48;break}return i.ruleForm.shangpumingcheng=o[s],i.ro.shangpumingcheng=!0,r.abrupt("continue",26);case 48:if("shangpinyuanjia"!=s){r.next=52;break}return i.ruleForm.shangpinyuanjia=o[s],i.ro.shangpinyuanjia=!0,r.abrupt("continue",26);case 52:if("shangpinxianjia"!=s){r.next=56;break}return i.ruleForm.shangpinxianjia=o[s],i.ro.shangpinxianjia=!0,r.abrupt("continue",26);case 56:if("tuangouzuidirenshu"!=s){r.next=60;break}return i.ruleForm.tuangouzuidirenshu=o[s],i.ro.tuangouzuidirenshu=!0,r.abrupt("continue",26);case 60:if("shangpinzhekou"!=s){r.next=64;break}return i.ruleForm.shangpinzhekou=o[s],i.ro.shangpinzhekou=!0,r.abrupt("continue",26);case 64:if("tuangoukaishishijian"!=s){r.next=68;break}return i.ruleForm.tuangoukaishishijian=o[s],i.ro.tuangoukaishishijian=!0,r.abrupt("continue",26);case 68:if("tuangoujieshushijian"!=s){r.next=72;break}return i.ruleForm.tuangoujieshushijian=o[s],i.ro.tuangoujieshushijian=!0,r.abrupt("continue",26);case 72:if("shangpinmiaoshu"!=s){r.next=76;break}return i.ruleForm.shangpinmiaoshu=o[s],i.ro.shangpinmiaoshu=!0,r.abrupt("continue",26);case 76:if("ketihuodian"!=s){r.next=80;break}return i.ruleForm.ketihuodian=o[s],i.ro.ketihuodian=!0,r.abrupt("continue",26);case 80:if("reversetime"!=s){r.next=84;break}return i.ruleForm.reversetime=o[s],i.ro.reversetime=!0,r.abrupt("continue",26);case 84:if("clicknum"!=s){r.next=88;break}return i.ruleForm.clicknum=o[s],i.ro.clicknum=!0,r.abrupt("continue",26);case 88:if("jifen"!=s){r.next=92;break}return i.ruleForm.jifen=o[s],i.ro.jifen=!0,r.abrupt("continue",26);case 92:if("price"!=s){r.next=96;break}return i.ruleForm.price=o[s],i.ro.price=!0,r.abrupt("continue",26);case 96:r.next=26;break;case 98:i.styleChange();case 99:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tuangoukaishishijianConfirm:function(n){console.log(n),this.ruleForm.tuangoukaishishijian=n.result,this.$forceUpdate()},tuangoujieshushijianConfirm:function(n){console.log(n),this.ruleForm.tuangoujieshushijian=n.result,this.$forceUpdate()},reversetimeConfirm:function(n){console.log(n),this.ruleForm.reversetime=n.result,this.$forceUpdate()},shangpinleixingChange:function(n){this.shangpinleixingIndex=n.target.value,this.ruleForm.shangpinleixing=this.shangpinleixingOptions[this.shangpinleixingIndex]},ketihuodianChange:function(n){this.ketihuodianIndex=n.target.value,this.ruleForm.ketihuodian=this.ketihuodianOptions[this.ketihuodianIndex]},shangpintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shangpintupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.shangpinyuanjia||n.$validate.isIntNumer(n.ruleForm.shangpinyuanjia)){e.next=3;break}return n.$utils.msg("商品原价应输入整数"),e.abrupt("return");case 3:if(!n.ruleForm.shangpinxianjia||n.$validate.isIntNumer(n.ruleForm.shangpinxianjia)){e.next=6;break}return n.$utils.msg("商品现价应输入整数"),e.abrupt("return");case 6:if(!n.ruleForm.tuangouzuidirenshu||n.$validate.isIntNumer(n.ruleForm.tuangouzuidirenshu)){e.next=9;break}return n.$utils.msg("团购最低人数应输入整数"),e.abrupt("return");case 9:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){e.next=12;break}return n.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 12:if(!n.ruleForm.jifen||n.$validate.isIntNumer(n.ruleForm.jifen)){e.next=15;break}return n.$utils.msg("积分应输入整数"),e.abrupt("return");case 15:if(n.ruleForm.price){e.next=18;break}return n.$utils.msg("价格不能为空"),e.abrupt("return");case 18:if(!n.ruleForm.price||n.$validate.isNumber(n.ruleForm.price)){e.next=21;break}return n.$utils.msg("价格应输入数字"),e.abrupt("return");case 21:if(!n.ruleForm.id){e.next=26;break}return e.next=24,n.$api.update("shangpinxinxi",n.ruleForm);case 24:e.next=28;break;case 26:return e.next=28,n.$api.add("shangpinxinxi",n.ruleForm);case 28:n.$utils.msgBack("提交成功");case 29:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(i,"-").concat(a,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},"777c":function(n,e,i){"use strict";i.r(e);var a=i("84e7"),r=i("dbcb");for(var t in r)"default"!==t&&function(n){i.d(e,n,(function(){return r[n]}))}(t);i("8760");var u,o=i("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"8fdc374c",null,!1,a["a"],u);e["default"]=s.exports},"84e7":function(n,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return t})),i.d(e,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"4761"))}},r=function(){var n=this,e=n.$createElement;n._self._c},t=[]},8760:function(n,e,i){"use strict";var a=i("f5c1"),r=i.n(a);r.a},dbcb:function(n,e,i){"use strict";i.r(e);var a=i("1a41"),r=i.n(a);for(var t in a)"default"!==t&&function(n){i.d(e,n,(function(){return a[n]}))}(t);e["default"]=r.a},de2c:function(n,e,i){"use strict";(function(n){i("0a61");a(i("66fd"));var e=a(i("777c"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},f5c1:function(n,e,i){}},[["de2c","common/runtime","common/vendor"]]]);
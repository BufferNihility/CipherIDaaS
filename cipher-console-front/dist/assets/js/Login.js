(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"1deb":function(t,o,e){},5814:function(t,o,e){"use strict";var a=e("1deb"),n=e.n(a);n.a},8912:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"loginMain"},[e("div",{staticClass:"loginChild"},[e("div",{staticClass:"loginTitle"},[t._v("赛赋IDaaS管理后台")]),e("Row",{staticClass:"loginBody"},[e("Col",{attrs:{span:"12"}},[e("img",{staticClass:"img",attrs:{src:"/static/img/login/index.png",alt:""}})]),e("Col",{attrs:{span:"12"}},[e("Form",{ref:"formCustom",staticClass:"form",attrs:{model:t.formCustom,rules:t.ruleCustom}},[e("FormItem",{staticClass:"formTitle"},[e("span",[t._v("账号登录")])]),e("FormItem",{attrs:{prop:"account"}},[e("Input",{model:{value:t.formCustom.account,callback:function(o){t.$set(t.formCustom,"account",o)},expression:"formCustom.account"}})],1),e("FormItem",{attrs:{prop:"passwd"}},[e("Input",{attrs:{type:"password"},model:{value:t.formCustom.passwd,callback:function(o){t.$set(t.formCustom,"passwd",o)},expression:"formCustom.passwd"}})],1),e("FormItem",[e("Button",{staticClass:"login",attrs:{type:"primary"},on:{click:function(o){t.handleSubmitLogin("formCustom")}}},[t._v("登录")])],1)],1)],1)],1)],1),e("div",{staticClass:"copyRight"},[t._v(t._s(t.copyRight))])])},n=[],r=(e("cadf"),e("551c"),e("097d"),e("8f5b")),s=e("7555"),i={data:function(){var t=function(t,o,e){(0===o.length||o.length>50)&&e(new Error("请输入不超过50位账号"));var a=r["a"].loginAccount;a.test(o)||e(new Error("英文字符（不区分大小写），数字，特殊符号(@-_.)")),e()},o=function(t,o,e){(0===o.length||o.length>50)&&e(new Error("请输入不超过50位密码"));var a=r["a"].accountNumber;a.test(o)||e(new Error("请输入包含英文字符，数字或特殊符号的密码")),e()};return{copyRight:"",formCustom:{account:"",passwd:""},ruleCustom:{account:[{validator:t,trigger:"blur"}],passwd:[{validator:o,trigger:"blur"}]}}},mounted:function(){this.getInfo()},methods:{configHead:function(t){var o=document.querySelector("link[rel*='icon']")||document.createElement("link");o.type="image/x-icon",o.rel="shortcut icon",o.href=t.iconfont,document.getElementsByTagName("head")[0].appendChild(o);var e=document.getElementsByTagName("head")[0].querySelector("title")||document.createElement("title");e.innerText=t.title,document.getElementsByTagName("head")[0].appendChild(e)},getInfo:function(){var t=this;this.axios({method:"post",data:{},url:"/cipher/obtain/copyright"}).then(function(o){if(0===o.data.return_code)t.copyRight=o.data.copyright,t.configHead(o.data.icon);else{var e=o.data.return_msg;console.error(e)}}).catch(function(t){this.axios.error.handlingErrors(t)})},handleSubmitLogin:function(t){var o=this;this.$refs[t].validate(function(t){if(t){var e={userName:o.formCustom.account,pwd:o.formCustom.passwd};o.axios({method:"post",data:e,url:s["a"].checkpwd}).then(function(t){if(t.data.return_code===s["a"].returnOk){var e=t.headers.ticket;o.setToken(e),o.$router.push({path:"/"})}else o.failModal(t.data.return_msg)}).catch(function(t){this.axios.error.handlingErrors(t)})}})},setToken:function(t){t&&void 0!==t&&null!==t?window.localStorage.setItem("token",t):t=window.localStorage.getItem("token"),this.$store.commit("changeToken",t)},failModal:function(t){this.$myModal.error({title:t,content:"请稍后重试"})}}},c=i,u=(e("5814"),e("2877")),l=Object(u["a"])(c,a,n,!1,null,"bbf0a3ee",null);o["default"]=l.exports},"8f5b":function(t,o,e){"use strict";var a=/^[0-9a-zA-Z~!@#$%^&*()-_+={[}\]:;"'<,>.?\/]*$/,n=/(^[A-F0-9]{2}([-][A-F0-9]{2}){5}$)|(^[A-F0-9]{2}([\/][A-F0-9]{2}){5}$)|(^[A-F0-9]{2}([:][A-F0-9]{2}){5}$)|(^[A-F0-9]{2}([.][A-F0-9]{2}){5}$)|(^[A-F0-9]{2}([ ][A-F0-9]{2}){5}$)|(^[A-F0-9]{4}([-][A-F0-9]{4}){2}$)|(^[A-F0-9]{4}([\/][A-F0-9]{4}){2}$)|(^[A-F0-9]{4}([:][A-F0-9]{4}){2}$)|(^[A-F0-9]{4}([.][A-F0-9]{4}){2}$)|(^[A-F0-9]{4}([ ][A-F0-9]{4}){2}$)/i,r=/^\d{6}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i,s=/^[0-9a-zA-Z@-_.]*$/,i=/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]){1,20}$/,c=/^(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))$/,u=/^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$/;o["a"]={accountNumber:a,macAddress:n,identity:r,loginAccount:s,userDefinedName:i,IPv4:c,IPv6:u}}}]);
(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);v&&v(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app1:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Takashi-PortFolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var v=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("6046")},"01e2":function(t,e,s){"use strict";var a=s("7445"),i=s.n(a);i.a},"09fd":function(t,e,s){"use strict";var a=s("e799"),i=s.n(a);i.a},"13d7":function(t,e,s){},5879:function(t,e,s){},"5a06":function(t,e,s){"use strict";var a=s("e65d"),i=s.n(a);i.a},6046:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",[s("transition",{attrs:{mode:"out-in"}},[s("router-view")],1)],1)])},n=[],r={},o=r,c=(s("09fd"),s("2877")),l=Object(c["a"])(o,i,n,!1,null,null,null),v=l.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Top")],1)},d=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("div",{attrs:{id:"back"}},[s("nav",[s("div",{staticClass:"close",on:{click:t.closes}}),s("router-link",{attrs:{to:"/"}},[t._v("Home")]),s("router-link",{attrs:{to:"/profile"}},[t._v("Profile")]),s("router-link",{attrs:{to:"/work"}},[t._v("Work")]),s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]),s("div",{staticClass:"window",class:{show:t.showWindow,closed:t.closedBack}},[s("div",{staticClass:"hamburger",on:{click:t.shows}},[s("span")]),s("transition",{attrs:{name:"fade"}},[s("div",{attrs:{id:"main"}},[s("div",{staticClass:"message"},[s("p",[s("i",[s("span",[t._v("T")]),t._v("hank  "),s("span",[t._v("Y")]),t._v("ou  "),s("span",[t._v("F")]),t._v("or  "),s("span",[t._v("C")]),t._v("oming.")])]),s("h2",[t._v("W E L  C O M E ")]),s("h2",[t._v(" T O ")]),s("h1",[s("span",[t._v("TAKASHI  NAGAI  PORT  FOLIO")])])]),s("div",{attrs:{id:"container"}},[s("section"),s("section"),s("section")])])])],1)])},m=[],f={name:"Top",data:function(){return{showWindow:!1,closedBack:!1}},methods:{shows:function(){!1===this.showWindow&&(this.showWindow=!0,this.closedBack=!1)},closes:function(){!1===this.closedBack&&(this.closedBack=!0,this.showWindow=!1)}}},h=f,C=(s("8ef1"),Object(c["a"])(h,_,m,!1,null,"59fc9b86",null)),b=C.exports,g={name:"home",components:{Top:b}},w=g,k=Object(c["a"])(w,p,d,!1,null,null,null),O=k.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("UniqueNavi"),s("ContactForm")],1)},y=[],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Infometion_Form"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row100"},[s("div",{staticClass:"col"},[s("div",{staticClass:"inputBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],attrs:{type:"text",name:"",required:"required"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}}),s("span",{staticClass:"text"},[t._v("First_Name")]),s("span",{staticClass:"line"})])]),s("div",{staticClass:"col"},[s("div",{staticClass:"inputBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],attrs:{type:"text",name:"",required:"required"},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}}),s("span",{staticClass:"text"},[t._v("Last_Name")]),s("span",{staticClass:"line"})])])]),s("div",{staticClass:"row100"},[s("div",{staticClass:"col"},[s("div",{staticClass:"inputBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.e_mail,expression:"e_mail"}],attrs:{type:"text",name:"",required:"required"},domProps:{value:t.e_mail},on:{input:function(e){e.target.composing||(t.e_mail=e.target.value)}}}),s("span",{staticClass:"text"},[t._v("E_Mail")]),s("span",{staticClass:"line"})])])]),s("div",{staticClass:"row100"},[s("div",{staticClass:"col"},[s("div",{staticClass:"inputBox textarea"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{required:"required"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("span",{staticClass:"text"},[t._v("Message")]),s("span",{staticClass:"line"})])])]),t._m(0)])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row100"},[s("div",{staticClass:"col"},[s("input",{attrs:{type:"submit"}})])])}],P={name:"Infometion",data:function(){return{first_name:"",last_name:"",e_mail:"",message:""}}},x=P,$=(s("01e2"),Object(c["a"])(x,S,j,!1,null,"3f5bb58e",null)),N=$.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navigation-menu",class:{show:t.showNavi}},[s("div",{staticClass:"navi-menu1",on:{click:t.shows}},[s("span",{staticClass:"navigation-menu-bars"})]),s("ul",{staticClass:"menu-list"},[s("li",{staticClass:"menu-list-item"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"menu-list-item"},[s("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),s("li",{staticClass:"menu-list-item"},[s("router-link",{attrs:{to:"/work"}},[t._v("Work")])],1),s("li",{staticClass:"menu-list-item"},[s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])},q=[],B={name:"UniqueNavi",data:function(){return{showNavi:!1}},methods:{shows:function(){!0===this.showNavi?this.showNavi=!1:this.showNavi=!0}}},M=B,H=(s("f746"),Object(c["a"])(M,A,q,!1,null,"e8204464",null)),T=H.exports,W={name:"Contact",components:{ContactForm:N,UniqueNavi:T}},F=W,V=Object(c["a"])(F,E,y,!1,null,null,null),J=V.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("UniqueNavi"),s("AboutMe")],1)},D=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[t._m(0),t.base_modal==t.isshow?s("div",[s("basicModals")],1):t._e(),s("div",{staticClass:"rotating-box"},[s("div",{staticClass:"single-rb"},[s("div",{staticClass:"front-side"},[s("div",{staticClass:"profile_mes",on:{click:t.base_modalShow}},[s("h1",[t._v("Click~Here")])])]),s("div",{staticClass:"back-side",on:{click:t.base_modalShow}},[t._m(1)]),s("div",{staticClass:"left-side",on:{click:t.base_modalShow}},[t._m(2)]),s("div",{staticClass:"right-side",on:{click:t.base_modalShow}},[t._m(3)]),t._m(4),t._m(5)])])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"messages"},[s("p",{staticClass:"hello"},[s("i",[t._v("Thank you "),s("br"),s("span",{staticClass:"sp1"},[t._v("For Watching")]),s("br"),s("span",{staticClass:"sp2"},[t._v("My,Profile.!")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile_mes"},[s("h1",[t._v("Click~Here")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile_mes"},[s("h1",[t._v("Click~Here")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile_mes"},[s("h1",[t._v("Click~Here")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-side"},[s("div",{staticClass:"profile_mes"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-side"},[s("div",{staticClass:"profile_mes"})])}],R=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),G=s("2f62"),Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal",appear:""}},[t.isShow?s("div",{staticClass:"modal modal-overlay"},[s("div",{staticClass:"modal-window"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"img"},[s("div",{staticClass:"profile-pict"}),s("div",{staticClass:"profile-mes"},[s("p",{staticClass:"about_name"},[t._v("Takashi           Nagai         "),s("button",{staticClass:"close",on:{click:t.hide}},[t._v("×")])]),s("p",[t._v("皆様、初めまして"),s("br"),t._v("\n               \n                  永井　貴士の"),s("span",[t._v("PortFolio")]),t._v("に ようこそ"),s("br"),t._v("\n              \n                  大阪堺市 在住、Webエンジニアの卵系男子です\n               ")])])]),s("div",{staticClass:"prfile-appeal"},[s("div",{staticClass:"career-title"},[s("p",[t._v("Pro file")])]),s("div",{staticClass:"career-mes"},[s("p",[t._v("現在、株式会社"),s("span",[t._v("B-FORME")]),t._v("にてインターンとして勉強させて戴いています。"),s("br"),s("span",[t._v("Source Tree")]),t._v("を使用した"),s("span",[t._v("Git")]),t._v("でのコード管理の下"),s("br"),s("span",[t._v("PHP")]),s("span",[t._v("JavaScript")]),s("span",[t._v("Jquery")]),s("span",[t._v("Html.Css")]),s("span",[t._v("Mysql")]),t._v("等を使用した"),s("span",[t._v("Web")]),t._v("アプリケーション製作"),s("br"),s("span",[t._v("Laravel")]),s("span",[t._v("Vue.js")]),t._v("を使用した、受諾案件への機能追加 修正を担当させて貰っています"),s("br"),s("br"),t._v("\n                  プログラミング歴：１年半"),s("br"),t._v("\n                  業務経験： １０ヶ月"),s("br"),t._v("\n\n                  Age：３０ "),s("br"),t._v("\n                  Height： １６７cm "),s("br"),t._v("\n                  Body_Weight： ６２kg "),s("br")])])])])])]):t._e()])},K=[];function Q(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function z(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?Q(s,!0).forEach((function(e){Object(R["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Q(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var X={name:"basicModals",computed:z({},Object(G["c"])("base_modal",["isShow"])),methods:z({},Object(G["b"])("base_modal",["hide"]))},Z=X,tt=(s("a3b5"),Object(c["a"])(Z,Y,K,!1,null,"598cd341",null)),et=tt.exports;function st(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function at(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?st(s,!0).forEach((function(e){Object(R["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):st(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var it={name:"AboutMe",components:{basicModals:et},methods:at({},Object(G["b"])("base_modal",{base_modalShow:"show"})),data:function(){return{}}},nt=it,rt=(s("c4d6"),Object(c["a"])(nt,I,U,!1,null,"36d05894",null)),ot=rt.exports,ct={name:"Profile",components:{AboutMe:ot,UniqueNavi:T}},lt=ct,vt=Object(c["a"])(lt,L,D,!1,null,null,null),ut=vt.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("book")},dt=[],_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mooving"},[s("nav",{staticClass:"navigation-menu",class:{show:t.showNavi}},[s("div",{staticClass:"navi-menu1",on:{click:t.shows}},[s("span",{staticClass:"navigation-menu-bars"})]),s("ul",{staticClass:"menu-list"},[s("li",{staticClass:"menu-list-item"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"menu-list-item"},[s("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),s("li",{staticClass:"menu-list-item"},[s("router-link",{attrs:{to:"/work"}},[t._v("Work")])],1),s("li",{staticClass:"menu-list-item"},[s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),s("div",{staticClass:"scene"},[s("article",{staticClass:"book"},[s("section",{staticClass:"page active",class:[t.isActiveS,{openS:t.opensS,closeS:t.closesS}]},[s("div",{staticClass:"front",attrs:{id:"frontCover"},on:{click:t.p_openS}},[t._m(0),t._m(1)]),s("div",{staticClass:"back",attrs:{id:"list"},on:{click:t.p_closeS}},[s("h1",[t._v("SkillList")]),1==t.isActive2?s("div",[s("SkillBar")],1):t._e()])]),s("section",{staticClass:"page",class:[{active:t.isActive2,open2:t.opens2,close2:t.closes2}]},[s("div",{staticClass:"front",on:{click:t.p_open2}},[s("h1",[t._v("SkillList")]),1==t.isActive2?s("div",[s("SkillBar2")],1):t._e()]),s("div",{staticClass:"back",on:{click:t.p_close2}},[t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])]),s("section",{staticClass:"page",class:[{active:t.isActiveE,openE:t.opensE,closeE:t.closesE}]},[s("div",{staticClass:"front",on:{click:t.p_openE}},[t._m(7),t._m(8),t._m(9),t._m(10),t._m(11)]),s("div",{staticClass:"back",attrs:{id:"endCover"},on:{click:t.p_closeE}},[t._m(12),s("p"),s("p")])])])])])},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("i",[s("span",[t._v("My")]),t._v("  Skill  "),s("span",[t._v("&")]),t._v("  Work  "),s("span",[t._v("Book.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("i",[t._v("Click~Here")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header_title"},[s("h3",[t._v("事業者向けWEB出退勤管理システム開発 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"middle_title"},[s("h4",[t._v(" 開発期間　2020年 1月10日　～　3月6日 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"used1"},[s("h4",[t._v("使用言語　PHP JavaScript")]),s("h5",[t._v("使用ライブラリ Jquery ")]),s("h5",[t._v("使用データベース　Mysql")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"used2"},[s("h4",[t._v("担当フェーズ")]),s("h5",[t._v("ワイヤーフレームの製作")]),s("h5",[t._v("データベース設計")]),s("h5",[t._v("設計  構築  テスト")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"used3"},[s("h5",[t._v("非同期通信(Ajax)を使いSPA(シングルページアプリケーション)を意識した")]),s("h5",[t._v(" 開発を行ってます")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header_title"},[s("h3",[t._v("受託案件への　機能 追加・改修 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"middle_title"},[s("h4",[t._v(" 開発期間　2020年 3月12日　～　4月10日 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"used1"},[s("h4",[t._v("使用言語　PHP JavaScript")]),s("h5",[t._v("使用フレームワーク Laravel Vue.js ")]),s("h5",[t._v("使用データベース　Mysql")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"used2"},[s("h4",[t._v("担当フェーズ")]),s("h5",[t._v("機能　追加・改修")]),s("h5",[t._v("データベース変更")]),s("h5",[t._v("レスポンシブ対応")]),s("h5",[t._v("レイアウト変更")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"used3"},[s("h5",[t._v("非同期通信(Axios)使用したAPIとの通信処理")]),s("h5",[t._v("特定フェーズ以降入力項目が変更できないように変更")]),s("h5",[t._v("新規マスタ画面追加 や 画面にソート機能を追加")]),s("h5",[t._v("ドラッグ&ドロップを使用した並び替え機能の追加")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("i",[t._v("Thank you For Reading it Until the Very End")])])}],ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ms"},[s("div",{staticClass:"container"},[s("div",{staticClass:"skills"},[s("span",{staticClass:"Name"},[t._v("PHP")]),s("div",{staticClass:"percent"},[s("div",{staticClass:"progress"})]),s("span",{staticClass:"Value"},[t._v("50%")])]),s("div",{staticClass:"skills"},[s("span",{staticClass:"Name"},[t._v("JavaScript")]),s("div",{staticClass:"percent"},[s("div",{staticClass:"progress"})]),s("span",{staticClass:"Value"},[t._v("35%")])]),s("div",{staticClass:"skills"},[s("span",{staticClass:"Name"},[t._v("Jquery")]),s("div",{staticClass:"percent"},[s("div",{staticClass:"progress"})]),s("span",{staticClass:"Value"},[t._v("40%")])]),s("div",{staticClass:"skills"},[s("span",{staticClass:"Name"},[t._v("MYSQL")]),s("div",{staticClass:"percent"},[s("div",{staticClass:"progress"})]),s("span",{staticClass:"Value"},[t._v("35%")])])])])}],Ct={name:"SkillBar",data:function(){return{}}},bt=Ct,gt=(s("9b13"),Object(c["a"])(bt,ft,ht,!1,null,"2ada1880",null)),wt=gt.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ms"},[s("div",{staticClass:"container"},[s("div",{staticClass:"skills"},[s("span",{staticClass:"Name"},[t._v("Laravel")]),s("div",{staticClass:"percent"},[s("div",{staticClass:"progress"})]),s("span",{staticClass:"Value"},[t._v("50%")])]),s("div",{staticClass:"skills"},[s("span",{staticClass:"Name"},[t._v("Vue.js")]),s("div",{staticClass:"percent"},[s("div",{staticClass:"progress"})]),s("span",{staticClass:"Value"},[t._v("40%")])]),s("div",{staticClass:"skills"},[s("span",{staticClass:"Name"},[t._v("Html & Css")]),s("div",{staticClass:"percent"},[s("div",{staticClass:"progress"})]),s("span",{staticClass:"Value"},[t._v("45%")])])])])}],Et={name:"SkillBar2",data:function(){return{}}},yt=Et,St=(s("5a06"),Object(c["a"])(yt,kt,Ot,!1,null,"0d422d50",null)),jt=St.exports,Pt={name:"Book",components:{SkillBar:wt,SkillBar2:jt},data:function(){return{showNavi:!1,isActiveS:!0,isActive2:!1,isActiveE:!1,opensS:!1,opens2:!1,opensE:!1,closesS:!1,closes2:!1,closesE:!0}},methods:{shows:function(){!0===this.showNavi?this.showNavi=!1:this.showNavi=!0},p_openS:function(){this.opensS=!0,this.isActive2=!0,this.closesE=!0},p_open2:function(){this.opens2=!0,this.isActiveE=!0},p_openE:function(){this.opensE=!0},p_closeS:function(){this.closesS=!0,this.opensS=!1,this.isActive2=!1},p_close2:function(){this.closes2=!0,this.opens2=!1,this.isActiveE=!1},p_closeE:function(){this.opensE=!1}}},xt=Pt,$t=(s("cc74"),Object(c["a"])(xt,_t,mt,!1,null,"11747650",null)),Nt=$t.exports,At={name:"Work",components:{Book:Nt}},qt=At,Bt=Object(c["a"])(qt,pt,dt,!1,null,null,null),Mt=Bt.exports;a["a"].use(u["a"]),a["a"].config.devtools=!0;var Ht=new u["a"]({base:"/app1",routes:[{path:"/",name:"home",component:O,meta:{}},{path:"/profile",name:"profile",component:ut},{path:"/contact",name:"contact",component:J},{path:"/work",name:"work",component:Mt}]}),Tt=(s("bc3a"),{namespaced:!0,state:{isShow:!1},mutations:{show:function(t){t.isShow=!0},hide:function(t){t.isShow=!1}}});a["a"].use(G["a"]);var Wt=new G["a"].Store({strict:!1,modules:{base_modal:Tt}}),Ft=s("9483");Object(Ft["a"])("".concat("/Takashi-PortFolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Vt=s("ecee"),Jt=s("c074"),Lt=s("ad3d");s("f9e3"),Vt["c"].add(Jt["a"]),a["a"].component("font-awesome-icon",Lt["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Ht,store:Wt,render:function(t){return t(v)}}).$mount("#app"),Ht.beforeEach((function(t,e,s){t.matched.some((function(t){return t.meta.requiresAuth}))?Wt.getters.loggedIn?s():s({name:"login"}):t.matched.some((function(t){return t.meta.requiresVisitor}))&&Wt.getters.loggedIn?s({name:"home"}):s()}))},7445:function(t,e,s){},8836:function(t,e,s){},"8ac6":function(t,e,s){},"8ef1":function(t,e,s){"use strict";var a=s("13d7"),i=s.n(a);i.a},"9a63":function(t,e,s){},"9b13":function(t,e,s){"use strict";var a=s("9a63"),i=s.n(a);i.a},a3b5:function(t,e,s){"use strict";var a=s("8ac6"),i=s.n(a);i.a},c4d6:function(t,e,s){"use strict";var a=s("e512"),i=s.n(a);i.a},cc74:function(t,e,s){"use strict";var a=s("8836"),i=s.n(a);i.a},e512:function(t,e,s){},e65d:function(t,e,s){},e799:function(t,e,s){},f746:function(t,e,s){"use strict";var a=s("5879"),i=s.n(a);i.a}});
//# sourceMappingURL=app1.fff95900.js.map
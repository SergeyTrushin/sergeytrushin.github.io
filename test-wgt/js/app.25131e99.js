(function(t){function e(e){for(var a,n,u=e[0],c=e[1],o=e[2],h=0,p=[];h<u.length;h++)n=u[h],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,u=1;u<s.length;u++){var c=s[u];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"4dec":function(t,e,s){"use strict";var a=s("b72e"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"responsive",rawName:"v-responsive",value:{small:function(t){return t.width<720}},expression:"{ small: el => el.width < 720 }"}],attrs:{id:"app"}},[s("div",{ref:"con",attrs:{id:"container"}},[s("div",{attrs:{id:"core-toolbar"}},[s("p",{staticClass:"rate"},[t._v("Курс "+t._s(t.baseCurrency)+" сегодня")]),s("nav",{staticClass:"tabs"},[0!==t.activeCur?s("button",{staticClass:"left",on:{click:t.previous}}):t._e(),t._l(t.paginatedData,(function(e,a){return s("button",{staticClass:"tab",class:{active:t.isActive(e)},on:{click:function(s){return t.getNumber(a,e)}}},[t._v(" "+t._s(e)+" ")])})),t.activeCur!==t.getListOfRates.length-1?s("button",{staticClass:"right",on:{click:t.next}}):t._e()],2)]),s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model:value",value:t.value,expression:"value",arg:"value"}],attrs:{type:"number"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.baseCurrency)+" "+t._s(t.pageNumber))])]),s("Cards",{directives:[{name:"responsive",rawName:"v-responsive",value:{small:function(t){return t.width<720}},expression:"{ small: el => el.width < 720 }"}],attrs:{value:t.value,size:t.size}})],1)])},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main"}},[s("div",{ref:"items",staticClass:"items"},[t.getRates?t._l(t.paginatedData,(function(e){return s("div",{staticClass:"item"},[s("p",{staticClass:"curName"},[t._v(t._s(t.value)+" "),s("span",[t._v(t._s(t.baseCurrency)+" = ")])]),s("div",{staticClass:"curValue"},[s("span",{staticClass:"valueOfCur"},[t._v(" "+t._s(t.calc(t.getRates[e]))+" ")]),s("span",{staticClass:"curName"},[t._v(" "+t._s(e)+" ")])])])})):s("div",{staticClass:"lds-dual-ring"})],2),s("div",{staticClass:"btn"},[s("button",{staticClass:"back",attrs:{disabled:0==t.pageNumber},on:{click:t.prevPage}},[t._v("Назад")]),s("button",{staticClass:"next",attrs:{disabled:t.pageNumber>=t.pageCount-1},on:{click:t.nextPage}},[t._v("Далее")])])])},u=[];const c=s("901e");var o={props:["value","size"],computed:{getRates(){return this.$store.getters.getRates},getListOfRates(){return this.$store.getters.getListOfRates},baseCurrency(){return this.$store.getters.getBaseCurrency},baseSize(){return this.$store.getters.getNumberOfRates-1},pageCount(){let t=this.baseSize,e=this.size;return Math.ceil(t/e)},paginatedData(){const t=this.pageNumber*this.size,e=t+this.size,s=this.getListOfRates.indexOf(this.baseCurrency),a=[...this.getListOfRates];return-1!==s&&a.splice(s,1),a.slice(t,e)}},data(){return{pageNumber:0}},methods:{nextPage(){this.pageNumber++},prevPage(){this.pageNumber--},calc(t){return new c(t).times(this.value).toFixed(2)}}},l=o,h=(s("4dec"),s("2877")),p=Object(h["a"])(l,n,u,!1,null,null,null),d=p.exports,v=s("be26"),g={components:{Cards:d},directives:{responsive:v["a"]},data(){return{value:1,activeCur:0,pageNumber:0,show:7,size:4}},computed:{baseCurrency(){return this.$store.getters.getBaseCurrency},getListOfRates(){return this.$store.getters.getListOfRates},getRates(){return this.$store.getters.getRates},pageCount(){let t=this.getListOfRates.length,e=this.end;return Math.ceil(t/e)},paginatedData(){const t=this.pageNumber*this.show,e=t+this.show;return this.getListOfRates.slice(t,e)}},async mounted(){this.$store.dispatch("fetchData"),window.onresize=()=>{if(this.$refs.con.clientWidth<720){this.show=3,this.size=2,this.pageNumber=0;while(this.pageNumber*this.show+this.show<=this.activeCur)this.pageNumber++}else{this.show=7,this.size=4,this.pageNumber=0;while(this.pageNumber*this.show+this.show<=this.activeCur)this.pageNumber++}}},methods:{getNumber(t,e){this.$store.dispatch("updateBase",e),this.activeCur=this.getListOfRates.indexOf(e)},next(){this.paginatedData[this.paginatedData.length-1]===this.getListOfRates[this.activeCur]&&this.pageNumber++,this.activeCur<this.getListOfRates.length-1&&(this.activeCur++,this.$store.dispatch("updateBase",this.getListOfRates[this.activeCur]))},previous(){this.paginatedData[0]===this.getListOfRates[this.activeCur]&&this.pageNumber--,this.activeCur>0&&(this.activeCur--,this.$store.dispatch("updateBase",this.getListOfRates[this.activeCur]))},isActive(t){return t===this.getListOfRates[this.activeCur]}}},f=g,b=(s("5c0b"),Object(h["a"])(f,i,r,!1,null,null,null)),m=b.exports,C=s("2f62");a["a"].use(C["a"]);var w=new C["a"].Store({state:{data:{},baseCurrency:"GBP"},mutations:{updateData(t,e){t.data=e},updateBaseCurrency(t,e){t.baseCurrency=e}},actions:{async fetchData(t){const e=await fetch("https://api.openrates.io/latest?base="+this.state.baseCurrency),s=await e.json();await t.commit("updateData",s)},async updateBase(t,e){await t.commit("updateBaseCurrency",e);const s=await fetch("https://api.openrates.io/latest?base="+this.state.baseCurrency),a=await s.json();await t.commit("updateData",a)}},getters:{getListOfRates(t){let e=[];for(let s in t.data.rates)e.push(s);return"EUR"===t.data.base&&e.splice(12,0,"EUR"),e},getBaseCurrency(t){return t.baseCurrency},getRates(t){return t.data.rates},getNumberOfRates(t){let e=[];for(let s in t.data.rates)e.push(s);return e.length}}});a["a"].config.productionTip=!1,a["a"].use(v["b"]),new a["a"]({store:w,render:t=>t(m)}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"9c0c":function(t,e,s){},b72e:function(t,e,s){}});
//# sourceMappingURL=app.25131e99.js.map
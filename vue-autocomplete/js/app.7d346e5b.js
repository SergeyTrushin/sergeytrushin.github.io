(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],p=0,h=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"34ed":function(t,e,n){"use strict";var s=n("f5f8"),r=n.n(s);r.a},"36be":function(t,e,n){t.exports=n.p+"img/menu.0fd03501.svg"},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),s("section",{staticClass:"menu"},[s("img",{staticClass:"logo",attrs:{src:n("b5b4"),alt:""}}),t._m(1),s("InputAutocomplete",{attrs:{items:t.dataItems}}),t._m(2),t._m(3)],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("header",{staticClass:"header"},[s("div",{staticClass:"city"},[s("img",{attrs:{src:n("7872"),alt:""}}),s("a",{attrs:{href:"#"}},[t._v("Волгоградская область")])]),s("div",{staticClass:"navigation"},[s("nav",[s("ul",[s("li",[t._v("Тендеры")]),s("li",[t._v("База подрядчиков")]),s("li",{staticClass:"other-services"},[t._v("Другие сервисы")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn catalog"},[s("img",{attrs:{src:n("36be"),alt:""}}),s("span",[t._v("Каталог")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn list"},[s("img",{attrs:{src:n("e7e9"),alt:""}}),s("span",[t._v("Список")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar"},[n("span",[t._v("A")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form",attrs:{action:"#"},on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"search",attrs:{type:"text",placeholder:"Хочу найти..."},domProps:{value:t.inputValue},on:{keydown:[function(e){return e.type.indexOf("key")||13===e.keyCode?t.chooseItem(e):null},function(e){return e.type.indexOf("key")||40===e.keyCode?t.moveDown(e):null},function(e){return e.type.indexOf("key")||38===e.keyCode?t.moveUp(e):null}],input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t.searchMatch.length>0?n("ul",{staticClass:"autocomplete-list"},t._l(t.searchMatch,(function(e,s){return n("li",{class:{active:t.selectedIndex===s},on:{click:function(e){t.selectItem(s),t.chooseItem()}}},[t._v(" "+t._s(e)+" ")])})),0):t._e()])},c=[],o={props:{items:Array},data(){return{inputValue:"",searchMatch:[],selectedIndex:-1}},computed:{listToSearch(){return"undefined"!==typeof this.items&&this.items.length>0?this.items:[]}},watch:{inputValue(t){this.searchMatch=[],""!==this.inputValue&&(this.searchMatch=this.listToSearch.filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>=0)),1===this.searchMatch.length&&this.inputValue===this.searchMatch[0]&&(this.searchMatch=[])}},methods:{moveDown(){this.selectedIndex<this.searchMatch.length-1&&this.selectedIndex++},moveUp(){-1!==this.selectedIndex&&this.selectedIndex--},selectItem(t){this.selectedIndex=t},chooseItem(){-1!==this.selectedIndex&&(this.inputValue=this.searchMatch[this.selectedIndex],this.selectedIndex=-1)}}},l=o,u=(n("34ed"),n("2877")),p=Object(u["a"])(l,i,c,!1,null,null,null),h=p.exports,d={name:"App",components:{InputAutocomplete:h},data(){return{dataItems:["Самаорезы","Анкеры","Болты","Шайбы","Болгарки","Бокорезы","Анкер болт","Болты анкерные","Саморезы кровельные"]}},methods:{itemSelected(t){this.item=t},setLabel(t){return t.name},inputChange(t){this.items=items.filter(e=>e.name.contains(t))}},methods:{getLabel(t){return t.name},updateItems(t){yourGetItemsMethod(t).then(t=>{this.items=t})}}},f=d,m=(n("5c0b"),Object(u["a"])(f,r,a,!1,null,null,null)),v=m.exports,b=(n("f5df"),n("d051")),g=n.n(b);s["a"].config.productionTip=!1,s["a"].use(g.a),new s["a"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),r=n.n(s);r.a},7872:function(t,e,n){t.exports=n.p+"img/city.01191b7d.svg"},"9c0c":function(t,e,n){},b5b4:function(t,e,n){t.exports=n.p+"img/stroy-portal_icon.267a8293.svg"},e7e9:function(t,e,n){t.exports=n.p+"img/list.d6d7c476.svg"},f5f8:function(t,e,n){}});
//# sourceMappingURL=app.7d346e5b.js.map
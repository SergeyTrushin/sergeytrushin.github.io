(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{346:function(t,o,e){var content=e(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("0f3b1b6a",content,!0,{sourceMap:!1})},351:function(t,o,e){"use strict";e.r(o);e(34);var n=e(2),d={fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:0==t.$store.getters["todos/getRandomTodos"].length&&t.$store.dispatch("todos/fetch");case 1:case"end":return o.stop()}}),o)})))()},methods:{updateTodos:function(t){this.$store.dispatch("todos/updateTodos",t)}},data:function(){return{todos:[]}},mounted:function(){this.todos=this.$store.getters["todos/getRandomTodos"]}},r=(e(362),e(12)),component=Object(r.a)(d,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todos"},[e("h1",{staticClass:"todos__header header"},[t._v("Список задач")]),t._v(" "),e("div",{staticClass:"profile__content content"},[t._m(0),t._v(" "),e("div",t._l(t.todos,(function(o){return e("div",{key:o.id,staticClass:"todos__todo"},[e("div",{staticClass:"todos__text"},[t._v("\n          "+t._s(o.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"todos__status"},[e("input",{attrs:{type:"checkbox",id:o.id},domProps:{checked:o.complited},on:{change:function(e){return t.updateTodos(o.id)}}}),t._v(" "),e("label",{attrs:{for:o.id}}),t._v(" "),e("span",[t._v("Выполнено")])])])})),0)])])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"content__header"},[o("span",[this._v("Задача")]),this._v(" "),o("span",[this._v("Статус")])])}],!1,null,null,null);o.default=component.exports},362:function(t,o,e){"use strict";e(346)},363:function(t,o,e){(o=e(40)(!1)).push([t.i,'.todos{background:#eff1f9;width:100%;padding:40px 56px 0 48px}.todos .header{font-family:Montserrat;font-style:normal;font-weight:500;font-size:20px;line-height:32px;margin-bottom:24px}.todos .content{background:#fff;border-radius:10px;padding:48px 40px 33px;max-width:920px}.todos .content .content__header{font-weight:500;font-size:14px;line-height:16px;color:#bababa;padding-bottom:16px}.todos .content .content__header,.todos .content .todos__todo{display:flex;justify-content:space-between;border-bottom:1px solid #eff1f9}.todos .content .todos__todo{padding:16px 0}.todos .content .todos__todo .todos_text{font-weight:500;font-size:14px;line-height:16px;color:#303136}.todos .content .todos__todo .todos__status{display:flex;align-items:center;color:#c2c2c2;font-weight:500;font-size:14px;line-height:16px}.todos .content .todos__todo .todos__status input{display:none}.todos .content .todos__todo .todos__status label{position:relative;display:inline-block;width:24px;height:24px;border:1px solid #bababa;margin-right:7px;cursor:pointer}.todos .content .todos__todo .todos__status label:after{display:none;position:absolute;content:"";width:7px;height:11px;border-bottom:2.17px solid #6fbc9a;border-right:2.17px solid #6fbc9a;transform:rotate(45deg);margin-left:7px;margin-top:2px}.todos .content .todos__todo .todos__status input[type=checkbox]:checked+label:after{display:block}.todos .content .todos__todo .todos__status input[type=checkbox]:checked~span{color:#51cb3d}@media (max-width:414px){.todos{padding-left:17px;padding-right:16px;height:100vh}.todos .header{margin-top:60px}.todos .content{padding:24px 16px 54px}}',""]),t.exports=o},393:function(t,o,e){"use strict";e.r(o);var n={components:{TodosList:e(351).default}},d=e(12),component=Object(d.a)(n,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"container"},[o("TodosList")],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{TodosList:e(351).default})}}]);
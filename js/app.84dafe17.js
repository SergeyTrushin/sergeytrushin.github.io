(function(t){function e(e){for(var n,a,l=e[0],r=e[1],c=e[2],u=0,f=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,l=1;l<o.length;l++){var r=o[l];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0bdd":function(t,e,o){},2395:function(t,e,o){},"33f6":function(t,e,o){},"39a3":function(t,e,o){"use strict";var n=o("33f6"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],a=(o("7c55"),o("2877")),l={},r=Object(a["a"])(l,i,s,!1,null,null,null),c=r.exports,d=o("8c4f"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v(" All Notes ")]),t.showAddNote?o("AddNote",{on:{closeAddNote:function(e){return t.showAddModal()},addNote:t.addNote}}):t._e(),o("button",{staticClass:"btn large",on:{click:t.showAddModal}},[t._v(" Add Note ")]),o("hr"),t._l(t.allNotes,(function(e){return o("div",{key:e.id},[o("h4",[t._v(" "+t._s(e.title)+" "),o("router-link",{staticClass:"btn",attrs:{to:"/edit/id="+e.id,tag:"button"}},[t._v(" edit ")]),o("button",{staticClass:"btn-delete",on:{click:function(o){return t.openCloseModal(e.id)}}},[t._v(" delete ")]),e.id===t.confId?o("DeleteNote",{attrs:{note:e},on:{cancel:t.openCloseModal,deleteNote:t.deleteNote}}):t._e()],1),o("Todos",{attrs:{note:e}})],1)})),0===t.allNotes.length?o("div",[o("h4",[t._v("No Notes!")])]):t._e()],2)},f=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.note.todos.filter((function(t,e){return e<=1})),(function(e){return o("div",[o("span",{class:{done:e.completed}},[t._v(t._s(e.title)+" ")]),o("input",{attrs:{type:"checkbox",disabled:""},domProps:{checked:e.completed}})])})),0)},h=[],v={props:["note"]},m=v,b=(o("39a3"),Object(a["a"])(m,p,h,!1,null,null,null)),N=b.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"background"},[o("div",{staticClass:"modal"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"note-text",attrs:{type:"text",placeholder:"Enter the note's title:"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}),o("button",{staticClass:"close-modal",on:{click:function(e){t.$emit("closeAddNote"),t.clearAll()}}},[t._v("X")]),o("hr"),o("h4",[t._v("Todos:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.taskTitle,expression:"taskTitle"}],staticClass:"task-text",attrs:{type:"text",placeholder:"Add Todo:"},domProps:{value:t.taskTitle},on:{input:function(e){e.target.composing||(t.taskTitle=e.target.value)}}}),o("button",{staticClass:"add-button",on:{click:function(e){return t.addTask(t.taskTitle)}}},[t._v("+")]),o("ul",t._l(t.note.todos,(function(e){return o("li",{staticClass:"item"},[o("span",{class:{done:e.completed}},[t._v(" "+t._s(e.title)+" "),o("input",{attrs:{type:"checkbox"},on:{change:function(o){return t.toggle(e.id)}}})]),o("button",{staticClass:"delete-button",on:{click:function(o){return t.deleteTask(e.id)}}},[t._v("DELETE")])])})),0),o("button",{staticClass:"addNote",on:{click:t.addNote}},[t._v(" CONFIRM ")])])])},g=[],k=(o("4de4"),o("d81d"),o("6eba"),o("0d03"),o("498a"),{data:function(){return{note:{id:Date.now(),todos:[],title:""},taskTitle:""}},methods:{addTask:function(t){t.trim()&&(this.note.todos.push({id:Date.now(),title:t,completed:!1}),this.taskTitle="")},addNote:function(){this.note.title.trim()&&(this.$emit("closeAddNote"),this.$emit("addNote",this.note))},deleteTask:function(t){this.note.todos=this.note.todos.filter((function(e){return e.id!==t}))},toggle:function(t){this.note.todos=this.note.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))},clearAll:function(){this.note.todos=[],this.note.title="",this.taskTitle=""}}}),T=k,w=(o("7be1"),Object(a["a"])(T,_,g,!1,null,"0917141c",null)),C=w.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"background"},[o("div",{staticClass:"modal"},[o("span",[t._v("Do you want to delete the note - "),o("b",[t._v(t._s(t.note.title))])]),o("div",{staticClass:"button-block"},[o("button",{staticClass:"btn large",staticStyle:{"margin-right":"1rem"},on:{click:function(e){return t.$emit("deleteNote",t.note.id,t.title)}}},[t._v(" Подвердить ")]),o("button",{staticClass:"btn large",on:{click:function(e){return t.$emit("cancel",t.note.id)}}},[t._v(" Отменить ")])])])])},$=[],x={props:["note","title"],methods:{}},O=x,A=(o("fa97"),Object(a["a"])(O,y,$,!1,null,"4b6e14e7",null)),j=A.exports,P={components:{Todos:N,AddNote:C,DeleteNote:j},data:function(){return{showAddNote:!1,confId:""}},methods:{showAddModal:function(){this.showAddNote=!this.showAddNote},addNote:function(t){this.$store.dispatch("createNote",t)},openCloseModal:function(t){this.confId?this.confId="":this.confId=t},deleteNote:function(t){this.$store.dispatch("deleteNote",t)}},computed:{allNotes:function(){return this.$store.getters.allNotes}}},S=P,M=(o("989b"),Object(a["a"])(S,u,f,!1,null,null,null)),E=M.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Edit Note")]),o("button",{staticClass:"btn",on:{click:t.cancel}},[t._v(" cancel ")]),o("hr"),o("h4",[t._v(" "+t._s(t.editTitle?"":t.newNote.title)+" "),t.editTitle?o("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.title,expression:"newNote.title"}],attrs:{type:"text"},domProps:{value:t.newNote.title},on:{input:function(e){e.target.composing||t.$set(t.newNote,"title",e.target.value)}}}):t._e(),o("button",{staticClass:"btn",on:{click:function(e){t.editTitle?t.editTitle=!1:t.editTitle=!0}}},[t._v(" "+t._s(t.editTitle?"ok":"edit")+" ")])]),o("input",{directives:[{name:"model",rawName:"v-model:value",value:t.taskTitle,expression:"taskTitle",arg:"value"}],staticClass:"note-text",attrs:{type:"text",placeholder:"Add Todo:"},domProps:{value:t.taskTitle},on:{input:function(e){e.target.composing||(t.taskTitle=e.target.value)}}}),o("button",{staticClass:"add-button",on:{click:function(e){return t.addTodo(t.taskTitle)}}},[t._v(" + ")]),t._l(t.newNote.todos,(function(e){return o("div",{attrs:{id:"todo"}},[t.todoConf===e.id?o("input",{directives:[{name:"model",rawName:"v-model:value",value:e.title,expression:"todo.title",arg:"value"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(o){o.target.composing||t.$set(e,"title",o.target.value)}}}):o("span",{class:{done:e.completed}},[t._v(" "+t._s(e.title)+" ")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model:checked",value:e.completed,expression:"todo.completed",arg:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var n=e.completed,i=o.target,s=!!i.checked;if(Array.isArray(n)){var a=null,l=t._i(n,a);i.checked?l<0&&t.$set(e,"completed",n.concat([a])):l>-1&&t.$set(e,"completed",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(e,"completed",s)}}}),o("button",{staticClass:"btn",on:{click:function(o){return t.editTodo(e.id,e.title)}}},[t._v(" "+t._s(t.todoConf===e.id?"ok":"edit")+" ")]),o("button",{staticClass:"btn-delete",staticStyle:{"margin-right":"1rem"},on:{click:function(o){return t.deleteTodo(e.id)}}},[t._v(" delete ")])])])})),o("br"),o("button",{staticClass:"btn",on:{click:function(e){return t.updateNote(t.newNote)}}},[t._v("save")]),o("button",{staticClass:"btn-delete large",on:{click:function(e){!t.deleteThis&&(t.deleteThis=!0)}}},[t._v("delete note")]),t.deleteThis?o("DeleteNote",{attrs:{note:t.newNote,title:t.message},on:{cancel:t.openCloseModal,deleteNote:t.deleteNote}}):t._e()],2)},I=[],J=(o("99af"),o("7db0"),o("2909")),F=o("5530"),L={components:{DeleteNote:j},data:function(){var t=this;return{newNote:Object(F["a"])({},this.$store.getters.allNotes.find((function(e){return e.id===+t.$route.params.id}))),newTodos:Object(J["a"])(this.$store.getters.allNotes.find((function(e){return e.id===+t.$route.params.id})).todos),deleteThis:!1,editTitle:!1,taskTitle:"",todoConf:"",message:""}},methods:{updateNote:function(t){this.$store.dispatch("updateNote",t),this.$router.push("/")},openCloseModal:function(){this.deleteThis=!this.deleteThis},deleteNote:function(t){this.$router.push("/"),this.$store.dispatch("deleteNote",t)},deleteTodo:function(t){this.newNote.todos=this.newNote.todos.filter((function(e){return e.id!=t}))},addTodo:function(t){this.taskTitle.trim()&&(this.newNote.todos=[].concat(Object(J["a"])(this.newNote.todos),[{title:t,id:Date.now(),completed:!1}])),this.taskTitle=""},editTodo:function(t,e){e.trim()&&(this.todoConf?this.todoConf="":this.todoConf=t)},cancel:function(){this.$router.push("/")}}},R=L,X=(o("d572"),Object(a["a"])(R,D,I,!1,null,null,null)),q=X.exports;n["a"].use(d["a"]);var z=[{path:"/",name:"Notes",component:E},{path:"/edit/id=:id",name:"edit",component:q}],B=new d["a"]({mode:"history",base:"/",routes:z}),G=B,H=o("2f62");o("53f4");n["a"].use(H["a"]);var K=new H["a"].Store({state:{notes:JSON.parse(localStorage.getItem("notes")||"[]")},mutations:{createNote:function(t,e){t.notes.push(e),localStorage.setItem("notes",JSON.stringify(t.notes))},deleteNote:function(t,e){t.notes=t.notes.filter((function(t){return t.id!==e})),localStorage.setItem("notes",JSON.stringify(t.notes))},updateNote:function(t,e){t.notes=t.notes.map((function(t){return t.id===e.id&&(t.title=e.title,t.todos=e.todos),t}))}},actions:{createNote:function(t,e){var o=t.commit;o("createNote",e)},deleteNote:function(t,e){var o=t.commit;o("deleteNote",e)},updateNote:function(t,e){var o=t.commit;o("updateNote",e)}},getters:{allNotes:function(t){return t.notes}}});n["a"].config.productionTip=!1,new n["a"]({router:G,store:K,render:function(t){return t(c)}}).$mount("#app")},"7be1":function(t,e,o){"use strict";var n=o("c610"),i=o.n(n);i.a},"7c55":function(t,e,o){"use strict";var n=o("2395"),i=o.n(n);i.a},"989b":function(t,e,o){"use strict";var n=o("c33e"),i=o.n(n);i.a},c33e:function(t,e,o){},c610:function(t,e,o){},d572:function(t,e,o){"use strict";var n=o("fea3"),i=o.n(n);i.a},fa97:function(t,e,o){"use strict";var n=o("0bdd"),i=o.n(n);i.a},fea3:function(t,e,o){}});
//# sourceMappingURL=app.84dafe17.js.map
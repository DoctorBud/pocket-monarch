webpackJsonp([1],{"+1Wr":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"todoapp"},[t._m(0),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.watches.length,expression:"watches.length"}],staticClass:"main"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.allDone,expression:"allDone"}],staticClass:"toggle-all",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allDone)?t._i(t.allDone,null)>-1:t.allDone},on:{__c:function(e){var a=t.allDone,n=e.target,i=!!n.checked;if(Array.isArray(a)){var s=t._i(a,null);n.checked?s<0&&(t.allDone=a.concat([null])):s>-1&&(t.allDone=a.slice(0,s).concat(a.slice(s+1)))}else t.allDone=i}}}),t._v(" "),a("ul",{staticClass:"todo-list"},t._l(t.filteredWatchs,function(e){return a("li",{staticClass:"todo",class:{completed:e.completed,editing:e==t.editedWatch}},[a("div",{staticClass:"view"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"watch.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{__c:function(a){var n=e.completed,i=a.target,s=!!i.checked;if(Array.isArray(n)){var r=t._i(n,null);i.checked?r<0&&(e.completed=n.concat([null])):r>-1&&(e.completed=n.slice(0,r).concat(n.slice(r+1)))}else e.completed=s}}}),t._v(" "),a("label",{staticStyle:{overflow:"auto"}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.title)+" ("+t._s(e.symbol)+")")]),t._v(" "),a("span",{staticStyle:{float:"right"}},[t._v("$ "+t._s(e.price_usd))])]),t._v(" "),a("button",{staticClass:"destroy",staticStyle:{clear:"both"},on:{click:function(a){t.removeWatch(e)}}})])])}))]),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.watches.length,expression:"watches.length"}],staticClass:"footer"},[a("span",{staticClass:"todo-count"},[a("strong",{domProps:{textContent:t._s(t.remaining)}}),t._v(" "+t._s(t.pluralize("entity",t.remaining))+" watched\n        ")])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h1",[t._v("Watched BioEntities")]),t._v(" "),a("h6",[t._v("\n            The BioSearch tab allows the watch state to be toggled, and this BioWatch tab reflects those choices.\n        ")])])}],s={render:n,staticRenderFns:i};e.a=s},"+5wV":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Bio Search")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{autofocus:"",placeholder:"Type a Bio Symbol or Name"},on:{change:t.doSearch},model:{value:t.searchFor,callback:function(e){t.searchFor=e},expression:"searchFor"}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[a("b",[t._v("Symbol/Name")])]),t._v(" "),a("template",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.searchResultsLength)+" found")])],2)],1)],1),t._v(" "),a("el-row",[a("vue-good-table",{staticStyle:{width:"90%",margin:"auto"},attrs:{title:"Bio Types",columns:t.columns,rows:t.rows,perPage:15,styleClass:"table-striped table-bordered xcondensed",paginate:!0,lineNumbers:!1,onClick:t.toggleWatch}},[a("div",{staticStyle:{width:"500px"},attrs:{slot:"emptystate"},slot:"emptystate"},[t._v("\n          No Bio Types Selected\n        ")])])],1)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},"4Z1n":function(t,e,a){"use strict";var n=a("eCWD"),i=a("+1Wr"),s=a("VU/8"),r=s(n.a,i.a,null,null,null);e.a=r.exports},"9bVW":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:!0,"default-active":"/",collapse:!t.isExpanded},on:{open:t.handleOpen,close:t.handleClose}},[a("el-checkbox-group",{model:{value:t.isExpanded,callback:function(e){t.isExpanded=e},expression:"isExpanded"}},[a("el-checkbox-button",{key:!0,attrs:{label:t.isExpanded}},[a("i",{staticClass:"el-icon-fa-expand"})])],1),t._v(" "),a("el-menu-item",{attrs:{index:"/"},on:{click:function(e){t.collapse()}}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("Home")]),t._v(" "),a("i",{staticClass:"monarch-logo"})]),t._v(" "),a("el-submenu",{attrs:{index:"/coins"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("i",{staticClass:"el-icon-fa-money"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("Coins")])]),t._v(" "),a("el-menu-item",{staticClass:"el-icon-fa-btc",attrs:{index:"/coins/bitcoin"},on:{click:function(e){t.collapse()}}},[t._v("\n              BTC\n            ")]),t._v(" "),a("el-menu-item",{staticClass:"el-icon-fa-etsy",attrs:{index:"/coins/ethereum"},on:{click:function(e){t.collapse()}}},[t._v("\n              ETH\n            ")])],2),t._v(" "),a("el-menu-item",{attrs:{index:"/coinsearch"},on:{click:function(e){t.collapse()}}},[a("i",{staticClass:"el-icon-fa-search-minus"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("Coin Search")])]),t._v(" "),a("el-menu-item",{attrs:{index:"/biosearch"},on:{click:function(e){t.collapse()}}},[a("i",{staticClass:"el-icon-fa-search"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("Bio Search")])]),t._v(" "),a("el-submenu",{attrs:{index:"/watch"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("i",{staticClass:"el-icon-fa-eye"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("Watch")])]),t._v(" "),a("el-menu-item",{staticClass:"el-icon-fa-money",attrs:{index:"/watch"},on:{click:function(e){t.collapse()}}},[t._v("\n              CoinWatch\n            ")]),t._v(" "),a("el-menu-item",{staticClass:"el-icon-fa-venus",attrs:{index:"/biowatch"},on:{click:function(e){t.collapse()}}},[t._v("\n              BioWatch\n            ")])],2)],1)],1)],1),t._v(" "),a("el-row",{staticClass:"main-view"},[a("router-view")],1)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},"B/mo":function(t,e){},C6cS:function(t,e,a){"use strict";var n=a("mvHQ"),i=a.n(n);e.a={fetch:function(t){return JSON.parse(localStorage.getItem(t)||"[]")},save:function(t,e){localStorage.setItem(t,i()(e))}}},"C8i/":function(t,e,a){"use strict";var n=a("mtWM"),i=a.n(n);e.a={name:"Coins",data:function(){return{coin:{}}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;i.a.get("https://api.coinmarketcap.com/v1/ticker/"+this.$route.params.id+"/").then(function(e){t.coin=e.data[0]}).catch(function(t){console.log(t)})}}}},CoQz:function(t,e){},D4uH:function(t,e,a){"use strict";function n(t){a("tzTO")}var i=a("dXrS"),s=a("o7uZ"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,null,null);e.a=c.exports},E2v0:function(t,e,a){"use strict";var n=a("C6cS"),i={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}};e.a={data:function(){return{watches:n.a.fetch("coinwatch-v1"),newWatch:"",editedWatch:null,visibility:"all"}},watch:{$route:function(t,e){console.log("coin $route",t,e);var a=t.path.split(/\//g);3===a.length&&""===a[0]&&"watch"===a[1]&&(this.visibility=a[2])},watches:{deep:!0,handler:function(t,e){n.a.save("coinwatch-v1",t)}}},computed:{filteredWatchs:function(){return i[this.visibility](this.watches)},remaining:function(){return i.active(this.watches).length},allDone:{get:function(){return 0===this.remaining},set:function(t){this.watches.forEach(function(e){e.completed=t})}}},methods:{pluralize:function(t,e){return t+(1===e?"":"s")},addWatch:function(){var t=this.newWatch&&this.newWatch.trim();t&&(this.watches.push({title:t,completed:!1}),this.newWatch="")},removeWatch:function(t){var e=this.watches.indexOf(t);this.watches.splice(e,1)},editWatch:function(t){this.beforeEditCache=t.title,this.editedWatch=t},doneEdit:function(t){this.editedWatch&&(this.editedWatch=null,t.title=t.title.trim(),t.title||this.removeWatch(t))},cancelEdit:function(t){this.editedWatch=null,t.title=this.beforeEditCache},removeCompleted:function(){this.watches=i.active(this.watches)}},directives:{"watch-focus":function(t,e){e.value&&t.focus()}}}},"Ht/h":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Coin Search")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{autofocus:"",placeholder:"Type a Coin Symbol or Name"},on:{change:t.doSearch},model:{value:t.searchFor,callback:function(e){t.searchFor=e},expression:"searchFor"}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[a("b",[t._v("Symbol/Name")])]),t._v(" "),a("template",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.searchResultsLength)+" found")])],2)],1)],1),t._v(" "),a("el-row",[a("vue-good-table",{staticStyle:{width:"90%",margin:"auto"},attrs:{title:"Coin Types",columns:t.columns,rows:t.rows,perPage:15,styleClass:"table-striped table-bordered xcondensed",paginate:!0,lineNumbers:!1,onClick:t.toggleWatch}},[a("div",{staticStyle:{width:"500px"},attrs:{slot:"emptystate"},slot:"emptystate"},[t._v("\n          No Coins Selected\n        ")])])],1)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},KE38:function(t,e,a){"use strict";var n=a("d7EF"),i=a.n(n),s=a("mvHQ"),r=a.n(s),o=a("BO1k"),c=a.n(o),l=a("8wyc");e.a={name:"vue-good-table",props:{styleClass:{default:"table table-bordered"},title:"",columns:{},rows:{},onClick:{},perPage:{},sortable:{default:!0},paginate:{default:!1},lineNumbers:{default:!1},defaultSortBy:{default:null},responsive:{default:!0},rtl:{default:!1},globalSearch:{default:!1},searchTrigger:{default:null},externalSearchQuery:{default:null},globalSearchPlaceholder:{default:"Search Table"},nextText:{default:"Next"},prevText:{default:"Prev"},rowsPerPageText:{default:"Rows per page:"},ofText:{default:"of"},allText:{default:"All"}},data:function(){return{currentPage:1,currentPerPage:10,sortColumn:-1,sortType:"asc",globalSearchTerm:"",columnFilters:{},filteredRows:[],timer:null,forceSearch:!1,sortChanged:!1}},methods:{nextPage:function(){-1!=this.currentPerPage&&(this.processedRows.length>this.currentPerPage*this.currentPage&&++this.currentPage,this.pageChanged())},previousPage:function(){this.currentPage>1&&--this.currentPage,this.pageChanged()},pageChanged:function(){this.$emit("pageChanged",{currentPage:this.currentPage,total:Math.floor(this.rows.length/this.currentPerPage)})},onTableLength:function(t){this.currentPerPage=t.target.value},sort:function(t){this.sortable&&(this.sortColumn===t?this.sortType="asc"===this.sortType?"desc":"asc":(this.sortType="asc",this.sortColumn=t),this.sortChanged=!0)},click:function(t,e){this.onClick&&this.onClick(t,e)},searchTable:function(){"enter"==this.searchTrigger&&(this.forceSearch=!0,this.sortChanged=!0)},collect:function(t,e){return"function"==typeof e?e(t):"string"==typeof e?function(t,e){for(var a=t,n=e.split("."),i=0;i<n.length;i++){if(void 0===a)return;a=a[n[i]]}return a}(t,e):void 0},collectFormatted:function(t,e){var a=this.collect(t,e.field);if(void 0===a)return"";switch(e.type){case"decimal":return function(t){return parseFloat(Math.round(100*t)/100).toFixed(2)}(a);case"percentage":return function(t){return parseFloat(100*t).toFixed(2)+"%"}(a);case"date":return function(t){return Object(l.b)(Object(l.c)(t,e.inputFormat,new Date),e.outputFormat)}(a);default:return a}},formattedRow:function(t){var e={},a=!0,n=!1,i=void 0;try{for(var s,r=c()(this.columns);!(a=(s=r.next()).done);a=!0){var o=s.value;o.field&&(e[o.field]=this.collectFormatted(t,o))}}catch(t){n=!0,i=t}finally{try{!a&&r.return&&r.return()}finally{if(n)throw i}}return e},columnHeaderClass:function(t,e){var a="";return this.sortable&&(a+="sorting "),e===this.sortColumn&&("desc"===this.sortType?a+="sorting-desc ":a+="sorting-asc "),a+=this.getDataStyle(e,"th")},getDataStyle:function(t,e){var a="";switch(this.columns[t].type){case"number":case"percentage":case"decimal":case"date":case"text":a+="right-align ";break;default:a+="left-align "}return void 0!==e&&this.columns[t].hasOwnProperty(e+"Class")&&(a+=" ",a=this.columns[t][e+"Class"]),a},updateFilters:function(t,e){var a=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){a.$set(a.columnFilters,t.field,e)},400)},filterRows:function(){var t=this,e=JSON.parse(r()(this.rows));if(this.hasFilterRow){var a=!0,n=!1,i=void 0;try{for(var s,o=c()(this.columns);!(a=(s=o.next()).done);a=!0){var l=s.value;l.filterable&&this.columnFilters[l.field]&&(e=e.filter(function(e){if(l.filter)return l.filter(t.collect(e,l.field),t.columnFilters[l.field]);switch(l.type){case"number":case"percentage":case"decimal":return t.collect(e,l.field)==t.columnFilters[l.field];default:return t.collect(e,l.field).toLowerCase().startsWith(t.columnFilters[l.field].toLowerCase())}}))}}catch(t){n=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}}this.filteredRows=e},getCurrentIndex:function(t){return(this.currentPage-1)*this.currentPerPage+t+1}},watch:{columnFilters:{handler:function(t){this.filterRows()},deep:!0},rows:{handler:function(t){this.filterRows()},deep:!0},perPage:function(){this.perPage?this.currentPerPage=this.perPage:this.currentPerPage=10}},computed:{searchTerm:function(){return null!=this.externalSearchQuery?this.externalSearchQuery:this.globalSearchTerm},globalSearchAllowed:function(){return!(!this.globalSearch||!this.globalSearchTerm||"enter"==this.searchTrigger)||(null!=this.externalSearchQuery&&"enter"!=this.searchTrigger||!!this.forceSearch&&(this.forceSearch=!1,!0))},hasFilterRow:function(){if(!this.globalSearch){var t=!0,e=!1,a=void 0;try{for(var n,i=c()(this.columns);!(t=(n=i.next()).done);t=!0){if(n.value.filterable)return!0}}catch(t){e=!0,a=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw a}}}return!1},processedRows:function(){var t=this,e=this.filteredRows;if(this.globalSearchAllowed){var a=[],n=!0,i=!1,s=void 0;try{for(var r,o=c()(this.rows);!(n=(r=o.next()).done);n=!0){var h=r.value,u=!0,d=!1,f=void 0;try{for(var p,m=c()(this.columns);!(u=(p=m.next()).done);u=!0){var v=p.value;if(String(this.collectFormatted(h,v)).toLowerCase().search(this.searchTerm.toLowerCase())>-1){a.push(h);break}}}catch(t){d=!0,f=t}finally{try{!u&&m.return&&m.return()}finally{if(d)throw f}}}}catch(t){i=!0,s=t}finally{try{!n&&o.return&&o.return()}finally{if(i)throw s}}e=a}return!1===this.sortable||-1===this.sortColumn||"enter"==this.searchTrigger&&!this.sortChanged||(this.sortChanged=!1,e=e.sort(function(e,a){if(!t.columns[t.sortColumn])return 0;var n=function(e){return e=t.collect(e,t.columns[t.sortColumn].field),"date"===t.columns[t.sortColumn].type?e=Object(l.c)(e+"",t.columns[t.sortColumn].inputFormat,new Date):"string"==typeof e&&(e=e.toLowerCase(),"number"==t.columns[t.sortColumn].type&&(e=e.indexOf(".")>=0?parseFloat(e):parseInt(e))),e};return e=n(e),a=n(a),"date"===t.columns[t.sortColumn].type?Object(l.a)(e,a)*("desc"===t.sortType?-1:1):(e<a?-1:e>a?1:0)*("desc"===t.sortType?-1:1)})),"enter"==this.searchTrigger&&(this.filteredRows=e),e},paginated:function(){var t=this.processedRows;if(this.paginate){var e=(this.currentPage-1)*this.currentPerPage;(e>=this.processedRows.length||-1==this.currentPerPage)&&(this.currentPage=1,e=0);var a=t.length+1;-1!=this.currentPerPage&&(a=this.currentPage*this.currentPerPage),t=t.slice(e,a)}return t},paginatedInfo:function(){var t="";return t+=(this.currentPage-1)*this.currentPerPage?(this.currentPage-1)*this.currentPerPage:1,t+=" - ",t+=Math.min(this.processedRows.length,this.currentPerPage*this.currentPage),t+=" "+this.ofText+" ",t+=this.processedRows.length,-1==this.currentPerPage?"1 - "+this.processedRows.length+" "+this.ofText+" "+this.processedRows.length:t}},mounted:function(){this.filteredRows=JSON.parse(r()(this.rows));var t=!0,e=!1,a=void 0;try{for(var n,s=c()(this.filteredRows.entries());!(t=(n=s.next()).done);t=!0){var o=n.value,l=i()(o,2),h=l[0];l[1].originalIndex=h}}catch(t){e=!0,a=t}finally{try{!t&&s.return&&s.return()}finally{if(e)throw a}}if(this.perPage&&(this.currentPerPage=this.perPage),this.defaultSortBy){var u=!0,d=!1,f=void 0;try{for(var p,m=c()(this.columns.entries());!(u=(p=m.next()).done);u=!0){var v=p.value,g=i()(v,2),w=g[0];if(g[1].field===this.defaultSortBy.field){this.sortColumn=w,this.sortType=this.defaultSortBy.type||"asc",this.sortChanged=!0;break}}}catch(t){d=!0,f=t}finally{try{!u&&m.return&&m.return()}finally{if(d)throw f}}}}}},M93x:function(t,e,a){"use strict";function n(t){a("B/mo")}var i=a("xJD8"),s=a("9bVW"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,null,null);e.a=c.exports},M9W3:function(t,e,a){"use strict";var n=a("mtWM"),i=a.n(n),s=a("C6cS"),r=[{label:"ID",field:"id",width:"15%"},{label:"Name",field:"name",width:"50%"},{label:"Description",field:"description",type:"string",width:"20%"},{label:"Link",field:"link",type:"string",width:"20%"},{label:"Watch",field:"watchHTML",type:"boolean",width:"5%",html:!0}];e.a={name:"Search",data:function(){return{facets:[],user_facets:{},results:[],highlight:{},suggestions:{},page:0,numFound:0,numRowsDisplayed:0,searching:!0,watches:[],searchFor:"",bioTypes:[],columns:[],rows:[]}},created:function(){this.watches=s.a.fetch("biowatch-v1")},watch:{watches:{deep:!0,handler:function(t,e){s.a.save("biowatch-v1",t)}}},computed:{searchResultsLength:function(){return this.rows.length}},methods:{isSymbolWatched:function(t){var e=!1;return this.watches&&this.watches.forEach(function(a){a&&a.symbol.toUpperCase()===t.toUpperCase()&&(e=!0)}),e},generateCheckboxOrNot:function(t){return t?'<span style="color:green;margin:0;">&nbsp;&#10004;&nbsp;</span>':""},toggleWatch:function(t){if(t.watch=!t.watch,t.watchHTML=this.generateCheckboxOrNot(t.watch),this.watches){var e=t.symbol;if(t.watch)this.watches.push({title:t.name,symbol:e,price_usd:t.price_usd,completed:!1});else for(var a=0;a<this.watches.length;++a){var n=this.watches[a];if(n&&n.symbol.toUpperCase()===e.toUpperCase()){this.watches.splice(a,1);break}}}},doSearch:function(){var t=this,e=this.searchFor,a="https://beta.monarchinitiative.org/searchapi/"+e,n={};e.length<3?(this.rows=[],this.columns=[]):(console.log("query",a),i.a.get(a,{params:n}).then(function(e){console.log("response",e),t.searching=!1,t.numFound=e.data.response.numFound,t.numRowsDisplayed=e.data.response.docs.length,t.results=e.data.response.docs;var a=t.results.map(function(t){return{id:t.id_std,name:t.label_std[0],description:t.definition_std?t.definition_std[0]:"",link:t.iri_std,watchHTML:"<b>false</b>",watch:!1}});t.columns=r,t.rows=a}).catch(function(t){console.log(t)}))}}}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("rKEe"),s=a("zL8q"),r=a.n(s),o=(a("D/PP"),a("D4uH")),c=a("q8zI"),l=(a.n(c),a("UBeP")),h=(a.n(l),a("M93x")),u=a("YaEn");n.default.config.productionTip=!1,n.default.use(r.a),n.default.use(i.a),n.default.component("icon",o.a),new n.default({el:"#app",router:u.a,template:"<App/>",components:{App:h.a}})},Q94m:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"todoapp"},[t._m(0),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.watches.length,expression:"watches.length"}],staticClass:"main"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.allDone,expression:"allDone"}],staticClass:"toggle-all",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allDone)?t._i(t.allDone,null)>-1:t.allDone},on:{__c:function(e){var a=t.allDone,n=e.target,i=!!n.checked;if(Array.isArray(a)){var s=t._i(a,null);n.checked?s<0&&(t.allDone=a.concat([null])):s>-1&&(t.allDone=a.slice(0,s).concat(a.slice(s+1)))}else t.allDone=i}}}),t._v(" "),a("ul",{staticClass:"todo-list"},t._l(t.filteredWatchs,function(e){return a("li",{staticClass:"todo",class:{completed:e.completed,editing:e==t.editedWatch}},[a("div",{staticClass:"view"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"watch.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{__c:function(a){var n=e.completed,i=a.target,s=!!i.checked;if(Array.isArray(n)){var r=t._i(n,null);i.checked?r<0&&(e.completed=n.concat([null])):r>-1&&(e.completed=n.slice(0,r).concat(n.slice(r+1)))}else e.completed=s}}}),t._v(" "),a("label",{staticStyle:{overflow:"auto"}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.title)+" ("+t._s(e.symbol)+")")]),t._v(" "),a("span",{staticStyle:{float:"right"}},[t._v("$ "+t._s(e.price_usd))])]),t._v(" "),a("button",{staticClass:"destroy",staticStyle:{clear:"both"},on:{click:function(a){t.removeWatch(e)}}})])])}))]),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.watches.length,expression:"watches.length"}],staticClass:"footer"},[a("span",{staticClass:"todo-count"},[a("strong",{domProps:{textContent:t._s(t.remaining)}}),t._v(" "+t._s(t.pluralize("coin",t.remaining))+" watched\n        ")])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h1",[t._v("Watched Coin")]),t._v(" "),a("h6",[t._v("The Search tab allows the watch state to be toggled, and this Watch tab reflects those choices. Eventually, this Watch tab will update the prices when viewed.")])])}],s={render:n,staticRenderFns:i};e.a=s},UBeP:function(t,e){},Uaqt:function(t,e,a){"use strict";var n=a("mtWM"),i=a.n(n),s=a("C6cS"),r=[{label:"Symbol",field:"symbol",width:"15%"},{label:"Name",field:"name",width:"50%"},{label:"Price (USD)",field:"price_usd",type:"number",width:"20%"},{label:"Watch",field:"watchHTML",type:"boolean",width:"5%",html:!0}];e.a={name:"Search",data:function(){return{watches:[],searchFor:"",coinTypes:[],columns:[],rows:[]}},created:function(){this.fetchCoinTypes(),this.watches=s.a.fetch("coinwatch-v1")},watch:{watches:{deep:!0,handler:function(t,e){s.a.save("coinwatch-v1",t)}}},computed:{searchResultsLength:function(){return this.rows.length}},methods:{isSymbolWatched:function(t){var e=!1;return this.watches&&this.watches.forEach(function(a){a&&a.symbol.toUpperCase()===t.toUpperCase()&&(e=!0)}),e},generateCheckboxOrNot:function(t){return t?'<span style="color:green;margin:0;">&nbsp;&#10004;&nbsp;</span>':""},toggleWatch:function(t){if(t.watch=!t.watch,t.watchHTML=this.generateCheckboxOrNot(t.watch),this.watches){var e=t.symbol;if(t.watch)this.watches.push({title:t.name,symbol:e,price_usd:t.price_usd,completed:!1});else for(var a=0;a<this.watches.length;++a){var n=this.watches[a];if(n&&n.symbol.toUpperCase()===e.toUpperCase()){this.watches.splice(a,1);break}}}},doSearch:function(){var t=this,e=this.searchFor.toUpperCase();if(0===e.length)this.rows=[],this.columns=[];else{var a=[];this.coinTypes.forEach(function(n){if(n.name.toUpperCase().indexOf(e)>=0||n.symbol.toUpperCase().indexOf(e)>=0){var i=t.isSymbolWatched(n.symbol);a.push({symbol:n.symbol,name:n.name,price_usd:n.price_usd,watchHTML:t.generateCheckboxOrNot(i),watch:i})}}),this.columns=r,this.rows=a}},fetchCoinTypes:function(){var t=this;i.a.get("https://api.coinmarketcap.com/v1/ticker/").then(function(e){var a=e.data,n=a.map(function(t){return t});t.coinTypes=n}).catch(function(t){console.log(t)})}}}},VA7V:function(t,e,a){"use strict";var n=a("C8i/"),i=a("wQY9"),s=a("VU/8"),r=s(n.a,i.a,null,null,null);e.a=r.exports},XQbb:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("What is a Crypto-Currency?")]),t._v(" "),a("p",[t._v("\n    It's a digital currency in which encryption techniques are used to regulate the generation of units of currency \n    and verify the transfer of funds, operating independently of a central bank.\n  ")])])}],s={render:n,staticRenderFns:i};e.a=s},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),i=a("/ocq"),s=a("qSdX"),r=a("c27y"),o=a("eM2y"),c=a("e9th"),l=a("VA7V"),h=a("nFnF"),u=a("4Z1n");n.default.use(i.a);var d=new i.a({routes:[{path:"/",name:"Hello",component:s.a},{path:"/about",name:"About",component:r.a},{path:"/coinsearch",name:"CoinSearch",component:o.a},{path:"/biosearch",name:"BioSearch",component:c.a},{path:"/coins/:id",name:"Coins",component:l.a},{path:"/watch/",name:"CoinWatch",component:h.a,children:[{path:"all",component:h.a},{path:"active",component:h.a},{path:"completed",component:h.a}]},{path:"/biowatch/",name:"BioWatch",component:u.a,children:[{path:"all",component:u.a},{path:"active",component:u.a},{path:"completed",component:u.a}]}]});e.a=d},Zs8U:function(t,e,a){"use strict";e.a={name:"About"}},c27y:function(t,e,a){"use strict";var n=a("Zs8U"),i=a("XQbb"),s=a("VU/8"),r=s(n.a,i.a,null,null,null);e.a=r.exports},dQY8:function(t,e){},dXrS:function(t,e,a){"use strict";var n=a("7+uW"),i={};e.a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(n.default.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(n.default.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,a=t.height;return Math.max(e,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,a=0;this.$children.forEach(function(t){e=Math.max(e,t.width),a=Math.max(a,t.height)}),this.childrenWidth=e,this.childrenHeight=a,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(a-t.height)/2})}},register:function(t){for(var e in t){var a=t[e];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),i[e]=a}},icons:i}},e9th:function(t,e,a){"use strict";function n(t){a("CoQz")}var i=a("M9W3"),s=a("+5wV"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,null,null);e.a=c.exports},eCWD:function(t,e,a){"use strict";var n=a("C6cS"),i={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}};e.a={data:function(){return{watches:n.a.fetch("biowatch-v1"),newWatch:"",editedWatch:null,visibility:"all"}},watch:{$route:function(t,e){console.log("bio $route",t,e);var a=t.path.split(/\//g);3===a.length&&""===a[0]&&"watch"===a[1]&&(this.visibility=a[2])},watches:{deep:!0,handler:function(t,e){n.a.save("biowatch-v1",t)}}},computed:{filteredWatchs:function(){return i[this.visibility](this.watches)},remaining:function(){return i.active(this.watches).length},allDone:{get:function(){return 0===this.remaining},set:function(t){this.watches.forEach(function(e){e.completed=t})}}},methods:{pluralize:function(t,e){return e>1&&t.endsWith("y")&&(t=t.slice(0,t.length-1)+"ies"),t},addWatch:function(){var t=this.newWatch&&this.newWatch.trim();t&&(this.watches.push({title:t,completed:!1}),this.newWatch="")},removeWatch:function(t){var e=this.watches.indexOf(t);this.watches.splice(e,1)},editWatch:function(t){this.beforeEditCache=t.title,this.editedWatch=t},doneEdit:function(t){this.editedWatch&&(this.editedWatch=null,t.title=t.title.trim(),t.title||this.removeWatch(t))},cancelEdit:function(t){this.editedWatch=null,t.title=this.beforeEditCache},removeCompleted:function(){this.watches=i.active(this.watches)}},directives:{"watch-focus":function(t,e){e.value&&t.focus()}}}},eM2y:function(t,e,a){"use strict";function n(t){a("dQY8")}var i=a("Uaqt"),s=a("Ht/h"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,null,null);e.a=c.exports},gs45:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"good-table",class:{rtl:t.rtl}},[a("div",{class:{responsive:t.responsive}},[t.title?a("div",{staticClass:"table-header clearfix"},[a("h2",{staticClass:"table-title pull-left"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"actions pull-right"})]):t._e(),t._v(" "),a("table",{ref:"table",class:t.styleClass},[a("thead",[t.globalSearch&&null==t.externalSearchQuery?a("tr",[a("td",{attrs:{colspan:t.lineNumbers?t.columns.length+1:t.columns.length}},[a("div",{staticClass:"global-search"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.globalSearchTerm,expression:"globalSearchTerm"}],staticClass:"form-control global-search-input",attrs:{type:"text",placeholder:t.globalSearchPlaceholder},domProps:{value:t.globalSearchTerm},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.searchTable()},input:function(e){e.target.composing||(t.globalSearchTerm=e.target.value)}}})])])]):t._e(),t._v(" "),a("tr",[t.lineNumbers?a("th",{staticClass:"line-numbers"}):t._e(),t._v(" "),t._l(t.columns,function(e,n){return e.hidden?t._e():a("th",{class:t.columnHeaderClass(e,n),style:{width:e.width?e.width:"auto"},on:{click:function(e){t.sort(n)}}},[t._t("table-column",[a("span",[t._v(t._s(e.label))])],{column:e})],2)}),t._v(" "),t._t("thead-tr")],2),t._v(" "),t.hasFilterRow?a("tr",[t.lineNumbers?a("th"):t._e(),t._v(" "),t._l(t.columns,function(e,n){return e.hidden?t._e():a("th",[e.filterable?a("div",[e.filterDropdown?t._e():a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Filter "+e.label},domProps:{value:t.columnFilters[e.field]},on:{input:function(a){t.updateFilters(e,a.target.value)}}}),t._v(" "),e.filterDropdown?a("select",{staticClass:"form-control",domProps:{value:t.columnFilters[e.field]},on:{input:function(a){t.updateFilters(e,a.target.value)}}},[a("option",{attrs:{value:""}}),t._v(" "),t._l(e.filterOptions,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})],2):t._e()]):t._e()])})],2):t._e()]),t._v(" "),a("tbody",[t._l(t.paginated,function(e,n){return a("tr",{class:t.onClick?"clickable":"",on:{click:function(a){t.click(e,n)}}},[t.lineNumbers?a("th",{staticClass:"line-numbers"},[t._v(t._s(t.getCurrentIndex(n)))]):t._e(),t._v(" "),t._t("table-row",t._l(t.columns,function(n,i){return n.hidden?t._e():a("td",{class:t.getDataStyle(i,"td")},[n.html?t._e():a("span",[t._v(t._s(t.collectFormatted(e,n)))]),t._v(" "),n.html?a("span",{domProps:{innerHTML:t._s(t.collect(e,n.field))}}):t._e()])}),{row:e,formattedRow:t.formattedRow(e),index:n})],2)}),t._v(" "),0===t.processedRows.length?a("tr",[a("td",{attrs:{colspan:t.columns.length}},[t._t("emptystate",[a("div",{staticClass:"center-align text-disabled"},[t._v("\n                No data for table.\n              ")])])],2)]):t._e()],2)])]),t._v(" "),t.paginate?a("div",{staticClass:"table-footer clearfix"},[a("div",{staticClass:"datatable-length pull-left"},[a("label",[a("span",[t._v(t._s(t.rowsPerPageText))]),t._v(" "),t.perPage?a("span",{staticClass:"perpage-count"},[t._v(t._s(t.perPage))]):t._e(),t._v(" "),t.perPage?t._e():a("select",{staticClass:"browser-default",on:{change:t.onTableLength}},[a("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),a("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),a("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),a("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),a("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),a("option",{attrs:{value:"-1"}},[t._v(t._s(t.allText))])])])]),t._v(" "),a("div",{staticClass:"pagination-controls pull-right"},[a("a",{staticClass:"page-btn",attrs:{href:"javascript:undefined",tabindex:"0"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.previousPage(e)}}},[a("span",{staticClass:"chevron",class:{left:!t.rtl,right:t.rtl}}),t._v(" "),a("span",[t._v(t._s(t.prevText))])]),t._v(" "),a("div",{staticClass:"info"},[t._v(t._s(t.paginatedInfo))]),t._v(" "),a("a",{staticClass:"page-btn",attrs:{href:"javascript:undefined",tabindex:"0"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.nextPage(e)}}},[a("span",[t._v(t._s(t.nextText))]),t._v(" "),a("span",{staticClass:"chevron",class:{right:!t.rtl,left:t.rtl}})])])]):t._e()])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"global-search-icon"},[n("img",{attrs:{src:a("s1ZF"),alt:"Search Icon"}})])}],s={render:n,staticRenderFns:i};e.a=s},jW3l:function(t,e,a){"use strict";function n(t){a("tDAV")}var i=a("KE38"),s=a("gs45"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,"data-v-817655aa",null);e.a=c.exports},nFnF:function(t,e,a){"use strict";var n=a("E2v0"),i=a("Q94m"),s=a("VU/8"),r=s(n.a,i.a,null,null,null);e.a=r.exports},o7uZ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return a("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return a("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[a("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},i=[],s={render:n,staticRenderFns:i};e.a=s},pMZz:function(t,e,a){"use strict";var n=a("EFqf"),i=a.n(n);e.a={name:"Hello",data:function(){return{msg:"Pocket Monarch",markedText:i()("\nThis is a followup to my two-pint evaluation of the VueJS 2.0 stack, which resulted in the building of [VueDemo1](https://github.com/DoctorBud/VueDemo1) [demo](https://doctorbud.com/VueDemo1/#/).\n\nI added to VueDemo1 the following:\n\n- There is a **Search** tab that allows for the selection and *watching* of particular coin.\n- These watched coin are displayed on the **Watch** tab (which was hacked from the ToDo tab).\n- I used [good-table](https://github.com/xaksis/vue-good-table) to implement the search table.\n- A started using [Element](http://element.eleme.io/#/en-US) to provide some styling capability, rather than using my traditional [Bootstrap](http://getbootstrap.com).\n")}}}},q8zI:function(t,e){},qSdX:function(t,e,a){"use strict";var n=a("pMZz"),i=a("uH48"),s=a("VU/8"),r=s(n.a,i.a,null,null,null);e.a=r.exports},s1ZF:function(t,e,a){t.exports=a.p+"static/img/search_icon.6cf060d.png"},tDAV:function(t,e){},tzTO:function(t,e){},uH48:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("div",{staticClass:"marked",domProps:{innerHTML:t._s(t.markedText)}})])])],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},wQY9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("Name: "+t._s(t.coin.name))]),t._v(" "),a("p",[t._v("Symbol: "+t._s(t.coin.symbol))]),t._v(" "),a("p",[t._v("Price (USD): "+t._s(t.coin.price_usd))])])},i=[],s={render:n,staticRenderFns:i};e.a=s},xJD8:function(t,e,a){"use strict";e.a={name:"app",data:function(){return{isExpanded:!1}},methods:{collapse:function(){this.isExpanded=!1},handleOpen:function(t,e){},handleClose:function(t,e){}}}}},["NHnr"]);
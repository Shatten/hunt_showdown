(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["66db10ba"],{"00dc":function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"flex flex-center"},[e("div",{staticClass:"flex flex-center"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.dict_toggle.map,expression:"dict_toggle.map"}],ref:"img1",staticClass:"img_map",attrs:{src:t.link_local_map}}),t._l(Object.keys(this.coord_points),(function(i){return e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.dict_toggle.map,expression:"dict_toggle.map"}],key:i,staticClass:"pos1",style:{marginLeft:t.x_pos(t.coord_points[i].coord[0])+"px",marginTop:t.y_pos(t.coord_points[i].coord[1])+"px"},on:{click:function(e){return t.open_pos(i)}}},[e("q-icon",{staticClass:"text-yellow",attrs:{size:"35px",name:"add"}})],1)})),e("div",{staticClass:"q-ma-md"},t._l(Object.keys(this.coord_points),(function(i){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.dict_toggle[i],expression:"dict_toggle[name_pos]"}],key:i,staticStyle:{"max-height":"80vh","max-width":"80vw"}},[e("q-btn",{attrs:{icon:"clear"},on:{click:function(e){return t.close_pos(i)}}},[e("q-icon",{staticClass:"text-black",attrs:{size:"40px",name:""}})],1),e("b",{staticStyle:{"font-size":"20px"}},[t._v("  "+t._s(t.coord_points[i].desc))]),e("br"),e("img",{staticStyle:{"max-height":"80vh","max-width":"80vw"},attrs:{src:t.coord_points[i].link_img}})],1)})),0)],2)])},s=[],n=(e("ac6a"),e("cadf"),e("06db"),e("456d"),e("c5f6"),{name:"local_region",props:{link_local_map:String,coord_points:{name_pos:[Number,Number]},points_data:Object},data:function(){return{imgWidth:0,imgHeight:0,mouse_var:Object,dict_toggle:{map:!0},idInterval:0}},methods:{x_pos:function(t){return Math.round(this.imgWidth*t)},y_pos:function(t){return Math.round(this.imgHeight*t)},set_coord:function(){this.imgHeight>0&&clearInterval(this.idInterval),this.imgWidth=this.$refs.img1.clientWidth,this.imgHeight=this.$refs.img1.clientHeight},open_pos:function(t){this.dict_toggle[t]=!this.dict_toggle[t],this.dict_toggle.map=!1,this.idInterval=setInterval(this.set_coord,100)},close_pos:function(t){this.dict_toggle[t]=!1,this.dict_toggle.map=!0,this.idInterval=setInterval(this.set_coord,100)},number_point:function(t){var i=Object.keys(this.coord_points).indexOf(t)+1;return i}},computed:{},mounted:function(){this.$nextTick((function(){var t=this;for(var i in this.idInterval=setInterval(this.set_coord,100),window.onresize=function(i){t.imgWidth=t.$refs.img1.clientWidth,t.imgHeight=t.$refs.img1.clientHeight},Object.keys(this.coord_points))this.dict_toggle[i]=!1}))}}),c=n,a=(e("e1c0"),e("2877")),r=e("fe09"),l=Object(a["a"])(c,o,s,!1,null,"4c4918b1",null);i["a"]=l.exports;l.options.components=Object.assign({QPage:r["j"],QBtn:r["a"],QIcon:r["d"]},l.options.components||{})},"2bee":function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"flex flex-center"},[e("LocalRegion",{attrs:{link_local_map:"statics/imgs/maps/bolota/rocha.png",coord_points:t.coord_points}})],1)},s=[],n=e("00dc"),c={name:"rybnoe_hoz",components:{LocalRegion:n["a"]},data:function(){return{coord_points:{pos1:{coord:[.18,.26],link_img:"https://sun9-72.userapi.com/c858220/v858220162/90ea5/clnaYUqd0_A.jpg",desc:"Кассовый аппарат на Alain & Son`s Fish в лодке"},pos2:{coord:[.12,.102],link_img:"https://sun9-21.userapi.com/c858220/v858220162/90eb8/dsIZ4Pg53cg.jpg",desc:"Кассовый аппарат на Alain & Son`s Fish"}}}}},a=c,r=e("2877"),l=e("fe09"),d=Object(r["a"])(a,o,s,!1,null,"637bf28a",null);i["default"]=d.exports;d.options.components=Object.assign({QPage:l["j"]},d.options.components||{})},"2f69":function(t,i,e){},e1c0:function(t,i,e){"use strict";var o=e("2f69"),s=e.n(o);s.a}}]);
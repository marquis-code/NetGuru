(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{257:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("16a4871f",content,!0,{sourceMap:!1})},261:function(t,e,n){"use strict";n(257)},262:function(t,e,n){var r=n(105)((function(i){return i[1]}));r.push([t.i,"button[data-v-08271064]{transition:opacity .3s;opacity:.5}button[data-v-08271064]:hover{opacity:1}",""]),r.locals={},t.exports=r},268:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{currentIndex:0,isMobile:!1,startX:0,currentTranslate:0,items:[{text:"Lead generation tool that helps travelers to make bookings",amount:"$47M"},{text:"Data-driven SME lending platform provider",amount:"$20M"},{text:"Investment platform that enable to invest in private equity funds",amount:"$28M"},{text:"Self-care mobile app that lets users practice gratitude",amount:"$5M"},{text:"Data-driven SME lending platform provider",amount:"$20M"},{text:"Investment platform that enable to invest in private equity funds",amount:"$28M"}]}},computed:{carouselStyle:function(){return{transform:"translateX(".concat(this.currentTranslate,"px)")}}},methods:{handleTouchStart:function(t){this.startX=t.touches[0].clientX,this.currentTranslate=-this.currentIndex*this.$el.clientWidth},handleTouchMove:function(t){var e=t.touches[0].clientX-this.startX;this.currentTranslate=-this.currentIndex*this.$el.clientWidth+e},handleTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.startX;e>100&&this.currentIndex>0?this.previous():e<-100&&this.currentIndex<this.items.length-1?this.next():this.currentTranslate=-this.currentIndex*this.$el.clientWidth},next:function(){this.currentIndex<this.items.length-1&&(this.currentIndex++,this.updatePosition())},previous:function(){this.currentIndex>0&&(this.currentIndex--,this.updatePosition())},updatePosition:function(){this.currentTranslate=-this.currentIndex*this.$el.clientWidth},handleResize:function(){this.isMobile=window.innerWidth<768,this.updatePosition()}},mounted:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},o=(n(261),n(44)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"space-y-6"},[e("div",{staticClass:"flex justify-center items-center gap-x-3"},[e("button",{staticClass:"disabled:opacity-25 disabled:cursor-not-allowed",attrs:{disabled:t.currentIndex<=0},on:{click:t.previous}},[e("svg",{staticClass:"cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:t.previous}},[e("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])]),t._v(" "),e("button",{staticClass:"disabled:opacity-25 disabled:cursor-not-allowed",attrs:{disabled:0===t.currentIndex},on:{click:t.next}},[e("svg",{staticClass:"cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:t.next}},[e("path",{attrs:{d:"M5 12h13M12 5l7 7-7 7"}})])])]),t._v(" "),e("div",{staticClass:"relative overflow-hidden w-full select-none",on:{touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[e("div",{staticClass:"flex transition-transform duration-300",style:t.carouselStyle},t._l(t.items,(function(n,r){return e("div",{key:r,staticClass:"flex-none w-full md:w-1/3 p-2",class:{"w-full":t.isMobile,"w-1/3":!t.isMobile}},[e("div",{staticClass:"flex justify-center items-center flex-col"},[e("p",{staticClass:"text-center mt-2 text-lg font-medium text-gray-900"},[t._v(t._s(n.text))]),t._v(" "),e("p",{staticClass:"text-center mt-2 text-blue-600 text-2xl"},[t._v(t._s(n.amount))]),t._v(" "),e("p",{staticClass:"mt-2 text-sm text-gray-500"},[t._v("Granted in funding")])])])})),0)])])}),[],!1,null,"08271064",null);e.default=component.exports}}]);
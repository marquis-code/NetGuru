(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{256:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("7adac0a7",content,!0,{sourceMap:!1})},259:function(t,e,n){"use strict";n(256)},260:function(t,e,n){var o=n(105)((function(i){return i[1]}));o.push([t.i,"button[data-v-7126b0f8]{transition:opacity .3s;opacity:.5}button[data-v-7126b0f8]:hover{opacity:1}",""]),o.locals={},t.exports=o},263:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{currentIndex:0,isMobile:!1,startX:0,currentTranslate:0,items:[{image:"https://www.netguru.com/hs-fs/hubfs/Lina%20Pas%C5%82awska%20Disrupion%20Insights%20Blog%20header.jpg?width=384&height=202&name=Lina%20Pas%C5%82awska%20Disrupion%20Insights%20Blog%20header.jpg",text:"Disruption Insights: Be an Ambassador of Your Product"},{image:"https://www.netguru.com/hs-fs/hubfs/service_design-2.jpeg?width=384&height=202&name=service_design-2.jpeg",text:" Anti-patterns: 8 Things Not to Do in Your Quest to Build a Great Product"},{image:"https://www.netguru.com/hs-fs/hubfs/social-suggested-images/www.netguru.comhs-fshubfs_N19%20ModulesPhotosOffice%20LifeDSC_8422%20_HD.jpg?width=384&height=202&name=www.netguru.comhs-fshubfs_N19%20ModulesPhotosOffice%20LifeDSC_8422%20_HD.jpg",text:"Create an Event Where People Take Ownership, Self-Organize, and Solve Real Business Problems"},{image:"https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Photos%20HD/Netguru-Biuro-2018-5205.jpg?width=384&height=202&name=Netguru-Biuro-2018-5205.jpg",text:"What Is POC (Proof of Concept) in Software Development?"},{image:"https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Life/Product_manager_role_responsibilities.jpg?width=384&height=202&name=Product_manager_role_responsibilities.jpg",text:"What is Product Manager: Roles, Responsibilities, and Best Practices"},{image:"https://www.netguru.com/hs-fs/hubfs/PLEASE%2c%20use%20this%20one%20as%20the%20first%20option%20.png?width=384&height=202&name=PLEASE%2c%20use%20this%20one%20as%20the%20first%20option%20.png",text:"Disruption Insights: Your Software Serves the Market, Not a Small Group of Users"},{image:"https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Life/Product_manager_role_responsibilities.jpg?width=384&height=202&name=Product_manager_role_responsibilities.jpg",text:"What is Product Manager: Roles, Responsibilities, and Best Practices"},{image:"https://www.netguru.com/hs-fs/hubfs/PLEASE%2c%20use%20this%20one%20as%20the%20first%20option%20.png?width=384&height=202&name=PLEASE%2c%20use%20this%20one%20as%20the%20first%20option%20.png",text:"Disruption Insights: Your Software Serves the Market, Not a Small Group of Users"},{image:"https://www.netguru.com/hs-fs/hubfs/Concentrated%20bearded%20young%20man%20using%20laptop%20while%20his%20friends%20studying%20together-2.jpeg?width=384&height=202&name=Concentrated%20bearded%20young%20man%20using%20laptop%20while%20his%20friends%20studying%20together-2.jpeg",text:"How to Build UX Product Vision as a Designer?"},{image:"https://www.netguru.com/hs-fs/hubfs/Product%20Anti-patterns%20Ignoring%20Right%20Users...%20hero%20image%201200x630.jpg?width=384&height=202&name=Product%20Anti-patterns%20Ignoring%20Right%20Users...%20hero%20image%201200x630.jpg",text:"Product Anti-patterns: Ignoring Right Users in Product Discovery"},{image:"https://www.netguru.com/hs-fs/hubfs/growth_strategy.jpg?width=384&height=202&name=growth_strategy.jpg",text:"Product Anti-patterns: Lack Of Problem-Solution Fit"},{text:"Product Anti-patterns: Jack Of All Trades As The Product Manager’s Role",image:"https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Photos%20HD/Netguru-Biuro-2018-5651.jpg?width=384&height=202&name=Netguru-Biuro-2018-5651.jpg"},{text:"Product Anti-patterns: Poor Product Strategy",image:"https://www.netguru.com/hs-fs/hubfs/product_strategy-3.jpg?width=384&height=202&name=product_strategy-3.jpg"},{image:"https://www.netguru.com/hs-fs/hubfs/Product%20Design%20Services%20Netguru%20Krak%C3%B3w%20Hub.jpg?width=384&height=202&name=Product%20Design%20Services%20Netguru%20Krak%C3%B3w%20Hub.jpg",text:"Product Anti-patterns: Misalignment in Team"}]}},computed:{carouselStyle:function(){return{transform:"translateX(".concat(this.currentTranslate,"px)")}}},methods:{handleTouchStart:function(t){this.startX=t.touches[0].clientX,this.currentTranslate=-this.currentIndex*this.$el.clientWidth},handleTouchMove:function(t){var e=t.touches[0].clientX-this.startX;this.currentTranslate=-this.currentIndex*this.$el.clientWidth+e},handleTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.startX;e>100&&this.currentIndex>0?this.previous():e<-100&&this.currentIndex<this.items.length-1?this.next():this.currentTranslate=-this.currentIndex*this.$el.clientWidth},next:function(){this.currentIndex<this.items.length-1&&(this.currentIndex++,this.updatePosition())},previous:function(){this.currentIndex>0&&(this.currentIndex--,this.updatePosition())},updatePosition:function(){this.currentTranslate=-this.currentIndex*this.$el.clientWidth},handleResize:function(){this.isMobile=window.innerWidth<768,this.updatePosition()}},mounted:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},r=(n(259),n(44)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"space-y-10"},[e("div",{staticClass:"flex justify-center items-center gap-x-3"},[e("button",{staticClass:"disabled:opacity-25 disabled:cursor-not-allowed",attrs:{disabled:t.currentIndex<=0},on:{click:t.previous}},[e("svg",{staticClass:"cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])]),t._v(" "),e("button",{staticClass:"disabled:opacity-25 disabled:cursor-not-allowed",attrs:{disabled:4==t.currentIndex},on:{click:t.next}},[e("svg",{staticClass:"cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M5 12h13M12 5l7 7-7 7"}})])])]),t._v(" "),e("div",{staticClass:"relative overflow-hidden w-full select-none",on:{touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[e("div",{staticClass:"flex transition-transform duration-300",style:t.carouselStyle},t._l(t.items,(function(n,o){return e("div",{key:o,staticClass:"flex-none w-full md:w-1/3 p-2",class:{"w-full":t.isMobile,"w-1/3":!t.isMobile}},[e("img",{staticClass:"w-full object-cover h-64 rounded-xl",attrs:{src:n.image,alt:"Description of image"}}),t._v(" "),e("p",{staticClass:"mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"},[t._v(t._s(n.text))])])})),0)])])}),[],!1,null,"7126b0f8",null);e.default=component.exports}}]);
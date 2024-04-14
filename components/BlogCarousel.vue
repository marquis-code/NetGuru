<template>
  <section class="space-y-10">
    <div class="flex justify-center items-center gap-x-3">
      <button @click="previous" :disabled="currentIndex <= 0"
        class="disabled:opacity-25 disabled:cursor-not-allowed">
        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
          fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </button>
      <button :disabled="currentIndex == 4" @click="next"
        class=" disabled:opacity-25 disabled:cursor-not-allowed">
        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
          fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h13M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <div class="relative overflow-hidden w-full select-none" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">
      <div class="flex transition-transform duration-300" :style="carouselStyle">
        <div v-for="(item, index) in items" :key="index" class="flex-none w-full md:w-1/3 p-2"
          :class="{ 'w-full': isMobile, 'w-1/3': !isMobile }">
          <img :src="item.image" alt="Description of image" class="w-full object-cover h-64 rounded-xl">
          <p class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      isMobile: false,
      startX: 0,
      currentTranslate: 0,
      items: [
        { image: 'https://www.netguru.com/hs-fs/hubfs/Lina%20Pas%C5%82awska%20Disrupion%20Insights%20Blog%20header.jpg?width=384&height=202&name=Lina%20Pas%C5%82awska%20Disrupion%20Insights%20Blog%20header.jpg', text: 'Disruption Insights: Be an Ambassador of Your Product' },
        { image: 'https://www.netguru.com/hs-fs/hubfs/service_design-2.jpeg?width=384&height=202&name=service_design-2.jpeg', text: ' Anti-patterns: 8 Things Not to Do in Your Quest to Build a Great Product' },
        { image: 'https://www.netguru.com/hs-fs/hubfs/social-suggested-images/www.netguru.comhs-fshubfs_N19%20ModulesPhotosOffice%20LifeDSC_8422%20_HD.jpg?width=384&height=202&name=www.netguru.comhs-fshubfs_N19%20ModulesPhotosOffice%20LifeDSC_8422%20_HD.jpg', text: 'Create an Event Where People Take Ownership, Self-Organize, and Solve Real Business Problems' },
        {
          image: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Photos%20HD/Netguru-Biuro-2018-5205.jpg?width=384&height=202&name=Netguru-Biuro-2018-5205.jpg', text: 'What Is POC (Proof of Concept) in Software Development?'
        },
        {
          image: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Life/Product_manager_role_responsibilities.jpg?width=384&height=202&name=Product_manager_role_responsibilities.jpg',
          text: 'What is Product Manager: Roles, Responsibilities, and Best Practices'
        }, {
          image: 'https://www.netguru.com/hs-fs/hubfs/PLEASE%2c%20use%20this%20one%20as%20the%20first%20option%20.png?width=384&height=202&name=PLEASE%2c%20use%20this%20one%20as%20the%20first%20option%20.png',
          text: 'Disruption Insights: Your Software Serves the Market, Not a Small Group of Users'
        },
        {
          image: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Life/Product_manager_role_responsibilities.jpg?width=384&height=202&name=Product_manager_role_responsibilities.jpg',
          text: 'What is Product Manager: Roles, Responsibilities, and Best Practices'
        },
        {
          image: 'https://www.netguru.com/hs-fs/hubfs/PLEASE%2c%20use%20this%20one%20as%20the%20first%20option%20.png?width=384&height=202&name=PLEASE%2c%20use%20this%20one%20as%20the%20first%20option%20.png',
          text: 'Disruption Insights: Your Software Serves the Market, Not a Small Group of Users'
        },
        {
          image: 'https://www.netguru.com/hs-fs/hubfs/Concentrated%20bearded%20young%20man%20using%20laptop%20while%20his%20friends%20studying%20together-2.jpeg?width=384&height=202&name=Concentrated%20bearded%20young%20man%20using%20laptop%20while%20his%20friends%20studying%20together-2.jpeg',
          text: 'How to Build UX Product Vision as a Designer?'
        },
        {
          image: 'https://www.netguru.com/hs-fs/hubfs/Product%20Anti-patterns%20Ignoring%20Right%20Users...%20hero%20image%201200x630.jpg?width=384&height=202&name=Product%20Anti-patterns%20Ignoring%20Right%20Users...%20hero%20image%201200x630.jpg',
          text: 'Product Anti-patterns: Ignoring Right Users in Product Discovery'
        },
        {
          image: 'https://www.netguru.com/hs-fs/hubfs/growth_strategy.jpg?width=384&height=202&name=growth_strategy.jpg',
          text: 'Product Anti-patterns: Lack Of Problem-Solution Fit'
        },
        {
          text: 'Product Anti-patterns: Jack Of All Trades As The Product Manager’s Role',
          image: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Photos%20HD/Netguru-Biuro-2018-5651.jpg?width=384&height=202&name=Netguru-Biuro-2018-5651.jpg'
        },
        {
          text: 'Product Anti-patterns: Poor Product Strategy',
          image: 'https://www.netguru.com/hs-fs/hubfs/product_strategy-3.jpg?width=384&height=202&name=product_strategy-3.jpg'
        },
        {
          image: 'https://www.netguru.com/hs-fs/hubfs/Product%20Design%20Services%20Netguru%20Krak%C3%B3w%20Hub.jpg?width=384&height=202&name=Product%20Design%20Services%20Netguru%20Krak%C3%B3w%20Hub.jpg',
          text: 'Product Anti-patterns: Misalignment in Team'
        }
      ]
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(${this.currentTranslate}px)`
      };
    }
  },
  methods: {
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
      this.currentTranslate = -this.currentIndex * this.$el.clientWidth;
    },
    handleTouchMove(event) {
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - this.startX;
      this.currentTranslate = -this.currentIndex * this.$el.clientWidth + deltaX;
    },
    handleTouchEnd(event) {
      const touchDelta = event.changedTouches[0].clientX - this.startX;
      if (touchDelta > 100 && this.currentIndex > 0) {
        this.previous();
      } else if (touchDelta < -100 && this.currentIndex < this.items.length - 1) {
        this.next();
      } else {
        // Reset to the original position if not enough movement to change the slide
        this.currentTranslate = -this.currentIndex * this.$el.clientWidth;
      }
    },
    next() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
        this.updatePosition();
      }
    },
    previous() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updatePosition();
      }
    },
    updatePosition() {
      this.currentTranslate = -this.currentIndex * this.$el.clientWidth;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
      this.updatePosition();
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
button {
  transition: opacity 0.3s;
  opacity: 0.5;
}

button:hover {
  opacity: 1;
}
</style>

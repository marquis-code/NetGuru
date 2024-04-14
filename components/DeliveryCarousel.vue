<template>
  <section class="space-y-6">
    <div class="flex justify-center items-center gap-x-3">
      <button @click="previous" :disabled="currentIndex <= 0" class="disabled:opacity-25 disabled:cursor-not-allowed">
        <svg @click="previous" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
          viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </button>
      <button :disabled="currentIndex === 0" @click="next" class="disabled:opacity-25 disabled:cursor-not-allowed">
        <svg @click="next" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
          viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M5 12h13M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <div class="relative overflow-hidden w-full select-none" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">
      <div class="flex transition-transform duration-300" :style="carouselStyle">
        <div v-for="(item, index) in items" :key="index" class="flex-none w-full md:w-1/3 p-2"
          :class="{ 'w-full': isMobile, 'w-1/3': !isMobile }">
          <div class="flex justify-center items-center flex-col">
            <p class="text-center mt-2 text-lg font-medium text-gray-900">{{ item.text }}</p>
            <p class="text-center mt-2 text-blue-600 text-2xl">{{ item.amount }}</p>
            <p class="mt-2 text-sm text-gray-500">Granted in funding</p>
          </div>
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
        {
          text: 'Lead generation tool that helps travelers to make bookings',
          amount: '$47M'
        },
        {
          text: 'Data-driven SME lending platform provider',
          amount: '$20M'
        },
        {
          text: 'Investment platform that enable to invest in private equity funds',
          amount: '$28M'
        },
        {
          text: 'Self-care mobile app that lets users practice gratitude',
          amount: '$5M'
        },
        {
          text: 'Data-driven SME lending platform provider',
          amount: '$20M'
        },
        {
          text: 'Investment platform that enable to invest in private equity funds',
          amount: '$28M'
        },
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

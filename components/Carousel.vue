<template>
  <div class="relative overflow-hidden w-full select-none"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <div class="flex transition-transform duration-300" :style="carouselStyle">
      <div v-for="(item, index) in items" :key="index"
           class="flex-none w-full md:w-1/3 p-2"
           :class="{'w-full': isMobile, 'w-1/3': !isMobile}">
        <img :src="require(`@/assets/img/${item.image}`)" alt="Description of image" class="w-full object-cover h-64">
        <p class="text-center mt-2">{{ item.text }}</p>
      </div>
    </div>
    <button @click="previous" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer z-10">
      &#8592;
    </button>
    <button @click="next" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer z-10">
      &#8594;
    </button>
  </div>
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
        { image: 'bg.png', text: 'Item 1' },
        { image: 'bg.png', text: 'Item 2' },
        { image: 'bg.png', text: 'Item 3' },
        { image: 'bg.png', text: 'Item 4' }
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



<!-- <template>
  <div class="relative overflow-hidden" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <div class="flex transition-transform duration-300" :style="carouselStyle">
      <div v-for="(item, index) in items" :key="index"
           class="flex-none w-full md:w-1/3 p-2"
           :class="{'w-full': isMobile, 'w-1/3': !isMobile}">
        <img :src="require(`@/assets/img/${item.image}`)" alt="Description of image" class="w-full object-cover h-64">
        <p class="text-center mt-2">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      isMobile: false,
      startX: 0,
      items: [
        { image: 'bg.png', text: 'Item 1' },
        { image: 'bg.png', text: 'Item 2' },
        { image: 'bg.png', text: 'Item 3' },
        { image: 'bg.png', text: 'Item 4' }
      ]
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`
      };
    }
  },
  methods: {
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchEnd(event) {
      const touchDelta = event.changedTouches[0].clientX - this.startX;
      if (touchDelta > 50 && this.currentIndex > 0) { // Swipe right
        this.currentIndex--;
      } else if (touchDelta < -50 && this.currentIndex < this.items.length - 1) { // Swipe left
        this.currentIndex++;
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
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
</script> -->


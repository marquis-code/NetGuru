<template>
  <div class="flex gap-x-3 justify-center items-center">
    <!-- Left Marquee Container -->
    <div class="flex flex-col overflow-hidden h-full w-1/2">
      <div class="marquee marquee-left space-y-3">
        <div class="image-container relative" v-for="n in 10" :key="`left-${n}`">
          <img :src="require(`@/assets/img/bg${n}.jpg`)" alt="marquee image" />
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        </div>
      </div>
    </div>
    <!-- Right Marquee Container -->
    <div class="flex flex-col overflow-hidden h-full w-1/2">
      <div class="marquee marquee-right space-y-3">
        <div class="image-container relative" v-for="n in 10" :key="`right-${n}`">
          <img :src="require(`@/assets/img/bg${n}.jpg`)" alt="marquee image" />
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarqueeImages',
};
</script>

<style scoped>
.image-container {
  height: 100vh;
  /* Adjust as per your need */
}

.marquee {
  position: relative;
  height: 200%;
  /* Double the height for the animation */
  display: flex;
  flex-direction: column;
}

.marquee-left {
  animation: marquee-left 10s linear infinite;
}

.marquee-right {
  animation: marquee-right 10s linear infinite;
}

@keyframes marquee-left {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-50%);
    /* Moves half the total height */
  }
}

@keyframes marquee-right {
  0% {
    transform: translateY(-50%);
    /* Start halfway up */
  }

  100% {
    transform: translateY(0);
  }
}
</style>

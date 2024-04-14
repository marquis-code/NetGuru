<template>
  <div class="mx-auto max-w-7xl">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <div class="px-6 md:px-0 space-y-10 mt-6">
        <div v-for="item in faqs" :key="item.id" class="overflow-hidden border-b">
          <button class="w-full text-left py-2 pb-10 transition-colors duration-300 flex justify-between items-center"
            @click="toggle(item.id)">
            <p class="text-gray-800 font-semibold text-base md:text-lg">
              {{ item.question }}
            </p>
            <span class="relative h-5 w-5 shrink-0">
              <svg v-if="isClose(item.id)" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
              </svg>
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
              </svg>
              <svg v-if="isOpen(item.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="#4a4a4a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          <div v-if="isOpen(item.id)" class="overflow-hidden transition-max-height duration-500"
            :style="{ maxHeight: isOpen(item.id) ? `${maxHeight}px` : '0' }">
            <p class="p-1 lg:p-4 font-light pb-6 text-gray-900  text-sm leading-loose rounded-lg">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPublicationsDropdown: false,
      openId: null,
      maxHeight: 0, // You might need to adjust this based on your content
      faqs: [
        {
          id: 1, question: 'Why are Product Managers important?', answer: `Product Managers are a guiding hand for your team. They are responsible for assisting in building products that surpass business objectives and solve customer needs. In summary, they maximize success at every step of the product's life-cycle by managing a team's timeline and quality of work, allowing the team to reach a potential that they never thought possible.`
        },
        {
          id: 2, question: 'What is the difference between a Product Manager and a Project Manager?', answer: 'A Product Manager is someone who discovers what users need and prioritizes what to build next, rallying the team around a product roadmap. In contrast, a Project Owner is responsible for internal processes, procedural work, timeline, and budgeting.'
        },
        {
          id: 3,
          question: `What is Agile Product Management?
`,
          answer: 'Agile Product Management is essentially how it sounds. It encourages an adaptive approach to product planning and implementation by quickly responding to feedback. This information helps to build products that customers want and need.'
        },
        {
          id: 4,
          question: `Is Product Management something for your business?
`,
          answer: 'Much depends on the type of your organization, your product, your current needs, problems, requirements, and the product knowledge, skills, and resources that you need. Schedule a commitment-free meeting with us and let us look at your business with our product eyes.'
        },
        {
          id: 5,
          question: `Why is strategy planning important to your business?
`,
          answer: 'Strategy planning is a key to success — finding a way to reach for the top, then executing the plan and measuring results. Apart from formulating a strategy, a product expert also coordinates its execution with relevant teams. Setting and measuring objectives and key results helps to effectively drive growth.'
        }
      ]
    }
  },
  methods: {
    toggle(id) {
      this.openId = this.openId === id ? null : id
      // Adjust maxHeight to fit your content or calculate dynamically
      this.maxHeight = this.openId ? 200 : 0 // Example static height
    },
    isOpen(id) {
      return this.openId === id
    },
    isClose(id) {
      return this.openId !== id
    }
  }
}
</script>

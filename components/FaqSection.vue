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
          id: 1, question: 'What industries do you specialize in for software development?', answer: `Buildr has extensive experience in a wide range of industries, including technology, healthcare, finance, education, and retail. Our diverse expertise allows us to tailor solutions that meet industry-specific challenges and regulatory requirements.`
        },
        {
          id: 2, question: 'How does Buildr ensure that the developed app is user-friendly?', answer: 'Our development process integrates continuous user feedback and usability testing. By focusing on intuitive design and user-centered functionality from the earliest stages, we ensure our applications are accessible and easy to navigate for a diverse user base.'
        },
        {
          id: 3,
          question: ` Can Buildr handle the scaling of applications for growing businesses?
`,
          answer: 'Absolutely. Scalability is at the heart of our development philosophy. We design applications with the potential for growth, ensuring they can handle increasing loads and users without compromising performance or security.'
        },
        {
          id: 4,
          question: `What is included in your quality assurance process?
`,
          answer: 'Our quality assurance process includes comprehensive manual testing and automated tests covering functionality, performance, security, and user experience aspects. This rigorous testing ensures that the final product is reliable and market-ready..'
        },
        {
          id: 5,
          question: `How do you handle product design for multiple platforms (e.g., Android, iOS, web)?
`,
          answer: 'Our product design team employs a responsive design strategy to ensure seamless functionality and aesthetic coherence across all platforms, from mobile devices to desktops. We use the latest tools and standards to maintain performance and user experience regardless of the platform.'
        }, {
          id: 6,
          question: 'What is your approach to project management and communication during a project?',
          answer: 'We use an agile project management approach, allowing for flexibility and iterative progress through regular sprints. Communication is transparent and frequent, with regular updates and checkpoints with clients to ensure alignment and satisfaction.'
        },
        {
          id: 7,
          question: 'How long does it typically take to develop a custom application?',
          answer: `The development timeline varies based on the project's complexity, scope, and specific client requirements. Typically, a project can take anywhere from a few weeks to several months. We provide a detailed timeline after the initial project analysis phase.`
        },
        {
          id: 8,
          question: 'Do you provide support and maintenance after the application is launched?',
          answer: `Yes, we offer comprehensive post-launch support and maintenance services to ensure your application remains up-to-date with the latest technology standards and is free from any operational issues.`
        },
        {
          id: 9,
          question: `How does Buildr stay ahead with the latest technologies and industry standards?`,
          answer: `Our team continually educates themselves on emerging technologies and industry trends through regular training, workshops, and certification programs. This commitment ensures we are always equipped to provide innovative and cutting-edge solutions.`
        },
        {
          id: 10,
          question: `Can Buildr integrate existing systems with new applications?`,
          answer: `Yes, we specialize in system integration and can seamlessly integrate new applications with your existing business systems to enhance functionality and user experience without disrupting your current operations.`
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

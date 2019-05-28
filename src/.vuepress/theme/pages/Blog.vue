<template>
  <div class="blog main spotlight-container">
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollMarginTop: 100
    }
  },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },

  methods: {
    scrollToHook (id) {
      const targetPosition = document.querySelector(id).offsetTop
      window.scroll({
        top: targetPosition - this.scrollMarginTop,
        behavior: 'smooth'
      })
    }
  }
}
</script>

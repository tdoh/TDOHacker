<template>
  <div class="home spotlight-container">
    <header class="spotlight">
      <div class="content">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroImageAlt"
        >

        <h1 v-show="!data.hideTitle">{{ data.heroText || $title }}</h1>

        <p class="description">
          {{ data.tagline || $description }}
        </p>

        <p
          class="action button"
          v-if="data.actionText && data.actionLink"
        >
          <NavLink
            class="action-button"
            :item="actionLink"
          />
        </p>
      </div>
    </header>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },

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
  }
}
</script>

<style lang="stylus" scoped>
@import './styles/config.styl'

.home
  color: $white
  header
    background-image url(/assets/img/security-with-code.svg)
    background-position right center
    background-repeat no-repeat

    .content
      margin-left 0
      margin-right auto
      text-shadow 0 0 1rem rgba($black, 1)
</style>

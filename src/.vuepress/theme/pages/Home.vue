<template>
  <div class="home main spotlight-container">
    <header class="spotlight background-overflow">
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
          <a
            class="action-button"
            @click="scrollToHook(actionLink.link)"
          >
            {{ actionLink.text }}
          </a>
        </p>
      </div>
    </header>
    <div id="next" class="spotlight team-container">
      <h2 class="uppercase title-col">
        <span>Members</span>
        <span>團隊成員</span>
      </h2>
      <div
        v-for="team in data.team"
        :key="team.group"
        class="team"
      >
        <h3 class="subtitle-col">
          <span>{{ team.group.split(' ')[0] }}</span>
          <span>{{ team.group.split(' ')[1] }}</span>
        </h3>
        <div class="member-container">
          <div
            v-for="member in team.members"
            :key="member.name"
            class="member"
          >
            <img :src="`https://www.gravatar.com/avatar/${member.emailHash}?s=200`" alt="">
            <p>{{ member.name }}</p>
            <p class="border-tag">{{ member.aka }}</p>
          </div>
        </div>
      </div>
    </div>
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

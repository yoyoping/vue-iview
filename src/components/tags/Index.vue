<template>
  <div class="tags">
    <Tag
      type="dot"
      :closable="item.name === 'home' ? false : true"
      :color="item.name === $route.name ? 'blue' : 'default'"
      v-for="(item, index) in tags"
      :key="item.name"
      @click.native="linkTo(item.url)"
      @on-close="close(index, item.name)">
      {{item.title}}
    </Tag>
  </div>
</template>
<script>
export default {
  computed: {
    tags () {
      return JSON.parse(this.$store.state.app.tags)
    }
  },
  methods: {
    close (index, name) {
      this.tags.splice(index, 1)
      if (name === this.$route.name) {
        let url = this.tags[this.tags.length - 1].url
        this.$router.push({path: url, query: { isKeep: true }})
      }
      this.$store.commit('TAGS', JSON.stringify(this.tags))
    },
    linkTo (url) {
      this.$router.push(url)
      this.$router.push({path: url, query: { isKeep: true }})
    }
  }
}
</script>
<style lang="scss" scoped>
.tags{
  height: 40px;box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);padding: 3px 20px;
}
</style>

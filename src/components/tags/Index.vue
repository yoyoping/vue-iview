<template>
  <div class="tags">
    <Row>
      <Col span="22">
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
      </Col>
    </Row>
    <div class="tagSelectCon">
      <Dropdown trigger="hover" class="tagSelect" @on-click="select">
        <a href="javascript:void(0)">
          标签选项
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="other">关闭其他</DropdownItem>
          <DropdownItem name="all">关闭所有</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
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
    },
    select (name) {
      if (name === 'other') {
        this.tags.forEach(item => {
          if (item.name === this.$route.name) {

          }
        });
      } else if (name === 'all') {
        this.tags.splice(1, this.tags.length)
        this.$store.commit('TAGS', JSON.stringify(this.tags))
        this.$router.push({path: '/', query: { isKeep: true }})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tags{
  height: 40px;box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);padding: 3px 20px;position: relative;
}
.tagSelectCon{
  position: absolute;bottom: 0;right: 0;height: 38px;background-color: #fff;padding: 0 20px;
  .tagSelect{
    margin-top: 10px;color: #fff;
    background-color: #2d8cf0;border-radius: 3px;padding: 0 10px;
  }
  .ivu-dropdown-rel a{
    color: #fff;font-size: 12px;
  }
}
</style>

<template>
  <div class="tags">
    <Row>
      <Col span="22" ref="tagList" style="white-space:nowrap;">
        <Tag
          type="dot"
          :closable="!(item.name === 'home')"
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
          <DropdownItem name="all">关闭所有</DropdownItem>
          <DropdownItem name="other">关闭其他</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <!-- <ul class="moreList">
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
    </ul> -->
  </div>
</template>
<script>
export default {
  computed: {
    tags () {
      return JSON.parse(this.$store.state.app.tags)
    }
    // tagChange () {
    // if (this.$store.state.app.tagChange === 'add') {
    // this._tagChange()
    // }
    // return this.$store.state.app.tagChange
    // }
  },
  mounted () {
    // this.$nextTick(function () {
    //   console.log(this.$refs.tagList.$el.offsetHeight)
    //   if (this.$refs.tagList.$el.offsetHeight > 42) {
    //     console.log('超出')
    //   }
    // })

    // 窗口拖动就会更改标签
    // window.onresize = () => {
    //   this._tagChange()
    // }
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
        let current = {
          title: '',
          url: '',
          name: ''
        }
        this.tags.forEach(item => {
          if (item.name === this.$route.name) {
            current.title = item.title
            current.url = item.url
            current.name = item.name
          }
        })
        this.tags.splice(1, this.tags.length)
        this.tags.push(current)
        this.$store.commit('TAGS', JSON.stringify(this.tags))
      } else if (name === 'all') {
        this.tags.splice(1, this.tags.length)
        this.$store.commit('TAGS', JSON.stringify(this.tags))
        this.$router.push({path: '/', query: { isKeep: true }})
      }
    },
    // 判断tag标签是否超出
    _tagChange () {
      // this.$store.commit('SET_TAGCHANGE', 'less')
      // setTimeout(() => {
      //   if (this.$refs.tagList.$el.offsetHeight > 42) {
      //     let tagOpenList = JSON.parse(localStorage.tags)
      //     let moreList_ = tagOpenList.pop()
      //     this.$store.commit('TAGS', JSON.stringify(tagOpenList))
      //     let moreTag = []
      //     moreTag.push(moreList_)
      //     this.$store.commit('SET_MORETAG', JSON.stringify(moreTag))
      //   } else {
      //     // console.log('未超出')
      //   }
      // })
    }
  },
  watch: {
    tagChange (val, oldVal) {
    }
  }
}
</script>
<style lang="scss" scoped>
.tags{
  height: 40px;
  box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);padding: 3px 20px;position: relative;
}
.tagSelectCon{
  position: absolute;bottom: 0;right: 0;height: 38px;background-color: #fff;padding: 0 20px;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  .tagSelect{
    margin-top: 10px;color: #fff;
    background-color: #2d8cf0;border-radius: 3px;padding: 0 10px;
  }
  .ivu-dropdown-rel a{
    color: #fff;font-size: 12px;
  }
}
.moreList{
  position: absolute;
  right: 120px;
  top: 40px;
  z-index: 5
}
</style>

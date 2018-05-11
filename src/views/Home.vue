<template>
  <div>
    首页
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.axios.get('/userlist').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

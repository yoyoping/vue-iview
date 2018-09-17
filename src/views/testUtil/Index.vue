<template>
  <div>
    test
  </div>
</template>
<script>

export default {
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let arr_ = [1, 2, 3, 4]
    arr_ = this._.drop(arr_, 4)
    console.log(arr_)
  }
}
</script>

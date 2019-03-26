<template>
  <div @click="showMessage" class="message-con">
    <Tooltip :content="value > 0 ? '有' + value + '条未读消息' : '无未读消息'" placement="bottom" class="dfTooltip">
      <Badge :count="value" dot>
        <Icon type="ios-text" :size="23" />
      </Badge>
    </Tooltip>
  </div>
</template>

<script>
export default {
  name: 'messageTip',
  data () {
    return {
      value: 3
    }
  },
  methods: {
    showMessage () {
      // this.$router.push({
      //   name: 'message_index'
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
.ivu-badge{
  cursor: pointer;
}
</style>

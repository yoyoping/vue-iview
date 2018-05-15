<template>
  <div>
    <Table stripe border :columns="columns1" :data="data1"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1"></Page>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '序号',
          key: 'No',
          align: 'center',
          width: 80,
          render: (h, params) => {
            return h('span', params.index + 1)
          }
        },
        {
          title: '地址',
          key: 'addr',
          align: 'center'
        },
        {
          title: '时间',
          key: 'time',
          align: 'center'
        },
        {
          title: '操作人',
          key: 'operator',
          align: 'center'
        },
        {
          title: '操作内容',
          key: 'content',
          align: 'center'
        }
      ],
      data1: [
        {
          addr: '成都SAC大厦',
          time: '2018-12-12',
          operator: '张三',
          content: '修改用户权限'
        },
        {
          addr: '成都SAC大厦',
          time: '2018-12-12',
          operator: '张三',
          content: '修改用户权限'
        },
        {
          addr: '成都SAC大厦',
          time: '2018-12-12',
          operator: '张三',
          content: '修改用户权限'
        },
        {
          addr: '成都SAC大厦',
          time: '2018-12-12',
          operator: '张三',
          content: '修改用户权限'
        },
        {
          addr: '成都SAC大厦',
          time: '2018-12-12',
          operator: '张三',
          content: '修改用户权限'
        },
        {
          addr: '成都SAC大厦',
          time: '2018-12-12',
          operator: '张三',
          content: '修改用户权限'
        }
      ]
    }
  }
}
</script>

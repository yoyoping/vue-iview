<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
  export default {
    data () {
      return {
        columns7: [
          {
            type: 'selection',
            width: 60,
            align: 'center',
            align: 'center'
          },
          {
            title: 'ID',
            key: 'id',
            align: 'center',
          },
          {
            title: '标识',
            key: 'identification',
            align: 'center'
          },
          {
            title: '名称',
            key: 'name',
            align: 'center'
          },
          {
            title: '权限',
            key: 'auth',
            align: 'center'
          },
          {
            title: '创建时间',
            key: 'createTime',
            align: 'center'
          },
          {
            title: '更新时间',
            key: 'updateTime',
            align: 'center'
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data6: [
          {
            id: 1,
            identification: 'administrator',
            name: 'administrator',
            auth: '权限1',
            createTime: '2012-12-12',
            updateTime: '2012-12-12'
          },
          {
            id: 1,
            identification: 'administrator',
            name: 'administrator',
            auth: '权限1',
            createTime: '2012-12-12',
            updateTime: '2012-12-12'
          },
          {
            id: 1,
            identification: 'administrator',
            name: 'administrator',
            auth: '权限1',
            createTime: '2012-12-12',
            updateTime: '2012-12-12'
          },
          {
            id: 1,
            identification: 'administrator',
            name: 'administrator',
            auth: '权限1',
            createTime: '2012-12-12',
            updateTime: '2012-12-12'
          },
          {
            id: 1,
            identification: 'administrator',
            name: 'administrator',
            auth: '权限1',
            createTime: '2012-12-12',
            updateTime: '2012-12-12'
          },
          {
            id: 1,
            identification: 'administrator',
            name: 'administrator',
            auth: '权限1',
            createTime: '2012-12-12',
            updateTime: '2012-12-12'
          }
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1)
      }
    }
  }
</script>

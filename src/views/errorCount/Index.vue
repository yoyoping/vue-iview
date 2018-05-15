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
          title: 'ID',
          key: 'id',
          align: 'center',
          width: 80
        },
        {
          title: '用户名',
          key: 'name',
          align: 'center'
        },
        {
          title: '时间',
          key: 'time',
          align: 'center'
        },
        {
          title: '错误内容',
          key: 'errText',
          align: 'center',
          render: (h, params) => {
            return h('Tag', {
              props: {
                color: 'yellow'
              }
            }, params.row.errText)
          }
        },
        {
          title: '系统版本',
          key: 'version',
          align: 'center'
        }
      ],
      data1: [
        {
          id: 1,
          name: 'John Brown',
          time: '2018-12-12',
          errText: '收不到短信验证码',
          version: '1.0'
        },
        {
          id: 1,
          name: 'John Brown',
          time: '2018-12-12',
          errText: '收不到短信验证码',
          version: '1.0'
        },
        {
          id: 1,
          name: 'John Brown',
          time: '2018-12-12',
          errText: '收不到短信验证码',
          version: '1.0'
        },
        {
          id: 1,
          name: 'John Brown',
          time: '2018-12-12',
          errText: '收不到短信验证码',
          version: '1.0'
        }
      ]
    }
  }
}
</script>

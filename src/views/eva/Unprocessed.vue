<template>
  <div>
    <Form :model="formInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.name" placeholder="姓名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="phone">
        <Input type="password" v-model="formInline.phone" placeholder="手机号">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary">查询</Button>
      </FormItem>
    </Form>
    <Table border :columns="columns1" :data="data1"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        name: '',
        phone: ''
      },
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
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
          title: '评价用户（ID）',
          key: 'id',
          align: 'center'
        },
        {
          title: '评价星级',
          key: 'stars',
          align: 'center',
          render: (h, params) => {
            return h('Rate',{
              props: {
                disabled: true,
                value: params.row.stars
              }
            })
          }
        },
        {
          title: '评价原因',
          key: 'reason',
          align: 'center'
        },
        {
          title: '评价时间',
          key: 'time',
          align: 'center'
        },
        {
          title: '操作',
          key: 'action',
          width: 100,
          align: 'center',
          render: (h, params) => {
            return h('Button', {
              props: {
                type: 'primary'
              },
              on: {
                click: () => {
                  alert('1')
                }
              }
            }, '处理')
          }
        }
      ],
      data1: [
        {
          id: 1,
          stars: 4,
          reason: '态度不好',
          time: '2016-10-03'
        },
        {
          id: 1,
          stars: 2,
          reason: '态度不好',
          time: '2016-10-03'
        },
        {
          id: 1,
          stars: 4,
          reason: '态度不好',
          time: '2016-10-03'
        },
        {
          id: 1,
          stars: 3,
          reason: '态度不好',
          time: '2016-10-03'
        },
        {
          id: 1,
          stars: 4,
          reason: '态度不好',
          time: '2016-10-03'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

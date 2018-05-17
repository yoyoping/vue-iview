<template>
  <div>
    <Row>
      <Col span="17">
        <Form :model="formInline" inline>
          <FormItem prop="name">
            <Input type="text" v-model="formInline.name" placeholder="请输入顾问姓名">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="phone">
            <Input type="text" v-model="formInline.phone" placeholder="请输入顾问手机号">
              <Icon type="iphone" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary">查询</Button>
          </FormItem>
        </Form>
      </Col>
      <Col span="7">
        <Button type="primary" :style="{float: 'right'}">添加顾问</Button>
      </Col>
    </Row>

    <Table border :columns="columns7" :data="data6"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
    <Modal
      v-model="modmd"
      title="编辑顾问">
      <p slot="footer">
        <Button type="primary">提交</Button>
        <Button type="ghost" @click="modmd = false" style="margin-left: 8px">取消</Button>
      </p>
      <Form :model="modForm" :label-width="120">
        <FormItem label="姓名" prop="name">
          <Input v-model="modForm.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="手机号" prop="phone">
          <Input v-model="modForm.phone" placeholder="请输入手机号"></Input>
        </FormItem>
        <FormItem label="职位等级" prop="jobLevel">
          <Select v-model="modForm.jobLevel" placeholder="请选择职位等级">
            <Option value="1">中级</Option>
            <Option value="2">高级</Option>
            <Option value="3">特级</Option>
          </Select>
        </FormItem>
        <FormItem label="入职年限" prop="entryYear">
          <Select v-model="modForm.entryYear" placeholder="请选择入职年限">
            <Option value="1">1年</Option>
            <Option value="2">2年</Option>
            <Option value="3">3年</Option>
            <Option value="4">4年及以上</Option>
          </Select>
        </FormItem>
        <FormItem label="历史成交笔数" prop="deal">
          <InputNumber :min="1" v-model="modForm.deal"></InputNumber>
        </FormItem>
        <FormItem label="平均成交周期（天）" prop="deal">
          <InputNumber :min="1" v-model="modForm.deal"></InputNumber>
        </FormItem>
        <FormItem label="近30天成交（笔）" prop="deal30">
            <Input v-model="modForm.deal30" placeholder="请输入近30天成交"></Input>
        </FormItem>
        <FormItem label="状态" prop="state">
          <Select v-model="modForm.state" placeholder="请选择状态">
            <Option value="1">正常</Option>
            <Option value="2">离职</Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modmd: false,
      formInline: {
        name: '',
        phone: ''
      },
      modForm: {
        name: '张三',
        phone: 13564554674,
        jobLevel: '1',
        entryYear: '1',
        deal: 10,
        dealCcycle: '30',
        deal30: '10',
        state: '1'
      },
      columns7: [
        {
          width: 100,
          title: '序号',
          key: 'No',
          align: 'center',
          render: (h, params) => {
            return h('span', params.index + 1)
          }
        },
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '手机号',
          key: 'phone',
          align: 'center'
        },
        {
          title: '职位级别',
          key: 'jobLevel',
          align: 'center'
        },
        {
          title: '入职年限（年）',
          key: 'entryYear',
          align: 'center'
        },
        {
          title: '历史成交（笔）',
          key: 'deal',
          align: 'center'
        },
        {
          title: '平均成交周期（天）',
          key: 'dealCcycle',
          align: 'center'
        },
        {
          title: '近30天成交（笔）',
          key: 'deal30',
          align: 'center'
        },
        {
          title: '当前状态',
          key: 'state',
          align: 'center',
          render: (h, params) => {
            let color = 'green'
            if (params.row.state !== '正常') {
              color = 'yellow'
            }
            return h('Tag', {
              props: {
                type: 'dot',
                color: color
              }
            }, params.row.state)
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
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
                    this.$router.push(`/adviserDetail/${params.row.id}`)
                  }
                }
              }, '详情'),
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
                    this.edit(params.row.id)
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                  }
                }
              }, '离职')
            ])
          }
        }
      ],
      data6: [
        {
          id: 1,
          name: '张三',
          phone: '136854156454',
          jobLevel: '主管',
          entryYear: '2',
          deal: '10',
          dealCcycle: '2',
          deal30: '20',
          state: '正常'
        },
        {
          id: 2,
          name: '张三',
          phone: '136854156454',
          jobLevel: '主管',
          entryYear: '2',
          deal: '10',
          dealCcycle: '2',
          deal30: '20',
          state: '正常'
        },
        {
          id: 3,
          name: '张三',
          phone: '136854156454',
          jobLevel: '主管',
          entryYear: '2',
          deal: '10',
          dealCcycle: '2',
          deal30: '20',
          state: '正常'
        },
        {
          id: 4,
          name: '张三',
          phone: '136854156454',
          jobLevel: '主管',
          entryYear: '2',
          deal: '10',
          dealCcycle: '2',
          deal30: '20',
          state: '离职'
        },
        {
          id: 5,
          name: '张三',
          phone: '136854156454',
          jobLevel: '主管',
          entryYear: '2',
          deal: '10',
          dealCcycle: '2',
          deal30: '20',
          state: '正常'
        },
        {
          id: 6,
          name: '张三',
          phone: '136854156454',
          jobLevel: '主管',
          entryYear: '2',
          deal: '10',
          dealCcycle: '2',
          deal30: '20',
          state: '离职'
        }
      ]
    }
  },
  methods: {
    // 分页
    changePage (num) {

    },
    edit (id) {
      this.modmd = true
    }
  }
}
</script>
<style lang="scss" scoped>
.Transfer{
  margin-bottom: 30px;
}
.ivu-input-number{
  width: 100%;
}
</style>

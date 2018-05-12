<template>
  <div>
    <Table border :columns="columns7" :data="data6"></Table>
    <Modal
      v-model="mod"
      title="权限修改"
      width="600"
      :mask-closable="false"
      :closable="false"
      class="footerHide"
      @on-ok="ok('formValidate')">
      <p slot="footer">
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button type="ghost" @click="mod = false" style="margin-left: 8px">取消</Button>
      </p>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="ID" prop="id">
          <Input v-model="formValidate.id" disabled></Input>
        </FormItem>
        <FormItem label="标识" prop="Identification">
          <Input v-model="formValidate.Identification" placeholder="请输入标识"></Input>
        </FormItem>
        <FormItem label="名称" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
        </FormItem>
        <FormItem label="路由" prop="path">
          <Input v-model="formValidate.path" placeholder="请输入路由地址"></Input>
        </FormItem>
        <FormItem label="" prop="">
          <Transfer
            class="Transfer"
            :titles="titles"
            :data="data2"
            :target-keys="targetKeys2"
            filterable
            :filter-method="filterMethod"
            @on-change="handleChange2">
          </Transfer>
        </FormItem>
      </Form>

    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      titles: ['未拥有权限', '已拥有权限'],
      data2: this.getMockData(),
      targetKeys2: this.getTargetKeys(),
      mod: false,
      formValidate: { // 弹出框数据
        id: '1',
        Identification: 'auth',
        name: 'admin',
        path: '/admin'
      },
      ruleValidate: {
        Identification: [
          { required: true, message: '请输入标识', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '请输入路由地址', trigger: 'change' }
        ]
      },
      columns7: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          width: 100,
          title: 'ID',
          key: 'id',
          align: 'center'
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
          title: '操作',
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
      this.mod = !this.mod
    },
    remove (index) {
      this.data6.splice(index, 1)
    },
    getMockData () {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: 'Content ' + i,
          description: 'The desc of content  ' + i,
          disabled: Math.random() * 3 < 1
        })
      }
      return mockData
    },
    getTargetKeys () {
      return this.getMockData().filter(() => Math.random() * 2 > 1).map(item => item.key)
    },
    handleChange2 (newTargetKeys) {
      this.targetKeys2 = newTargetKeys
    },
    filterMethod (data, query) {
      return data.label.indexOf(query) > -1
    },
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$Message.success('修改成功!')
          this.mod = false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.Transfer{
  margin-bottom: 30px;
}
</style>


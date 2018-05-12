<template>
  <div>
    <Modal
      v-model="mod"
      title="权限修改"
      width="600"
      :mask-closable="false"
      :closable="false"
      @on-ok="ok">
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
      </Form>
    </Modal>
    <Form ref="formInline" :model="formInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary">查询</Button>
      </FormItem>
    </Form>
    <Table border :columns="columns7" :data="data6"></Table>
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
      mod: false, // 是否弹出修改框
      formInline: {
        user: '',
        password: ''
      },
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
          key: 'Identification',
          align: 'center'
        },
        {
          title: '名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '路由',
          key: 'path',
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
                    this.mod = true
                  }
                }
              }, '编辑'),
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
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          Identification: 'auth',
          name: 'John Brown',
          path: '/admin',
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
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    ok () {
      this.$Message.success('已保存修改')
    }
  }
}
</script>

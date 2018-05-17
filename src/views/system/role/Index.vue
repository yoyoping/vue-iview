<template>
  <div>
    <Row>
      <Col span="17">
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
      </Col>
      <Col span="7">
        <Button type="primary" :style="{float: 'right'}" @click="addRoleModal = true">添加角色</Button>
      </Col>
    </Row>

    <Table border :columns="columns7" :data="data6"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
    <!-- 修改角色的对话框 -->
    <Modal
      v-model="mod"
      title="角色修改"
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
        <!-- <FormItem label="ID" prop="id">
          <Input v-model="formValidate.id" disabled></Input>
        </FormItem> -->
        <FormItem label="标识" prop="identification">
          <Input v-model="formValidate.identification" placeholder="请输入标识"></Input>
        </FormItem>
        <FormItem label="名称" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
        </FormItem>
        <FormItem label="权限" prop="auth">
          <Input v-model="formValidate.auth" disabled placeholder="请选择权限"></Input>
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

    <!-- 添加角色 -->
    <Modal
      v-model="addRoleModal"
      title="添加角色"
      width="600"
      :mask-closable="false"
      :closable="false"
      class="footerHide"
      @on-ok="ok('formValidate')">
      <p slot="footer">
        <Button type="primary" @click="addRole('addForm')">提交</Button>
        <Button type="ghost" @click="addRoleModal = false" style="margin-left: 8px">取消</Button>
      </p>
      <Form ref="addForm" :model="addForm" :rules="ruleValidate" :label-width="80">
        <!-- <FormItem label="ID" prop="id">
          <Input v-model="formValidate.id" disabled></Input>
        </FormItem> -->
        <FormItem label="标识" prop="identification">
          <Input v-model="addForm.identification" placeholder="请输入标识"></Input>
        </FormItem>
        <FormItem label="名称" prop="name">
          <Input v-model="addForm.name" placeholder="请输入名称"></Input>
        </FormItem>
        <FormItem label="权限" prop="auth">
          <Input v-model="addForm.auth" disabled placeholder="请选择权限"></Input>
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
      formInline: {
        user: '',
        password: ''
      },
      addRoleModal: false,

      titles: ['未拥有权限', '已拥有权限'],
      data2: this.getMockData(),
      targetKeys2: this.getTargetKeys(),
      mod: false,
      formValidate: { // 弹出框数据
        id: '1',
        identification: 'hahaha',
        name: 'admin',
        auth: ['admin', 'userList']
      },
      addForm: { // 弹出框数据
        identification: '',
        name: '',
        auth: ''
      },
      ruleValidate: {
        identification: [
          { required: true, message: '请输入标识', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        auth: [
          { required: true, message: '请输入权限', trigger: 'change' }
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
          align: 'center',
          render: (h, params) => {
            return h('div', this.authEach(h, params))
          }
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
          identification: 'administrator',
          name: '管理员',
          auth: ['admin', 'userList'],
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          identification: 'administrator',
          name: '管理员',
          auth: ['admin', 'userList'],
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          identification: 'administrator',
          name: '管理员',
          auth: ['admin', 'userList'],
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          identification: 'administrator',
          name: '管理员',
          auth: ['admin', 'userList'],
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          identification: 'administrator',
          name: '管理员',
          auth: ['admin', 'userList'],
          createTime: '2012-12-12',
          updateTime: '2012-12-12'
        },
        {
          id: 1,
          identification: 'administrator',
          name: '管理员',
          auth: ['admin', 'userList'],
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
      let mockData = []
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
    },
    // 分页
    changePage (num) {

    },
    // 循环生成权限
    authEach (h, params) {
      let auth_ = []
      params.row.auth.forEach(item => {
        auth_.push(h('Tag', {
          props: {
            checkable: false,
            color: 'green'
          }
        }, item))
      }, this)
      return auth_
    },
    // 添加角色
    addRole (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
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

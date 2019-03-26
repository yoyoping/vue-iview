<template>
  <div>
    <Row>
      <Col span="8">
      <Card>
        <p slot="title">
          <i class="iconfont icon-caidan"></i>
          菜单列表</p>
        <p class="action">
          <Button type="primary">增加</Button>
          <Button type="primary">排序向上</Button>
          <Button type="primary">排序向下</Button>
          <Button type="warning">删除</Button>
        </p>
        <Tree :data="data2" show-checkbox></Tree>
      </Card>
      </Col>
      <Col span="8" offset="2">
      <Card>
        <p slot="title">
          <i class="iconfont icon-pingjia"></i>
          编辑
        </p>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="父级菜单" prop="fname">
            <Input v-model="formValidate.fname" disabled></Input>
          </FormItem>
          <FormItem label="名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
          </FormItem>
          <FormItem label="图标" prop="icon">
            <Input v-model="formValidate.icon" placeholder="请输入图标"></Input>
          </FormItem>
          <FormItem label="路径" prop="path">
            <Input v-model="formValidate.path" placeholder="请输入路径"></Input>
          </FormItem>
          <FormItem label="角色" prop="role">
            <Input v-model="formValidate.role" placeholder="请输入角色"></Input>
          </FormItem>
          <FormItem class="btn">
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="$refs['formValidate'].resetFields()" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formValidate: { // 表单数据
        fname: '菜单一',
        name: '',
        icon: '',
        path: '',
        role: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        icon: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        path: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        role: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ]
      },
      data2: [
        {
          title: '系统管理',
          expand: true,
          children: [
            {
              title: '权限管理',
              expand: true
            },
            {
              title: '账号管理',
              expand: true
            },
            {
              title: '角色管理',
              expand: true
            },
            {
              title: '菜单管理',
              expand: true
            },
            {
              title: '操作日志',
              expand: true
            }
          ]
        },
        {
          title: '用户管理',
          expand: true
        },
        {
          title: '顾问列表',
          expand: true
        },
        {
          title: '评论列表',
          expand: true
        }
      ]
    }
  },
  methods: {
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
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
.action{
  margin-bottom: 20px;
}
.btn{
  margin-top: 20px;
}
.ivu-card-bordered{
  height: 500px;overflow: auto;
}
</style>

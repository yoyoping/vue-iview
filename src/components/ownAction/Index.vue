<template>
  <div class="ownaction">
    <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
      <a href="javascript:void(0)">
        <span class="main-user-name">{{ user.userInfo.name }}</span>
        <Icon type="md-arrow-dropdown" />
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name="modself">修改信息</DropdownItem>
        <DropdownItem name="loginout" divided><div >退出登录</div></DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Avatar src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg" style="background: #619fe7;margin-left: 10px;"></Avatar>
    <!-- 修改信息弹窗 -->
    <Modal
      :mask-closable="false"
      v-model="isShow"
      :closable="false"
      :width="400"
      title="修改信息">
      <Form :model="infoForm" ref="infoForm" :rules="infoFormRule" :label-width="80">
        <FormItem label="联系类型" prop="contactType">
          <Select v-model="infoForm.contactType">
            <Option value="1" >手机</Option>
            <Option value="2" >QQ</Option>
            <Option value="3" >微信</Option>
            <Option value="4" >邮箱</Option>
          </Select>
        </FormItem>
        <FormItem label="联系方式" prop="contactAddr">
          <Input v-model="infoForm.contactAddr"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="cancel">
          取消
        </Button>
        <Button type="primary" @click="ok">
          确定
        </Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      isShow: false,
      infoForm: {
        contactType: '1',
        contactAddr: ''
      },
      infoFormRule: {
        contactType: { required: true, message: '请选择联系类型', trigger: 'blur' },
        contactAddr: { required: true, message: '请输入联系方式', trigger: 'blur' }
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    handleClickUserDropdown (name) {
      if (name === 'modself') {
        this.isShow = true
      } else if (name === 'loginout') {
        this.$Modal.confirm({
          title: '退出提示',
          content: '确认要退出当前账号吗？',
          onOk: () => {
            this.$Message.success('退出成功')
            this.$router.push('/login')
            Cookies.remove('loginStatus')
            localStorage.removeItem('userInfo')
            localStorage.removeItem('roles')
          }
        })
      }
    },
    // 取消
    cancel () {
      this.$refs['infoForm'].resetFields()
      this.isShow = false
    },
    // 确认修改
    ok () {
      this.$refs['infoForm'].validate((valid) => {
        if (valid) {
          this.$Message.success('修改成功')
          this.cancel()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.ownaction{
  float: right;
  margin-right: 20px;
  // margin-left: 40px;
}
</style>

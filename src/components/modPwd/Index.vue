<template>
  <div>
    <Modal
      :mask-closable="false"
      v-model="isShow"
      :closable="false"
      :width="400"
      @on-visible-change="change"
      title="修改密码"
    >
      <Form
        ref="pwdForm"
        :model="pwdForm"
        :rules="pwdFormRule"
        :label-width="80"
      >
        <FormItem label="旧密码" prop="password">
          <Input type="password" v-model="pwdForm.password"></Input>
        </FormItem>
        <FormItem label="新密码" prop="password_new">
          <Input type="password" v-model="pwdForm.password_new"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="password_new_repeat">
          <Input type="password" v-model="pwdForm.password_new_repeat"></Input>
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
import { PUValid } from "@utils/check";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    // 确认密码
    const surePwdValid = (rule, value, callback) => {
      if (this.pwdForm.newPwd !== this.pwdForm.surePwd) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };

    return {
      pwdForm: {
        password: "",
        password_new: "",
        password_new_repeat: ""
      },
      pwdFormRule: {
        password: [
          { required: true, message: "请输入旧密码", trigger: "blur" }
        ],
        password_new: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { validator: PUValid, trigger: "blur" }
        ],
        password_new_repeat: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: surePwdValid, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    cancel() {
      this.$refs["pwdForm"].resetFields();
      this.$emit("closePwd");
    },
    ok() {
      this.$refs["pwdForm"].validate(valid => {
        if (valid) {
          (async () => {
            const params = {
              code: "BS01",
              method: "put",
              ...this.pwdForm
            };
            await this.$fetch(params);
            this.cancel();
            this.$Message.success("修改密码成功！");
          })();
        }
      });
    },
    change(val) {
      if (!val) {
        this.cancel();
      }
    }
  }
};
</script>

<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="md-log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input
                type="password"
                v-model="form.password"
                placeholder="请输入密码"
                @keyup.enter.native="handleSubmit"
              >
                <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入admin or user用户名和任意密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Cookies from "js-cookie";
import routes, { errRoute } from "@utils/routes";
import newRouter from "../../router/originRoute";
import { clone } from "@utils/app";
let roles_ = []; // 权限
export default {
  data() {
    return {
      form: {
        userName: "admin",
        password: ""
      },
      rules: {
        userName: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 模拟接口
          const mock = new MockAdapter(axios);
          mock
            .onPost("/login", {
              params: {
                userName: this.form.userName,
                password: this.form.password
              }
            })
            .reply(config => {
              const params = JSON.parse(config.data).params; // 上传的参数
              if (params.userName === "admin") {
                roles_ = ["admin"];
              } else if (params.userName === "user") {
                roles_ = ["user"];
              }
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (params.userName === "admin") {
                    resolve([
                      200,
                      {
                        userInfo: {
                          name: "admin",
                          roles: roles_
                        }
                      }
                    ]);
                  } else if (params.userName === "user") {
                    resolve([
                      200,
                      {
                        userInfo: {
                          name: "user",
                          roles: roles_
                        }
                      }
                    ]);
                  } else {
                    reject(
                      new Error({
                        status: 200,
                        message: "不存在此账号"
                      })
                    );
                  }
                }, 4);
              });
            });
          axios
            .post("/login", {
              params: {
                userName: this.form.userName,
                password: this.form.password
              }
            })
            .then(res => {
              console.log(res);
              Cookies.set("Token", "fb7yfd7by7fdby7fdb7f");
              Cookies.set("loginStatus", true);
              localStorage.userInfo = JSON.stringify(res.data.userInfo);
              this.$store.commit("SET_USER", res.data.userInfo);
              localStorage.roles = res.data.userInfo.roles.join("-");
              // 模拟获取到了用户拥有的路由权限
              // 假设这是从服务端获取的菜单
              console.log(res.data.userInfo.name);
              let menu;
              if (res.data.userInfo.name === "admin") {
                menu = [
                  "Layout",
                  "home",
                  "userList",
                  "adviser",
                  "eva",
                  "errorCount",
                  "system",
                  "auth",
                  "account",
                  "role",
                  "menu",
                  "log",
                  "component",
                  "editor",
                  "upload",
                  "drag",
                  "cityLink"
                ];
              } else {
                menu = [
                  "Layout",
                  "home",
                  "userList",
                  "adviser",
                  "eva",
                  "errorCount",
                  "system",
                  "auth",
                  "account",
                  "role"
                ];
              }
              sessionStorage.setItem("menu", JSON.stringify(menu));
              this.getRoute(menu);
            })
            .catch(err => {
              this.$Message.error(err.message);
            });
        }
      });
    },
    getRoute(menu) {
      // 循环所有路由列表判断不在获取的菜单列表里面就删除
      // 之所已使用深克隆是因为这里删除了会影响原来的routes，导致路由错误
      const newRoutes = clone(routes);
      this._.remove(newRoutes, n => {
        if (n.children && n.children.length > 0) {
          this._.remove(n.children, m => {
            return !menu.includes(m.name);
          });
        }
        return !menu.includes(n.name);
      });
      this.$router.matcher = newRouter().matcher;
      this.$router.addRoutes(newRoutes.concat(errRoute));
      // 将路由存在本地
      sessionStorage.setItem("routes", JSON.stringify(routes.concat(errRoute)));
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-image: url("~@assets/images/login-bg.jpg");
  background-size: 100% 100%;
  // background-size: cover;
  background-position: center;
  position: relative;
  &-con {
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
    &-header {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      padding: 30px 0;
    }
    .form-con {
      padding: 10px 0 0;
    }
    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}
</style>

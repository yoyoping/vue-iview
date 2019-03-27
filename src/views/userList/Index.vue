<template>
  <div>
    <Form :model="formInline" inline>
      <FormItem prop="nickname">
        <Input
          type="text"
          v-model="formInline.nickname"
          placeholder="请输入用户昵称"
        >
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="phone">
        <Input
          type="text"
          v-model="formInline.phone"
          placeholder="请输入用户手机号"
        >
          <Icon type="ios-phone-portrait" slot="prepend"></Icon>
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
  data() {
    return {
      formInline: {
        nickname: "",
        phone: ""
      },
      columns7: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          width: 100,
          title: "ID",
          key: "id",
          align: "center"
        },
        {
          title: "昵称",
          key: "nickname",
          align: "center"
        },
        {
          title: "绑定手机号",
          key: "phone",
          align: "center"
        },
        {
          title: "关注时间",
          key: "followTime",
          align: "center"
        },
        {
          title: "注册时间",
          key: "regisTime",
          align: "center"
        },
        {
          title: "用户状态",
          key: "state",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.$router.push(`/userDetail/${params.row.id}`);
                    }
                  }
                },
                "详情"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.show(params.row.id);
                    }
                  }
                },
                "封停"
              )
            ]);
          }
        }
      ],
      data6: [
        {
          id: "1",
          nickname: "administrator",
          phone: "12345678964",
          followTime: "2012-12-12",
          regisTime: "2012-12-12",
          createTime: "2012-12-12",
          state: "启用"
        },
        {
          id: "2",
          nickname: "administrator",
          phone: "12345678964",
          followTime: "2012-12-12",
          regisTime: "2012-12-12",
          createTime: "2012-12-12",
          state: "启用"
        },
        {
          id: "3",
          nickname: "administrator",
          phone: "12345678964",
          followTime: "2012-12-12",
          regisTime: "2012-12-12",
          createTime: "2012-12-12",
          state: "启用"
        },
        {
          id: "4",
          nickname: "administrator",
          phone: "12345678964",
          followTime: "2012-12-12",
          regisTime: "2012-12-12",
          createTime: "2012-12-12",
          state: "启用"
        },
        {
          id: "5",
          nickname: "administrator",
          phone: "12345678964",
          followTime: "2012-12-12",
          regisTime: "2012-12-12",
          createTime: "2012-12-12",
          state: "启用"
        },
        {
          id: "6",
          nickname: "administrator",
          phone: "12345678964",
          followTime: "2012-12-12",
          regisTime: "2012-12-12",
          createTime: "2012-12-12",
          state: "启用"
        }
      ]
    };
  },
  methods: {
    show(id) {
      this.$Message.info(id);
    },
    // 分页
    changePage() {}
  }
};
</script>
<style lang="scss" scoped>
.Transfer {
  margin-bottom: 30px;
}
</style>

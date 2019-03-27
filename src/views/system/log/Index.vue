<template>
  <div>
    <Table stripe border :columns="columns1" :data="data1"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1"></Page>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "序号",
          key: "No",
          align: "center",
          width: 80,
          render: (h, params) => {
            return h("span", params.index + 1);
          }
        },
        {
          title: "User",
          key: "user",
          align: "center"
        },
        {
          title: "Method",
          key: "method",
          align: "center",
          render: (h, params) => {
            return h(
              "Tag",
              {
                props: {
                  color: "blue"
                }
              },
              params.row.method
            );
          }
        },
        {
          title: "Path",
          key: "path",
          align: "center",
          render: (h, params) => {
            return h(
              "Tag",
              {
                props: {
                  color: "green"
                }
              },
              params.row.path
            );
          }
        },
        {
          title: "IP",
          key: "path",
          align: "center",
          render: (h, params) => {
            return h("Tag", {}, params.row.path);
          }
        },
        {
          title: "时间",
          key: "time",
          align: "center"
        }
      ],
      data1: [
        {
          user: "admin",
          method: "post",
          path: "/admin/user",
          ip: "192.168.21.129",
          time: "2018-12-12"
        },
        {
          user: "admin",
          method: "post",
          path: "/admin/user",
          ip: "192.168.21.129",
          time: "2018-12-12"
        },
        {
          user: "admin",
          method: "post",
          path: "/admin/user",
          ip: "192.168.21.129",
          time: "2018-12-12"
        },
        {
          user: "admin",
          method: "post",
          path: "/admin/user",
          ip: "192.168.21.129",
          time: "2018-12-12"
        },
        {
          user: "admin",
          method: "post",
          path: "/admin/user",
          ip: "192.168.21.129",
          time: "2018-12-12"
        },
        {
          user: "admin",
          method: "post",
          path: "/admin/user",
          ip: "192.168.21.129",
          time: "2018-12-12"
        }
      ]
    };
  }
};
</script>

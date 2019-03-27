<template>
  <div>
    <Row :gutter="20">
      <Col span="12">
        <Card class="box-card">
          <p slot="title" class="clearfix">
            <span>三级联动</span>
          </p>
          <Addr @myAddr="myAddr_" ref="addr" datav="1"></Addr>
          <p class="des">您当前选中的是：{{ name1 }}</p>
        </Card>
      </Col>
      <Col span="12">
        <Card class="box-card">
          <p slot="title" class="clearfix">
            <span>二级联动</span>
          </p>
          <Addr @myAddr="myAddr_" ref="addr" datav="2" :isArea="true"></Addr>
          <p class="des">您当前选中的是：{{ name2 }}</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import Addr from "@components/addr/Index.vue";
export default {
  components: {
    Addr
  },
  data() {
    return {
      name1: "",
      name2: ""
    };
  },
  methods: {
    myAddr_(name, datav) {
      if (datav === "1") {
        this.name1 = name.join("-");
      } else {
        this.name2 = name.join("-");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.des {
  margin: 20px 0 10px;
}
</style>

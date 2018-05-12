<template>
  <div>
    <Row>
      <Col span="8">
        <Card>
          <Row type="flex" class="user-infor">
            <Col span="8">
            <Row class-name="made-child-con-middle" type="flex" align="middle">
              <img class="avator-img" src="../assets/images/aa.jpg" />
            </Row>
            </Col>
            <Col span="16" style="padding-left:6px;">
            <Row class-name="made-child-con-middle" type="flex" align="middle">
              <div>
                <b class="card-user-infor-name">Admin</b>
                <p>super admin</p>
              </div>
            </Row>
            </Col>
          </Row>
          <div class="line-gray"></div>
          <Row class="margin-top-8">
            <Col span="8">
            <p class="notwrap">上次登录时间:</p>
            </Col>
            <Col span="16" class="padding-left-8">2017.09.12-13:32:20</Col>
          </Row>
          <Row class="margin-top-8">
            <Col span="8">
            <p class="notwrap">上次登录地点:</p>
            </Col>
            <Col span="16" class="padding-left-8">北京</Col>
          </Row>
        </Card>
      </Col>
    </Row>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList() {
        this.axios.get('/userlist').then(res => {
          console.log(res)
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.user-infor{
    height: 135px;
}
.avator-img{
  display: block;
  width: 80%;
  max-width: 100px;
  height: auto;
}
.card-user-infor-name{
    font-size: 2em;
    color: #2d8cf0;
}
.card-title{
    color: #abafbd;
}
.made-child-con-middle{
    height: 100%;
}
.to-do-list-con{
    height: 145px;
    overflow: auto;
}
.to-do-item{
    padding: 2px;
}
.infor-card-con{
    height: 100px;
}
.infor-card-icon-con{
    height: 100%;
    color: white;
    border-radius: 3px 0 0 3px;
}
.map-con{
    height: 305px;
}
.map-incon{
    height: 100%;
}
.data-source-row{
    height: 200px;
}
.line-chart-con{
    height: 150px;
}
.line-gray {
  height: 0;
  border-bottom: 2px solid #dcdcdc;margin-bottom: 10px;
}
.margin-top-8{
  margin-top: 8px;
}
</style>


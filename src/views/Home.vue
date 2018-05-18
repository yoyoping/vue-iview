<template>
  <div>
    <Row :gutter="20">
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
      <Col span="16">
        <Row :gutter="16" type="flex" justify="space-around">
          <Col :xs="24" :sm="12" :md="6">
            <infor-card id-name="user_created_count" :end-val="count.createUser" iconType="android-person-add" color="#2d8cf0" intro-text="今日新增用户"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6">
            <infor-card id-name="visit_count" :end-val="count.createUser" iconType="ios-eye" color="#64d572" :iconSize="50" intro-text="今日浏览量"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6">
            <infor-card id-name="collection_count" :end-val="count.collection" iconType="upload" color="#ffd572" intro-text="今日数据采集量"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6">
            <infor-card id-name="transfer_count" :end-val="count.transfer" iconType="shuffle" color="#f25e43" intro-text="今日服务调用量"></infor-card>
          </Col>
        </Row>
        <Row :gutter="16" type="flex" justify="space-around" class="twoRow">
          <Col :xs="24" :sm="12" :md="6">
            <infor-card id-name="transfer_count1" :end-val="count.transfer" iconType="shuffle" color="#f25e43" intro-text="今日服务调用量"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6">
            <infor-card id-name="collection_count1" :end-val="count.collection" iconType="upload" color="#ffd572" intro-text="今日数据采集量"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6">
            <infor-card id-name="visit_count1" :end-val="count.createUser" iconType="ios-eye" color="#64d572" :iconSize="50" intro-text="今日浏览量"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6">
            <infor-card id-name="user_created_count1" :end-val="count.createUser" iconType="android-person-add" color="#2d8cf0" intro-text="今日新增用户"></infor-card>
          </Col>
        </Row>
      </Col>
    </Row>
    <Card shadow  class="mt" id="lineChart">
      <line-chart :chart-data="lineChartData"></line-chart>
    </Card>
    <Row class="mt" :gutter="20">
      <Col span="8">
        <Card>
          <raddar-chart></raddar-chart>
        </Card>
      </Col>
      <Col span="8">
        <Card>
          <pie-chart></pie-chart>
        </Card>
      </Col>
      <Col span="8">
        <Card>
          <bar-chart></bar-chart>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import inforCard from '@components/inforCard'
import LineChart from '@components/Charts/LineChart.vue'
import RaddarChart from '@components/Charts/RaddarChart.vue'
import PieChart from '@components/Charts/PieChart.vue'
import BarChart from '@components/Charts/BarChart.vue'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
  components: {
    inforCard, LineChart, RaddarChart, PieChart, BarChart
  },
  data () {
    return {
      lineChartData: lineChartData.newVisitis,
      list: [],
      count: {
        createUser: 496,
        visit: 3264,
        collection: 24389305,
        transfer: 39503498
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.axios.get('/userlist').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .user-infor {
    height: 135px;
  }

  .avator-img {
    display: block;
    width: 80%;
    max-width: 100px;
    height: auto;
  }

  .card-user-infor-name {
    font-size: 2em;
    color: #2d8cf0;
  }

  .card-title {
    color: #abafbd;
  }

  .made-child-con-middle {
    height: 100%;
  }

  .to-do-list-con {
    height: 145px;
    overflow: auto;
  }

  .to-do-item {
    padding: 2px;
  }

  .infor-card-con {
    height: 100px;
  }

  .infor-card-icon-con {
    height: 100%;
    color: white;
    border-radius: 3px 0 0 3px;
  }

  .map-con {
    height: 305px;
  }

  .map-incon {
    height: 100%;
  }

  .data-source-row {
    height: 200px;
  }

  .line-chart-con {
    height: 150px;
  }

  .line-gray {
    height: 0;
    border-bottom: 2px solid #dcdcdc;
    margin-bottom: 10px;
  }

  .margin-top-8 {
    margin-top: 8px;
  }
  .twoRow{
    margin-top: 25px;
  }
  .mt{
    margin-top: 30px;
  }
</style>

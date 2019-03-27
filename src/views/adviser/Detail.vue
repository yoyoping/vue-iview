<template>
  <div>
    <Card shadow :padding="30">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        顾问详情
      </p>
      <Row>
        <Col span="12"><label>姓名：</label>XXX</Col>
        <Col span="12"><label>手机号：</label>1366351364</Col>
      </Row>
      <Row>
        <Col span="12"><label>职位级别：</label>高级</Col>
        <Col span="12"><label>入职年限：</label>2012-12-12</Col>
      </Row>
      <Row>
        <Col span="12"><label>标签：</label>XXX</Col>
        <Col span="12"><label>历史成交：</label>20笔</Col>
      </Row>
      <Row>
        <Col span="12"><label>平均成交周期：</label>20天</Col>
        <Col span="12"><label>近30天成交：</label>1212笔</Col>
      </Row>
      <Row>
        <Col span="12"><label>城市：</label>成都</Col>
        <Col span="12"><label>当前状态：</label>正常</Col>
      </Row>
    </Card>
    <br />
    <Card shadow>
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        用户评价
      </p>
      <Row>
        <Col span="12"><label>用户ID：</label>12</Col>
        <Col span="12"><label>用户昵称：</label>XXX</Col>
      </Row>
      <Row>
        <Col span="12"><label>绑定手机号：</label>1346446878</Col>
        <Col span="12"><label>关注时间：</label>2012-12-12</Col>
      </Row>
      <Row>
        <Col span="12"><label>注册时间：</label>2012-12-12</Col>
        <Col span="12"><label>用户状态：</label>正常</Col>
      </Row>
    </Card>
  </div>
</template>
<style lang="scss" scoped>
.ivu-col {
  margin: 10px 0;
  label {
    display: inline-block;
    width: 100px;
    text-align: right;
    margin-right: 10px;
  }
}
</style>

<template>
  <div>
    <Card shadow :padding="30">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        用户详情
      </p>
      <Row>
        <Col span="12">
          <label>头像：</label><Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        </Col>
        <Col span="12"><label>用户id：</label>12</Col>
      </Row>
      <Row>
        <Col span="12"><label>昵称：</label>XXX</Col>
        <Col span="12"><label>绑定手机号：</label>1366351364</Col>
      </Row>
      <Row>
        <Col span="12"><label>关注时间：</label>2012-12-12</Col>
        <Col span="12"><label>注册时间：</label>2012-12-12</Col>
      </Row>
      <Row>
        <Col span="12"><label>发布评价：</label>20次</Col>
        <Col span="12"><label>发布投诉：</label>20次</Col>
      </Row>
      <Row>
        <Col span="12"><label>咨询：</label>20次</Col>
        <Col span="12"><label>用户状态：</label>正常</Col>
      </Row>
      <Row>
        <Col span="12"><label>所在地：</label>成都</Col>
      </Row>
    </Card>
  </div>
</template>
<style lang="scss" scoped>
.ivu-col{
  margin: 10px 0;
  label{
    display: inline-block; width: 100px; text-align: right;margin-right: 10px;
  }
}
</style>

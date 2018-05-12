<template>
  <div>
    <Form ref="formInline" :model="formInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary">查询</Button>
      </FormItem>
    </Form>
    <Table border :columns="columns6" :data="data5"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      columns6: [
        {
          title: 'Date',
          key: 'date'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          filters: [
            {
              label: 'Greater than 25',
              value: 1
            },
            {
              label: 'Less than 25',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.age > 25
            } else if (value === 2) {
              return row.age < 25
            }
          }
        },
        {
          title: 'Address',
          key: 'address',
          filters: [
            {
              label: 'New York',
              value: 'New York'
            },
            {
              label: 'London',
              value: 'London'
            },
            {
              label: 'Sydney',
              value: 'Sydney'
            }
          ],
          filterMethod (value, row) {
            return row.address.indexOf(value) > -1
          }
        }
      ],
      data5: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
</script>

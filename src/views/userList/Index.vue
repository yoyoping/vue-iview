<template>
  <div>
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="show">Show</Checkbox>
      <Checkbox label="weak">Weak</Checkbox>
      <Checkbox label="signin">Signin</Checkbox>
      <Checkbox label="click">Click</Checkbox>
      <Checkbox label="active">Active</Checkbox>
      <Checkbox label="day7">7, retained</Checkbox>
      <Checkbox label="day30">30, retained</Checkbox>
      <Checkbox label="tomorrow">The next day left</Checkbox>
      <Checkbox label="day">Day Active</Checkbox>
      <Checkbox label="week">Week Active</Checkbox>
      <Checkbox label="month">Month Active</Checkbox>
    </Checkbox-group>
    <Table :data="tableData2" :columns="tableColumns2" border></Table>
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
      tableData2: this.mockTableData2(),
      tableColumns2: [],
      tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week',
        'month'
      ]
    }
  },
  methods: {
    mockTableData2 () {
      let data = []

      function getNum () {
        return Math.floor(Math.random() * 10000 + 1)
      }
      for (let i = 0; i < 10; i++) {
        data.push({
          name: 'Name ' + (i + 1),
          fav: 0,
          show: getNum(),
          weak: getNum(),
          signin: getNum(),
          click: getNum(),
          active: getNum(),
          day7: getNum(),
          day30: getNum(),
          tomorrow: getNum(),
          day: getNum(),
          week: getNum(),
          month: getNum()
        })
      }
      return data
    },
    getTable2Columns () {
      const table2ColumnList = {
        name: {
          title: 'Name',
          key: 'name',
          fixed: 'left',
          width: 200,
          render: (h, params) => {
            const fav = this.tableData2[params.index].fav
            const style = fav === 0 ? {
              cursor: 'pointer'
            } : {
              cursor: 'pointer',
              color: '#f50'
            }

            return h('div', [
              h('Icon', {
                style: style,
                props: {
                  type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                },
                nativeOn: {
                  click: () => {
                    this.toggleFav(params.index)
                  }
                }
              }),
              h('span', ' ' + params.row.name)
            ])
          }
        },
        show: {
          title: 'Show',
          key: 'show',
          width: 150,
          sortable: true
        },
        weak: {
          title: 'Weak',
          key: 'weak',
          width: 150,
          sortable: true
        },
        signin: {
          title: 'Signin',
          key: 'signin',
          width: 150,
          sortable: true
        },
        click: {
          title: 'Click',
          key: 'click',
          width: 150,
          sortable: true
        },
        active: {
          title: 'Active',
          key: 'active',
          width: 150,
          sortable: true
        },
        day7: {
          title: '7, retained',
          key: 'day7',
          width: 150,
          sortable: true
        },
        day30: {
          title: '30, retained',
          key: 'day30',
          width: 150,
          sortable: true
        },
        tomorrow: {
          title: 'The next day left',
          key: 'tomorrow',
          width: 150,
          sortable: true
        },
        day: {
          title: 'Day Active',
          key: 'day',
          width: 150,
          sortable: true
        },
        week: {
          title: 'Week Active',
          key: 'week',
          width: 150,
          sortable: true
        },
        month: {
          title: 'Month Active',
          key: 'month',
          width: 150,
          sortable: true
        }
      }
      let data = [table2ColumnList.name]
      this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]))
      return data
    },
    changeTableColumns () {
      this.tableColumns2 = this.getTable2Columns()
    },
    toggleFav (index) {
      this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0
    }
  },
  mounted () {
    this.changeTableColumns()
  }
}
</script>

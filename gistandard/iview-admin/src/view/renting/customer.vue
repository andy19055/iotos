<template>
  <div>
      <ioTable :columnFileds="columns" :datasource="tableData"></ioTable>
  </div>
</template>

<script>
import { getTableData } from '@/api/data'
import ioTable from './iotable.vue'

const datasource = [
  {
    name: 'SP-1002',
    class: '主场馆',
    station: '北门一楼1002',
    details: '1212',
    status: '待租',
    test: '开心',
    person: '李儒强'
  },
  {
    name: 'SP-1002',
    class: '会议室',
    station: '北门一楼1002',
    details: '23213',
    status: '待租',
    test: '开心',
    person: '李天宝'
  },
  {
    name: 'SP-1002',
    class: '报告厅',
    station: '北门一楼1002',
    details: 'asdga',
    status: '待租',
    test: '奇怪',
    person: '李儒强'
  },
  {
    name: 'SP-1002',
    class: '游泳馆',
    station: '北门一楼1002',
    details: 'daewwe',
    status: '待租',
    test: '聊天',
    person: '张秀荣'
  },
]

export default {
  name: 'page_renting_customer',
  components: {
    ioTable
  },
  data () {
    return {
        columns: [
          {
            title: '姓名',
            slot: 'name',
            sortable: true,
            filter: {
              type: 'Input'
            }
          },       // 跟iView的table不同的地方还有列变量是绑定不是slot，而是用key了
          {
            title: '性别',
            slot: 'phone',
            filter: {
              type: 'Select',
              option: {
                0: {
                  value: '',
                  name: '全部'
                },
                1: {
                  value: '男',
                  name: '男'
                },
                2: {
                  value: '女',
                  name: '女'
                }
              }
            }
          },                     //加上editable: true，启用单个格子支持编辑
          {
            title: '电话',
            slot: 'phone',
            filter: {
              type: 'Input'
            }
          },
          {
            title: '单位名称',
            slot: 'company',
            filter: {
              type: 'Input'
            }
          },
          {
            title: '登记日期',
            slot: 'time',
            filter: {
              type: 'Input'
            }
          },
          {
            title: '性别',
            slot: 'phone',
            filter: {
              type: 'Select',
              option: {
                0: {
                  value: '',
                  name: '全部'
                },
                1: {
                  value: '男',
                  name: '男'
                },
                2: {
                  value: '女',
                  name: '女'
                }
              }
            }
          },
          {
            title: '签订人',
            slot: 'person',
            filter: {
              type: 'Input'
            }
          }
        ],
        tableData: datasource
    }
  },
  methods: {
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getTableData().then(res => {
//      this.tableData = res.data
    })
  }
}
</script>

<style>

</style>

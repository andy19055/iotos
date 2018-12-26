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
  name: 'page_renting_contract',
  components: {
    ioTable
  },
  data () {
    return {
        columns: [
          {
            title: '名称编号',
            slot: 'name',
            sortable: true,
            filter: {
              type: 'Input'
            }
          },       // 跟iView的table不同的地方还有列变量是绑定不是slot，而是用key了
          {
            title: '租赁类别',
            slot: 'class',
            filter: {
              type: 'Select',
              option: {
                0: {
                  value: '',
                  name: '全部'
                },
                1: {
                  value: '主场馆',
                  name: '主场馆'
                },
                2: {
                  value: '会议室',
                  name: '会议室'
                },
                3: {
                  value: '游泳馆',
                  name: '游泳馆'
                },
                4: {
                  value: '报告厅',
                  name: '报告厅'
                },
                5: {
                  value: '展厅',
                  name: '展厅'
                },
                6: {
                  value: '篮球馆',
                  name: '篮球馆'
                },
                7: {
                  value: '广告屏',
                  name: '广告屏'
                }
              }
            }
          },                     //加上editable: true，启用单个格子支持编辑
          {
            title: '租赁状态',
            slot: 'status',
            filter: {
              type: 'Input'
            }
          },
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

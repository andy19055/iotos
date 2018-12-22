<template>
  <Card shadow>
    <div class="product-page-con">
      <Card>
        <Button style="margin: 10px 0;" type="default" @click="exportExcel"><Icon type="ios-download-outline" style="margin-right: 5px" size="20"></Icon>导出为Csv文件</Button>
        <Table ref="table" :columns="columns" :data="data" footer>
          <template slot-scope="{ row, index }" slot="name">
            <Input type="text" v-model="editname" v-if="editIndex === index"/>
            <span v-else>{{ row.name }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="class">
            <Select v-if="editIndex === index" :value="row.class" @on-change="classChoose" style="width:200px" readonly>
              <Option v-for="item in productClass" :value="item" :key="item">{{ item }}</Option>
            </Select>
            <span v-else>{{ row.class }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="station">
            <Input type="text" v-model="editstation" v-if="editIndex === index"/>
            <span v-else>{{ row.station }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="status">
            <!--这样可以禁止修改，变成只读列！-->
            <!--<Input type="text" v-model="editstatus" v-if="editIndex === index"/>-->
            <!--<span v-else>{{ row.status }}</span>-->
            <span>{{ row.status }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="action">
            <div v-if="editIndex === index">
              <Button class="option" @click="handleSave(index)">保存</Button>
              <Button class="option" @click="editIndex = -1">复制</Button>
              <Button class="option" @click="editIndex = -1">删除</Button>
              <Button class="option" @click="editIndex = -1">取消</Button>
            </div>
            <div v-else>
              <Button @click="handleEdit(row, index)">操作</Button>
            </div>
          </template>
        </Table>
      </Card>
    </div>
  </Card>
</template>
<script>
  import './contract.less'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import Tables from '_c/tables'
  import { getTableData } from '@/api/data'

  export default {
    components: {
      Tables
    },
    data () {
      return {
        columns: [
          {title: '名称编号', slot: 'name', sortable: true},       // 跟iView的table不同的地方还有列变量是绑定不是slot，而是用key了
          {title: '租赁类别', slot: 'class'},                     //加上editable: true，启用单个格子支持编辑
          {title: '具体位置', slot: 'station'},
          {title: '租赁状态', slot: 'status'},
          {title: '操作', slot: 'action'}
        ],
        productClass: [
          '主场馆',
          '会议室',
          '报告厅',
          '游泳馆',
          '羽毛球馆'
        ],
        data: [
          {
            name: 'SP-1002',
            class: '主场馆',
            station: '北门一楼1002',
            status: '待租',
          },
          {
            name: 'SP-1002',
            class: '会议室',
            station: '北门一楼1002',
            status: '待租',
          },
          {
            name: 'SP-1002',
            class: '报告厅',
            station: '北门一楼1002',
            status: '待租',
          },
          {
            name: 'SP-1002',
            class: '游泳馆',
            station: '北门一楼1002',
            status: '待租',
          },
        ],
        editIndex: -1,  // 当前聚焦的输入框的行数
        editname: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        editclass: '',  // 第二列输入框
        editstation: '',  // 第三列输入框
        editstatus: '',  // 第四列输入框
      }
    },
    methods: {
      handleEdit (row, index) {
        this.editname = row.name;
        this.editclass = row.class;
        this.editstation = row.station;
        this.editstatus = row.status;
        this.editIndex = index;
      },
      classChoose(classtext){
          console.warn(classtext)
          this.editclass = classtext
      },
      handleSave (index) {
        this.data[index].name = this.editname;
        this.data[index].class = this.editclass;
        this.data[index].station = this.editstation;
        this.data[index].status = this.editstatus;
        this.editIndex = -1;
      },
      exportExcel () {
        this.$refs.table.exportCsv({
          filename: `table-${(new Date()).valueOf()}.csv`
        })
      }
    }
  }
</script>






<template>
  <div>
    <ioTable :columnFileds="columns" :datasource="tableData"></ioTable>
  </div>
</template>

<script>
import { getTableData } from "@/api/data";
import ioTable from "_c/iotable/iotable.vue";

const datasource = [
  {
    name: "李光耀",
    phone: "13423987810",
    company: "爱投斯智能",
    time: "2019年01月01日",
    receiver: "张秀荣",
    comment: "客户初访，洽谈体育馆租赁举办一场大型企业年会，费用问题暂无结果"
  },
  {
    name: "李光耀",
    phone: "13423987810",
    company: "爱投斯智能",
    time: "2019年01月07日",
    receiver: "张秀荣",
    comment: "合同签订"
  },
  {
    name: "李凯",
    phone: "13423987810",
    company: "海尔集团",
    time: "2019年01月08日",
    receiver: "张秀荣",
    comment: "客户初访，场地考察"
  }
];

export default {
  name: "page_renting_customer",
  components: {
    ioTable
  },
  data() {
    return {
      columns: [
        {
          title: "客户姓名",
          slot: "name",
          sortable: true,
          filter: {
            type: "Input"
          }
        }, // 跟iView的table不同的地方还有列变量是绑定不是slot，而是用key了                 //加上editable: true，启用单个格子支持编辑
        {
          title: "电话",
          slot: "phone",
          filter: {
            type: "Input"
          }
        },
        {
          title: "单位名称",
          slot: "company",
          filter: {
            type: "Input"
          }
        },
        {
          title: "来访日期",
          slot: "time",
          filter: {
            type: "DatePicker",
            option: {
              type: "date",
              format: "yyyy年MM月dd日"
            }
          }
        },
        {
          title: "接待人",
          slot: "receiver",
          filter: {
            type: "Input"
          }
        },
        {
          title: "跟踪纪要",
          slot: "comment",
          filter: {
            type: "Input",
            option: {
              type: "textarea"
            }
          }
        }
      ],
      tableData: datasource
    };
  },
  methods: {
    exportExcel() {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      });
    }
  },
  mounted() {
    getTableData().then(res => {
      //      this.tableData = res.data
    });
  }
};
</script>

<style>
</style>

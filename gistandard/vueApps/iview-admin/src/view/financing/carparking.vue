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
    name: "2019-001",
    begin: "2019/01/01 12:13:14",
    end: "2019/01/01 12:13:14",
    amount: 58,
    receipt: 58,
    balance: 0,
    payedtime: "2019/01/01 12:13:14"
  },
  {
    name: "2019-002",
    status: "意向签订",
    begin: "2019/01/01 12:13:14",
    end: "2019/01/01 12:13:14",
    amount: 10,
    receipt: 0,
    balance: 0,
    payedtime: "2019/01/01 12:13:14"
  },
  {
    name: "2019-003",
    begin: "2019/01/01 12:13:14",
    end: "2019/01/01 12:13:14",
    amount: 23,
    receipt: 23,
    balance: 0,
    payedtime: "2019/01/01 12:13:14"
  },
  {
    name: "2019-004",
    begin: "2019/01/01 12:13:14",
    end: "2019/01/01 12:13:14",
    amount: 46,
    receipt: 0,
    balance: 0,
    payedtime: "2019/01/01 12:13:14"
  }
];

export default {
  name: "page_financing_carparking",
  components: {
    ioTable
  },
  data() {
    return {
      columns: [
        {
          title: "一卡通卡号",
          slot: "name",
          sortable: true,
          filter: {
            type: "Input"
          }
        },
        {
          title: "进停车场时间",
          slot: "begin",
          filter: {
            type: "DatePicker",
            option: {
              type: "datetime",
              format: "yyyy/MM/dd HH:mm:ss"
            }
          }
        },
        {
          title: "出停车场时间",
          slot: "end",
          filter: {
            type: "DatePicker",
            option: {
              type: "datetime",
              format: "yyyy/MM/dd HH:mm:ss"
            }
          }
        },
        {
          title: "应收金额",
          slot: "amount",
          filter: {
            type: "InputNumber"
          }
        },
        {
          title: "实收金额",
          slot: "receipt",
          filter: {
            type: "InputNumber"
          }
        },
        {
          title: "卡内余额",
          slot: "balance",
          filter: {
            type: "InputNumber"
          }
        },
        {
          title: "缴费时间",
          slot: "payedtime",
          filter: {
            type: "DatePicker",
            option: {
              type: "datetime",
              format: "yyyy/MM/dd HH:mm:ss"
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

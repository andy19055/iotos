<template>
  <div><ioTable :columnFileds="columns" :datasource="tableData"></ioTable></div>
</template>

<script>
  import { getTableData } from "@/api/data";
  import ioTable from "_c/iotable/iotable.vue";

  const datasource = [
    {
      name: "2019-001",
      identify: '4202221991231003X',
      date: "2019/01/01 12:13:14",
      status: "已缴纳",
      amount: 58,
    },
    {
      name: "2019-001",
      identify: '4202221991231003X',
      date: "2019/01/01 12:13:14",
      status: "已缴纳",
      amount: 58,
    },
    {
      name: "2019-001",
      identify: '4202221991231003X',
      date: "2019/01/01 12:13:14",
      status: "已缴纳",
      amount: 58,
    },
    {
      name: "2019-001",
      identify: '4202221991231003X',
      date: "2019/01/01 12:13:14",
      status: "已缴纳",
      amount: 58,
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
            title: "姓名",
            slot: "name",
            sortable: true,
            filter: {
              type: "Input"
            }
          },
          {
            title: "证件号码",
            slot: "identify",
            filter: {
              type: "Input"
            }
          },
          {
            title: "押金数额",
            slot: "amount",
            filter: {
              type: "InputNumber"
            }
          },
          {
            title: "缴纳日期",
            slot: "date",
            filter: {
              type: "DatePicker",
              option: {
                type: "datetime",
                format: "yyyy/MM/dd HH:mm:ss"
              }
            }
          },
          {
            title: "押金状态",
            slot: "status",
            filter: {
              type: "Select",
              option: {
                0: {
                  value: "",
                  name: "全部"
                },
                1: {
                  value: "已缴纳",
                  name: "已缴纳"
                },
                2: {
                  value: "已退还",
                  name: "已退还"
                }
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

<style></style>

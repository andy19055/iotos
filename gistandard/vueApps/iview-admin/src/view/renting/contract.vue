<template>
  <div>
    <ioTable :columnFileds="columns" :datasource="tableData"></ioTable>
    <Carousel v-model="value1" loop>
      <CarouselItem> <div class="demo-carousel">1</div> </CarouselItem>
      <CarouselItem> <div class="demo-carousel">2</div> </CarouselItem>
      <CarouselItem> <div class="demo-carousel">3</div> </CarouselItem>
      <CarouselItem> <div class="demo-carousel">4</div> </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
  import { getTableData } from "@/api/data";
  import ioTable from "_c/iotable/iotable.vue";

  const datasource = [
    {
      name: "2019-001",
      status: "已签订",
      begin: "2019年01月01日",
      end: "2019年02月01日",
      amount: 58,
      customer: "李正",
      receiver: "李儒强",
      files: "天河合同-2019",
      receipt: "已开票"
    },
    {
      name: "2019-002",
      status: "意向签订",
      begin: "2019年01月01日",
      end: "2019年02月01日",
      amount: 10,
      customer: "李正",
      receiver: "李儒强",
      files: "万达合同-2018",
      receipt: "已开票"
    },
    {
      name: "2019-003",
      status: "已签订",
      begin: "2019年02月01日",
      end: "2019年02月01日",
      amount: 23,
      customer: "李正",
      receiver: "李儒强",
      files: "体育合同-2018",
      receipt: "未开票"
    },
    {
      name: "2019-004",
      status: "已签订",
      begin: "2019年01月01日",
      end: "2019年02月01日",
      amount: 46,
      customer: "李正",
      receiver: "李儒强",
      files: "军运会合同-2019",
      receipt: "未开票"
    }
  ];

  export default {
    name: "page_renting_contract",
    components: {
      ioTable
    },
    data() {
      return {
        columns: [
          {
            title: "合同编号",
            slot: "name",
            sortable: true,
            filter: {
              type: "Input"
            }
          }, // 跟iView的table不同的地方还有列变量是绑定不是slot，而是用key了
          {
            title: "签订状态",
            slot: "status",
            filter: {
              type: "Select",
              option: {
                0: {
                  value: "",
                  name: "全部"
                },
                1: {
                  value: "意向签订",
                  name: "意向签订"
                },
                2: {
                  value: "已签订",
                  name: "已签订"
                }
              }
            }
          }, //加上editable: true，启用单个格子支持编辑
          {
            title: "生效日期",
            slot: "begin",
            filter: {
              type: "DatePicker",
              option: {
                type: "date",
                format: "yyyy年MM月dd日"
              }
            }
          },
          {
            title: "结束日期",
            slot: "end",
            filter: {
              type: "DatePicker",
              option: {
                type: "date",
                format: "yyyy年MM月dd日"
              }
            }
          },
          {
            title: "合同金额(万)",
            slot: "amount",
            filter: {
              type: "InputNumber"
            }
          },
          {
            title: "客户代表",
            slot: "customer",
            filter: {
              type: "Input"
            }
          },
          {
            title: "我方代表",
            slot: "receiver",
            filter: {
              type: "Input"
            }
          },
          {
            title: "开票状态",
            slot: "receipt",
            filter: {
              type: "Select",
              option: {
                0: {
                  value: "",
                  name: "全部"
                },
                1: {
                  value: "已开票",
                  name: "已开票"
                },
                2: {
                  value: "未开票",
                  name: "未开票"
                }
              }
            }
          },
          {
            title: "合同附件",
            slot: "files",
            filter: {
              type: "Upload"
            }
          }
        ],
        tableData: datasource,
        value1: 0
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

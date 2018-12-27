<template>
  <Card shadow>
    <div class="product-page-con">
      <Card>
        <Button style="margin-bottom: 10px;" type="default" @click="exportExcel">
          <Icon type="ios-download-outline" style="margin-right: 5px" size="20"></Icon>导出为Csv文件
        </Button>
        <Table
          border
          :data="filters"
          :columns="tableColumnsFilters"
          stripe
          style="margin-bottom: 1px"
        ></Table>
        <Table
          ref="table"
          :columns="columns"
          :show-header="showHeader"
          :data="data"
          @on-delete="handleDelete"
        >
          <template v-for="colItem in columns" slot-scope="{ row, index }" :slot="colItem.slot">
            <Select
              ref="selecter"
              v-if="editIndex === index && colItem.filter.type === 'Select'"
              :value="row[colItem.slot]"
              :name="colItem.slot"
              @on-open-change="optionselected(colItem.slot)"
              @on-change="classChoose"
              readonly
            >
              <Option
                v-for="(value,key) in colItem.filter.option"
                v-if="key != 0"
                :value="value.name"
              >{{value.name}}</Option>
            </Select>
            <Input
              v-else-if="editIndex === index && colItem.filter.type === 'Input' && colItem.filter.option && colItem.filter.option.type === 'textarea'"
              type="textarea"
              v-model="editData[colItem.slot]"
            />
            <Input
              v-else-if="editIndex === index && colItem.filter.type === 'Input'"
              type="text"
              v-model="editData[colItem.slot]"
            />
            <InputNumber
              v-else-if="editIndex === index && colItem.filter.type === 'InputNumber'"
              v-model="editData[colItem.slot]"
            />
            <DatePicker
              v-else-if="editIndex === index && colItem.filter.type === 'DatePicker'"
              type="date"
              format="yyyy年MM月dd日"
              :value="editData[colItem.slot]"
              @on-change="editData[colItem.slot]=$event"
            />
            <Upload
              v-else-if="editIndex === index && colItem.filter.type === 'Upload'"
              action="//jsonplaceholder.typicode.com/posts/"
              :name="editData[colItem.slot]"
              @on-success="editData[colItem.slot]=$event"
            >
              <ButtonGroup size="small" shape="circle" type="primary">
                <Button icon="ios-cloud-upload-outline" style="margin-top:8px;">上传</Button>
                <Button icon="ios-cloud-upload-outline" style="margin-top:8px;">上传</Button>
              </ButtonGroup>
            </Upload>
            <span v-else>{{ row[colItem.slot] }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="action">
            <ButtonGroup v-if="editIndex === index" size="small" shape="circle" type="primary">
              <Button class="option" @click="handleSave(index)">保存</Button>
              <Button class="option" @click="editIndex = -1">克隆</Button>
              <Button class="option" @click="editIndex = -1" type="warning">删除</Button>
              <Button class="option" @click="editIndex = -1">取消</Button>
            </ButtonGroup>
            <div v-else>
              <Button @click="handleEdit(row, index)">
                <Icon type="ios-construct" size="large" style="margin-right: 5px"></Icon>操作
              </Button>
            </div>
          </template>
        </Table>
      </Card>
    </div>
  </Card>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Tables from "_c/tables";
import FilterTable from "_c/table-filter";
import { getTableData } from "@/api/data";
import TableExpand from "iview/src/components/table/expand";

export default {
  name: "ioTable",
  components: {
    TableExpand,
    FilterTable
  },
  props: {
    columnFileds: {
      type: Array,
      default: []
    },
    datasource: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      editIndex: -1, // 当前聚焦的输入框的行数
      editData: {},

      showHeader: false,
      search: {},
      data: [],
      filters: [
        {
          title: ""
        }
      ],
      tableColumnsFilters: [],
      classText: ""
    };
  },
  computed: {
    columns() {
      return [
        ...this.columnFileds,
        {
          title: "操作",
          slot: "action",
          filter: {
            type: "Button",
            icon: "ios-create-outline"
          },
          options: ["delete"],
          minWidth: 50,
          maxWidth: 300
        }
      ];
    }
  },
  methods: {
    handleDelete(params) {
      console.log(params);
    },
    handleEdit(row, index) {
      for (var key in row) {
        this.editData[key] = row[key];
      }

      //console.error(JSON.stringify(this.editData,undefined,2))
      this.editIndex = index;
    },
    datePicked(fieldtext, valuetext) {
      alert(fieldtext + " " + valuetext);
    },
    fileUploaded(index, filename) {
      // this.editData[key] = row[key];
      alert(filename);
    },
    optionselected(classtext) {
      this.classText = classtext;
    },
    classChoose(classvalue) {
      this.editData[this.classText] = classvalue;
    },
    handleSave(index) {
      // console.error(JSON.stringify(this.editData, undefined, 2));
      for (var key in this.editData) this.data[index][key] = this.editData[key];
      this.editIndex = -1;
    },
    exportExcel() {
      this.$refs.table.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      });
    },
    deleteRow() {},
    /**
     * 格式化状态
     * @param value 状态值
     * @param status 状态对象
     * @returns {*} 返回状态
     */
    formatStatus(value, status) {
      return status[value] || { value: "", name: "" };
    },
    loadData() {
      //模拟数据库查询数据
      this.data = this.datasource.filter(item => {
        var rettmp = true;
        var sumtmp = 0;
        if (this.datasource.length > 0) {
          for (var key in this.datasource[0]) {
            sumtmp +=
              Boolean(this.search[key]) &&
              String(item[key])
                .toUpperCase()
                .indexOf(String(this.search[key]).toUpperCase()) == -1;
          }
          rettmp = sumtmp === 0 ? true : false;
        }

        //          if(this.search.name && item.name.toUpperCase().indexOf(this.search.name.toUpperCase()) == -1
        //            || this.search.class && item.class.toUpperCase().indexOf(this.search.class.toUpperCase()) == -1
        //            || this.search.station && item.station.toUpperCase().indexOf(this.search.station.toUpperCase()) == -1
        //            || this.search.status && item.status.toUpperCase().indexOf(this.search.status.toUpperCase()) == -1
        //          )
        //            rettmp = false

        return rettmp;
      });
      //by lrq,一方面可以做查询到的结果或初始列表中做本地实时过滤，另一方面，在服务器数据量很大时，初始查询页面没有内容或默认最新多少条内容，然后自己根据条件去服务器查，条件设置好后去获取
      //console.log('过滤查看条件', JSON.stringify(this.search,undefined,2))
    },
    //重新加载数据
    load() {
      //会执行一个load的事件
      this.loadData();
    },
    //验证输入框的值
    validInputValue(index, inputValue) {
      if (!inputValue) {
        this.$delete(this.search, this.columns[index].slot);
        this.load();
        return;
      }
      this.$set(this.search, this.columns[index].slot, inputValue);
      this.load();
    },
    createOptionsRender(index, h) {
      //选项渲染
      let optionRender = [];
      if (this.columns[index].filter.option) {
        let option = this.columns[index].filter.option;
        for (let i in option) {
          optionRender.push(
            h(
              "Option",
              {
                props: {
                  value: option[i].value
                }
              },
              option[i].name
            )
          );
        }
      }
      return optionRender;
    }
  },
  created() {
    for (let index in this.columns) {
      let filter = {};
      /**
       * 因为是采用的两个表的形式,过滤表中显示查询的Input,Select条件输组件,表头显示的是数据表的表头,渲染的数据是传入的columns中的filter字段
       * 数据表隐藏表头,只显示数据,渲染的数据是传入的columns中的key值
       */

      //将传入的列描述数据对象(columns) 的title和width 复制给 过滤表的列描述数据对象(tableColumnsFilters)
      this.$set(filter, "title", this.columns[index].title);
      if (this.columns[index].minWidth) {
        this.$set(filter, "minWidth", this.columns[index].minWidth);
      }
      if (this.columns[index].maxWidth) {
        this.$set(filter, "maxWidth", this.columns[index].maxWidth);
      }

      let render = h => {};

      //如果存在 过滤选项
      if (this.columns[index].filter) {
        //过滤为 下拉选择框
        if (
          this.columns[index].filter.type &&
          this.columns[index].filter.type === "Select"
        ) {
          render = h => {
            return h(
              this.columns[index].filter.type,
              {
                props: {
                  value: 0 //Select选项列表一般 0 为全部
                },
                on: {
                  "on-change": val => {
                    if (val === 0) {
                      //当选项是全部的时候删除 search中该字段的过滤条件
                      this.$delete(this.search, this.columns[index].slot);
                      this.load();
                      return;
                    }
                    //添加字段过滤条件
                    this.$set(this.search, this.columns[index].slot, val);
                    this.load();
                  }
                }
              },
              this.createOptionsRender(index, h)
            );
          };
        } else if (
          this.columns[index].filter.type &&
          this.columns[index].filter.type === "Button"
        ) {
          render = h => {
            return h(this.columns[index].filter.type, {
              props: {
                icon: "ios-search",
                text: "查询",
                type: "primary",
                size: "large",
                shape: "circle"
              },
              on: {
                "on-click": () => {
                  //查询按钮点击，从服务器去查，待实现，这个search应该是传到后台,然后台来根据条件查询数据库；
                  //----------------------------------------------------------------------------
                  //【TODO】
                  //----------------------------------------------------------------------------
                }
              }
            });
          };
        } else if (
          this.columns[index].filter.type &&
          this.columns[index].filter.type === "DatePicker"
        ) {
          render = h => {
            return h(this.columns[index].filter.type, {
              props: {
                placeholder: "输入" + this.columns[index].title,
                type: "date",
                format: "yyyy年MM月dd日"
              },
              on: {
                "on-change": val => {
                  this.validInputValue(index, val);
                }
              }
            });
          };
        } else if (
          this.columns[index].filter.type &&
          this.columns[index].filter.type === "Upload"
        ) {
          render = h => {
            return h("Input", {
              props: {
                placeholder: "输入" + this.columns[index].title,
                icon: "ios-search"
              },
              on: {
                "on-change": val => {
                  this.validInputValue(index, val);
                }
              }
            });
          };
        } else {
          //如果是输入框
          render = h => {
            //获取输入框的值,为了减少数据库的压力,我这里是
            //通过回车和点击搜索按钮才进行数据过滤查询,如果
            //要输入框变化就进行过滤,把 this.load()放到
            //input事件方法就行了
            let inputValue = {};
            return h(this.columns[index].filter.type, {
              props: {
                placeholder: "输入" + this.columns[index].title,
                icon: "ios-search"
              },
              on: {
                input: val => {
                  inputValue = val;
                  if (!inputValue) {
                    this.validInputValue(index, inputValue);
                  }
                },
                //input框后面的搜索按钮的点击事件
                "on-change": () => {
                  this.validInputValue(index, inputValue);
                },
                "on-enter": () => {
                  this.validInputValue(index, inputValue);
                }
              }
            });
          };
        }
      }
      this.$set(filter, "render", render);
      this.tableColumnsFilters.push(filter);
    }
  },
  async mounted() {
    await this.loadData();
  }
};
</script>

<style lang="less">
.product-page {
  &-con {
    height: ~"calc(100vh - 235px)";
  }
}
</style>





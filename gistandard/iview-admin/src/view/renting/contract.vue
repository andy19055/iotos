<template>
  <Card shadow>
    <div class="message-page-con">
      <Card>
        <!--跟iView的table不同的地方是绑定数据不是data，而是用v-model了-->
        <tables :columns="columns" v-model="data">
          <template slot-scope="{ row, index }" slot="name">
            <Input type="text" v-model="editName" v-if="editIndex === index"/>
            <span v-else>{{ row.name }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="age">
            <Input type="text" v-model="editAge" v-if="editIndex === index"/>
            <span v-else>{{ row.age }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="birthday">
            <Input type="text" v-model="editBirthday" v-if="editIndex === index"/>
            <span v-else>{{ getBirthday(row.birthday) }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="address">
            <Input type="text" v-model="editAddress" v-if="editIndex === index"/>
            <span v-else>{{ row.address }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="action">
            <div v-if="editIndex === index">
              <Button @click="handleSave(index)">保存</Button>
              <Button @click="editIndex = -1">取消</Button>
            </div>
            <div v-else>
              <Button @click="handleEdit(row, index)">操作</Button>
            </div>
          </template>
        </tables>
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
          {title: 'Name', key: 'name', sortable: true},       // 跟iView的table不同的地方还有列变量是绑定不是slot，而是用key了
          {title: 'Email', key: 'age', editable: true},
          {title: 'Create-Time', key: 'birthday'},
          {title: 'Create-Time', key: 'address'},
          {
            title: 'Handle',
            key: 'handle',
            options: ['delete'],
            button: [
              (h, params, vm) => {
                return h('Poptip', {
                  props: {
                    confirm: true,
                    title: '你确定要删除吗?'
                  },
                  on: {
                    'on-ok': () => {
                      vm.$emit('on-delete', params)
                      vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                    }
                  }
                }, [
                  h('Button', '自定义删除')
                ])
              }
            ]
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '919526400000',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '696096000000',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '563472000000',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '687024000000',
            address: '深圳市南山区深南大道'
          }
        ],
        editIndex: -1,  // 当前聚焦的输入框的行数
        editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        editAge: '',  // 第二列输入框
        editBirthday: '',  // 第三列输入框
        editAddress: '',  // 第四列输入框
      }
    },
    methods: {
      handleEdit (row, index) {
        this.editName = row.name;
        this.editAge = row.age;
        this.editAddress = row.address;
        this.editBirthday = row.birthday;
        this.editIndex = index;
      },
      handleSave (index) {
        this.data[index].name = this.editName;
        this.data[index].age = this.editAge;
        this.data[index].birthday = this.editBirthday;
        this.data[index].address = this.editAddress;
        this.editIndex = -1;
      },
      getBirthday (birthday) {
        const date = new Date(parseInt(birthday));
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
      }
    }
  }
</script>

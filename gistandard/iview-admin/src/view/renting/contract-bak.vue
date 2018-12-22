<template>
  <Card shadow>
      <div class="message-page-con">
        <Spin fix v-if="contentLoading" size="large"></Spin>
        <Card>
          <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
          <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
        </Card>
      </div>
  </Card>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import './contract.less'
  import Tables from '_c/tables'
  import { getTableData } from '@/api/data'

  const listDic = {
    unread: 'messageUnreadList',
    readed: 'messageReadedList',
    trash: 'messageTrashList'
  }
export default {
  name: 'message_page',
  components: {
    Tables
  },
  data () {
    return {
      listLoading: true,
      contentLoading: false,
      currentMessageType: 'unread',
      messageContent: '',
      showingMsgItem: {},

      columns: [
        {title: 'Name', key: 'name', sortable: true},
        {title: 'Email', key: 'email', editable: true},
        {title: 'Create-Time', key: 'createTime'},
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
      tableData: []
    }
  },
  computed: {
    ...mapState({
      messageUnreadList: store => store.user.messageUnreadList,
      messageReadedList: store => store.user.messageReadedList,
      messageTrashList: store => store.user.messageTrashList,
      messageList () {
        return this[listDic[this.currentMessageType]]
      },

      sideMenuChoosed: store => store.user.sideMenuChoosed,
    }),

    ...mapGetters([
      'messageUnreadCount',
      'messageReadedCount',
      'messageTrashCount'
    ]),

    optionGroup () {
      return {
        product: [
          {
            name: 'query',
            icon: 'ios-search-outline',
            text: '查询商铺信息'
          },
          {
            name: 'add',
            icon: 'ios-add-circle-outline',
            text: '新增商铺信息'
          }
        ],
        custom: [
          {
            name: 'query',
            icon: 'ios-search-outline',
            text: '查询客户信息'
          },
          {
            name: 'add',
            icon: 'ios-add-circle-outline',
            text: '新增客户信息'
          },
        ],
        contract: [
          {
            name: 'query',
            icon: 'ios-search-outline',
            text: '查询合同信息'
          },
          {
            name: 'add',
            icon: 'ios-add-circle-outline',
            text: '新增合同信息'
          },
        ]
      }
    },

    activename(){
      var nametmp = ''
      if (this.optionGroup[this.sideMenuChoosed])
        nametmp = this.sideMenuChoosed + '-' + this.optionGroup[this.sideMenuChoosed][0].name
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
        this.$refs.menu.updateActiveName()
      })
      return nametmp
    },
  },
  methods: {
    ...mapMutations([
      //
    ]),
    ...mapActions([
      'getContentByMsgId',
      'getMessageList',
      'hasRead',
      'removeReaded',
      'restoreTrash'
    ]),
    stopLoading (name) {
      this[name] = false
    },
    handleSelect (name) {
      this.currentMessageType = name
    },
    handleView (msg_id) {
      this.contentLoading = true
      this.getContentByMsgId({ msg_id }).then(content => {
        this.messageContent = content
        const item = this.messageList.find(item => item.msg_id === msg_id)
        if (item) this.showingMsgItem = item
        if (this.currentMessageType === 'unread') this.hasRead({ msg_id })
        this.stopLoading('contentLoading')
      }).catch(() => {
        this.stopLoading('contentLoading')
      })
    },
    removeMsg (item) {
      item.loading = true
      const msg_id = item.msg_id
      if (this.currentMessageType === 'readed') this.removeReaded({ msg_id })
      else this.restoreTrash({ msg_id })
    },

    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },

  mounted () {
    this.listLoading = true
    // 请求获取消息列表
    this.getMessageList().then(() => this.stopLoading('listLoading')).catch(() => this.stopLoading('listLoading'))

    getTableData().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

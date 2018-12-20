<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="mainMenuSelected">
      <template v-for="item in menulist">
        <MenuItem :name="item.name">
          <Icon :type="item.icon" size="20"/>
          {{item.text}}
        </MenuItem>
      </template>
        <Submenu name="8">
            <template slot="title">
                <Icon type="ios-stats" size="20"/>
                综合统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="8-1">新增和启动</MenuItem>
                <MenuItem name="8-2">活跃分析</MenuItem>
                <MenuItem name="8-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="8-4">用户留存</MenuItem>
                <MenuItem name="8-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
  </div>
</template>
<script>
  export default {
    name: 'TopMenu',
    data () {
      return {
        theme1: 'dark',
        menulist:[
          {
            text: '基本业务办公',
            name: '1',
            icon: ' iconfont icon-tongxunlu011'
          },
          {
            text: '物业管理',
            name: '2',
            icon: ' iconfont icon-gaoceng'
          },
          {
            text: '智能一卡通',
            name: '3',
            icon: ' iconfont icon-ICqiaduxieqi'
          },
          {
            text: '公共信息服务',
            name: '4',
            icon: ' iconfont icon-shequguanli_bianminxinxi'
          },
          {
            text: '设备运行管理',
            name: '5',
            icon: ' iconfont icon-kuaisuyunxing01'
          },
          {
            text: '设备安全管理',
            name: '6',
            icon: ' iconfont icon-anquanjingbao'
          },
          {
            text: '信息安全管理',
            name: '7',
            icon: ' iconfont icon-anquan1'
          }
        ]
      }
    },
    methods:{
      mainMenuSelected (name) {
        this.$Modal.info({
          title: '提示',
          content: name
        })
        this.$emit('on-select',name)
      }
    }
  }
</script>
<style>
  /*.ivu-menu-item-active{*/
    /*color:white !important;*/
  /*}*/
  /*.ivu-menu-item-active{*/
    /*color:white !important;*/
  /*}*/
  /*.iconfont{*/
    /*font-size:16px !important;*/
  /*}*/
</style>

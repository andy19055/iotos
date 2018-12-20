<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="mainMenuSelected">
        <MenuItem name="1">
          <Icon type=" iconfont icon-tongxunlu011" size="20"/>
            基本业务办公
        </MenuItem>
        <MenuItem name="2">
            <Icon type=" iconfont icon-ICqiaduxieqi" size="20"/>
            智能一卡通
        </MenuItem>
      <MenuItem name="3">
            <Icon type=" iconfont icon-shequguanli_bianminxinxi" size="20"/>
            公共信息服务
        </MenuItem>
            <MenuItem name="4">
            <Icon type=" iconfont icon-kuaisuyunxing01" size="20"/>
            设备运行管理
        </MenuItem>
            <MenuItem name="5">
            <Icon type=" iconfont icon-gaoceng" size="20"/>
            物业管理
        </MenuItem>
            <MenuItem name="6">
            <Icon type=" iconfont icon-anquanjingbao" size="20"/>
            设备安全管理
        </MenuItem>
            <MenuItem name="7">
            <Icon type=" iconfont icon-anquan1" size="20"/>
            信息安全管理
        </MenuItem>
        <Submenu name="8">
            <template slot="title">
                <Icon type="ios-stats" size="20"/>
                统计分析
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
        <MenuItem name="9">
            <Icon type="ios-construct" size="20"/>
            综合设置
        </MenuItem>
    </Menu>
  </div>
</template>
<script>
  export default {
    name: 'TopMenu',
    data () {
      return {
        theme1: 'dark'
      }
    },
    methods:{
      mainMenuSelected (name) {
//        alert(name);
        return name;
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

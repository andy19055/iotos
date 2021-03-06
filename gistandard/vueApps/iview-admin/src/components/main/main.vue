<template>
  <Layout style="height: 100%" class="main">
    <Sider hide-trigger collapsible :width="250" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu :accordion="accordion" ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div class="logo-con">
          <a v-show="!collapsed" href="http://iotos.net.cn">
            <div style="margin-top: 4px;color: white;position: relative;padding-left: 5px">
              <Icon key="max-logo" type=" iconfont icon-IOTOS" size="20" style="float:left;padding-right: 5px;"/>
              <div style="font-size:13pt;font-family:幼圆;">{{productName}}</div>
            </div>
            <div style="color:rgba(192, 192, 192, 0.582);font: size 1;font-family: 'Times New Roman', Times, serif;padding-left: 5px ">{{productSubtitle}}</div>
          </a>
          <a v-show="collapsed" href="http://iotos.net.cn">
            <Icon type=" iconfont icon-IOTOS" size="22" style="color: white;margin-top:6px;padding-left: 3px;"/>
            <div style="color:rgba(192, 192, 192, 0.582);margin-top:5px;font-size: 1pt;font-family: 'Times New Roman', Times, serif;padding-left: 3px;">{{productDomain}}</div>
          </a>
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <top-menu @on-select="topMenuSelected"/>
      <Header class="header-con">
        <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
          <user :message-unread-count="unreadCount" :user-avator="userAvator"/>
          <language v-if="$config.useI18n" @on-lang-change="setLocal" style="margin-right: 10px;" :lang="local"/>
          <error-store v-if="$config.plugin['error-store'] && $config.plugin['error-store'].showInHeader" :has-read="hasReadErrorPage" :count="errorCount"></error-store>
          <!--<Icon @click.native="handleChange" :size="20" type="_daibanshixiang"/>-->
          <!--<Icon type="_daibanshixiang"></Icon>-->
          <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
        </header-bar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
          </div>
          <Content class="content-wrapper">
            <keep-alive :include="cacheList">
              <router-view/>
            </keep-alive>
            <ABackTop :height="100" :bottom="80" :right="50" container=".content-wrapper"></ABackTop>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SideMenu from './components/side-menu';
import HeaderBar from './components/header-bar';
import TagsNav from './components/tags-nav';
import User from './components/user';
import ABackTop from './components/a-back-top';
import Fullscreen from './components/fullscreen';
import Language from './components/language';
import ErrorStore from './components/error-store';
import { mapMutations, mapActions, mapGetters} from 'vuex';
import { getNewTagList, getNextRoute, routeEqual, getHomeRoute, getMenuByRouterByTopmenu } from '@/libs/util';
import routers from '@/router/routers';
import minLogo from '@/assets/images/logo-min.png';
import maxLogo from '@/assets/images/logo.png';
import './main.less';
import TopMenu from './components/top-menu';
export default {
  name: 'Main',
  components: {
    SideMenu,
    HeaderBar,
    Language,
    TagsNav,
    Fullscreen,
    ErrorStore,
    User,
    ABackTop,
    TopMenu
  },
  data () {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      isFullscreen: false,
      topMenuName: '1',
      realtimeMenu: this.$store.getters.menuList,
      accordion: false,
      screenHeight:0,
      productName: '智慧建筑综合应用平台',
      productSubtitle: "Intelligent Building Comprehensive Application Platform",
      productDomain: 'iotos.net.cn'
    };
  },
  computed: {
    ...mapGetters([
      'errorCount'
    ]),
    tagNavList () {
      return this.$store.state.app.tagNavList;
    },
    tagRouter () {
      return this.$store.state.app.tagRouter;
    },
    userAvator () {
      return this.$store.state.user.avatorImgPath;
    },
    cacheList () {
      return ['ParentView', ...this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []];
    },
    menuList: {
      get(){
        return this.realtimeMenu
      },
      set(v){
        this.realtimeMenu = v
      },
    },
    local () {
      return this.$store.state.app.local;
    },
    hasReadErrorPage () {
      return this.$store.state.app.hasReadErrorPage;
    },
    unreadCount () {
      return this.$store.state.user.unreadCount;
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'addTag',
      'setLocal',
      'setHomeRoute'
    ]),
    ...mapActions([
      'handleLogin',
      'getUnreadMessageCount'
    ]),
    turnToPage (route) {
      let { name, params, query } = {};
      if (typeof route === 'string') name = route;      //传过来的可以是json对象，也可以是字符串
      else {
        name = route.name;
        params = route.params;
        query = route.query;
      }
      if (name.indexOf('isTurnByHref_') > -1) {         //如果是外部href连接，就新窗口跳转打开
        window.open(name.split('_')[1]);
        return;
      }
      this.$router.push({                               //本地路由打开新标签
        name,
        params,
        query
      });
      this.$store.state.user.sideMenuChoosed = name      //当前点击的是哪个菜单，信息传递给新标签的content页面
    },
    handleCollapsedChange (state) {
      this.collapsed = state;
    },
    handleCloseTag (res, type, route) {
      if (type === 'all') {
        this.turnToPage(this.$config.homeName);
      } else if (routeEqual(this.$route, route)) {
        if (type !== 'others') {
          const nextRoute = getNextRoute(this.tagNavList, route);
          this.$router.push(nextRoute);
        }
      }
      this.setTagNavList(res);
    },
    handleClick (item) {
      this.turnToPage(item);
    },
    topMenuSelected(name) {
      this.topMenuName = name
      this.menuList = getMenuByRouterByTopmenu(routers,name)
      this.$refs.sideMenu.updateOpenName(name);
    },
    getHeight(){
      this.screenHeight = window.innerHeight-70;
    }
  },
  created(){
    window.addEventListener('resize', this.getHeight);
    this.getHeight()
  },
  destroyed(){
    window.removeEventListener('resize', this.getHeight)
  },
  watch: {
    '$route' (newRoute) {
      const { name, query, params, meta } = newRoute;
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      });
      this.setBreadCrumb(newRoute);
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute));
//      this.$refs.sideMenu.updateOpenName(newRoute.name);
    }
  },
  mounted () {
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this.setTagNavList();
    this.setHomeRoute(routers);
    this.addTag({
      route: this.$store.state.app.homeRoute
    });
    this.setBreadCrumb(this.$route);
    // 设置初始语言
    this.setLocal(this.$i18n.locale);
    // 如果当前打开页面不在标签栏中，跳到homeName页
    if (!this.tagNavList.find(item => item.name === this.$route.name)) {
      this.$router.push({
        name: this.$config.homeName
      });
    }
    // 获取未读消息条数
    this.getUnreadMessageCount();
  }
};
</script>

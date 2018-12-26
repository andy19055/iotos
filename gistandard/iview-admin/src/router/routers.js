import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    topMenuCommon: true,        //router.js中添加条件：有设置topMenuCommon的且值为true的，就认为是顶部菜单共有的操作菜单！再时候显示取决于hideInMenu！
    meta: {
      title: 'Login - 登录',
      hideInMenu: true,
   },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    topMenuCommon: true,        //router.js中添加条件：有设置topMenuCommon的且值为true的，就认为是顶部菜单共有的操作菜单！再时候显示取决于hideInMenu！
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/message',
    name: '消息中心',
    topMenuCommon: true,        //router.js中添加条件：有设置topMenuCommon的且值为true的，就认为是顶部菜单共有的操作菜单！再时候显示取决于hideInMenu！
    component: Main,
    meta: {
      hideInBread: false,
      hideInMenu: false
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: '_xiaoxi1',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
    {
    path: '/excel',
    name: '基本业务办公',
    meta: {
      icon: '_daibanshixiang',
      title: '基本业务办公',
      hideInMenu: false
    },
    component: Main,
    children: [
      {
        path: 'export-excel',
        name: '考勤打卡',
        meta: {
          icon: '_kaoqin',
          title: '考勤打卡'
        },
        component: () => import('@/view/excel/export-excel.vue')
      },
      {
        path: 'export-excel',
        name: '我的日程',
        meta: {
          icon: '_rili1',
          title: '我的日程'
        },
        component: () => import('@/view/excel/export-excel.vue')
      },
      {
        path: 'export-excel',
        name: '我的文档',
        meta: {
          icon: '_icon_bangzhuwendang',
          title: '我的文档'
        },
        component: () => import('@/view/excel/export-excel.vue')
      },
      {
        path: 'upload-excel',
        name: '用户信息',
        meta: {
          icon: '_zhanghucaozuo',
          title: '用户信息'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: '权限设置',
        meta: {
          icon: '_mima',
          title: '权限设置'
        },
        component: () => import('@/view/excel/export-excel.vue')
      },
      {
        path: 'export-excel',
        name: '查看日志',
        meta: {
          icon: '_zijinrizhi',
          title: '查看日志'
        },
        component: () => import('@/view/excel/export-excel.vue')
      },
    ]
  },
  {
    path: '/property',
    name: '物业管理',
    meta: {
      icon: '_gaoceng',
      title: '物业管理'
    },
    component: Main,
    children: [
      {
        path: 'renting/',
        name: '招商租赁',
        meta: {
          icon: '_hezuohuobanmiyueguanli',
          title: '招商租赁',
          // access: ['super_admin'],
          // showAlways: true,
        },
        component: parentView,
        children: [
          {
            path: 'product',
            name: 'product',
            meta: {
              icon: '_rili1',
              title: '商铺信息管理',
              __titleIsFunction__: true   //当加了这句后，显示的文字就用title了，name可用作其他用途了
            },
            component: () => import('@/view/renting/product.vue')
          },
          {
            path: 'customer',
            name: 'customer',
            meta: {
              icon: '_icon_bangzhuwendang',
              title: '客户信息管理',
              __titleIsFunction__: true
            },
            component: () => import('@/view/renting/customer.vue')
          },
          {
            path: 'contract',
            name: 'contract',
            meta: {
              icon: '_kaoqin',
              title: '意向合同管理',
              __titleIsFunction__: true
            },
            component: () => import('@/view/renting/contract.vue')
          }
        ]
      },
      {
        path: 'drag_list_page',
        name: '财务管理',
        meta: {
          icon: '_shouzhiguanli01',
          title: '财务管理'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'tree_table_page',
        name: '客户服务',
        meta: {
          icon: '_kehuzhongxin01',
          title: '客户服务'
        },
        component: () => import('@/view/components/tree-table/index.vue')
      },
      {
        path: 'cropper_page',
        name: '设备能耗',
        meta: {
          icon: '_nenghaoshuju',
          title: '设备能耗'
        },
        component: () => import('@/view/components/cropper/cropper.vue')
      },
      {
        path: 'tables_page',
        name: '保安保洁',
        meta: {
          icon: '_shuibiao',
          title: '保安保洁'
        },
        component: () => import('@/view/components/tables/tables.vue')
      }
    ]
  },
  {
    path: '',
    name: '智能一卡通',
    meta: {
      title: '智能一卡通',
      hideInMenu: false,
      icon: '_ICqiaduxieqi'
    },
    children: [
      {
        path: '/join_page',
        name: '停车场',
        meta: {
          icon: '_lubiantingchechang',
          title: '停车场'
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: '/join_page',
        name: '门禁',
        meta: {
          icon: '_menci',
          title: '门禁'
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: '/join_page',
        name: '考勤',
        meta: {
          icon: '_kaoqinzhongxin01',
          title: '考勤'
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: '/join_page',
        name: '访客',
        meta: {
          icon: '_iconfontrecentman0728',
          title: '访客'
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: '/join_page',
        name: '消费',
        meta: {
          icon: '_iconzijinguanli01',
          title: '消费'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/join',
    name: '公共信息服务',
    component: Main,
    meta: {
      hideInBread: false,
      title: '公共信息服务',
      icon: '_shequguanli_bianminxinxi'
    },
    children: [
      {
        path: 'join_page',
        name: '信息发布',
        meta: {
          icon: '_kuaisubianpai',
          title: '信息发布'
        },
        component: () => import('@/view/join-page.vue')
      },
      {
        path: 'join_page',
        name: '设置一体机',
        meta: {
          icon: '_shebeizhuangtai',
          title: '设置一体机'
        },
        component: () => import('@/view/join-page.vue')
      }
    ]
  },
  {
    path: '/update',
    name: '设备运行管理',
    meta: {
      icon: '_kuaisuyunxing01',
      title: '设备运行管理'
    },
    component: Main,
    children: [
      {
        path: 'update_table_page',
        name: '空调分室计量',
        meta: {
          icon: '_yibiaopan',
          title: '空调分室计量'
        },
        component: () => import('@/view/update/update-table.vue')
      },
      {
        path: 'update_paste_page',
        name: '能源能耗',
        meta: {
          icon: '_jiedianguanli',
          title: '能源能耗'
        },
        component: () => import('@/view/update/update-paste.vue')
      },
      {
        path: 'update_paste_page',
        name: '空调及通风',
        meta: {
          icon: '_songfeng',
          title: '空调及通风'
        },
        component: () => import('@/view/update/update-paste.vue')
      },
      {
        path: 'update_paste_page',
        name: '给排水设备',
        meta: {
          icon: '_iconyongliangreshuiqi',
          title: '给排水设备'
        },
        component: () => import('@/view/update/update-paste.vue')
      },
      {
        path: 'update_paste_page',
        name: '公共照明',
        meta: {
          icon: '_zhaoming',
          title: '公共照明'
        },
        component: () => import('@/view/update/update-paste.vue')
      }
    ]
  },
  {
    path: '/tools_methods',
    name: '设备安全管理',
    meta: {
      icon: '_anquanjingbao',
      title: '设备安全管理',
      hideInBread: false
    },
    component: Main,
    children: [
      {
        path: 'tools_methods_page',
        name: '通信设置',
        meta: {
          icon: '_shezhi2',
          title: '通信设置',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      },
      {
        path: 'tools_methods_page',
        name: '运行参数',
        meta: {
          icon: 'ios-hammer',
          title: '运行参数',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      }
    ]
  },
  {
    path: '/i18n',
    name: '信息安全管理',
    meta: {
      icon: '_anquan1',
      title: '信息安全管理',
      hideInBread: false
    },
    component: Main,
    children: [
      {
        path: 'i18n_page',
        name: '网络设置',
        meta: {
          icon: '_xitongguanli_canshushezhi',
          title: '网络设置'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: 'tools_methods_page',
        name: '告警设置',
        meta: {
          icon: '_baojingshezhi',
          title: '告警设置',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      }
    ]
  }
]

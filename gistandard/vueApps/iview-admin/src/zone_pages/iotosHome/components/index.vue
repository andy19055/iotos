<template>
  <div class="root">
    <!-- <MenuDialog :openMenu="openMenu"></MenuDialog>
    <Modal title="Title" v-model="openMenu" :closable="false">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal> -->
    <header>
      <div class="logo">
        <a href="index.html"
          ><img
            src="../../../../public/static/common/IOTOS-爱投斯（中国深圳）.png"
            style="min-width:120%;max-height:120%"
            alt="爱投斯物联网"
            class="img-responsive ori"/>
      </a>
        <img src="../../../../public/static/iotosHome/images/logo_mini.png" class="img-responsive mini" style="min-width:220%;max-height:120%;margin-top:-10px;">
      </div>
      <nav class="menu">
        <ul class="list-inline">
          <template v-for="item in menuList">
            <li v-if="menuList.indexOf(item) == 1" class="active">
              <a>{{ item }}</a>
            </li>
            <li v-else>
              <a>{{ item }}</a>
            </li>
          </template>
        </ul>
      </nav>
      <div class="hotline">
        <a href="tel:4001188502" title="物联网方案免费咨询热线"
          ><span>{{ hotline }}</span></a
        >
        <u></u>
      </div>
      <div class="menu-icon">
        <a href="tel:4001188502" title="点击直拨网站建设热线"
          ><span class="glyphicon glyphicon-earphone"></span
        ></a>
        <span class="glyphicon glyphicon-th-large"></span>
      </div>
    </header>

    <div class="welcome">
      <p>
        <u>{{ entering }}</u>
      </p>
    </div>
    <section class="video">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide nth1" id="nth1">
            <div class="box">
              <div class="left"></div>
              <div class="right">
                <span>{{speciality[0]}}</span> <i></i>
                <p>
                  <br/>{{speciality[1]}}<br /></br>{{speciality[2]}}
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide nth2">
            <div class="box">
              <span>{{cutting_edge[0]}}</span> <i></i>
              <p>
                <br/>
                {{cutting_edge[1]}}
                <br /><br/>{{cutting_edge[2]}}
              </p>
            </div>
          </div>
          <div class="swiper-slide nth3">
            <div class="box">
              <div class="top">{{experienced[0]}}</div>
              <div class="mid"></div>
              <div class="bottom">
                <br/>{{experienced[1]}}
                <br /><br/>
                <div v-html="experienced[2]"></div>
              </div>
            </div>
          </div>
          <div class="swiper-slide nth4">
            <div class="box">
              <div class="top"><span>{{costEfficient[0]}}</span> <i></i></div>
              <div class="bottom">
                <br />
                <div v-html="costEfficient[1]"></div>
                <br />
                <div v-html="costEfficient[2]"></div>
                <br />
                {{costEfficient[3]}}
                <br /><br/>
                {{costEfficient[4]}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="innerBox">
        <div class="news">
          <span>NEWS :</span>
          <a
            href="article.html"
            title="更多文章动态"
            class="more"
            target="_blank"
            >more</a
          >
          <ul>
            <template v-for="item in newsList">
              <li>
                <a :href="item.href" target="_blank" :title="item.title">{{item.text}} ...</a>
              </li>
            </template>
          </ul>
        </div>
        <div class="guide"></div>
        <a class="movedown"></a>
      </div>
    </section>
    <section class="business">
      <div class="box">
        <div class="caption">
          <i></i> <span>我们能做什么</span> <br class="clear" />
        </div>
        <ul class="items list-inline">
          <li class="pc">
            <i></i><strong>高端定制网站</strong>
            <p>企业高端定制网站设计<br />彰显品牌形象</p>
          </li>
          <li class="mobi">
            <i></i><strong>移动网站建设</strong>
            <p>定制手机网站 / 微网站制作<br />布局移动互联网</p>
          </li>
          <li class="sys">
            <i></i><strong>业务系统研发</strong>
            <p>基于 B/S 架构的系统研发<br />让业务办公轻松自如</p>
          </li>
          <li class="app">
            <i></i><strong>APP应用程序</strong>
            <p>基于 iOS / Android 应用开发<br />掌控智能终端时代</p>
          </li>
          <li class="host">
            <i></i><strong>服务器运维</strong>
            <p>我们不只提供云硬件和网络<br />更加注重技术运维</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="cases">
      <div class="box">
        <div class="caption">
          <i></i> <span>案例欣赏</span> <br class="clear" />
        </div>
        <div class="swiper-container items">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="cases_detail.html" target="_blank">
                <img
                  src="../../../../public/static/iotosHome/images/0104416527.jpg"
                  alt="中交一局海外分公司网站建设项目"
                />
                <p>
                  网站设计<br /><strong>中交一局海外分公司网站建设项目</strong
                  ><br />蓝色 , 欧美风格 , 国有企业
                </p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="cases_detail.html" target="_blank">
                <img
                  src="../../../../public/static/iotosHome/images/0111546659.jpg"
                  alt="天宸元集团官网建设"
                />
                <p>
                  网站设计<br /><strong>天宸元集团官网建设</strong
                  ><br />官方网站 , 企业网站 , 红色 , 集团公司
                </p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="cases_detail.html" target="_blank">
                <img
                  src="../../../../public/static/iotosHome/images/1241022472.jpg"
                  alt="中环球船务官方网站设计"
                />
                <p>
                  网站设计<br /><strong>中环球船务官方网站设计</strong
                  ><br />官方网站 , 蓝色 , 欧美风格 , 上市公司
                </p>
              </a>
            </div>
          </div>
        </div>
        <a
          href="cases.html"
          title="欣赏更多网站建设案例"
          class="more"
          target="_blank"
          >MORE</a
        >
      </div>
    </section>
    <section class="clients">
      <div class="box">
        <div class="caption">
          <i></i> <span>他们与千助长期合作</span> <br class="clear" />
        </div>
        <ul class="items list-inline">
          <li class="cctv"><span>CCTV影响力视频网站建设</span></li>
          <li class="unicom"><span>中国联通电信卡网站制作</span></li>
          <li class="tsinghua"><span>清华大学国际预科学院网站建设</span></li>
          <li class="cas"><span>中科院力学研究所网站设计</span></li>
          <li class="sipo"><span>国家知识产权局网站建设</span></li>
          <li class="apple"><span>中航苹果官方网站设计</span></li>
          <li class="das"><span>一汽大众汽车门户网站建设</span></li>
          <li class="hunantv"><span>湖南卫视全媒体网站建设</span></li>
          <li class="sino"><span>中环球船务官方网站制作</span></li>
          <li class="report"><span>中国报道信息门户网站建设</span></li>
          <li class="gedu"><span>环球雅思教育门户网站制作</span></li>
          <li class="bgg"><span>京粮集团网站建设</span></li>
          <li class="bsec"><span>北赛电工官方网站设计</span></li>
          <li class="huadan"><span>华丹乳业官方网站建设</span></li>
          <li class="zd"><span>中东集团网站制作</span></li>
        </ul>
      </div>
    </section>
    <section class="marketing">
      <div class="box">
        <div class="caption">
          <i></i> <span>整合营销，抢占商机</span> <br class="clear" />
        </div>
        <ul class="items list-inline">
          <li class="se">
            <i></i><strong>搜索引擎</strong>
            <p>SEO 优化<br />搜索引擎竞价</p>
          </li>
          <li class="weixin">
            <i></i><strong>微信营销</strong>
            <p>公众账号 / 微网站<br />微盟 ( 微社区 )</p>
          </li>
          <li class="weibo">
            <i></i><strong>微博营销</strong>
            <p>企业蓝V认证<br />官方微博接入网站</p>
          </li>
          <li class="sms">
            <i></i><strong>消息推送</strong>
            <p>短信平台接口<br />Email 推送</p>
          </li>
          <li class="pay">
            <i></i><strong>在线支付</strong>
            <p>支付宝、银联<br />Paypal 接口</p>
          </li>
          <li class="bbs">
            <i></i><strong>论坛聚人</strong>
            <p>独立开发<br />会员打通</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="saas">
      <div class="box">
      </div>
    </section>
    <section class="quality">
      <div class="box">
        <div class="caption">
          <i></i> <span>不同媒介，同样精彩</span> <br class="clear" />
        </div>
        <div class="swiper-container items">
          <div class="swiper-wrapper">
            <div class="swiper-slide nth1">
              <ul class="list-inline">
                <li class="mobi"><span>响应式手机网站建设</span></li>
                <li class="pad"><span>响应式平板网站建设</span></li>
                <li class="pc"><span>响应式PC网站建设</span></li>
              </ul>
              <p>
                触及视觉灵魂的设计趋势<br />精心布局的用户体验<br />毫无顾忌地通过任何终端<br />呈现在客户的眼前
              </p>
            </div>
            <div class="swiper-slide nth2">
              <ul class="list-inline">
                <li class="ie"><span>兼容微软IE浏览器的网页设计</span></li>
                <li class="chrome">
                  <span>兼容谷歌Chrome浏览器的网站设计</span>
                </li>
                <li class="firefox">
                  <span>兼容火狐Firefox浏览器的网页设计</span>
                </li>
                <li class="safari">
                  <span>兼容苹果Safari浏览器的网站设计</span>
                </li>
              </ul>
              <p>
                Html5 + CSS3 响应式布局<br />卓越的浏览器兼容性<br />因为高端，所以出众
              </p>
            </div>
            <div class="swiper-slide nth3">
              <ul class="list-inline">
                <li class="windows"><span>跨windows平台网站制作</span></li>
                <li class="ios"><span>跨ios平台网站制作</span></li>
                <li class="andriod"><span>跨andriod平台网站制作</span></li>
              </ul>
              <p>
                基于 B/S 架构的网站建设<br />无障碍的跨平台应用<br />无须用户下载安装即可使用<br />云端管理，轻松维护
              </p>
            </div>
          </div>
        </div>
        <a href="case.html" class="lookall" target="_blank">你以为看到了网站的全部？</a>
      </div>
    </section>
    <section class="aboutus">
      <ul class="menu">
        <li>思想</li>
        <li>关于</li>
        <li>荣誉</li>
      </ul>
      <div class="swiper-container items">
        <div class="swiper-wrapper">
          <div class="swiper-slide nth1">
            <strong>厚积薄发</strong>
            <p>
              登上峰顶，不是为了饱览风光，是为了寻找更高的山峰<br />日出东方，告别了昨天的荣耀，将光芒照向更远的地方<br />一路上，我们更在意如何积累和沉淀
            </p>
            <u>下一秒，让你看，我们到底有多强</u>
          </div>
          <div class="swiper-slide nth2">
            <strong>千助科技</strong>
            <p>
              成立于2008年，坐落于北京中关村科技园区，是中国优秀的互联网服务提供商。自成立以来，专注于高端网站建设、移动互联应用、B/S架构系统研发、云服务器部署和运维，为企业客户的互联网应用提供一站式服务。
            </p>
            <p>
              我们始终坚持以客户需求为导向，为追求用户体验设计，提供有针对性的项目解决方案，千助人将不断地超越自我，挑战险峰！
            </p>
          </div>
          <div class="swiper-slide nth3">
            <strong>放下荣誉，放眼未来</strong>
            <ul>
              <li>2009年<u>-</u>荣获海淀区创新企业</li>
              <li>2010年<u>-</u>设计联盟评选为金牌设计企业</li>
              <li>2010年<u>-</u>荣获中关村高新技术企业</li>
              <li>2011年<u>-</u>成功注册 &quot; 千助 &quot; 商标，树立品牌</li>
              <li>
                2013年<u>-</u>已拥有自主知识产权，国家软件著作权达12项之多
              </li>
            </ul>
          </div>
        </div>
      </div>
      <table class="exp">
        <tbody>
          <tr>
            <td><u>611</u>位企业客户信赖之选</td>
            <td><u>267</u>上市/集团企业设计作品</td>
            <td><u>2010</u>年度金牌设计企业</td>
            <td><u>12</u>项国家软件著作权</td>
            <td><u>96%</u>以上的客户续费率</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="contact">
      <div class="box">
        <div class="above">
          <div class="wechat">
            <img src="../../../../public/static/iotosHome/images/wechat_code.jpg" alt="扫描关注千助微信公众账号" />
          </div>
          <div class="left">
            <a href="tel:4006123011" title="网站制作咨询热线" class="tel"></a>
            <p>
              中国<u>&middot;</u>北京<u></u>中关村科技园<br />联系电话：{{
              hotline
              }}<u>/</u>58851650<br />地址：海淀区上地东路盈创动力E座905<br />邮编：100085<a href="/job/saleman.html" target="_blank" class="job">[
                工作机会 ]</a>
            </p>
          </div>
          <div class="right">
            Email：Service@1000zhu.com <br />中文域名：千助.中国
            <u>/</u>千助.com <br />Copyright 2008-2015 <u></u>千助科技 版权所有
            <br />京ICP备 08102474 号 <br />京公网安备 11010802010984 号
          </div>
        </div>
      </div>
      y
    </section>
    <section class="special">
      <div class="box">
        <ul class="menu">
          <li>思想</li>
          <li>关于</li>
          <li>荣誉</li>
        </ul>
      </div>
    </section>
    <div class="dock">
      <ul class="icons">
        <li class="up"><i></i></li>
        <li class="im">
          <i></i>
          <p>
            网站建设咨询<br />在线沟通，请点我<a
              href="http://qiao.baidu.c@@/view_page../../../../public/static/iotosHome/?module=default&amp;controller=im&amp;action=index&amp;ucid=989741&amp;type=n&amp;siteid=4805"
              target="_blank"
              >在线咨询</a
            >
          </p>
        </li>
        <li class="tel">
          <i></i>
          <p>
            建站咨询热线：<br />4006-123-011<br />售后电话：<br />{{ hotline }}
          </p>
        </li>
        <li class="wechat">
          <i></i>
          <p>
            <img
              src="../../../../public/static/iotosHome/images/wechat_code.jpg"
              alt="扫描关注网站建设微信公众账号"
            />
          </p>
        </li>
        <li class="down"><i></i></li>
      </ul>
      <a class="switch"></a>
    </div>
  </div>
</template>

<script>
  import "@/assets/icons/iconfont.css";
  import Icons from "_c/icons";
  import MenuDialog from "../components/menu_dialog.vue";

  export default {
    name: "Index",
    components: {
      Icons,
      MenuDialog
    },
    data() {
      return {
        menuList: [
          "首页",
          "优势",
          "案例",
          "合作",
          "活动",
          "服务",
          "下载",
          "关于",
          "联系"
        ],
        openMenu: true,
        hotline: "400-1188-502",
        entering: "欢迎访问，即将跳转...",
        speciality:['年专注，物联网云计算','涉足始于2010年 - 2019年 展望未来','工业控制、设备采集、无线通信、云计算、数据大脑、3D可视化'],
        cutting_edge: ['掌握前沿技术', 'BAT互联网背景 + AWS + AZURE', '技术一脉相承，国际领先，紧随云时代最前沿'],
        experienced: ['行业经验丰富','智慧建筑、智能工厂、环境监测、机房监控','<div>IBMS <span style="font-size:14pt;color:#00DFB9">☑</span>  MES <span style="font-size:14pt;color:#00DFB9">☑</span>  CPS <span style="font-size:14pt;color:#00DFB9">☑</span>  SCADA <span style="font-size:14pt;color:#00DFB9">☑</span>  IoT PaaS <span style="font-size:14pt;color:#00DFB9">☑</span></div>'],
        costEfficient:['生态合作，共赢模式','<div>项目交付（私有部署 <span style="font-size:14pt;color:#00DFB9;">☑</span>  云托管 <span style="font-size:14pt;color:#00DFB9">☑</span>）</div>','<div>产品实施（私有部署 <span style="font-size:14pt;color:#00DFB9">☑</span>  云服务 <span style="font-size:14pt;color:#00DFB9">☑</span>）</div>', '服务至上，合作共赢','寻求运营合伙人、渠道代理商、战略伙伴！'],
        newsList: [{
          href:'http://www.baidu.com',
          title: '限时免费赠送采集硬件，DIY自己的物联网远程！免费使用，押金可退！',
          text: '免费赠送硬件，押金可退，自己做远程'
        },{
          href: 'http://www.baidu.com',
          title: '新推广“智慧农业方案”，现全国征集10位客户，限定“智慧农业”领域，免费实施！',
          text: '新推“智慧农业方案”，免费实施，赶快报名'
        }, {
          href: 'http://www.baidu.com',
          title: '数据存储空间免费赠送5G，赶快领取！',
          text: '数据存储空间免费赠送5G，赶快领取'
        }]
      };
    },
    methods: {
      test() {
        alert(111222333)
      }
    },
    created: function () {
    },
    mounted() {
      window.onload = function windowClick() {
        setTimeout(function () {
          $("#app").resize()
        }, 800); 
      }
    }
  };
</script>

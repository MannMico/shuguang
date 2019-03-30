<template>
  <div class="footer-bg">
    <div class="footer-bg-top">
      <div class="content">
        <div class="base-footer clearfix">
          <ul class="footer-part">
            <li class="footer-title">我是IP版权</li>
            <li class="footer-ct"><a href="#">版权入驻流程</a></li>
            <li class="footer-ct"><a href="#">合作模式</a></li>
            <li class="footer-ct"><a href="#">版权成长</a></li>
          </ul>
          <ul class="footer-part">
            <li class="footer-title">我是企业</li>
            <li class="footer-ct"><a href="#">需求发布</a></li>
            <li class="footer-ct"><a href="#">合作方式</a></li>
            <li class="footer-ct"><a href="#">付款方式</a></li>
            <li class="footer-ct"><a href="#">IP匹配</a></li>
          </ul>
          <ul class="footer-part">
            <li class="footer-title">关于IP经纪人</li>
            <li class="footer-ct"><a href="#">工作机制</a></li>
            <li class="footer-ct"><a href="#">角色定位</a></li>
            <li class="footer-ct"><a href="#">平台资源</a></li>
          </ul>
          <ul class="footer-part">
            <li class="footer-title">联系我正版</li>
            <li class="footer-ct">联系邮箱：<span class="mt10">bd@shujiguang.com</span></li>
            <li class="footer-ct"><img src="~@/assets/ewm.png" /></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bg-btm">
      <div class="content">
        <dl class="clearfix">
          <dt><img src="~@/assets/bt_logo.png" alt="" /></dt>
          <dd>
            <ul class="footer-about clearfix">
              <li><a href="#">关于我们</a></li>
              <li><a href="#">成功案例</a></li>
              <li><a href="#">跨界授权</a></li>
              <li><a href="#">服务流程</a></li>
              <li><a href="#">服务规则</a></li>
            </ul>
            <p class="foot-coryright">＠copyright2018 深圳市束光文化科技有限公司 粤ICP备168876666号</p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~@/styles/var';
.mt10{
  display: block;
  margin-top: 10px;
}
.footer-bg-top {
  background: url(~@/assets/footer-bg.png) center no-repeat;
}
.footer-bg {
  background: #212834;
  color: #fff;
  a{
    color: #fff;
  }
}
.base-footer {
  overflow-x: hidden;
  padding-bottom: 40px;
  .footer-part {
    float: left;
    width: 195px;
    margin-right: 120px;
    margin-left: 15px;
    &:last-child{
      margin-right: 0;
    }
    li {
      margin-top: 30px;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 3px;
    }
    .footer-title {
      font-size: 18px;
      position: relative;
      line-height: 18px;
      &::before {
        position: absolute;
        left: -15px;
        top: 50%;
        margin-top: -4px;
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background: #fe992a;
      }
    }
  }
}
.footer-bg-btm {
  padding: 50px 0 25px;
  dt {
    width: 175px;
    float: left;
    margin-right: 165px;
  }
  dd {
    float: left;
    .footer-about {
      margin-left: 8px;
      li {
        float: left;
        margin-right: 98px;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 2px;
      }
    }
  }
  .foot-coryright {
    font-size: 12px;
    margin-top: 45px;
  }
}
</style>

<script>
export default {
  name: 'base-footer',
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

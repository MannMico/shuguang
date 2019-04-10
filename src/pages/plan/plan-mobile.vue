<template>
    <div v-if="mobileData!=null">
      <p class="moblie-plan-top"><img src="~@/assets/mobile_logo.png" alt=""></p>
      <p class="moblie-plan-title">IP授权营销方案书</p>
      <div class="moblie-plan-part moblie-plan-part1">

        <h2>基于您的需求定制的IP匹配建议</h2>
        <p class="moblie-plan-part-content" v-text="mobileData.recommendation"></p>
      </div>
      <p class="moblie-plan-manage">来自金牌经纪人May的建议</p>
      <p class="moblie-plan-title color-black">推荐IP：</p>    
      <div class="moblie-plan-part moblie-plan-part2">
        <dl class="moblie-plan-dl clearfix">
          <dt><img src="~@/assets/p1.png" alt=""></dt>
          <dd class="clearfix">
            <p class="moblie-plan-icon"><img src="~@/assets/fangan.png" alt=""></p>
            <p class="moblie-plan-ip-title">推荐IP:{{mobileData.ip_name}}</p>
            <p class="moblie-plan-book clearfix" @click="OpenPDF(mobileData.ip_pdf)" target="_blank">查看IP详情</p>
          </dd>
        </dl>
      </div>  
      <p class="moblie-plan-title color-black fz40">经纪人介绍</p> 
      <div class="magage-part clearfix">
        <p class="magage-head"><img src="~@/assets/agent.png" alt=""></p>
        <div class="magage-desc">
          <p>May Zhao</p>
          <p>等级: 金牌经纪人</p>
          <p>中山大学传播学院</p>
        </div>
      </div>
      <div class="magage-desc-detail">
        5年策划营销经验，曾任同道大叔品牌经理，实操过
百丽、丽星邮轮、唯品会等几十个与同道大叔的IP
授权整合营销项目，在 美妆、食品、文旅、酒店等
行业有丰富的授权经验。擅长挖掘IP价值，从IP营
销策略到项目执行，为品牌实现真赋能。
      </div>
      <p class="moblie-plan-title color-black fz40">经纪人成功案例</p> 
      <ul class="moblie-anli-ul">
        <li>
          <p class="moblie-anli-img"><img src="~@/assets/bussiness-xyd.png" alt=""></p>
          <p class="moblie-anli-title">dasdaad</p>
        </li>
        <li>
          <p class="moblie-anli-img"><img src="~@/assets/bussiness-xyd.png" alt=""></p>
          <p class="moblie-anli-title">dadasdaaddasdaaddasdaaddasdaaddasdaaddasdaaddasdaadsdaad</p>
        </li>
      </ul>
      <div class="moblie-footer">
        <ul class="moblie-footer-ul">
          <li class="clearfix">
            <div class="moblie-footer-left">
              <p class="moblie-footer-title">IP版权合作</p>
              <p class="moblie-footer-ways">电话：13523458888</p>
              <p class="moblie-footer-ways">邮箱：may@shujiguang.com</p>
              <p class="moblie-footer-title">IP版权入驻</p>
            <p class="moblie-footer-ways">电话：13523458888</p>
            <p class="moblie-footer-ways">邮箱：crater@shujiguang.com</p>
            </div>
            <div class="moblie-footer-right">
              <img src="~@/assets/ewm.png" alt="">
            </div>
          </li>
        </ul>
        <div class="moblie-copyrigt">
          <ul class="moblie-copyrigt-ul clearfix">
            <li>关于我们</li>
            <li>IP匹配方案书</li>
          </ul>
          <p class="moblie-footer-copyright">@copyright2018 深圳市束光文化科技有限公司</p>
          <p class="moblie-footer-copyright">粤ICP备168876666号</p>
        </div>
      </div>
    </div>
</template>
<script>
import './plan.scss';
let Base64 = require('js-base64').Base64
export default {
  props:{
    mobileData:{
      type: Object,
      required: true
    }
  },
  methods:{
    OpenPDF (url) {
      this.$router.push({ name: 'PDF', query: { url: Base64.encode(url) } })
    }
  }
}
</script>


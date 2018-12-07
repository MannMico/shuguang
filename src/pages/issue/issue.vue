<template>
  <div class="issue-page">
    <base-navbar></base-navbar>
    <div class="issue__header">
      <div class="header__title">发布需求</div>
      <div class="header__desc">提交后系统立即匹配专业IP经纪人为您定制方案</div>
    </div>
    <div class="issue__form">
      <div class="form__title">您的项目背景和要求：</div>
      <div class="form__item--style1">
        <div class="form-item__title">*品牌或公司名称</div>
        <div class="form-item__content">
          <input type="text" placeholder="必填项">
        </div>
      </div>
      <div class="form__item--style1">
        <div class="form-item__title">*所在地区</div>
      </div>
      <div class="form__item--style2">
        <div class="form-item__title">选择合作类型（可多选）</div>
      </div>
      <div class="form__item--style1">
        <div class="form-item__title">*期待上线日期</div>
        <div class="form-item__content">
          <el-date-picker v-model="date" type="date" placeholder="请选择"></el-date-picker>
        </div>
      </div>

      <div class="form__title">联系方式：</div>
      <div class="form__item--style1">
        <div class="form-item__title">*联系人姓名</div>
        <div class="form-item__content">
          <input type="text" placeholder="必填项">
        </div>
      </div>
      <div class="form__item--style1">
        <div class="form-item__title">*联系人电话</div>
        <div class="form-item__content">
          <input type="text" placeholder="必填项">
        </div>
        <div class="form-item__content">
          <input type="text" placeholder="请输入短信验证码">
          <div class="form-item__title form-item__captcha">获取验证码</div>
        </div>
      </div>
      <div class="form__submit-btn">
        <base-button>立即发布需求</base-button>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import { DatePicker } from 'element-ui';
import './issue.scss';
export default {
  components: {
    elDatePicker: DatePicker
  },
  data() {
    return {
      date: ''
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

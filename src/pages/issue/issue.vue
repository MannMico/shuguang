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
        <div class="form-item__content">
          <div class="form-item__provins">
            <el-select v-model="provinceId" placeholder="请选择" @change="changeProvince">
              <el-option
                v-for="item in provinces"
                :key="item.provinceId"
                :label="item.provinceName"
                :value="item.provinceId"
              ></el-option>
            </el-select>省
          </div>
          <div class="form-item__cities">
            <el-select v-model="cityId" placeholder="请选择">
              <el-option
                v-for="item in cities"
                :key="item.cityId"
                :label="item.cityName"
                :value="item.cityId"
              ></el-option>
            </el-select>市
          </div>
        </div>
      </div>
      <div class="form__item--style2">
        <div class="form-item__title">选择合作类型（可多选）</div>
        <div class="form-item__content">
          <div class="form-item__type">
            <template v-if="businessType == 1">
              <img src="@/assets/cooperation_1.png" alt @click="clickType('1')">
              <img src="@/assets/cooperation_1_unselected.png" alt @click="clickType('1')">
              
              <img
                :src="type['1'] ? '../../assets/cooperation_1.png' : '../../assets/cooperation_1_unselected.png'"
                alt
                @click="clickType('1')"
              >
              <img
                :src="type['2'] ? '@/assets/cooperation_2.png' : '@/assets/cooperation_2.png'"
                alt
                @click="clickType('2')"
              >
              <img
                :src="type['3'] ? '@/assets/cooperation_3.png' : '@/assets/cooperation_3_unselected.png'"
                alt
                @click="clickType('3')"
              >
              <img
                :src="type['4'] ? '@/assets/cooperation_4.png' : '@/assets/cooperation_4_unselected.png'"
                alt
                @click="clickType('4')"
              >
              <img
                :src="type['5'] ? '@/assets/cooperation_5.png' : '@/assets/cooperation_5_unselected.png'"
                alt
                @click="clickType('5')"
              >
            </template>
            <template v-if="businessType == 2">
              <img
                :src="type['6'] ? '@/assets/cooperation_6.png' : '@/assets/cooperation_6_unselected.png'"
                alt
                @click="clickType('6')"
              >
            </template>
            <template v-if="businessType == 3">
              <img
                :src="type['7'] ? '@/assets/cooperation_7.png' : '@/assets/cooperation_7_unselected.png'"
                alt
                @click="clickType('7')"
              >
            </template>
          </div>
        </div>
        <div class="form-item__textarea">
          <textarea name id placeholder="1.请补充说明您的品牌介绍及意向合作品类  2.请补充说明您的意向IP/意向IP风格"></textarea>
        </div>
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
import { DatePicker, Select, Option } from 'element-ui';
import district from './district.js';
import './issue.scss';
const allCities = district.cities;
export default {
  components: {
    elDatePicker: DatePicker,
    elSelect: Select,
    elOption: Option
  },
  data() {
    return {
      businessType: 1, // 1.跨界通 2.效易达 3. 好易卖
      date: '',
      provinces: district.provinces,
      cities: [],
      provinceId: '',
      cityId: '',
      type: {}
    };
  },
  created() {
    if (this.businessType == 2) {
      this.type['6'] = true;
    } else if (this.businessType == 3) {
      this.type['7'] = true;
    }
  },
  mounted() {},
  methods: {
    changeProvince(id) {
      this.allCities = [];
      allCities.forEach(element => {
        if (element.provinceId === id) {
          this.cities.push(element);
        }
      });
    },
    clickType(n) {
      this.type[n] = !this.type[n];
    }
  }
};
</script>

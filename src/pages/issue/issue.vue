<template>
  <div class="issue-page">
    <base-navbar></base-navbar>
    <div class="issue__header">
      <div class="header__title content">发布您的授权任务</div>
      <div class="header__desc content">提交后系统立即匹配专业IP经纪人为您定制方案</div>
    </div>
    <div class="content clearfix">
    <el-form
      ref="issue_form"
      class="issue__form"
      label-position="right"
      label-width="130px"
      :model="form"
      :rules="rules"
    >
      <div class="form__title">您的项目背景和要求：</div>
      <el-form-item class="form__border-bottom" label="品牌或公司名称" prop="company">
        <el-input v-model="form.company" placeholder=""></el-input>
      </el-form-item>
      <!-- <el-cascader
        :options="district"
        @active-item-change="changeProvince"
      ></el-cascader> -->
      <el-form-item class="form__border-bottom" label="所在地区" required>
        <el-col :span="12">
          <el-form-item prop="province">
            <el-select v-model="form.province" placeholder="请选择" @change="changeProvince">
              <el-option
                v-for="item in provinces"
                :key="item.provinceId"
                :label="item.provinceName"
                :value="item.provinceId"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="city">
            <el-select v-model="form.city" placeholder="请选择">
              <el-option
                v-for="item in cities"
                :key="item.cityId"
                :label="item.cityName"
                :value="item.cityId"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-row>
        <el-form-item label="选择合作类型（可多选）" label-width="178px"></el-form-item>
        <div class="form-item__type">
          <div class="form-item__typeitem" v-for="(mode,index) in modes" :key="mode.id"
          :class="{'form-item__typeitem--gray': mode.select}"
            @click="onSeletcMode(index)">
            <img :src="mode.image">
            <span :class="{selected:mode.select}"></span>
          </div>
        </div>
      </el-row>
      <el-row>
        <div class="form-item__textarea">
          <div class="placeholder" v-show="!form.detail_demand">1.请补充说明您的品牌介绍及意向合作品类
            <br>2.请补充说明您的意向IP/意向IP风格
          </div>
          <textarea id="detail_demand" v-model="form.detail_demand" placeholder></textarea>
        </div>
      </el-row>

      <el-form-item class="form__border-bottom" label="期待上线日期" prop="publish_time">
        <el-date-picker v-model="form.publish_time" type="date" placeholder="年/月/日"></el-date-picker>
      </el-form-item>
      <div class="form__title">联系方式：</div>
      <el-form-item class="form__border-bottom" label="联系人姓名" prop="nickname">
        <el-input placeholder="必填项" v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item class="form__border-bottom" label="联系电话" prop="phone">
        <el-input placeholder="必填项" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item class="form__border-bottom" label="短信验证码" prop="vcode">
        <el-col :span="12">
          <el-input placeholder="短信验证码" v-model="form.vcode"></el-input>
        </el-col>
        <el-col :span="12">
          <div
            class="form-item__captcha"
            v-if="!codeTime"
            @click="onCode"
          >获取验证码</div>
          <div
            class="form-item__captcha form-item__captcha--gray"
            v-else
          >{{codeTime}}s后重新发送</div>
        </el-col>
      </el-form-item>
      <div class="form__submit-btn" @click="onSend">立即发布</div>
    </el-form>
    <div class="issue-right">
      <div class="issue-right-team">
        <p class="related-title title-position">国内唯一IP全运营链团队</p>
        <ul class="clearfix">
          <li class="ip-icon ip-icon1">专业IP顾问全程跟进项目</li>
          <li class="ip-icon ip-icon2">100+品牌授权成功案例</li>
          <li class="ip-icon ip-icon3">300+优质供应商合作支持</li>
          <li class="ip-icon ip-icon4">1亿+IP粉丝全媒介触达</li>
        </ul>
      </div>
      <div class="issue-right-team">
        <p class="issue-border-title"><span>真IP</span>流量+内容+转化</p>
        <div class="issue-content">
          <p>好IP就像明星，有血有肉，还能把人格 化带给品牌;有粉丝，还能带货。</p>
        </div>
        <p class="issue-border-title color-change"><span>赋能</span>产品溢价>品牌价值>消费者心智</p>
        <div class="issue-content">
          <p>我正版全程提供：创意产品
设计、主题营销策划、创意
内容传播、粉丝社群传播、
线下实体赋能。</p>
        </div>
      </div>
      <div class="issue-right-team">
        <p class="related-title title-position">热线电话</p>
        <div class="issue-phone">
          <p>400-800-1234</p>
          <p>周一至周日9:00～21:00</p>
        </div>
      </div>
    </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import { Form, Input, Col, Row } from 'element-ui';
import { addDemad, getCooperationModes } from '@/services/demand';
import { sendCodeSms } from '@/services/code';
import district from './district.js';

import './issue.scss';
export default {
  components: {
    elForm: Form,
    elInput: Input,
    elCol: Col,
    elRow: Row
  },
  data() {
    return {
      type: this.$route.query.type || 'kuajietong',
      // businessType: 1, // 1.跨界通 2.效易达 3. 好易卖
      provinces: district.provinces, // 省份
      cities: [], // 城市
      modes: [],
      district: [],
      props: {
          value: 'provinces',
          children: 'cities'
        },
      form: {
        nickname: '', //	String	联系人姓名
        phone: '', //	String	联系电话
        company: '', //	String	客户公司或品牌
        mode_ids: [], //	Number[]	合作方式ID数组
        detail_demand: '', //	String	详细需求
        country: 1, //	Number	所在地区 - 国家
        province: null, //	Number	所在地区 - 省份
        city: null, //	Number	所在地区 - 城市
        publish_time: null, //	Date	期待发布时间
        vcode: '' //	String	验证码
      },
      rules: {
        company: [{ required: true, message: '必填项不能为空', trigger: 'change' }],
        province: [{ required: true, message: '必填项不能为空', trigger: 'change' }],
        city: [{ required: true, message: '必填项不能为空', trigger: 'change' }],
        publish_time: [{ required: true, message: '必填项不能为空', trigger: 'change' }],
        nickname: [{ required: true, message: '必填项不能为空', trigger: 'change' }],
        phone: [{ required: true, message: '必填项不能为空', trigger: 'change' }],
        vcode: [{ required: true, message: '必填项不能为空', trigger: 'change' }]
      },
      codeTime: 0,
      requestLimit: false
    };
  },
  created() {
    
  },
  mounted() {
    window.scrollTo(0, 0);
    this.fetchModes();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    handleItemChange(val) {
      console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !district.provinceId[0].cities.length) {
          district.cities[0].cities = [{
            label: '南京'
          }];
        } else if (val.indexOf('浙江') > -1 && !district.provinceId[1].cities.length) {
          district.cities[1].cities = [{
            label: '杭州'
          }];
        }
      }, 300);
    },
    changeProvince(id) {
      this.cities = [];
      setTimeout(_ => {
        district.cities.forEach(city => {
        if (city.provinceId === id) {
          this.cities.push(city);
          this.district.provinces = city.provinceName
          this.district.cities = this.cities
          console.log('this.district'+ this.district)
        }
      });
      }, 300);
      
    },
    onSeletcMode(index) {
      const mode = this.modes[index];
      mode.select = !mode.select;
      this.modes.splice(index, 1, mode);
    },
    fetchModes() {
      getCooperationModes({ service_code: this.type })
        .then(data => {
          this.modes = data.cooperation_modes.map(mode => {
            mode.select = false;
            return mode;
          });
        })
        .catch(err => {});
    },
    onCode() {
      const { phone } = this.form;
      if (!phone) {
        this.$message.error('请先输入联系人电话');
      }
      if (phone && this.codeTime === 0) {
        sendCodeSms({ phone })
          .then(data => {
            this.$message.success('发送成功!');
            clearInterval(this.interval);
            this.codeTime = 59;
            this.interval = setInterval(() => {
              this.codeTime -= 1;
              if (this.codeTime <= 0) {
                clearInterval(this.interval);
                this.codeTime = 0;
              }
            }, 1000);
          })
          .catch(err => {
            this.$message.error(err.message);
          });
      }
    },
    onSend() {
      this.$refs.issue_form.validate(valid => {
        if (valid) {
          const mode_ids = this.modes
            .filter(mode => {
              return mode.select;
            })
            .map(mode => {
              return mode.id;
            });
          const data = Object.assign({}, this.form, {
            mode_ids: mode_ids,
            province: Number(this.form.province),
            city: Number(this.form.city)
          });
          if (this.requestLimit) {
            return;
          }
          this.requestLimit = true;
          addDemad(data)
            .then(data => {
              this.$router.push({ path: '/issue-done' });
              this.requestLimit = false;
            })
            .catch(err => {
              this.$message.error(err.message);
              this.requestLimit = false;
            });
        } else {
          this.$message.error('请先填写必要信息，再发布需求');
          return false;
        }
      });
    }
  }
};
</script>

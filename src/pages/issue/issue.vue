<template>
  <div class="issue-page">
    <base-navbar></base-navbar>
    <div class="issue__header">
      <div class="header__title">发布需求</div>
      <div class="header__desc">提交后系统立即匹配专业IP经纪人为您定制方案</div>
    </div>
    <el-form
      ref="issue_form"
      class="issue__form width-fixed"
      label-position="left"
      label-width="224px"
      :model="form"
      :rules="rules"
    >
      <div class="form__title">您的项目背景和要求：</div>
      <el-form-item class="form__border-bottom" label="品牌或公司名称" prop="company">
        <el-input v-model="form.company" placeholder="必填项"></el-input>
      </el-form-item>
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
        <el-form-item label="选择合作类型（可多选）" label-width="400px"></el-form-item>
        <div class="form-item__type">
          <div class="form-item__typeitem" v-for="(mode,index) in modes" :key="mode.id">
            <img
              :src="mode.image"
              :class="{'form-item__typeitem--gray': !mode.select}"
              @click="onSeletcMode(index)"
            >
            <span>
              <i v-if="mode.select" class="el-icon-circle-check"></i>
              <i v-else class="el-icon-circle-check-outline"></i>
            </span>
          </div>
        </div>
      </el-row>
      <el-row>
        <div class="form-item__textarea">
          <textarea
            v-model="form.detail_demand"
            placeholder="1.请补充说明您的品牌介绍及意向合作品类  2.请补充说明您的意向IP/意向IP风格"
          ></textarea>
        </div>
      </el-row>

      <el-form-item class="form__border-bottom" label="期待上线日期" prop="publish_time">
        <el-date-picker v-model="form.publish_time" type="date" placeholder="请选择"></el-date-picker>
      </el-form-item>
      <div class="form__title">联系方式：</div>
      <el-form-item class="form__border-bottom" label="联系人姓名" prop="nickname">
        <el-input placeholder="必填项" v-model="form.nickname"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="14">
          <el-form-item label="联系人电话" class="form__border-bottom" prop="phone">
            <el-input placeholder="必填项" v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item class="form__border-bottom" label-width="10px" prop="vcode">
            <el-col :span="12">
              <el-input placeholder="短信验证码" v-model="form.vcode"></el-input>
            </el-col>
            <el-col :span="12">
              <div
                class="form-item__title form-item__captcha"
                v-if="!codeTime"
                @click="onCode"
              >获取验证码</div>
              <div
                class="form-item__title form-item__captcha form-item__captcha--gray"
                v-else
              >{{codeTime}}s后重新发送</div>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="form__submit-btn">
        <base-button @click="onSend">立即发布需求</base-button>
      </div>
    </el-form>
    <base-footer></base-footer>
    <submit-success-pop v-if="showSuccessPop"></submit-success-pop>
  </div>
</template>

<script>
import { Form, Input, Col, Row } from 'element-ui';
import { addDemad, getCooperationModes } from '@/services/demand';
import { sendCodeSms } from '@/services/code';
import district from './district.js';
import SubmitSuccessPop from './submit-success-pop.vue';

import './issue.scss';
export default {
  components: {
    SubmitSuccessPop,
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
      showSuccessPop: false,
      codeTime: 0
    };
  },
  created() {},
  mounted() {
    document.body.scrollTop
      ? (document.body.scrollTop = 0)
      : (document.documentElement.scrollTop = 0);
    this.fetchModes();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    changeProvince(id) {
      this.cities = [];
      district.cities.forEach(ctiy => {
        if (ctiy.provinceId === id) {
          this.cities.push(ctiy);
        }
      });
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
          const mode_ids = this.modes.map(mode => {
            return mode.id;
          });
          const data = Object.assign({}, this.form, {
            mode_ids: mode_ids,
            province: Number(this.form.province),
            city: Number(this.form.city)
          });
          addDemad(data)
            .then(data => {
              this.showSuccessPop = true;
            })
            .catch(err => {
              this.$message.error(err.message);
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

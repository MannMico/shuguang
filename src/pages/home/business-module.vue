<style lang="scss">
@import '~@/styles/var';
.business-module {
  padding: 130px 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__left {
  }
  &__right {
    margin-left: 3.6vw;
  }
  img {
    display: inline-block;
    width: 507px;
    height: 340px;
    background-color: #9e9e9e;
    border-radius: 4px;
  }
  .business {
    &__title {
      font-size: 30px;
      font-weight: $weight_regular;
    }
    &__desc {
      margin-top: 28px;
      font-size: 20px;
      font-weight: $weight_light;
    }
    &__btn {
      margin-top: 26px;
    }
    &__note {
      margin-top: 10px;
      font-size: 13px;
      font-weight: $weight_light;
    }
  }
}
</style>

<template>
  <div class="business-module" :style="{backgroundColor: negative ? 'rgba(0,0,0,0.2)' : '#fff'}">
    <template v-if="negative">
      <div class="business-module__left">
        <slot name="img"></slot>
      </div>
      <div class="business-module__right">
        <div class="business__title">
          <slot name="title"></slot>
        </div>
        <div class="business__desc">
          <slot name="desc"></slot>
        </div>
        <div class="business__btn">
          <slot name="btn">
            <base-button>发布需求</base-button>
          </slot>
        </div>
        <div class="business__note">
          <slot name="note">由专业IP经纪人帮您定制授权方案</slot>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="business-module__left">
        <div class="business__title">
          <slot name="title"></slot>
        </div>
        <div class="business__desc">
          <slot name="desc"></slot>
        </div>
        <div class="business__btn">
          <slot name="btn">
            <base-button>发布需求</base-button>
          </slot>
        </div>
        <div class="business__note">
          <slot name="note">由专业IP经纪人帮您定制授权方案</slot>
        </div>
      </div>
      <div class="business-module__right">
        <slot name="img"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    negative: {
      type: Boolean,
      default: false // 默认文字在左，图片在右
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

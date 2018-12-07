<template>
  <div class="partner-component">
    <div class="partner__header">
      <div class="partner__logo" src alt>
        <slot name="logo">
          <img src alt>
        </slot>
      </div>
      <div class="partner__line"></div>
      <slot name="avator">
        <img class="partner__avator">
      </slot>
      <div class="partner__person">
        <div class="partner-person__name">
          <slot name="name">xxx</slot>
        </div>
        <div class="partner-person__position">
          <slot name="position">xxxxxxxxxxx</slot>
        </div>
      </div>
    </div>
    <div class="partner__desc">
      <slot name="desc">
        我们和束光合作已经不是一两次了。能够成为稳
        定的伙伴，根本原因还是因为(束光)能提供可见
        的价值。在行业内里建立了不容市场小觑的影响
        力，期待下一次的合作。
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
@import '~@/styles/var';
.partner-component {
  width: 512px;
  height: 320px;
  padding: 40px 30px;
  box-sizing: border-box;

  background: #fff;
  border: 0 solid #d9d9d9;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  color: #000000;
  .partner {
    &__header {
      display: flex;
      align-items: center;
    }
    &__logo {
      img {
        display: block;
        width: 120px;
        height: 80px;
        border: 1px solid #eee;
      }
    }
    &__line {
      width: 1px;
      height: 44px;
      background: #b1b1b1;
      margin: 0 16px;
    }
    &__avator {
      display: inline-block;
      width: 80px;
      height: 80px;
      background-color: #eee;
    }
    &__person {
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__name {
      font-size: 20px;
      font-weight: $weight_medium;
      letter-spacing: 1px;
      line-height: 32px;
    }
    &__position {
      margin-top: 4px;
      font-weight: $weight_regular;
      font-size: 16px;
      letter-spacing: 0.8px;
    }
    &__desc {
      margin-top: 34px;
      font-size: 20px;
      font-weight: $weight_light;
      letter-spacing: 1px;
      line-height: 32px;
    }
  }
}
</style>


<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

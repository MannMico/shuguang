<style lang="scss">
@import '~@/styles/var';
.base-button {
  display: inline-block;
  color: #333;
  font-size: 18px;
  font-weight: $weight_medium;
  width: 128px;
  height: 45px;
  border: 1px solid #121212;
  // background-image: linear-gradient(-143deg, #1068fa 0%, #3b23e6 94%);
  border-radius: 25px;
  text-align: center;
  line-height: 45px;
  cursor: pointer;
  &:hover{
    background: #000;
    color: #fff;
  }
}
</style>

<template>
  <div class="base-button" @click="btnClicked">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'base-button',
  data() {
    return {};
  },
  methods: {
    btnClicked() {
      this.$emit('click');
    }
  }
};
</script>

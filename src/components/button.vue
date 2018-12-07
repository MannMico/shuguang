<style lang="scss">
@import '~@/styles/var';
.base-button {
  display: inline-block;
  color: #fff;
  font-size: 20px;
  font-weight: $weight_medium;
  padding: 10px 38px;
  background-image: linear-gradient(-143deg, #1068fa 0%, #3b23e6 94%);
  border-radius: 25px;
}
</style>

<template>
  <div class="base-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'base-button',
  data() {
    return {};
  }
};
</script>

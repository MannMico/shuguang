<style lang="scss">
.plan-module {
  position: relative;
  .module {
    &__img {
      width: 1120px;
      height: auto;
    }
  }
  .slider__arrow {
    display: block;
    width: 28px;
    height: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &-left {
      left: -70px;
    }

    &-right {
      right: -70px;
    }
  }
}
</style>

<template>
  <div class="plan-module">
    <template v-if="images.length > 1">
      <slider ref="slider" :options="options">
        <slideritem v-for="(item,index) in images" :key="index" :style="item.style">
          <img :src="item" alt class="module__img">
        </slideritem>
      </slider>
      <img
        class="slider__arrow slider__arrow-left"
        src="@/assets/left.png"
        alt
        @click="leftArrowClicked"
      >
      <img
        class="slider__arrow slider__arrow-right"
        src="@/assets/right.png"
        alt
        @click="rightArrowClicked"
      >
    </template>
    <img :src="images[0]" alt class="module__img" v-else>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
export default {
  props: ['images'],
  components: {
    slider,
    slideritem
  },
  data() {
    return {
      //Sliding configuration [obj]
      options: {
        pagination: false,
        thresholdDistance: 100, // 滑动距离阈值判定
        thresholdTime: 300, // 滑动时间阈值判定
        grabCursor: true, // 抓标样式
        speed: 300 // 滑动速度
        // timingFunction: 'ease', // 滑动方式
        // loop: false, // 无限循环
        // autoplay: 0 // 自动播放:时间[ms]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    leftArrowClicked() {
      this.$refs.slider.$emit('slidePre');
    },
    rightArrowClicked() {
      this.$refs.slider.$emit('slideNext');
    }
  }
};
</script>

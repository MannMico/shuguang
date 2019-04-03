<template>
  <div class="fix-btn" :class="isshowFixed?'show':'hide'" :data-id="isMatchShow">
    <div class="is-fix-icon is-issue" 
    :class="isIssue?'show':'hide'" 
    @mousemove="ishover = true" 
    @mouseout="ishover=false"
    @click="toThisRoute('issue')"
    >
      <img src="~@/assets/get_issue.png" alt="">
      <div class="issue-tips" :class="ishover?'show':'hide'">
       <img src="~@/assets/issue_hover.png" alt="">
      </div>
    </div>
    <div class="is-fix-icon is-go-back" :class="isToBack?'show':'hide'" @click="handlerClick">
      <img src="~@/assets/go_back.png" alt="">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .fix-btn{
    position: fixed;
    bottom: 100px;
    right: 40px;
    .is-fix-icon{
      position: relative;
      margin-top: 10px;
      cursor: pointer;
    }
  }
  .issue-tips{
    position: absolute;
    right: 60px;
    top:0;
  }
</style>
<script>
export default {
  name: 'fix-btn',
  props: {
    isIssue: {
      type: Boolean,
      default: true
    },
    isToBack: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      ishover: false,
      isshowFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.isMatchShow)
  },
  methods: {
    handlerClick() {
     window.scrollTo(0,0)
    },
    isMatchShow() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 500 ? this.isshowFixed = true : this.isshowFixed = false
    }
  }
}
</script>

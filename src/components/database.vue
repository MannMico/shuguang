<style lang="scss">
.ip-lists {
  width: 1220px;
  margin-bottom: 40px;
  .ip-part {
    float: left;
    width: 285px;
    height: 380px;
    margin-right: 20px;
    background-size: contain;
  }
}
.ip-title {
  .title-a {
    float: right;
    font-size: 16px;
    img {
      position: relative;
      top: 3px;
      float: right;
      margin-left: 10px;
    }
  }
}
</style>

<template>
  <div>
    <div class="content">
      <p class="ip-title"><span>ip授权案例</span><a href="#" class="title-small title-a">查看更多<img src="../assets/at.png" alt=""></a></p>
      <ul class="ip-lists clearfix" v-for="(items, index) in dataChose" :key="index">
        <li class="ip-part" :style="{ background: 'url(' + items.part.bg + ') no-repeat' }">
          <span>{{ items.part.name }}</span>
          <span>{{ items.part.desc }}</span>
          <span v-for="(label, key) in items.part.labels" :key="key">
            {{ label }}
          </span>
        </li>
        <li class="ip-part" v-for="(item, key) in items.conetents" :key="key" :style="{ background: 'url(' + item.ctBg + ') no-repeat' }">
          <span>{{ item.name }}</span>
          <span>{{ item.desc }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-data',
  props: {
    dataChose: Array
  }
};
</script>

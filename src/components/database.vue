<style lang="scss">
.ml30 {
  margin-left: 30px;
}
.all-case {
  text-align: center;
}
.ip-lists {
  width: 1220px;
  color: #fff;
  .ip-part {
    position: relative;
    float: left;
    width: 285px;
    height: 380px;
    margin-bottom: 40px;
    margin-right: 20px;
    background-size: contain;
    border-radius: 3px;
    cursor: pointer;
    &.ip-type-hover {
      &:hover {
        position: relative;
        top: -2px;
        box-shadow: 0 5px 5px rgba($color: #000, $alpha: .3);
      }
    }
    .ip-first-name {
      padding-top: 30px;
      font-size: 28px;
      padding-left: 2px;
    }
    .ip-first-line {
      position: relative;
      top: -10px;
      width: 124px;
      height: 9px;
      background: rgba($color: #fff, $alpha: 0.5)
    }
    .ip-first-desc {
      width: 240px;
      text-align: justify;
      font-size: 14px;
      line-height: 28px;
      margin-bottom: 55px;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }
    .ip-check-more {
      position: absolute;
      bottom: 17px;
      right: 20px;
      font-size: 13px;
      letter-spacing: 2px;
    }
    .ip-first-labes {
      width: 240px;
      .ip-first-label {
        display: inline-block;
        letter-spacing: 2px;
        margin-right: 15px;
        font-size: 13px;
        line-height: 13px;
      }
    }
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
.ip-list-name {
  width: 265px;
  margin: 5px auto 0;
  font-size: 16px;
  line-height: 36px;
  color: #333;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.ip-list-desc {
  width: 265px;
  margin: 0 auto;
  font-size: 13px;
  line-height: 23px;
  color: #999;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.ip-list-hover {
  &:hover {
    img {
      border-radius: 3px;
      position: relative;
      top: -2px;
      box-shadow: 0 5px 5px rgba($color: #000, $alpha: .3);
    }
    .ip-list-name {
      color: #fe992a;
    }
  }
}
</style>

<template>
  <div>
    <div class="content">
      <p class="ip-title" :class="textFlage ? '' : 'all-case'">
        <span v-text="textFlage ? 'IP授权案例' : 'IP授权成功案例'"></span>
        <a v-if="textFlage" href="#" class="title-small title-a">查看全部<img src="../assets/at.png" alt=""></a>
      </p>
      <ul class="ip-lists clearfix" v-for="(items, index) in homeIpList" :key="index">
        <li class="ip-part ip-type-hover" :style="{ background: 'url(' + items.part.bg + ') no-repeat'}">
          <p class="ip-first-name ml30" v-text="items.part.name"></p>
          <p class="ip-first-line ml30"></p>
          <p class="ip-first-desc ml30" v-text="items.part.desc"></p>
          <ul class="ip-first-labes ml30 clearfix">
            <li class="ip-first-label" v-for="(label, key) in items.part.labels" :key="key" v-text="'#' + label + '#'"></li>
          </ul>
          <span v-if="textFlage" class="ip-check-more">查看更多</span>
        </li>
        <li class="ip-part ip-list-hover" v-for="(item, k) in showLists(items.conetents, textFlage)" :key="k" @click="goToDetail(item.tid)" :data-tid="item.tid">
          <img :src="item.ctBg" alt="" width="285" height="285" />
          <p class="ip-list-name" v-text="item.name"></p>
          <p class="ip-list-desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DataChose from '@/assets/js/homeData.js';
export default {
  name: 'base-data',
  props: {
    textFlage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      homeIpList: DataChose.ipPart1
    }
  },
  computed: {
    showLists: function() {
      return function(lists, textFlage) {
        let changeLists;
        if (textFlage) {
          changeLists = lists.slice(0, 3);
        } else {
          changeLists = lists;
        }
        return changeLists;
      }
    }
  },
  methods:{
    goToDetail(tid) {
      this.$router.push({ path: '/case-detail/'+tid });
    }
  }
};
</script>

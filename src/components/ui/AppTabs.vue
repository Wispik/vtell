<template>
  <swiper
    :width=310
    class="tabs"
    :slideToClickedSlide="true"
    :enabled="swiperEnabled"
    @swiper="onSwiper"
  >
    <swiper-slide
      v-for="tab in tabs"
      :key="tab.id"
    >
        <router-link
          class="tab"
          :class="{'tab-first': tab.id===1, 'tab-last': tab.id===tabs.length}"
          exact-active-class="tab-active"
          :to="{'name': tab.routeName}"
        >
          {{ tab.title }}
        </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  props: {
    tabs: { required: true }
  },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      screenWidth: 0,
      sw: null
    }
  },
  created() {
    this.getScreenWidth()
    window.addEventListener("resize", this.getScreenWidth)
    
  },
  unmounted() {
    window.removeEventListener("resize", this.getScreenWidth)
  },
  methods: {
    getScreenWidth() {
      this.screenWidth = document.documentElement.scrollWidth
    },
    onSwiper(swiper) {
      this.sw = swiper
    }
  },
  computed: {
    swiperEnabled() {
      return 310*this.tabs.length > this.screenWidth
    }
  },
  watch: {
    swiperEnabled() {
      if (this.sw) {
        if (this.swiperEnabled) this.sw.enable()
        else this.sw.disable()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  margin-bottom: 45px;

  @media (max-width: 980px) {
    margin-bottom: 30px;
  }
}
.tab {
  width: 310px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: $text3-color;
  border-top: 1px solid $text2-color;
  border-bottom: 1px solid $text2-color;
  border-left: 1px solid $text2-color;

  &.tab-active {
    background: $red-color;
    color: $text4-color;
    border-color: $red-color;
  }
  &.tab-first {
    border-radius: 5px 0px 0px 5px;
  }
  &.tab-last {
    border-right: 1px solid $text2-color;
    border-radius: 0px 5px 5px 0px;

    &.tab-active {
      border-right: 1px solid $red-color;
    }
  }

  @media (max-width: 980px) {
    height: 60px;
  }
}
</style>
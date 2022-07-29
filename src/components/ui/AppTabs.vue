<template>
  <swiper
    :width=width
    :height=60
    class="tab-mobile only-mobile"
    :slideToClickedSlide="true"
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
  <div class="tabs only-desktop" :style="{'width': tabsWidth}">
    <router-link
      v-for="tab in tabs"
      :key="tab.id"
      class="tab"
      :class="{'tab-first': tab.id===1, 'tab-last': tab.id===tabs.length}"
      exact-active-class="tab-active"
      :to="{'name': tab.routeName}"
    >
      {{ tab.title }}
    </router-link>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  props: {
    tabs: { required: true },
    width: { required: true },
    tabsWidth: { default: '100%' }
  },
  components: { Swiper, SwiperSlide },
}
</script>

<style lang="scss" scoped>
.tabs {
  margin-bottom: 45px;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 980px) {
    margin-bottom: 30px;
  }

}
.tab {
  flex: 1;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: $text2-color;
  border-top: 1px solid $text2-color;
  border-bottom: 1px solid $text2-color;
  border-left: 1px solid $text2-color;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: darken($bg2-color, 40);
  }

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
.tab-mobile {
  margin-bottom: 30px;
  width: calc(100vw );
}
</style>
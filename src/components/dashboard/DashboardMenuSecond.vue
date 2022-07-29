<template>
  <div class="dash-menu2 only-desktop">
    <router-link class="dash-menu2__item"
      v-for="item in menu"
      :key="item.routeName"
      :to="{'name': item.routeName}"
      exact-active-class="dash-menu2__item-active"
    >
      {{ item.title }}
    </router-link>
  </div>
  <div class="only-mobile dash-menu2__mob-container">
    <swiper
      :slideToClickedSlide="true"
      slidesPerView="auto"
    >
      <swiper-slide
        v-for="item in menu"
        :key="item.routeName"
      >
        <router-link class="dash-menu2__item mobile"
          :to="{'name': item.routeName}"
          exact-active-class="dash-menu2__item-active"
        >
          {{ item.title }}
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: { Swiper, SwiperSlide },
  props: {
    menu: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.dash-menu2 {
  display: flex;
  flex-direction: column;
  border-right: 1px solid $bg3-color;
}
.dash-menu2__item {
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;
  text-transform: capitalize;
  color: $text3-color;
  padding: 30px;
  border-bottom: 1px solid $bg3-color;

  &:hover{
    background: rgba(0, 0, 0, 0.2);
  }

  &.mobile {
    font-size: 16px;
    border-top: 1px solid $bg3-color;
    border-right: 1px solid $bg3-color;
    padding: 20px;
    display: flex;
    width: min-content;
    white-space: nowrap;
  }
}
.dash-menu2__item-active {
  color: $red-color;
  background: rgba(0, 0, 0, 0.4);
}
.dash-menu2__mob-container {
  width: calc(100vw - 20px);
}
.swiper-slide {
  width: auto !important;;
}
</style>
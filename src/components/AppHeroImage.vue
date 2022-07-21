<template>
  <div class="hero">
    <img class="hero__bg" :src="`/images/hero/${img}.png`">
    <img class="hero__bg hero__bg-mobile" :src="`/images/hero/${img}-mob.png`">
    <div class="container hero__body">
      <div class="hero__title-small">{{ titleMin }}</div>
      <div class="hero__title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: { required: true },
    title: { default: '' },
    titleMin: { default: '' }
  },
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 278px;
  position: relative;

  @media (max-width: 980px) {
    height: 240px;
  }
}
.hero__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  @media (max-width: 700px) {
    display: none;
  }

  &.hero__bg-mobile {
    display: none;

    @media (max-width: 700px) {
      display: block;
    }
  }
}
.hero__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  gap: 13px;
  height: 100%;
}
.hero__title-small {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: $text2-color;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
}
.hero__title {
  font-weight: 700;
  font-size: 45px;
  line-height: 45px;
  color: $text4-color;

  @media (max-width: 980px) {
    font-size: 30px;
    line-height: 36px;
  }
}
</style>
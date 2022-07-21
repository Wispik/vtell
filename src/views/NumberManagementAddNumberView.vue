<template>
  <app-header />
  <app-hero-image 
    img="number-management"
    title="Number management"
    title-min="Phone numbers"
  />
  <div class="content container numb-content">
    <div class="title">Adding a number</div>
    <div class="sub-title">Link a new card and top up your account</div>
    <div class="numb-inputs">
      <app-input-phone
        label="Phone number:"
      />
    </div>
    <div class="numb-btn">
      <app-button text="Add number" />
    </div>
  </div>
  <app-footer-second />
  <app-footer-main />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooterMain from '@/components/AppFooterMain.vue'
import AppFooterSecond from '@/components/AppFooterSecond.vue'
import AppHeroImage from '@/components/AppHeroImage.vue'

export default {
  components: { AppFooterMain, AppFooterSecond, AppHeader, AppHeroImage },
}
</script>

<style lang="scss" scoped>
.numb-content {
  padding-top: 50px;
  padding-bottom: 120px;

  @media (max-width: 980px) {
    padding-bottom: 50px;
  }
}
.numb-inputs {
  max-width: 600px;
  width: inherit;
  margin-top: 20px;
  margin-bottom: 25px;

  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
  }
}
.numb-btn {
  width: 283px;

  @media (max-width: 800px) {
    width: 100%;
  }
}
</style>
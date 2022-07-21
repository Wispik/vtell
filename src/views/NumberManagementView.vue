<template>
  <app-header />
  <app-hero-image 
    img="number-management"
    title="Number management"
    title-min="Phone numbers"
  />
  <div class="content container numb-content">
    <div class="numb-text">
      If you are calling to a country that is not on your list, or if you have several numbers from the same country, select a number from the list below, which will be determined by your interlocutors.
    </div>
    <div class="numb-blocks">
      <div class="numb-block">
        <div class="numb-block-title">
          <img src="@/assets/images/flag-us.png">
          <span>USA</span>
          <app-switch class="mla" v-model="switchUSA" />
        </div>
        <div class="numb-block-item green">
          +1 305 000000
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12L12.5 21.5L31 3" stroke="#CFD0D0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="numb-block-item">
          +1 000 0000000
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12L12.5 21.5L31 3" stroke="#CFD0D0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="numb-block">
        <div class="numb-block-title">
          <img src="@/assets/images/flag-au.png">
          <span>AUSTRALIA</span>
          <app-switch class="mla" v-model="switchAU" />
        </div>
        <div class="numb-block-item">
          +61 00 0000000
        </div>
      </div>
      <div class="numb-block">
        <div class="numb-block-title">
          <img src="@/assets/images/flag-ru.png">
          <span>RUSSIA</span>
          <app-switch class="mla" v-model="switchRU" />
        </div>
        <div class="numb-block-item">
          +7 000 0000000
        </div>
      </div>
    </div>
    <div class="numb-btn">
      <app-button text="Connect additional number" />
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
  data() {
    return {
      switchUSA: true,
      switchAU: false,
      switchRU: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.numb-content {
  padding-top: 75px;
  padding-bottom: 120px;

  @media (max-width: 880px) {
    padding-bottom: 50px;
    padding-top: 40px;
  }
}
.numb-text {
  max-width: 930px;
  width: inherit;
  font-weight: 300;
  font-size: 22px;
  line-height: 36px;
  color: $text3-color;

  @media (max-width: 880px) {
    font-size: 18px;
    line-height: 30px;
  }
}
.numb-blocks {
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 36px;

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

}
.numb-block {
  background: $bg3-color;
  border-radius: 5px;
  padding: 28px;
  width: 396px;

  @media (max-width: 880px) {
    width: 100%;
  }
}
.numb-block-title {
  display: flex;
  flex-flow: row nowrap;
  gap: 17px;
  margin-bottom: 36px;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: $text6-color;
}
.mla {
  margin-left: auto;
}
.numb-block-item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  font-size: 21px;
  line-height: 26px;
  color: $text5-color;

  & > svg {
    width: 28px;
    height: 18px;
  }

  & + & {
    margin-top: 28px;
  }

  &.green {
    font-weight: 700;
    color: $green-color;

    & > svg > path {
      stroke: $green-color;
    }
  }
}
.numb-btn {
  width: 283px;

  @media (max-width: 880px) {
    width: 100%;
  }
}
</style>
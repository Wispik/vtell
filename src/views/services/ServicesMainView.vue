<template>
  <app-header />
  <app-hero-image 
    img="services"
    title="Your services"
    title-min="Services"
  />
  <div class="content container services-content">
    <app-tabs  :tabs="tabs" />
    <div class="flex-col">
      <router-view />
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
import AppTabs from '@/components/ui/AppTabs.vue'

export default {
  components: { AppFooterMain, AppFooterSecond, AppHeader, AppHeroImage, AppTabs },
  data() {
    return {
      tabs: [
        {
          id: 1,
          title: 'Settings',
          routeName: 'services-settings'
        },
        {
          id: 2,
          title: 'Connect with us',
          routeName: 'services-connect'
        },
        {
          id: 3,
          title: 'Social networks',
          routeName: 'services-social'
        },
        {
          id: 4,
          title: 'Speed test',
          routeName: 'account-main'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.services-content {
  padding-top: 70px;
  padding-bottom: 120px;

  @media (max-width: 980px) {
    padding-top: 40px;
    padding-bottom: 70px;
  }
}
.services-cells {
  display: flex;
  flex-flow: row wrap;
  gap: 32px;

  @media (max-width: 665px) {
    gap: 16px;
    justify-content: space-between;
  }
}
.services-cell {
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 20px;
  background: $bg3-color;
  border-radius: 5px;
  cursor: pointer;
  padding-bottom: 36px;
  text-transform: capitalize;

  @media (max-width: 665px) {
    width: 150px;
    height: 150px;
    padding-bottom: 30px;

    & > img {
      width: 48px;
    }
  }
}
</style>
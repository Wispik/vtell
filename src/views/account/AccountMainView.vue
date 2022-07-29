<template>
  <app-header />
  <app-hero-image 
    img="account"
    title="Your account"
    title-min="Payment"
  />
  <div class="content container account-content">
    <app-tabs  :tabs="tabs" :width=310 tabs-width="620px" />
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
          title: 'Your account',
          routeName: 'account-main'
        },
        {
          id: 2,
          title: 'Decryption of your account',
          routeName: 'account-decription'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.account-content {
  padding-top: 70px;
  padding-bottom: 120px;

  @media (max-width: 980px) {
    padding-top: 40px;
    padding-bottom: 70px;
  }
}
</style>
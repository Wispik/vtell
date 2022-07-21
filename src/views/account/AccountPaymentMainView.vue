<template>
  <app-header />
  <app-hero-image 
    img="account"
    title="Your account"
    title-min="Payment"
  />
  <div class="content container account-content">
    <app-tabs  :tabs="tabs" />
    <div class="flex-col account-payment-col">
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
          title: 'Payment by card',
          routeName: 'account-payment-main'
        },
        {
          id: 2,
          title: 'Apple pay',
          routeName: 'account-payment-apple-pay'
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
.account-payment-col {
  max-width: 600px;
  width: inherit;
}
.pay-input-block {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
  margin-bottom: 50px;
}
.pay-btn {
  width: 284px;

  @media (max-width: 700px) {
    width: 100%;
  }
}
</style>
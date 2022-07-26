<template>
  <app-header />
  <div class="content">
    <div class="container">
      <div class="bread">
        <router-link 
          class="bread-item"
          to="/checkout"
        >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.11369 0.159733C7.32667 0.372715 7.32671 0.718096 7.11366 0.931114L2.04482 5.99984L7.11369 11.0688C7.32667 11.2818 7.32671 11.6272 7.11366 11.8402C6.90064 12.0532 6.55529 12.0532 6.34227 11.8402L0.887729 6.38552C0.785438 6.28322 0.727983 6.1445 0.727983 5.99984C0.727983 5.85519 0.785474 5.71642 0.887765 5.61417L6.34231 0.15977C6.55529 -0.0532846 6.90067 -0.0532846 7.11369 0.159733Z" fill="#A7A7A7"/>
          </svg>
          TARIFFS AND PACKAGES
        </router-link>
        <router-link 
          class="bread-item"
          to="/checkout"
        >
          SILVER PLAN
        </router-link>
        <div class="bread-item bread-item-active">your order</div>
      </div>
      <div class="checkout-title">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5272 25.668C8.62443 25.668 7.08203 27.2104 7.08203 29.1131C7.08203 31.0159 8.6245 32.5582 10.5272 32.5582C12.4299 32.5582 13.9723 31.0158 13.9723 29.1131C13.9724 27.2104 12.4299 25.668 10.5272 25.668ZM10.5272 31.0271C9.47011 31.0271 8.61322 30.1702 8.61322 29.1132C8.61322 28.0561 9.47011 27.1992 10.5272 27.1992C11.5842 27.1992 12.4411 28.0561 12.4411 29.1132C12.4412 30.1702 11.5842 31.0271 10.5272 31.0271Z" fill="#E63739"/>
          <path d="M25.0741 25.668C23.1713 25.668 21.6289 27.2104 21.6289 29.1131C21.6289 31.0159 23.1714 32.5582 25.0741 32.5582C26.9767 32.5582 28.5192 31.0158 28.5192 29.1131C28.5192 27.2104 26.9768 25.668 25.0741 25.668ZM25.0741 31.0271C24.017 31.0271 23.1601 30.1702 23.1601 29.1132C23.1601 28.0561 24.017 27.1992 25.0741 27.1992C26.1311 27.1992 26.988 28.0561 26.988 29.1132C26.9881 30.1702 26.1311 31.0271 25.0741 31.0271Z" fill="#E63739"/>
          <path d="M32.8439 5.57122C32.6845 5.39706 32.4664 5.28803 32.2315 5.26495L7.31143 4.92044L6.6224 2.81503C6.13699 1.40759 4.81902 0.457434 3.33033 0.441681H0.765595C0.342755 0.441681 0 0.784436 0 1.20728C0 1.63012 0.342755 1.97287 0.765595 1.97287H3.33033C4.16274 1.99126 4.89573 2.52576 5.16778 3.31268L10.0293 17.9738L9.64653 18.8542C9.21959 19.9552 9.34781 21.1943 9.99105 22.1845C10.6281 23.1571 11.6999 23.7573 12.862 23.7923H27.7529C28.1757 23.7923 28.5185 23.4495 28.5185 23.0267C28.5185 22.6039 28.1757 22.2611 27.7529 22.2611H12.862C12.2057 22.2447 11.6016 21.8994 11.2542 21.3424C10.9107 20.7921 10.8402 20.1142 11.0628 19.5049L11.3691 18.8159L27.4848 17.1316C29.255 16.9366 30.7112 15.6491 31.1214 13.916L32.9589 6.22185C33.0417 6.00029 32.9977 5.7511 32.8439 5.57122ZM29.6285 13.5716C29.38 14.6872 28.4328 15.5101 27.2935 15.6004L11.3691 17.2464L7.80908 6.45163L31.2745 6.79614L29.6285 13.5716Z" fill="#E63739"/>
        </svg>
        Your Order
      </div>
    </div>
    <div class="checkout-block">
      <checkout-tabs :small="bigTabs" />
      <div class="checkout-block__body">
        <div class="checkout-block__body-left">
          <div class="checkout-block__body-left-title">
            TARIFF PLAN
            <span>Silver Plan</span>
          </div>
          <div class="checkout-block__body-left-price">
            <span>$</span>98
          </div>
          <div class="checkout-block__body-left-text">
            AMOUNT FEE* 
          </div>
          <checkout-select />

        </div>
        <div class="checkout-block__body-view">
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <app-footer-second />
  <app-footer-main />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooterSecond from '@/components/AppFooterSecond.vue'
import AppFooterMain from '@/components/AppFooterMain.vue'
import CheckoutTabs from '@/components/checkout/CheckoutTabs.vue'
import CheckoutSelect from '@/components/checkout/CheckoutSelect.vue'
export default {
  components: { AppHeader, AppFooterMain, AppFooterSecond, CheckoutTabs, CheckoutSelect },
  computed: {
    bigTabs() {
      if (this.$route.name == 'checkout-transfer') return true
      else return false
    }
  }
}
</script>

<style lang="scss" scoped>
.bread {
  margin-top: 70px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: row nowrap;
}
.bread-item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: $text2-color;
  font-size: 16px;
  line-height: 16px;

  & > svg {
    margin-right: 9px;
  }

  & + &:before {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: $text2-color;
    margin: 0 20px;
  }

  &.bread-item-active {
    color: $text-color;
    text-transform: uppercase;
  }
}
.checkout-title {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  gap: 10px;
  text-transform: capitalize;
}
.checkout-block {
  max-width: 1248px;
  width: inherit;
  margin: 60px auto 100px auto;
  background: #302F2F;
  border-radius: 10px;
  overflow: hidden;
}
.checkout-block__body {
  padding: 50px;
  display: grid;
  grid-template-columns: 300px 1fr;
}
.checkout-block__body-left {
  padding-right: 50px;
  border-right: 1px solid #444444;
  display: flex;
  flex-direction: column;
}
.checkout-block__body-view {
  padding-left: 50px;
}
.checkout-block__body-left-title {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: $text2-color;

  & > span {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    text-transform: capitalize;
    color: $text-color;
  }
}
.checkout-block__body-left-price {
  font-family: 'Kumbh Sans';
  font-weight: 700;
  font-size: 55px;
  line-height: 66px;

  & > span {
    font-family: 'Kumbh Sans';
    font-size: 24px;
    line-height: 28px;
  }
}
.checkout-block__body-left-text {
  font-family: 'Kumbh Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
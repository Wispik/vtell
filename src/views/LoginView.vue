<template>
  <div class="content">
    <div class="login-page">
      <router-link
        to="/"
        class="only-desktop"
      >
        <img src="@/assets/images/logo-big.png">
      </router-link>
      <app-header :show-lang="false" class="only-mobile" />
      <div class="login-page__body">
        <div class="login-page__top">
          <router-link
            class="login-page__top-link"
            to="/"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_55_20363)">
              <path d="M7.59344 0.133114C7.77093 0.310598 7.77096 0.598416 7.59341 0.775931L3.36938 4.99987L7.59344 9.22402C7.77093 9.40151 7.77096 9.68933 7.59341 9.86684C7.4159 10.0444 7.12811 10.0444 6.95059 9.86684L2.40514 5.32127C2.3199 5.23602 2.27202 5.12042 2.27202 4.99987C2.27202 4.87933 2.31993 4.76369 2.40517 4.67848L6.95062 0.133144C7.12811 -0.0444012 7.41593 -0.0444012 7.59344 0.133114Z" fill="#A7A7A7"/>
              </g>
              <defs>
              <clipPath id="clip0_55_20363">
              <rect width="10" height="10" fill="white" transform="matrix(0 -1 -1 0 10 10)"/>
              </clipPath>
              </defs>
            </svg>
            BACK TO WELCOME PAGE
          </router-link>
          <div class="login-page__top-name">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_55_20637)">
              <path d="M21.875 28H6.12502C4.67749 28 3.5 26.8225 3.5 25.375V8.59958C3.5 7.89891 3.77342 7.23921 4.26906 6.74363L10.2437 0.769067C10.7393 0.273428 11.3989 7.62939e-06 12.0996 7.62939e-06H21.875C23.3225 7.62939e-06 24.5 1.1775 24.5 2.62503V25.375C24.5 26.8225 23.3225 28 21.875 28ZM12.0996 1.75C11.8698 1.75 11.6442 1.84317 11.481 2.00635L5.50635 7.98097C5.34316 8.14416 5.24999 8.36977 5.24999 8.59964V25.375C5.24999 25.8578 5.64218 26.2501 6.12502 26.2501H21.875C22.3578 26.2501 22.75 25.8579 22.75 25.375V2.62503C22.75 2.14224 22.3579 1.75 21.875 1.75H12.0996Z" fill="#E63739"/>
              <g clip-path="url(#clip1_55_20637)">
              <path d="M20.8526 20.5185C19.8013 19.4672 18.55 18.689 17.1847 18.2179C18.6469 17.2107 19.6076 15.5252 19.6076 13.6193C19.6076 10.5424 17.1043 8.03908 14.0273 8.03908C10.9504 8.03908 8.44708 10.5424 8.44708 13.6193C8.44708 15.5252 9.40775 17.2107 10.87 18.2179C9.50477 18.689 8.25343 19.4672 7.20212 20.5185C5.37903 22.3416 4.375 24.7655 4.375 27.3438H5.88318C5.88318 22.8531 9.53663 19.1996 14.0273 19.1996C18.5181 19.1996 22.1715 22.8531 22.1715 27.3438H23.6797C23.6797 24.7655 22.6757 22.3416 20.8526 20.5185ZM14.0273 17.6914C11.782 17.6914 9.95526 15.8647 9.95526 13.6193C9.95526 11.374 11.782 9.54726 14.0273 9.54726C16.2727 9.54726 18.0994 11.374 18.0994 13.6193C18.0994 15.8647 16.2727 17.6914 14.0273 17.6914Z" fill="#E63739"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_55_20637">
              <rect width="28" height="28" fill="white"/>
              </clipPath>
              <clipPath id="clip1_55_20637">
              <rect width="19.3047" height="19.3047" fill="white" transform="translate(4.375 8.03908)"/>
              </clipPath>
              </defs>
            </svg>
            My V-Tell
          </div>
          <div class="login-page__top-text">
            Log in to access V-Tell subscriber's self care capabilities
          </div>
        </div>
        <div class="login-page__content">
          <form class="login-page__form">
            <app-input-phone 
              label="Enter your phone number" 
              :required="true"
              v-model="phone"
            />
            <app-input 
              label="Enter your password" 
              type="password"
              :required="true"  
              v-model="password"
            />
            <app-button text="Log In"/>
            <a href="#" class="login-page__form-link">Forgot your password?</a>
          </form>
          <div class="login-page__new">
            <div class="login-page__new-title">
              New Subscriber
            </div>
            <div class="login-page__new-text">
              Don’t have an account yet? Register now!
            </div>
            <app-button text="Sign Up" :bordered-red="true"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer-main :login-page="true" />
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooterMain from '../components/AppFooterMain.vue'

export default {
  components: {
    AppHeader, AppFooterMain
  },
  data() {
    return {
      phone: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  margin: 100px auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 88px;

  max-width: 1288px;
  width: inherit;
  padding: 0 20px;

  @media (max-width: 980px) {
    margin: 0;
    flex-direction: column;
    padding: 0;
    margin-bottom: 50px;
    gap: 20px;
  }
}
.login-page__body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  @media (max-width: 980px) {
    padding: 0 20px;
  }
}
.login-page__top {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 980px) {
    gap: 20px;
  }
}
.login-page__top-link {
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: $text2-color;

  @media (max-width: 980px) {
    font-size: 14px;
  }
}
.login-page__top-name {
  display: flex;
  flex-flow: row nowrap;
  gap: 12px;
  align-items: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;

  @media (max-width: 980px) {
    font-size: 30px;
    line-height: 36px;
  }
}
.login-page__top-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: $text2-color;
  margin-top: 18px;

  @media (max-width: 980px) {
    margin-top: 0;
  }
}
.login-page__content {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 50px;
    align-items: center;
  }
}
.login-page__form {
  background: $bg3-color;
  border-radius: 5px 5px 0px 0px;
  padding: 55px 50px;
  max-width: 600px;
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 35px;

  @media (max-width: 980px) {
    padding: 30px 20px;
  }
}
.login-page__form-link {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: $red-color;
  margin-top: -20px;
}
.login-page__new {
  max-width: 300px;
  width: inherit;

  @media (max-width: 980px) {
    max-width: 600px;
  }
}
.login-page__new-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-transform: capitalize;

  @media (max-width: 980px) {
    font-size: 26px;
    line-height: 30px;
  }
}
.login-page__new-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: $text2-color;
  margin-top: 18px;
  margin-bottom: 25px;

  @media (max-width: 980px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
  }
}
</style>
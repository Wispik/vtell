<template>
  <header class="header">
    <div class="container header__body">
      <router-link
        class="only-desktop"
        to="/"
      >
        <img src="@/assets/images/logo-big.png" class="header-logo">
      </router-link>
      <div class="header__block-right">
        <div class="header__block-right-top">
          <router-link
            class="header__mobile-logo only-mobile"
            to="/"
          >
            <img src="@/assets/images/logo-big.png" class="header-logo">
          </router-link>
          <router-link 
            class="header__menu-top-link only-desktop"
            to="/"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7782 3.2218C16.7006 1.14417 13.9382 0 11 0C8.0618 0 5.29942 1.14417 3.2218 3.2218C1.14421 5.29942 0 8.0618 0 11C0 13.9382 1.14421 16.7006 3.2218 18.7782C5.29942 20.8558 8.0618 22 11 22C13.9382 22 16.7006 20.8558 18.7782 18.7782C20.8558 16.7006 22 13.9382 22 11C22 8.0618 20.8558 5.29942 18.7782 3.2218ZM11 20.7109C5.64536 20.7109 1.28906 16.3546 1.28906 11C1.28906 5.64536 5.64536 1.28906 11 1.28906C16.3546 1.28906 20.7109 5.64536 20.7109 11C20.7109 16.3546 16.3546 20.7109 11 20.7109Z" fill="#E63739"/>
              <path d="M11.6901 10.3555H10.3093C9.5227 10.3555 8.88277 9.71553 8.88277 8.92895C8.88277 8.14232 9.52275 7.50238 10.3093 7.50238H13.0708C13.4268 7.50238 13.7153 7.2138 13.7153 6.85785C13.7153 6.5019 13.4268 6.21332 13.0708 6.21332H11.6442V4.78676C11.6442 4.43081 11.3557 4.14223 10.9997 4.14223C10.6438 4.14223 10.3552 4.43081 10.3552 4.78676V6.21332H10.3094C8.81196 6.21332 7.59375 7.43157 7.59375 8.92895C7.59375 10.4263 8.812 11.6445 10.3094 11.6445H11.6901C12.4767 11.6445 13.1167 12.2845 13.1167 13.0711C13.1167 13.8577 12.4767 14.4977 11.6901 14.4977H8.92866C8.57271 14.4977 8.28413 14.7862 8.28413 15.1422C8.28413 15.4981 8.57271 15.7867 8.92866 15.7867H10.3552V17.2133C10.3552 17.5693 10.6438 17.8579 10.9997 17.8579C11.3557 17.8579 11.6442 17.5693 11.6442 17.2133V15.7867H11.6901C13.1875 15.7867 14.4057 14.5685 14.4057 13.0711C14.4057 11.5737 13.1875 10.3555 11.6901 10.3555Z" fill="#E63739"/>
            </svg>
            Add Funds
          </router-link>
          <router-link 
            class="header__menu-top-link only-desktop"
            to="/"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_534_4251)">
              <path d="M17.1875 22H4.81251C3.67517 22 2.75 21.0748 2.75 19.9375V6.75682C2.75 6.20629 2.96483 5.68795 3.35426 5.29856L8.0486 0.604268C8.43799 0.214838 8.95628 7.62939e-06 9.50686 7.62939e-06H17.1875C18.3249 7.62939e-06 19.25 0.925182 19.25 2.06252V19.9375C19.25 21.0748 18.3249 22 17.1875 22ZM9.50686 1.375C9.32624 1.375 9.14902 1.4482 9.02076 1.57642L4.32641 6.27076C4.1982 6.39898 4.12499 6.57625 4.12499 6.75686V19.9375C4.12499 20.3169 4.43314 20.6251 4.81251 20.6251H17.1875C17.5668 20.6251 17.875 20.3169 17.875 19.9375V2.06252C17.875 1.68319 17.5669 1.375 17.1875 1.375H9.50686Z" fill="#E63739"/>
              <g clip-path="url(#clip1_534_4251)">
              <path d="M16.3842 16.1217C15.5582 15.2957 14.575 14.6842 13.5022 14.314C14.6512 13.5227 15.406 12.1984 15.406 10.7009C15.406 8.28331 13.4391 6.31642 11.0215 6.31642C8.60388 6.31642 6.63699 8.28331 6.63699 10.7009C6.63699 12.1984 7.39181 13.5227 8.54075 14.314C7.46803 14.6842 6.48484 15.2957 5.65881 16.1217C4.22638 17.5541 3.4375 19.4586 3.4375 21.4844H4.6225C4.6225 17.956 7.49307 15.0854 11.0215 15.0854C14.5499 15.0854 17.4205 17.956 17.4205 21.4844H18.6055C18.6055 19.4586 17.8166 17.5541 16.3842 16.1217ZM11.0215 13.9004C9.25729 13.9004 7.82199 12.4651 7.82199 10.7009C7.82199 8.93669 9.25729 7.50142 11.0215 7.50142C12.7857 7.50142 14.221 8.93669 14.221 10.7009C14.221 12.4651 12.7857 13.9004 11.0215 13.9004Z" fill="#E63739"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_534_4251">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              <clipPath id="clip1_534_4251">
              <rect width="15.168" height="15.168" fill="white" transform="translate(3.4375 6.31642)"/>
              </clipPath>
              </defs>
            </svg>
            My V-Tell
          </router-link>
          <div class="header-lang" v-if="showLang">
            <div class="header-lang__title">
              Choose Your Language
            </div>
            <div class="header-lang__body">
              <img src="@/assets/images/flag-us-circle.png">
              <span>ENG</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8402 0.887017C11.6273 0.674036 11.2819 0.673999 11.0689 0.887054L6.00013 5.95589L0.931145 0.887017C0.718164 0.674036 0.372782 0.673999 0.159764 0.887054C-0.0532545 1.10007 -0.0532545 1.44542 0.159764 1.65844L5.61445 7.11298C5.71674 7.21527 5.85547 7.27273 6.00013 7.27273C6.14478 7.27273 6.28355 7.21524 6.3858 7.11294L11.8402 1.6584C12.0533 1.44542 12.0533 1.10004 11.8402 0.887017Z" fill="white"/>
              </svg>
            </div>
          </div>
          <svg class="header__btn-burger only-mobile" width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25.9459" height="1.72973" rx="0.864865" fill="#E63739"/>
            <rect y="20.7567" width="19.8919" height="1.72973" rx="0.864865" fill="#E63739"/>
            <rect y="10.3784" width="32" height="1.72973" rx="0.864865" fill="#E63739"/>
          </svg>
        </div>
        <div class="header__menu only-desktop">
          <router-link 
            class="header__menu-item"
            to="/"
          >
            Plans
          </router-link>
          <router-link 
            class="header__menu-item"
            to="/"
          >
            Coverage
          </router-link>
          <router-link 
            class="header__menu-item"
            to="/"
          >
            About
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8402 0.88701C11.6273 0.674028 11.2819 0.673992 11.0689 0.887046L6.00013 5.95588L0.931145 0.88701C0.718164 0.674028 0.372782 0.673992 0.159764 0.887046C-0.0532545 1.10006 -0.0532545 1.44541 0.159764 1.65843L5.61445 7.11297C5.71674 7.21526 5.85547 7.27272 6.00013 7.27272C6.14478 7.27272 6.28355 7.21523 6.3858 7.11294L11.8402 1.65839C12.0533 1.44541 12.0533 1.10003 11.8402 0.88701Z" fill="#E5E5E5"/>
            </svg>
                      </router-link>
                      <router-link 
                        class="header__menu-item"
                        to="/"
                      >
                        Help
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8402 0.88701C11.6273 0.674028 11.2819 0.673992 11.0689 0.887046L6.00013 5.95588L0.931145 0.88701C0.718164 0.674028 0.372782 0.673992 0.159764 0.887046C-0.0532545 1.10006 -0.0532545 1.44541 0.159764 1.65843L5.61445 7.11297C5.71674 7.21526 5.85547 7.27272 6.00013 7.27272C6.14478 7.27272 6.28355 7.21523 6.3858 7.11294L11.8402 1.65839C12.0533 1.44541 12.0533 1.10003 11.8402 0.88701Z" fill="#E5E5E5"/>
            </svg>
          </router-link>
          <router-link 
            class="header__menu-item header__menu-item-bold"
            to="/"
          >
            Partnerships
          </router-link>
          <router-link 
            class="header__menu-item header__menu-item-bold"
            to="/"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    showLang: {
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 152px;
  border-bottom: 1px solid $bg3-color;
  position: relative;
  background: $bg-color;
  overflow-x: hidden;

  @media (max-width: 980px) {
    background: $bg-color;
    height: 72px;
  }
}
.header__body {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  gap: 118px;
  align-items: center;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 76px;
    background: #000000;
    border-radius: 0px 0px 0px 10px;
    top: 0;
    left: 264px;
    z-index: 1;

    @media (max-width: 980px) {
      display: none;
    }
  }
}
.header__block-right {
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}
.header__block-right-top {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 62px;
  height: 78px;

  @media (max-width: 980px) {
    justify-content: space-between;
    gap: 0;
  }
}
.header__menu-top-link {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  align-items: center;
}
.header-lang {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-end;
  justify-content: center;
}
.header-lang__title {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: $text2-color;
}
.header-lang__body {
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  gap: 7px;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}
.header__menu {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 20px;
}
.header__menu-item {
  font-family: 'PF BeauSans Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;
  color: $text3-color;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 14px;

  &.header__menu-item-bold {
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }
}
.header__btn-burger {
  cursor: pointer;
}
.header__mobile-logo {
  width: 78px;
}
</style>
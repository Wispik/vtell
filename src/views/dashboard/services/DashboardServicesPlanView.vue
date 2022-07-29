<template>
  <div class="plan-page">
    <div class="title">Your Plan</div>
    <div class="plan-block__top">
      <img class="image" src="@/assets/images/plan.png">
      <div class="plan-card">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>Silver</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                5<span>GB</span>
              </div>
              <div class="plan-card__title-block-text">
                DATA
              </div>
            </div>
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                500<span>min.</span>
              </div>
              <div class="plan-card__title-block-text">
                VOICE
              </div>
            </div>
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                <span>UNLIMITED</span>
              </div>
              <div class="plan-card__title-block-text">
                SMS
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="plan-card__body-top">
            <div class="price"><span>$</span>98</div>
            <div class="plan-card__body-top-text">MONTHLY FEE</div>
            <div class="plan-select">
              <checkout-select />
            </div>
          </div>
          <div class="plan-card__body-limited">
            Limited time offer for Russia
          </div>
          <div class="plan-card__body-table-title">
            <span>INCLUDED IN PACKAGE</span>
            <span>WORLDWIDE*</span>
          </div>
          <div class="plan-card__body-table-row">
            <span>
              <img src="@/assets/images/checkout/voice.svg">
              Voice
            </span>
            <span class="last">500 minutes</span>
          </div>
          <div class="plan-card__body-table-row">
            <span>
              <img src="@/assets/images/checkout/sms.svg">
              SMS
            </span>
            <span class="last">Unlimited</span>
          </div>
          <div class="plan-card__body-table-row">
            <span>
              <img src="@/assets/images/checkout/wifi.svg">
              Data
            </span>
            <span class="last">5 GB</span>
          </div>
          <div class="plan-card__body-table-row">
            <span>
              <img src="@/assets/images/checkout/phone.svg">
              Phone Numbers
            </span>
            <span class="last">2 unit.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      Choose a new tariff plan
    </div>
    <div class="plans-flex only-desktop">
      <div class="plan-card small">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>Silver</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                5<span>GB</span>
              </div>
              <div class="plan-card__title-block-text">
                DATA
              </div>
            </div>
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                500<span>min.</span>
              </div>
              <div class="plan-card__title-block-text">
                VOICE
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="price">
            <span>$</span>98
          </div>
          <div class="plan-card-small-col">
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/voice.svg">
              500 voice minutes
            </div>
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/sms.svg">
              Unlimited SMS
            </div>
            <div class="plan-card-small-row last">
              <img src="@/assets/images/checkout/wifi.svg">
              5 GB of Data
            </div>
          </div>
          <app-button text="Choose a plan" />
        </div>
      </div>
      <div class="plan-card small">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>Gold</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                10<span>GB</span>
              </div>
              <div class="plan-card__title-block-text">
                DATA
              </div>
            </div>
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                700<span>min.</span>
              </div>
              <div class="plan-card__title-block-text">
                VOICE
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="price">
            <span>$</span>160
          </div>
          <div class="plan-card-small-col">
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/voice.svg">
              700 voice minutes
            </div>
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/sms.svg">
              Unlimited SMS
            </div>
            <div class="plan-card-small-row last">
              <img src="@/assets/images/checkout/wifi.svg">
              10 GB of Data
            </div>
          </div>
          <app-button text="Choose a plan" />
        </div>
      </div>
      <div class="plan-card small">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>Platinum</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                15<span>GB</span>
              </div>
              <div class="plan-card__title-block-text">
                DATA
              </div>
            </div>
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                1000<span>min.</span>
              </div>
              <div class="plan-card__title-block-text">
                VOICE
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="price">
            <span>$</span>219
          </div>
          <div class="plan-card-small-col">
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/voice.svg">
              1000 voice minutes
            </div>
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/sms.svg">
              Unlimited SMS
            </div>
            <div class="plan-card-small-row last">
              <img src="@/assets/images/checkout/wifi.svg">
              15 GB of Data
            </div>
          </div>
          <app-button text="Choose a plan" />
        </div>
      </div>
      <div class="plan-card small">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>VIP</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                UNLIMITED
              </div>
              <div class="plan-card__title-block-text">
                VOICE, DATA & SMS
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="price">
            <span>$</span>560
          </div>
          <div class="plan-card-small-col">
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/voice.svg">
              Unlimited voice minutes
            </div>
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/sms.svg">
              Unlimited SMS
            </div>
            <div class="plan-card-small-row last">
              <img src="@/assets/images/checkout/wifi.svg">
              Unlimited Data
            </div>
          </div>
          <app-button text="Choose a plan" />
        </div>
      </div>
    </div>
    
    <swiper  
      class="only-mobile"
      :width=285
      :spaceBetween=36
    >
      <swiper-slide class="plan-card small">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>Silver</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                5<span>GB</span>
              </div>
              <div class="plan-card__title-block-text">
                DATA
              </div>
            </div>
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                500<span>min.</span>
              </div>
              <div class="plan-card__title-block-text">
                VOICE
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="price">
            <span>$</span>98
          </div>
          <div class="plan-card-small-col">
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/voice.svg">
              500 voice minutes
            </div>
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/sms.svg">
              Unlimited SMS
            </div>
            <div class="plan-card-small-row last">
              <img src="@/assets/images/checkout/wifi.svg">
              5 GB of Data
            </div>
          </div>
          <app-button text="Choose a plan" />
        </div>
      </swiper-slide>
      <swiper-slide class="plan-card small">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>Gold</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                10<span>GB</span>
              </div>
              <div class="plan-card__title-block-text">
                DATA
              </div>
            </div>
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                700<span>min.</span>
              </div>
              <div class="plan-card__title-block-text">
                VOICE
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="price">
            <span>$</span>160
          </div>
          <div class="plan-card-small-col">
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/voice.svg">
              700 voice minutes
            </div>
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/sms.svg">
              Unlimited SMS
            </div>
            <div class="plan-card-small-row last">
              <img src="@/assets/images/checkout/wifi.svg">
              10 GB of Data
            </div>
          </div>
          <app-button text="Choose a plan" />
        </div>
      </swiper-slide>
      <swiper-slide class="plan-card small">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>Platinum</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                15<span>GB</span>
              </div>
              <div class="plan-card__title-block-text">
                DATA
              </div>
            </div>
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                1000<span>min.</span>
              </div>
              <div class="plan-card__title-block-text">
                VOICE
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="price">
            <span>$</span>219
          </div>
          <div class="plan-card-small-col">
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/voice.svg">
              1000 voice minutes
            </div>
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/sms.svg">
              Unlimited SMS
            </div>
            <div class="plan-card-small-row last">
              <img src="@/assets/images/checkout/wifi.svg">
              15 GB of Data
            </div>
          </div>
          <app-button text="Choose a plan" />
        </div>
      </swiper-slide>
      <swiper-slide class="plan-card small">
        <div class="plan-card__title">
          <div class="plan-card__title-label">
            <span>VIP</span> Plan
          </div>
          <div class="plan-card__title-blocks">
            <div class="plan-card__title-block">
              <div class="plan-card__title-block-num">
                UNLIMITED
              </div>
              <div class="plan-card__title-block-text">
                VOICE, DATA & SMS
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card__body">
          <div class="price">
            <span>$</span>560
          </div>
          <div class="plan-card-small-col">
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/voice.svg">
              Unlimited voice minutes
            </div>
            <div class="plan-card-small-row">
              <img src="@/assets/images/checkout/sms.svg">
              Unlimited SMS
            </div>
            <div class="plan-card-small-row last">
              <img src="@/assets/images/checkout/wifi.svg">
              Unlimited Data
            </div>
          </div>
          <app-button text="Choose a plan" />
        </div>
      </swiper-slide>
    </swiper>

  </div>

</template>

<script>
import CheckoutSelect from '@/components/checkout/CheckoutSelect.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';


export default {
  components: { CheckoutSelect, Swiper, SwiperSlide },
}
</script>

<style lang="scss" scoped>
.plan-page {
  padding-bottom: 100px;
  
  @media (max-width: 980px) {
    width: 100vw;
  }
}
.plan-block__top {
  display: flex;
  gap: 33px;
  margin-top: 48px;
  margin-bottom: 70px;

  @media (max-width: 1350px) {
    flex-direction: column;
    align-items: center;
    gap: 55px;
  }
}
.plan-card {
  border-radius: 10px;
  position: relative;

  &.small {
    width: 285px;
    padding-top: 20px;

    & .plan-card__title {
      border-radius: 5px 5px 0 0;
    }
    & .plan-card__title-label {
      height: 40px;
      top: 0;
      font-weight: 700;

      @media (max-width: 980px) {
        height: 20px;
      }
    }
    & .plan-card__body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & .plan-card__title-block-num {
      font-weight: 700;
    }
    & .plan-card__title-block-text {
      font-weight: 400;
      font-size: 14px;
    }
    & .plan-card__title-block {
      padding-left: 15px;
      padding-right: 15px;
    }
    & .plan-card__title-blocks {
      justify-content: center;
    }
  }
}
.plan-card__title {
  background: $bg3-color;
  border-radius: 10px 10px 0px 0px;
}
.plan-card__title-label {
  background: $bg2-color;
  border-radius: 50px;
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;
  padding-top: 6px;
  padding-bottom: 12px;
  height: 45px;
  width: 200px;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);

  & > span {
    color: $red-color;
  }
}
.plan-card__title-blocks {
  display: flex;
  padding-top: 32px;
}
.plan-card__title-block {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 20px;

  & + & {
    border-left: 1px solid $text-color;
  }
}
.plan-card__title-block-num {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 52px;

  & span {
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
  }
}
.plan-card__title-block-text {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-top: -10px;
}
.plan-card__body {
  padding: 20px 40px 30px 40px;
  background: rgba(196, 196, 196, 0.4);
}
.plan-card__body-top {
  display: flex;
  align-items: flex-end;
}
.plan-select {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding-bottom: 18px;
}
.plan-card__body-top-text {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 48px;
  margin-left: 6px;
}
.price {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 69px;

  & span {
    font-size: 24px;
    line-height: 30px;
  }
}
.plan-card__body-limited {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: $text3-color;
  display: flex;
  align-items: center;
  gap: 13px;

  &::before {
    content: '';
    display: block;
    background: $bg3-color;
    border: 1px solid #444444;
    border-radius: 2px;
    width: 14px;
    height: 14px;
  }
}
.plan-card__body-table-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: $text4-color;
  margin-top: 32px;
  padding-bottom: 17px;
  border-bottom: 1px solid #444444;
  margin-bottom: 17px;
}
.plan-card__body-table-row {
  display: flex;
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: $text3-color;
  align-items: center;
  justify-content: space-between;

  & > span {
    display: grid;
    grid-template-columns: 30px auto;
    gap: 15px;
    white-space: nowrap;

    &.last {
      display: block;
    }
  }
}
.plans-flex {
  display: flex;
  flex-flow: row wrap;
  gap: 29px;
  margin-top: 40px;
}
.plan-card-small-row {
  display: flex;
  flex-flow: row nowrap;
  gap: 13px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  & + & {
    margin-top: 6px;
  }

  &.last {
    margin-bottom: 23px;
  }
}
.image {
  width: 339px;
}
</style>
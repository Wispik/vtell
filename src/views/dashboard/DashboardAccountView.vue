<template>
  <div class="dash-block-main">
    <div class="dash-block__text">
      <div class="title-dash">Number Management</div>
      <div class="text-dashboard">
        If you are calling a country not on your list, please select which country to set as Default number AND If you have multiple phone numbers in a single country, please select which phone number you would like displayed on your called party’s caller ID.
      </div>
    </div>
    <div class="dash-acc__title-min">Phone Numbers</div>
    <div class="dash-block__flex">
      <div 
        class="dash-block__flex-item"
        v-for="item in items"
        :key="item.id"
      >
        <div class="dash-block__phone">
          <div class="dash-block__phone-title">
            <img :src="`/images/flags/flag-${item.flag}.png`">
            <span>{{ item.title }}</span>
            <app-switch v-model="item.checked" />
          </div>
          <div class="dash-block__phone-body">
            <div 
              class="dash-block__phone-body-item"
              :class="{'checked': phone.checked && item.checked}"
              v-for="phone in item.phones"
              :key="phone.id"
              @click="selectPhone(item, phone.id)"
            >
              {{ phone.phone }}
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7.35135L7.42857 13L18 2" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div 
                class="dash-block__phone-body-item-text"
                v-if="phone.checked && item.checked"  
              >
                The service is connected 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dash-block">
    <div class="dash-block__info">
      <div class="title">Usage Summary</div>
      <div class="dash-block__info-cells">
        <div 
          class="dash-block__info-cell"
          v-for="i in summary"
          :key="i.id"  
        >
          <div class="dash-block__info-cell-title">{{ i.title }}</div>
          <div class="dash-block__info-cell-num">{{ i.num }}
            <span>{{ i.val }}</span>
          </div>
          <div class="dash-block__info-cell-date">{{ i.date }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="dash-block">
    <div class="dash-block__info">
      <div class="title">Traffic balance</div>
      <div class="dash-block__info-cells">
        <div 
          class="dash-block__info-cell"
          v-for="i in traffic"
          :key="i.id"  
        >
          <div class="dash-block__info-cell-title">{{ i.title }}</div>
          <div class="dash-block__info-cell-num">{{ i.num }}
            <span>{{ i.val }}</span>
          </div>
          <div class="dash-block__info-cell-date">{{ i.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'USA',
          checked: true,
          flag: 'us',
          phones: [
            {
              id: 1,
              phone: '+1 7602271144',
              checked: true
            },
            {
              id: 2,
              phone: '+1 7602270322',
              checked: false
            },
            {
              id: 3,
              phone: '+1 7602270333',
              checked: false
            }
          ]
        },
        {
          id: 2,
          title: 'RUSSIA',
          checked: false,
          flag: 'ru',
          phones: [
            {
              id: 1,
              phone: '+7 9583897416',
              checked: false
            }
          ]
        }
      ],
      summary: [
        {
          id: 1,
          title: 'Remaining Balance',
          num: '-151 608.79',
          val: '₽',
          date: 'Dec 3, 2021, 11:33:28 PM'
        },
        {
          id: 2,
          title: 'Current Charges',
          num: '0.00',
          val: '₽',
          date: 'Dec 1, 2021 - Dec 3, 2021'
        },
        {
          id: 3,
          title: 'Amount Due',
          num: '42 000.00',
          val: '₽',
          date: 'Dec 1, 2021 - Jan 1, 2022'
        },
        {
          id: 4,
          title: 'Charges for Basic Services',
          num: '0.00',
          val: '₽',
          date: 'Dec 1, 2021 - Dec 3, 2021'
        },
        {
          id: 5,
          title: 'Additional Charges',
          num: '0.00',
          val: '₽',
          date: 'Dec 1, 2021 - Dec 3, 2021'
        }
      ],
      traffic: [
        {
          id: 1,
          title: 'Home Zone Internet',
          num: '30 720',
          val: 'Mb',
          date: 'Till Jan 1, 2022'
        },
        {
          id: 2,
          title: 'Home Zone Outgoing Calls',
          num: ' 2 500',
          val: 'min',
          date: 'Till Jan 1, 2022'
        },
        {
          id: 3,
          title: 'SMS',
          num: ' 500',
          val: 'sms',
          date: 'Till Jan 1, 2022'
        }
      ]
    }
  },
  methods: {
    selectPhone(item, phoneId) {
      item.phones.forEach(el => {
        if (el.id === phoneId) {
          el.checked = true
        } else {
          el.checked = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dash-block-main {
  display: flex;
  flex-direction: column;
  padding: 60px 36px;
  gap: 12px;
  border-bottom: 1px solid $bg3-color;
  max-width: 1144px;
  width: inherit;

  @media (max-width: 980px) {
    padding: 50px 20px;
    flex-direction: column;
    gap: 25px;
    border-bottom: none;
  }
}
.dash-block__text {
  max-width: 430px;
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 980px) {
    gap: 5px;
  }
}
.title-dash {
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-transform: capitalize;

  @media (max-width: 980px) {
    font-size: 26px;
    line-height: 30px;
  }
}
.dash-block__flex {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (max-width: 980px) {
    gap: 20px;
    flex-direction: column;
    max-width: 430px;
    width: inherit;
  }
}
.dash-block__phone {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: $bg3-color;
  border-radius: 5px;
}
.dash-block__phone-title {
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #444444;
  gap: 12px;
  color: $text2-color;

  & > img {
    height: 20px;
  }
}
.dash-block__phone-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.dash-block__phone-body-item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 18px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: $text2-color;
  cursor: pointer;

  &.checked {
    color: $green-color;

    & svg path{
      stroke: $green-color;
    }
  }
}
.dash-block {
  padding: 60px 36px 40px 36px;

  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 980px) {
    padding: 0 20px 50px 20px;
  }
}
.dash-block__info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.dash-block__info-cells {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
}
.dash-block__info-cell {
  position: relative;
  background: $bg3-color;
  border-radius: 5px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px 20px;
  margin-bottom: 20px;

  @media (max-width: 980px) {
    max-width: 430px;
  }
}
.dash-block__info-cell-title {
  background: $bg2-color;
  border-radius: 50px;
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;
  height: 40px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-top: -20px;
}
.dash-block__info-cell-num {
  margin-top: 25px;
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  text-transform: capitalize;
  white-space: nowrap;

  & > span {
    font-size: 24px;
    line-height: 40px;
    color: $red-color;
  }
}
.dash-block__info-cell-date {
  margin-top: 20px;
  font-size: 14px;
  line-height: 17px;
  color: $text2-color;
  white-space: nowrap;
}
.dash-acc__title-min {
  font-weight: 700;
  font-size: 18px;
  margin-top: 30px;

  @media (max-width: 980px) {
    margin-top: 0px;
  }
}
.dash-block__phone-body-item-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: $text2-color;
}
</style>
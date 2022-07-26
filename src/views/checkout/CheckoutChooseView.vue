<template>
  <div class="title">Choose Your Phone Number</div>
  <div class="sub-title">
    You are offered a random simple number from the free category.
  </div>
  <div class="choose-body">
    <div class="choose-search__block" v-if="showSearch">
      <app-input 
        :search="true" 
        placeholder="Search numeric character set"  
      />
      <div class="choose-search__info">
        Please enter a minimum of two characters to see results
      </div>
    </div>
    <div class="choose-search__block" v-else>
      <div class="choose-select-num">
        <app-radio :items="selectNumber" />
        <div class="choose-select-num-text">
          Free basic phone number
        </div>
      </div>
      <div class="choose-red-link" @click="showSearch=true">
        Or you can search an specific number combination
      </div>
      <div class="choose-text">
        Also, you can choose from one of the following categories:
      </div>
      <div class="choose-table">
        <div
          class="choose-table__tabs"
        >
          <div 
            class="choose-table__tab"
            :class="{'choose-tabla__tab-active': tab.id === activeTab}"
            v-for="tab in tabs"
            :key="tab.id"  
          >
            {{ tab.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="conn__buttons">
    <app-button 
      text="Back" 
      :bordered="true"
      @click="$router.push({'name': 'checkout-main'})"  
    />
    <app-button 
      text="Select Phone Number"
      @click="$router.push({'name': 'checkout-cart'})" 
    />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      showSearch: false,
      selectNumber: [{
        id: 1,
        label: '+7 (958) 389 7090',
        checked: true
      }],
      phones: [
        {
          id: 1,
          label: '+7 (958) 928 2828 ',
          price: '$2000  /  €1764.5  /  ₽150000',
          checked: false
        },
        {
          id: 2,
          label: '+7 (958) 928 2828 ',
          price: '$2000  /  €1764.5  /  ₽150000',
          checked: false
        },
        {
          id: 3,
          label: '+7 (958) 928 2828 ',
          price: '$2000  /  €1764.5  /  ₽150000',
          checked: false
        },
        {
          id: 4,
          label: '+7 (958) 928 2828 ',
          price: '$2000  /  €1764.5  /  ₽150000',
          checked: false
        }
      ],
      activeTab: 1,
      tabs: [
        {
          id: 1,
          title: 'Platinum'
        },
        {
          id: 2,
          title: 'Gold'
        },
        {
          id: 3,
          title: 'Silver'
        },
        {
          id: 4,
          title: 'Bronze'
        },
        {
          id: 5,
          title: 'Basic'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.choose-body {
  margin-top: 20px;
}
.choose-search__block {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.choose-search__info {
  border: 1px solid #444444;
  border-radius: 5px;
  font-size: 14px;
  color: $text2-color;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.choose-select-num {
  background: rgba(18, 18, 18, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
}
.choose-red-link {
  font-family: 'Kumbh Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: $red-color;
  cursor: pointer;
}
.choose-text {
  margin-top: 20px;
  color: $text2-color;
}
</style>
<template>
  <div class="bill-autopay__block">
    <div class="bill-autopay__block-title">
      <div class="bill-autopay__block-title-left">
        <div class="title">Auto payment</div>
        <div class="sub-title">Auto Pay will be withdrawn from your debit/credit card every last day of the month for the upcoming month.</div>
      </div>
      <app-switch v-model="show" />
    </div>
    <div class="bill-autopay__block-content" v-if="show">
      <div class="bill-autopay__delimeter"></div>
      <div class="bill-autopay__title">Choose which card to withdraw money from</div>
      <div class="bill-autopay__cards">
        <div 
          class="bill-autopay__card"
          :class="{'checked': card.checked}"
          v-for="card in cards"
          :id="card.id"
          @click="selectCard(card.id)"
        >
          <svg v-if="!card.checked" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7.5" stroke="#A7A7A7"/>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7.5" stroke="#E63739"/>
            <circle cx="8" cy="8" r="4" fill="#E63739"/>
          </svg>
          <img :src="`/images/${card.icon}.png`">
          <div class="bill-autopay__card-title">
            {{ card.title }}
          </div>
          <div class="bill-autopay__card-date">
            {{ card.date }}
          </div>
        </div>
        <div class="bill-autopay__card-button">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1784 2H3.84505C3.10839 2 2.51172 2.59667 2.51172 3.33333V12.6667C2.51172 13.4033 3.10839 14 3.84505 14H13.1784C13.9151 14 14.5117 13.4033 14.5117 12.6667V3.33333C14.5117 2.59667 13.9151 2 13.1784 2ZM11.8451 8.66667H9.17839V11.3333H7.84505V8.66667H5.17839V7.33333H7.84505V4.66667H9.17839V7.33333H11.8451V8.66667Z" fill="#E63739"/>
          </svg>
          Add a new card
        </div>
      </div>
      <div class="bill-autopay__delimeter"></div>
      <div class="bill-autopay__title">Auto payment amount</div>
      <div class="sub-title">
        Please review all items before proceeding with the order. 
      </div>
      <div class="bill-autopay__bottom">
        <div class="bill-autopay__bottom-left">
          <div class="bill-autopay__bottom-item">
            Date: <span>30-11-2020</span> 
          </div>
          <div class="bill-autopay__bottom-item">
            Amount: <span>14 000 руб.</span> 
          </div>
        </div>
        <div class="bill-autopay__bottom-button">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75 10.185V11.9583C1.75 12.1217 1.87833 12.25 2.04167 12.25H3.815C3.89083 12.25 3.96667 12.2208 4.01917 12.1625L10.3892 5.79833L8.20167 3.61083L1.8375 9.97499C1.77917 10.0333 1.75 10.1033 1.75 10.185ZM12.0808 4.10666C12.3083 3.87916 12.3083 3.51166 12.0808 3.28416L10.7158 1.91916C10.4883 1.69166 10.1208 1.69166 9.89333 1.91916L8.82583 2.98666L11.0133 5.17416L12.0808 4.10666Z" fill="#E63739"/>
          </svg>
          Edit
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      show: true,
      cards: [
        {
          id: 1,
          title: '5896374******45889',
          date: '11/23',
          icon: 'master-card',
          checked: true
        },
        {
          id: 2,
          title: '5896374******45889',
          date: '01/23',
          icon: 'visa',
          checked: false
        }
      ]
    }    
  },
  methods: {
    selectCard(id) {
      this.cards.forEach(el => {
        if (el.id === id) el.checked = true
        else el.checked = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bill-autopay__block {
  background: $bg3-color;
  border-radius: 5px;
  padding: 36px;

  @media (max-width: 980px) {
    width: calc(100% + 40px);
    margin-left: -20px;
    border-radius: 0;
    padding: 36px 20px;
  }
}
.bill-autopay__block-title {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.bill-autopay__block-title-left {
  width: 70%;
}
.bill-autopay__delimeter {
  width: 100%;
  height: 1px;
  background: #444444;
  margin: 35px 0;

  @media (max-width: 980px) {
    margin: 30px 0;
  }
}
.bill-autopay__title {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}
.bill-autopay__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 1278px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 980px) {
    margin-top: 20px;
  }
}
.bill-autopay__card {
  cursor: pointer;
  background: rgba(18, 18, 18, 0.5);
  border-radius: 10px;
  padding: 17px;
  display: grid;
  grid-template-columns: 16px 31px 1fr auto;
  gap: 15px;
  align-items: center;

  &.checked {
    border: 1px solid $red-color;
  }

  @media (max-width: 980px) {
    gap: 10px;
  }
}
.bill-autopay__card-date {
  opacity: 0.4;
}
.bill-autopay__card-button {
  background: rgba(18, 18, 18, 0.5);
  border-radius: 10px;
  cursor: pointer;
  padding: 17px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: $red-color;
}
.bill-autopay__bottom {
  background: rgba(18, 18, 18, 0.5);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  @media (max-width: 980px) {
    margin-top: 12px;
  }
}
.bill-autopay__bottom-left {
  display: flex;
  gap: 40px;

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 10px;
  }
}
.bill-autopay__bottom-item {
  color: $text2-color;

  & span {
    color: $text-color;
  }
}
.bill-autopay__bottom-button {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: $red-color;
  cursor: pointer;
}
</style>
<template>
  <div class="title">Monthly Bill</div>
  <div class="sub-title">View bill summary</div>
  <div class="bill-montly__block">
    <div class="bill-montly__block-title">
      Requested Bill
    </div>
    <div class="bill-montly__inputs">
      <app-select 
        :items="selectMonth"
        placeholder="Month"
      />
      <app-select 
        :items="selectYear"
        placeholder="Year"
      />
    </div>
    <app-radio 
      name="billradio"
      :items="radioItems"
    />
    <div class="bill-montly__block-button">
      <app-button text="Order Monthly Bill" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectMonth: [
        {
          id: 1,
          label: '01'
        },
        {
          id: 2,
          label: '02'
        },
        {
          id: 3,
          label: '03'
        }
      ],
      selectYear: [
        {
          id: 1,
          label: '2020'
        },
        {
          id: 2,
          label: '2021'
        },
        {
          id: 3,
          label: '2022'
        }
      ],
      radioItems: [
        {
          id: 1,
          label: 'Download and view now',
          checked: "true"
        },
        {
          id: 2,
          label: 'Send Via Email',
          checked: "false"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bill-montly__block {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: inherit;

  @media (max-width: 980px) {
    margin-top: 28px;
  }
}
.bill-montly__block-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}
.bill-montly__inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 8px;
  margin-bottom: 25px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
}
.bill-montly__block-button {
  width: 300px;
  margin-top: 36px;

  @media (max-width: 980px) {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
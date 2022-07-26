<template>
  <div class="title">Itemization of Phone Calls</div>
  <div class="sub-title bill-title">
    Request itemization of phone calls throughout this section.
    <span>
      Service is free of charge.
    </span>
  </div>
  <form class="bill-form">
    <app-input 
      label="Receive For the Period"
      v-model="dateFrom"
      type="date"
      datetext="From:"
    />
    <app-input 
      v-model="dateTo"
      type="date"
      datetext="To:"
    />
    <app-radio 
      name="billradio"
      :items="radioItems"
    />
    <div class="bill-form-btn">
      <app-button text="Receive Itemization of Calls" />
    </div>
  </form>
  <div class="bill-info">
    <span>Attention!</span> All time indicators correspond to Moscow (RUS) time
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateFrom: '2021-11-12',
      dateTo: '2021-11-12',
      radioItems: [
        {
          id: 1,
          label: 'See List Now',
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
.bill-title {
  display: flex;
  flex-direction: column;

  & > span {
    color: $text-color;
  }
}
.bill-form {
  margin-top: 50px;
  max-width: 500px;
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 980px) {
    margin-top: 30px;
  }
}
.bill-form-btn {
  width: 300px;
  margin-top: 20px;
  margin-bottom: 24px;

  @media (max-width: 980px) {
    max-width: 500px;
    width: inherit;
  }
}
.bill-info {
  color: $text2-color;

  & > span {
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
  }

  @media (max-width: 980px) {
    margin-bottom: 20px;
  }
}
</style>
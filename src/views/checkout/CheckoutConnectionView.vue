<template>
  <div class="conn-table">
    <div class="conn-table__row">
      <div class="conn-table__col bold">
        INCLUDED IN PACKAGE	
      </div>
      <div class="conn-table__col bold">
        WORLDWIDE*
      </div>
    </div>
    <div class="conn-table__row">
      <div class="conn-table__col">
        <img src="@/assets/images/checkout/voice.svg">
        <span>Voice</span>
      </div>
      <div class="conn-table__col">
        500 minutes
      </div>
    </div>
    <div class="conn-table__row">
      <div class="conn-table__col">
        <img src="@/assets/images/checkout/sms.svg">
        <span>SMS</span>
      </div>
      <div class="conn-table__col">
        Unlimited
      </div>
    </div>
    <div class="conn-table__row">
      <div class="conn-table__col">
        <img src="@/assets/images/checkout/data.svg">
        <span>Data</span>
      </div>
      <div class="conn-table__col">
        5 GB
      </div>
    </div>
    <div class="conn-table__row">
      <div class="conn-table__col">
        <img src="@/assets/images/checkout/phone.svg">
        <span>Phone Numbers</span>
      </div>
      <div class="conn-table__col">
        2 unit.*
      </div>
    </div>
  </div>
  <div class="conn__text-red">
    Check countries where V-Tell provides communication services
  </div>
  <div class="conn__text">
    You can choose your new V-Tell phone number or transfer your existing phone number to V-Tell.
  </div>
  <div class="conn__buttons">
    <app-button 
      text="Transfer Your Phone Number" 
      :bordered="true"
      @click="$router.push({'name': 'checkout-transfer'})"  
    />
    <app-button 
      text="Choose Phone Number"
      @click="$router.push({'name': 'checkout-choose'})" 
    />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conn-table {
  display: flex;
  flex-direction: column;
}
.conn-table__row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 48px;

  & + & {
    border-top: 1px solid #444444;
  }
}
.conn-table__col {
  display: flex;
  flex-flow: row nowrap;
  gap: 14px;
  align-items: center;
  color: $text3-color;

  &.bold {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: $text4-color;
  }
}
.conn__text-red {
  margin-top: 40px;
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: $red-color;
}
.conn__text {
  margin-top: 28px;
  font-size: 14px;
  color: $text2-color;
}
</style>
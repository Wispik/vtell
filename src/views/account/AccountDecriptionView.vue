<template>
  <div class="title">
    Payments for the current month
  </div>
  <div class="sub-title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </div>
  <div class="desc-table">
    <div class="desc-table__row">
      01-11-2020
      <span>$100.00</span>
    </div>
    <div class="desc-table__row">
      15-11-2020    
      <span>$100.00</span>
    </div>
    <div class="desc-table__row">
      21-11-2020    
      <span>$100.00</span>
    </div>
    <div class="desc-table__row">
      30-11-2020    
      <span>$100.00</span>
    </div>
  </div>
  <div class="title">
    Subscription fee
  </div>
  <div class="sub-title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </div>
  <div class="desc-table">
    <div class="desc-table__row">
      Additional number
      <span>$100.00</span>
    </div>
    <div class="desc-table__row">
      Additional number    
      <span>$100.00</span>
    </div>
    <div class="desc-table__row">
      Additional number 
      <span>$100.00</span>
    </div>
    <div class="desc-table__row">
      Additional number
      <span>$100.00</span>
    </div>
  </div>
  <div class="title">
    Detailing
  </div>
  <div class="sub-title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </div>
  <div class="desc-tabs">
    <div class="desc-tab desc-tab-active">July 2020</div>
    <div class="desc-tab">August 2020</div>
  </div>
  <div class="desc-buttons">
    <app-button text="Download"/>
    <app-button text="Save" :bordered="true"/>
    <app-button text="Send" :bordered="true"/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped> 
.desc-table {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: $bg3-color;
  padding: 0 13px;
  margin-top: 19px;
  margin-bottom: 80px;

  @media (max-width: 980px) {
    margin-bottom: 50px;
  }
}
.desc-table__row {
  padding: 25px 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: $text2-color;

  @media (max-width: 980px) {
    padding: 25px 10px;
  }

  & + & {
    border-top: 1px solid $text2-color;
  }

  & > span {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: $text4-color;
  }
}
.desc-tabs {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  margin-top: 25px;
}
.desc-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: $text2-color;
  cursor: pointer;
  border: 2px solid $text2-color;
  border-radius: 500px;
}
.desc-tab-active {
  border-color: $red-color;
  color: $red-color;
}
.desc-buttons {
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  margin-top: 35px;

  & > button {
    width: 220px !important;
  }

  @media (max-width: 750px) {
    flex-direction: column;

    & > button {
      width: auto !important;;
    }
  }
}
</style>
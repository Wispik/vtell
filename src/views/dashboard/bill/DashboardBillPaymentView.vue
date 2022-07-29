<template>
  <div class="title">Payment History</div>
  <div class="sub-title">View your recent payments</div>
  <div class="bill-pay__table">
    <div class="bill-pay__table-row">
      01-11-2020  I  3:00:00 PM
      <span>$100.00</span>
    </div>
    <div class="bill-pay__table-row">
      15-11-2020  I  3:00:00 PM
      <span>$100.00</span>
    </div>
    <div class="bill-pay__table-row">
      21-11-2020  I  3:00:00 PM
      <span>$100.00</span>
    </div>
    <div class="bill-pay__table-row">
      30-11-2020  I  3:00:00 PM
      <span>$100.00</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bill-pay__table {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: $bg3-color;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 50px;

  @media (max-width: 980px) {
    margin-top: 20px;
  }
}
.bill-pay__table-row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  font-size: 18px;
  line-height: 24px;
  color: $text2-color;

  & + & {
    border-top: 1px solid $text2-color;
  }

  & > span {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-transform: capitalize;
    color: $text4-color
  }
}
</style>
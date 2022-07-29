<template>
  <div class="title">Cart</div>
  <div class="sub-title">Please review all items before proceeding with the order.</div>
  <div class="cart-block">
    <div class="cart-block-left">
      <div class="cart-block-title">
        Tariff: <span>Silver Plan</span>
      </div>
      <div class="cart-block-button">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.75 10.185V11.9583C1.75 12.1217 1.87833 12.25 2.04167 12.25H3.815C3.89083 12.25 3.96667 12.2208 4.01917 12.1625L10.3892 5.79833L8.20167 3.61083L1.8375 9.97499C1.77917 10.0333 1.75 10.1033 1.75 10.185ZM12.0808 4.10666C12.3083 3.87916 12.3083 3.51166 12.0808 3.28416L10.7158 1.91916C10.4883 1.69166 10.1208 1.69166 9.89333 1.91916L8.82583 2.98666L11.0133 5.17416L12.0808 4.10666Z" fill="#E63739"/>
        </svg>
        Edit
      </div>
    </div>
    <div class="cart-block-right">
      $98
    </div>
  </div>
  <div class="cart-block">
    <div class="cart-block-left">
      <div class="cart-block-title">
        Number (Russia): <span>+7 (958) 389 7090</span>
      </div>
      <div class="cart-block-button">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.75 10.185V11.9583C1.75 12.1217 1.87833 12.25 2.04167 12.25H3.815C3.89083 12.25 3.96667 12.2208 4.01917 12.1625L10.3892 5.79833L8.20167 3.61083L1.8375 9.97499C1.77917 10.0333 1.75 10.1033 1.75 10.185ZM12.0808 4.10666C12.3083 3.87916 12.3083 3.51166 12.0808 3.28416L10.7158 1.91916C10.4883 1.69166 10.1208 1.69166 9.89333 1.91916L8.82583 2.98666L11.0133 5.17416L12.0808 4.10666Z" fill="#E63739"/>
        </svg>
        Edit
      </div>
    </div>
    <div class="cart-block-right">
      FREE 
    </div>
  </div>
  <div class="cart-block">
    <div class="cart-block-left">
      <div class="cart-block-title">
        Overseas Phone Number:
      </div>
      <div class="cart-block-button">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6667 2H3.33333C2.59667 2 2 2.59667 2 3.33333V12.6667C2 13.4033 2.59667 14 3.33333 14H12.6667C13.4033 14 14 13.4033 14 12.6667V3.33333C14 2.59667 13.4033 2 12.6667 2ZM11.3333 8.66667H8.66667V11.3333H7.33333V8.66667H4.66667V7.33333H7.33333V4.66667H8.66667V7.33333H11.3333V8.66667Z" fill="#E63739"/>
        </svg>
        Add Overseas Phone Number
      </div>
    </div>
    <div class="cart-block-right">
      FREE 
    </div>
  </div>
  <div class="cart-delimeter only-desktop"></div>
  <div class="cart-bottom">
    <div class="cart-bottom-left">
      <div class="cart-bottom-left-title">
        Summary
      </div>
      <div class="cart-bottom-left-text">
        <span>
          Payment by credit/debit card
        </span>
         upon receipt at the office or delivery to the specified address.
      </div>
    </div>
    <div class="cart-bottom-right">
      <span>$</span>98
    </div>
  </div>
  <div class="conn__buttons">
    <app-button 
      text="Back" 
      :bordered="true"
      @click="$router.push({'name': 'checkout-choose'})"  
    />
    <app-button 
      text="Select Phone Number"
      @click="$router.push({'name': 'checkout-purchase'})" 
    />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cart-block {
  display: flex;
  flex-flow: row nowrap;
  background: rgba(18, 18, 18, 0.5);
  border-radius: 10px;
  padding: 16px;
  margin-top: 16px;
}
.cart-block-left {
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: center;
}
.cart-block-title {
  color: $text2-color;

  & > span {
    color: $text-color;
  }
}
.cart-block-button {
  color: $red-color;
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
}
.cart-block-right {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
</style>
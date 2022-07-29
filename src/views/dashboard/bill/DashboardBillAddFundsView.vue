<template>
  <div class="bill-funds">
    <div class="bill-funds__left">
      <div class="title">Add Funds</div>
      <div class="sub-title">Top up your account to stay connected</div>
      <form class="bill-funds__form">
        <app-input-phone 
          label="Enter your phone number"
          label2="max 20 digits"
          required="true"
        />
        <app-input 
          label="Enter amount to pay"
          label2="min $100 (USD)"
          placeholder="Amount"
          :price="true"
          required="true"
          mask="#*"
        />
        <div class="bill-funds__form-checkbox">
          <app-checkbox v-model="accept" />
          <span>I accept</span> <a href="#">terms and conditions.</a>
        </div>
        <app-button text="Add Funds" />
      </form>
    </div>
    <div class="bill-funds__right">
      <img src="@/assets/images/payonline.png" alt="">
      <div class="pay-text">
        <p>
          When using bank cards of <span>Visa</span> and <span>MasterCard</span> payment systems, online payments are processed via the authorized server of processing center of PayOnline. Payment information is transmitted in encrypted form directly to the bank server on a secure channel via SSL communication.
        </p>
        <p>
          For payment communications V-Tell is using certified internet security payments technology <span>Verified by Visa</span> and <span>MasterCard SecureCode</span>. All transactions on your card are carried out in full compliance with the requirements of Visa international and MasterCard Worldwide. Secure processing of online payments is guaranteed by international certificate PCI DSS security.
        </p>
        <p>
          If you have any questions, please feel free to <a href="/">contact our customer support team</a> .
        </p>
      </div>
      <img class="pay-img" src="@/assets/images/cards.png">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accept: false
    }
  }
}
</script>

<style lang="scss" scoped>
.bill-funds {
  display: flex;
  gap: 60px;
  
  @media (max-width: 1274px) {
    gap: 20px;
  }

  @media (max-width: 1170px) {
    flex-direction: column;
    gap: 34px;
  }
}
.bill-funds__left {
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 1170px) {
    max-width: 100%;
  }
}
.bill-funds__form {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 40px;

  @media (max-width: 1170px) {
    margin-top: 28px;
    gap: 25px;
  }
}
.bill-funds__right {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 340px;
  align-items: flex-start;

  @media (max-width: 1274px) {
    width: 260px;
  }

  @media (max-width: 1170px) {
    width: 100%;
  }
}
.pay-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: $text2-color;

  & span {
    color: $text-color;
  }

  & a {
    color: $red-color;
  }

  & p {
    margin-bottom: 20px;
  }
}
.pay-img {
  width: 300px;
  margin-top: 15px;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    margin-top: 0;
    margin-bottom: 30px;
  }
}
.bill-funds__form-checkbox {
  display: flex;
  align-items: center;

  & > a {
    color: $red-color;
    text-decoration: underline;
    margin-left: 6px;
  }

  & > span {
    margin-left: 10px;
  }
}
</style>
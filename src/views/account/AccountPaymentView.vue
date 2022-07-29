<template>
  <div class="title">Link card</div>
  <div class="sub-title">Link a new card and top up your account</div>
  <div class="pay-input-block">
    <app-input-phone
      label="Phone number:"
    />
    <app-input 
      label="Replenishment amount not less than $100:"
      placeholder="$100.00"
      mask="$#*"
    />
    <app-input 
      label="Card number:"
      placeholder="0000 0000 0000 0000"
      mask="#### #### #### ####"
    />
    <app-input 
      label="Validity:"
      placeholder="MM/YY"
      mask="##/##"
    />
    <app-input 
      label="CVC:"
      placeholder="000"
      mask="###"
    />
  </div>
  <app-checkbox label="Receipt required" />
  <div class="pay-input-block">
    <app-input 
      label="Specify E-mail:"
      placeholder="Ivanov@mail.ru"
    />
  </div>
  <div class="pay-input-block">
    <app-input 
      label="Connect auto payment:"
      placeholder="$100.00"
      mask="$#*"
      :switch="true"
    />
  </div>
  <div class="pay-input-block">
    <app-input 
      label="Connect auto-replenishment:"
      placeholder="$100.00"
      mask="$#*"
      :switch="true"
    />
  </div>
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
  <div class="pay-btn">
    <app-button text="Pay" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>
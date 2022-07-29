<template>
  <div class="title">Apple pay</div>
  <div class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  <div class="pay-input-block">
    <app-input-phone
      label="Phone number:"
    />
    <app-input 
      label="Replenishment amount not less than $100:"
      placeholder="$100.00"
      mask="$#*"
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
  <div class="pay-btn">
    <app-button text="Pay" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
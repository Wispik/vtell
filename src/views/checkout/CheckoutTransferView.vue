<template>
  <div class="title">Transfer Your Phone Number</div>
  <div class="sub-title">
    Dear subscriber, please fill out the following form to transfer your existing phone number.
  </div>
  <div class="transfer-form">
    <app-input 
      placeholder="Number being transferred"
    />
    <app-input 
      placeholder="First name"
    />
    <app-checkbox 
      label="I confirm my consent to the processing of personal data" 
      :gray="true"
    />
    <app-input 
      placeholder="Contact phone number"
    />
    <app-input 
      placeholder="Email"
    />
  </div>
  <div class="conn__buttons">
    <app-button 
      text="Back" 
      :bordered="true"
      @click="$router.push({'name': 'checkout-main'})"  
    />
    <app-button text="Submit Request" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.transfer-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
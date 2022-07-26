<template>
  <div class="title">
    Personal Info update
  </div>
  <div class="sub-title">Manage your personal data throughout this section.</div>
  <form class="form-support">
    <app-input 
      label="Email"
      type="email"
      v-model="email"
      placeholder="Enter your email address"
    />
    <app-input 
      label="Date of Birth"
      type="date"
      v-model="date"
    />
    <app-input-phone 
      label="Contact Phone Number"
      v-model="phone"
    />
    <div class="form-support-btn">
      <app-button text="Save" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      date: '2010-01-01',
      phone: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form-support {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 500px;
  width: inherit;
  margin-top: 32px;

  @media (max-width: 980px) {
    gap: 20px;
    margin-top: 20px;
  }
}
.form-support-btn {
  margin-top: 12px;
  width: 200px;

  @media (max-width: 980px) {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
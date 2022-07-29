<template>
  <div class="title">Change Password</div>
  <div class="sub-title">Set a new password for you account</div>
  <form class="form-support-pass">
    <app-input 
      type="password"
      label="Current Password"
      v-model="password"
    />
    <div class="form-support-pass__text">
      Your new password must contain 6-10 characters, at least one capital letter and one digit. The password value can contain alphanumeric characters, hyphens and underscores.
    </div>
    <app-input 
      type="password"
      label="New Password"
      v-model="passwordNew"
    />
    <app-input 
      type="password"
      label="Confirm Password"
      v-model="passwordNew2"
    />
    <div class="form-support-pass__btn">
      <app-button text="Update Password" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      passwordNew: '',
      passwordNew2: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.form-support-pass {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 500px;
  width: inherit;
  margin-top: 40px;

  @media (max-width: 980px) {
    gap: 20px;
    margin-top: 20px;
  }
}
.form-support-pass__text {
  font-size: 14px;
  color: $text2-color;
}
.form-support-pass__btn {
  width: 200px;
  margin-top: 12px;

  @media (max-width: 980px) {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }

}
</style>
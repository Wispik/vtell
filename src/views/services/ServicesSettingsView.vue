<template>
  <div class="settings-block">
    <div class="settings-block__title">
      <div class="settings-block__title-left">
        <div class="title">Application Language</div>
        <div class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
    </div>
    <div class="settings-block__content">
      <app-switch  label="English" v-model="switchEng" />
      <app-switch  label="Русский" v-model="switchRus" />
    </div>
  </div>
  <div class="settings-block">
    <div class="settings-block__title">
      <div class="settings-block__title-left">
        <div class="title">Access code</div>
        <div class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
      <app-switch v-model="switchAccessCode" />
    </div>
  </div>
  <div class="settings-block">
    <div class="settings-block__title">
      <div class="settings-block__title-left">
        <div class="title">Notification Management</div>
        <div class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
    </div>
    <div class="settings-block__content">
      <app-switch  label="SMS notifications" v-model="switchSMS" />
      <app-switch  label="Push Notifications" v-model="switchPush" />
    </div>
  </div>
  <div class="settings-block">
    <div class="settings-block__title">
      <div class="settings-block__title-left">
        <div class="title">Notification Management</div>
        <div class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
    </div>
    <div class="settings-block__inputs">
      <app-input 
        label="Full name:"
        placeholder="Ivanov Ivan Ivanovich"
      />
      <app-input-phone
        label="Phone number:"
      />
      <app-input 
        label="E-mail:"
        placeholder="Ivanov Ivan Ivanovich"
      />
      <app-input 
        label="Passport data:"
        placeholder="sadfasd adsasdasd asdasd"
      />
    </div>
    <div class="settings-block__btn">
      <app-button text="Save Changes" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchEng: true,
      switchRus: false,
      switchAccessCode: true,
      switchSMS: true,
      switchPush: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-block {
  background: $bg3-color;
  border-radius: 5px;
  padding: 36px;

  & + & {
    margin-top: 40px;
  }
}
.settings-block__title {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
}
.settings-block__content {
  display: flex;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 15px;
  }
}
.settings-block__inputs {
  margin-top: 20px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: inherit;
}
.settings-block__btn {
  width: 283px;

  @media (max-width: 720px) {
    width: 100%;
  }
}
</style>
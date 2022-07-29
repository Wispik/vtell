<template>
  <div class="services-cells" v-if="!showRequest && !showChat">
    <div class="services-cell">
      <img src="@/assets/images/services/call.svg">
      <span>Call Us</span>
    </div>
    <div class="services-cell" @click="showRequest=true">
      <img src="@/assets/images/services/phone.svg">
      <span>Request a call back</span>
    </div>
    <div class="services-cell">
      <img src="@/assets/images/services/whatsapp.svg">
      <span>Write to whatsapp</span>
    </div>
    <div class="services-cell">
      <img src="@/assets/images/services/telegram.svg">
      <span>Write to Telegram</span>
    </div>
    <div class="services-cell">
      <img src="@/assets/images/services/viber.svg">
      <span>Write to Viber</span>
    </div>
    <div class="services-cell">
      <img src="@/assets/images/services/chat.svg">
      <span>Write in chat</span>
    </div>
  </div>
  <div class="request" v-if="showRequest && !showChat">
    <div class="title">Request a call back</div>
    <div class="sub-title">Link a new card and top up your account</div>
    <div class="request-form">
      <app-input label="Full Name:" placeholder="Ivanov Ivan Ivanovich" />
      <app-input-phone label="Phone number:" />
      <div class="request-form__button">
        <app-button 
          text="Submit an application" 
          @click="showChat=true"  
        />
      </div>
    </div>
  </div>
  <dashboard-services-chat v-if="showChat" />
</template>

<script>
import DashboardServicesChat from '@/components/dashboard/DashboardServicesChat.vue'
export default {
  components: { DashboardServicesChat },
  data() {
    return {
      showRequest: false,
      showChat: false
    }
  }
}
</script>

<style lang="scss" scoped>
.request {
  max-width: 600px;
  width: inherit;
}
.request-form {
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.request-form__button {
  width: 280px;
  margin-top: 5px;

  @media (max-width: 980px) {
    width: 100%;
  }
}
</style>
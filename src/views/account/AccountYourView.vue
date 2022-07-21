<template>
  <div class="title">Current balance</div>
  <div class="sub-title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </div>
  <account-progress />
  <div class="account-block">
    <div class="account-block__header">
      <div class="account-block__header-left">
        <div class="title">Auto payment</div>
        <div class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
      <app-switch v-model="block1.showDetails" />
    </div>
    <div class="account-block__details" v-if="block1.showDetails && !block1.showEdit">
      <div class="account-block__details-info">
        <span>{{ block1.date }}</span>
        <span>{{ block1.price }}</span>
      </div>
      <app-button text="Change" :bordered-red="true" @click="block1.showEdit=true" />
    </div>
    <div class="account-block__edit" v-if="block1.showEdit && block1.showDetails">
      <app-input v-model="block1.date" :select="true" />
      <app-input v-model="block1.price" :select="true" />
      <app-button text="Save Changes" @click="block1.showEdit=false" />
    </div>
  </div>
  <div class="account-block">
    <div class="account-block__header">
      <div class="account-block__header-left">
        <div class="title">Automatinis papildymas</div>
        <div class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
      <app-switch v-model="block2.showDetails" />
    </div>
    <div class="account-block__details" v-if="block2.showDetails && !block2.showEdit">
      <div class="account-block__details-info">
        <span>{{ block2.date }}</span>
        <span>{{ block2.price }}</span>
      </div>
      <app-button text="Change" :bordered-red="true" @click="block2.showEdit=true" />
    </div>
    <div class="account-block__edit" v-if="block2.showEdit && block2.showDetails">
      <app-input v-model="block2.date" :select="true" />
      <app-input v-model="block2.price" :select="true" />
      <div class="account-block__edit-btn">
        <app-button text="Save Changes" @click="block2.showEdit=false" />
      </div>
    </div>
  </div>
  <div class="account-btn">
    <app-button text="Top up account" />
  </div>
</template>

<script>
import AccountProgress from '@/components/account/AccountProgress.vue'

export default {
  components: { AccountProgress },
  data() {
    return {
      block1: {
        date: '11/12/2021',
        price: '$123.00',
        showDetails: false,
        showEdit: false
      },
      block2: {
        date: '11/12/2021',
        price: '$123.00',
        showDetails: false,
        showEdit: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.account-block {
  background: $bg3-color;
  border-radius: 5px;
  padding: 35px;
  margin-bottom: 30px;
}
.account-block__header {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
}
.account-block__details {
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 20px;

  @media (max-width: 800px) {
    width: 100%;
  }
}
.account-block__details-info {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: $text5-color;
}
.account-block__edit {
  width: 335px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 800px) {
    width: 100%;
  }
}
.account-block__edit-btn {
  margin-top: 6px;
  width: 260px;

  @media (max-width: 800px) {
    width: 100%;
  }
}
.account-btn {
  width: 280px;

  @media (max-width: 800px) {
    width: 100%;
  }
}
</style>
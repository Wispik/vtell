<template>
  <div class="title">Number Management</div>
  <div class="sub-title">Here you can manage all your numbers</div>
  <div class="title services-title">Overseas Phone Numbers</div>
  <div class="services-block">
    <div class="services-block-left">
      <div class="services-block-left-title">
        <img src="/images/flags/flag-us.png">
        <span>USA</span>
        <div class="services-block-left-title-num">
          +1 7602270322
        </div>
      </div>
      <div class="services-block-left-text">
        The service is connected - Feb 26, 2020, 3:00:00 AM
      </div>
    </div>
    <div class="services-block__button">
      <app-button text="Disconnect" :bordered="true" />
    </div>
  </div>
  <div class="services-block">
    <div class="services-block-left">
      <div class="services-block-left-title">
        <img src="/images/flags/flag-is.png">
        <span>ISRAEL</span>
        <div class="services-block-left-title-num">
          +972 553321747
        </div>
      </div>
      <div class="services-block-left-text">
        The service is connected - Feb 26, 2020, 3:00:00 AM
      </div>
    </div>
    <div class="services-block__button">
      <app-button text="Disconnect" :bordered="true" />
    </div>
  </div>
  <div class="title services-title">Phone Number Requests</div>
  <div class="sub-title">You have no requested phone numbers</div>
  <div class="services-delimeter"></div>
  <div class="services-add-btn">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.2222 2H3.77778C2.79556 2 2 2.79556 2 3.77778V16.2222C2 17.2044 2.79556 18 3.77778 18H16.2222C17.2044 18 18 17.2044 18 16.2222V3.77778C18 2.79556 17.2044 2 16.2222 2ZM14.4444 10.8889H10.8889V14.4444H9.11111V10.8889H5.55556V9.11111H9.11111V5.55556H10.8889V9.11111H14.4444V10.8889Z" fill="#E63739"/>
    </svg>
    Add a new number
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.services-title {
  margin-top: 40px;

  @media (max-width: 980px) {
    margin-top: 25px;
  }
}
.services-block {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background: $bg3-color;
  border-radius: 5px;
  padding: 25px 23px;
  margin-top: 12px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 13px;
  }
}
.services-block-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.services-block-left-title {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 10px;
  align-items: center;
}
.services-block-left-title-num {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: $red-color;
}
.services-block-left-text {
  font-size: 14px;
  color: $text2-color
}
.services-block__button {
  width: 150px;
}
.services-delimeter {
  width: 200%;
  height: 1px;
  background: $bg3-color;
  margin: 50px 0 50px -300px;
}
.services-add-btn {
  display: flex;
  align-items: center;
  gap: 13px;
  background: $bg3-color;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-transform: capitalize;
  color: $red-color;
}
</style>
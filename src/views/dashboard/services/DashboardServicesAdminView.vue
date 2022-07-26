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
  <div class="services-dropdown">
    <div class="services-dropdown__body">
      <div class="services-dropdown__title">
        Add a new number
      </div>
      <div class="services-dropdown__text">
        Select any country and quantity of numbers that we have available for you
      </div>
    </div>
    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6805 0.77402C23.2545 0.348056 22.5637 0.347983 22.1377 0.774092L12.0003 10.9118L1.86229 0.77402C1.43633 0.348056 0.745564 0.347983 0.319527 0.774092C-0.106509 1.20013 -0.106509 1.89082 0.319527 2.31686L11.2289 13.2259C11.4335 13.4305 11.7109 13.5454 12.0003 13.5454C12.2896 13.5454 12.5671 13.4305 12.7716 13.2259L23.6804 2.31678C24.1065 1.89082 24.1065 1.20006 23.6805 0.77402Z" fill="#E5E5E5"/>
    </svg>
  </div>
  <div class="services-dropdown">
    <div class="services-dropdown__body">
      <div class="services-dropdown__title">
        History of changes
      </div>
      <div class="services-dropdown__text">
        Check your number management records
      </div>
    </div>
    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6805 0.77402C23.2545 0.348056 22.5637 0.347983 22.1377 0.774092L12.0003 10.9118L1.86229 0.77402C1.43633 0.348056 0.745564 0.347983 0.319527 0.774092C-0.106509 1.20013 -0.106509 1.89082 0.319527 2.31686L11.2289 13.2259C11.4335 13.4305 11.7109 13.5454 12.0003 13.5454C12.2896 13.5454 12.5671 13.4305 12.7716 13.2259L23.6804 2.31678C24.1065 1.89082 24.1065 1.20006 23.6805 0.77402Z" fill="#E5E5E5"/>
    </svg>
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
.services-dropdown {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px 20px 25px;
  border-radius: 5px;
  background: $bg3-color;
  margin-top: 12px;

  @media (max-width: 980px) {
    padding: 20px 15px;
    gap: 20px;
    display: grid;
    grid-template-columns: 1fr 14px;

    & > svg {
      width: 14px;
    }
  }
}
.services-dropdown__body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.services-dropdown__title {
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;

  @media (max-width: 980px) {
    font-size: 18px;
    line-height: 21px;
  }
}
.services-dropdown__text {
  font-size: 14px;
  color: $text2-color;

  @media (max-width: 980px) {
    font-size: 15px;
    font-weight: 300;
  }
}
</style>
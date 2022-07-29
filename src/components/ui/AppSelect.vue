<template>
  <div class="select" @click="toggleSelect" v-click-outside="closeSelect">
    <div class="select__main">
      <span v-if="selectItem">
        {{ selectItem.label }}
      </span>
      <span class="select-placeholder" v-else>
        {{ placeholder }}
      </span>
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8136 0.368132C13.5651 0.119654 13.1622 0.119611 12.9137 0.368175L7.00015 6.28182L1.08634 0.368132C0.837858 0.119654 0.434912 0.119611 0.186391 0.368175C-0.0621303 0.616696 -0.0621303 1.0196 0.186391 1.26812L6.5502 7.63176C6.66954 7.7511 6.83138 7.81813 7.00015 7.81813C7.16891 7.81813 7.3308 7.75105 7.4501 7.63171L13.8136 1.26808C14.0621 1.0196 14.0621 0.616654 13.8136 0.368132Z" fill="white"/>
      </svg>
    </div>
    <div class="select__popup" v-if="showPopup">
      <div 
        class="select__popup-item"
        v-for="item in items"
        :key="item.id"
        @click="selectItem=item"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      required: true
    },
    placeholder: { delault: '' }
  },
  data() {
    return {
      showPopup: false,
      selectItem: null
    }
  },
  methods: {
    toggleSelect() {
      this.showPopup = !this.showPopup
    },
    closeSelect() {
      this.showPopup = false
    }
  }
}
</script>

<style lang="scss" scoped>
.select-label {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: $text3-color;
  margin-bottom: 4px;
}
.select {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 40px;
}
.select__main {
  border: 1px solid $text2-color;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 14px;
  padding: 0 10px;
  height: 100%;
  align-items: center;
}
.select__popup {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background: $bg2-color;
  border: 1px solid $text2-color;
  border-radius: 5px;
  z-index: 10;
}
.select__popup-item {
  padding: 0 10px;
  height: 40px;
  display: flex;
  align-items: center;
}
.select-placeholder {
  font-size: 14px;
  line-height: 21px;
  color: $text2-color;
}
</style>
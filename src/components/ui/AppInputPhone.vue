<template>
  <div class="input-block">
    <div class="input-title__block">
      <div class="input-label" v-if="label">{{ label }}</div>
    </div>
    <div class="input-border">
      <div class="input-select" @click="togglePopup">
        <img :src="`/images/flags/flag-${compSelectCode.flag}.png`">
        <span>{{ `(${compSelectCode.code})` }}</span>
        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0H0L3.5 3.5L7 0Z" fill="#E5E5E5"/>
        </svg>
        <div 
          class="input-select__popup" 
          v-if="showPopup"
          v-click-outside="closePopup"
        >
          <div 
            class="input-select__popup-item"
            v-for="c in codes"
            :key="c.code"
            @click="selectItem(c.code)"
          >
            <img :src="`/images/flags/flag-${c.flag}.png`">
            <span>{{ `(${c.code})` }}</span>
          </div>
        </div>
      </div>
      <input 
        type="text" 
        class="input" 
        placeholder="___ _______"
        :value="modelValue"
        :required="required"
        @input="(event) => $emit('update:modelValue', event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: String },
    label: { default: null },
    required: { default: false }
  },
  data() {
    return {
      showPopup: false,
      codes: [
        {
          code: '+1',
          flag: 'us'
        },
        {
          code: '+7',
          flag: 'ru'
        }
      ],
      selectCode: '+1'
    }
  },
  methods: {
    selectItem(code) {
      this.selectCode = code
    },
    togglePopup() {
      this.showPopup = ! this.showPopup
    },
    closePopup() {
      this.showPopup = false
    }
  },
  computed: {
    compSelectCode() {
      return this.codes.find(item => item.code === this.selectCode)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input {
  background: transparent;
  flex: 1;
  border: none;
  outline: none;
  font-family: 'PF BeauSans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: $text3-color;
  padding: 0;
  margin-left: 15px;

  &::placeholder {
    font-family: 'PF BeauSans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: $text2-color;
  }
}
.input-border {
  border: 1px solid $text2-color;
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 10px 12px;
}
.input-label {
  font-family: 'PF BeauSans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}
.input-title__block {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.input-select {
  cursor: pointer;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: $text3-color;
  padding-right: 9px;
  border-right: 1px solid $text2-color;
  display: grid;
  grid-template-columns: 21px auto auto;
  position: relative;
}
.input-select__popup {
  position: absolute;
  width: calc(100% + 10px);
  left: -10px;
  top: 100%;
  background: $bg3-color;
  border: 1px solid $text2-color;
  border-radius: 5px;
}
.input-select__popup-item {
  display: grid;
  grid-template-columns: 21px auto;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
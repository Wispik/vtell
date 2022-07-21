<template>
  <div class="input-block">
    <div class="input-title__block">
      <div class="input-label" v-if="label">{{ label }}</div>
    </div>
    <div class="input-border">
      <div class="input-select">
        <img src="@/assets/images/flag-us.png">
        <span>(+1)</span>
        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0H0L3.5 3.5L7 0Z" fill="#E5E5E5"/>
        </svg>
      </div>
      <input 
        :type="text" 
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
}
</style>
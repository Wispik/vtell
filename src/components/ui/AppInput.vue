<template>
  <div class="input-block">
    <div class="input-title__block">
      <div class="input-label" v-if="label">{{ label }}</div>
      <app-switch v-if="switch" v-model="sw" />
    </div>
    <div class="input-border">
      <div class="input-date-text" v-if="type==='date'">{{ datetext }}</div>
      <input 
        :type="compType" 
        class="input" 
        :placeholder="placeholder"
        :value="modelValue"
        :required="required"
        ref="input"
        @input="(event) => $emit('update:modelValue', event.target.value)"
      >
      <svg class="input-btn" @click="showPassword=!showPassword" v-if="type==='password'" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 0.75L17.25 17.25M13.455 13.455C12.1729 14.4323 10.6118 14.9736 9 15C3.75 15 0.75 9 0.75 9C1.68292 7.26142 2.97685 5.74246 4.545 4.545L13.455 13.455ZM7.425 3.18C7.94125 3.05916 8.4698 2.99875 9 3C14.25 3 17.25 9 17.25 9C16.7947 9.85171 16.2518 10.6536 15.63 11.3925L7.425 3.18ZM10.59 10.59C10.384 10.8111 10.1356 10.9884 9.85961 11.1113C9.58362 11.2343 9.28568 11.3004 8.98357 11.3058C8.68146 11.3111 8.38137 11.2555 8.10121 11.1424C7.82104 11.0292 7.56654 10.8608 7.35288 10.6471C7.13923 10.4335 6.97079 10.179 6.85763 9.89879C6.74447 9.61863 6.6889 9.31854 6.69423 9.01643C6.69956 8.71432 6.76568 8.41638 6.88866 8.14039C7.01163 7.86439 7.18894 7.61599 7.41 7.41L10.59 10.59Z" stroke="#A7A7A7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-if="select" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8136 0.368193C13.5651 0.119715 13.1622 0.119672 12.9137 0.368236L7.00015 6.28188L1.08634 0.368193C0.837858 0.119715 0.434912 0.119672 0.186391 0.368236C-0.0621303 0.616757 -0.0621303 1.01966 0.186391 1.26818L6.5502 7.63182C6.66954 7.75116 6.83138 7.81819 7.00015 7.81819C7.16891 7.81819 7.3308 7.75111 7.4501 7.63177L13.8136 1.26814C14.0621 1.01966 14.0621 0.616715 13.8136 0.368193Z" fill="#E5E5E5"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: String },
    placeholder: { default: '' },
    label: { default: null },
    type: { default: 'text' },
    required: { default: false },
    datetext: { default: '' },
    switch: { default: false },
    select: { default: false }
  },
  data() {
    return {
      showPassword: false,
      sw: true
    }
  },
  computed: {
    compType() {
      if (this.type === 'password') {
        return this.showPassword ? 'text' : 'password'
      }
      return this.type
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
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
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
.input-btn {
  cursor: pointer;
}
.input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 1;
  display: block;
  border-width: thin;
  width: 14px;
  height: 14px;
  background: url('@/assets/images/calendar-icon.svg');
}
.input-date-text {
  color: $text2-color;
}
.input-title__block {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
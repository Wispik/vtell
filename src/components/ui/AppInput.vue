<template>
  <div class="input-block">
    <div class="input-title__block">
      <div class="input-label" v-if="label">{{ label }}</div>
      <div class="input-label2" v-if="label2">{{ label2 }}</div>
      <app-switch v-if="switch" v-model="sw" />
    </div>
    <div class="input-border">
      <div class="input-date-text" v-if="type==='date'">{{ datetext }}</div>
      <input 
        :type="compType" 
        class="input"
        :class="{'dateinput': type==='date' && !select, 'dateinput-select': type==='date' && select}"
        :placeholder="placeholder"
        :value="modelValue"
        :required="required"
        v-maska="mask"
        @input="(event) => $emit('update:modelValue', event.target.value)"
      >
      <svg class="input-btn" @click="showPassword=!showPassword" v-if="type==='password'" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 0.75L17.25 17.25M13.455 13.455C12.1729 14.4323 10.6118 14.9736 9 15C3.75 15 0.75 9 0.75 9C1.68292 7.26142 2.97685 5.74246 4.545 4.545L13.455 13.455ZM7.425 3.18C7.94125 3.05916 8.4698 2.99875 9 3C14.25 3 17.25 9 17.25 9C16.7947 9.85171 16.2518 10.6536 15.63 11.3925L7.425 3.18ZM10.59 10.59C10.384 10.8111 10.1356 10.9884 9.85961 11.1113C9.58362 11.2343 9.28568 11.3004 8.98357 11.3058C8.68146 11.3111 8.38137 11.2555 8.10121 11.1424C7.82104 11.0292 7.56654 10.8608 7.35288 10.6471C7.13923 10.4335 6.97079 10.179 6.85763 9.89879C6.74447 9.61863 6.6889 9.31854 6.69423 9.01643C6.69956 8.71432 6.76568 8.41638 6.88866 8.14039C7.01163 7.86439 7.18894 7.61599 7.41 7.41L10.59 10.59Z" stroke="#A7A7A7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-if="select && type!=='date'" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8136 0.368193C13.5651 0.119715 13.1622 0.119672 12.9137 0.368236L7.00015 6.28188L1.08634 0.368193C0.837858 0.119715 0.434912 0.119672 0.186391 0.368236C-0.0621303 0.616757 -0.0621303 1.01966 0.186391 1.26818L6.5502 7.63182C6.66954 7.75116 6.83138 7.81819 7.00015 7.81819C7.16891 7.81819 7.3308 7.75111 7.4501 7.63177L13.8136 1.26814C14.0621 1.01966 14.0621 0.616715 13.8136 0.368193Z" fill="#E5E5E5"/>
      </svg>
      <svg v-if="search" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8482 15.1295L11.7172 11.0646C12.799 9.8893 13.4637 8.33495 13.4637 6.62455C13.4632 2.96568 10.4494 0 6.73158 0C3.0137 0 0 2.96568 0 6.62455C0 10.2834 3.0137 13.2491 6.73158 13.2491C8.33795 13.2491 9.81129 12.6935 10.9686 11.7697L15.1155 15.8507C15.3176 16.0498 15.6456 16.0498 15.8477 15.8507C16.0502 15.6517 16.0502 15.3286 15.8482 15.1295ZM6.73158 12.2299C3.58585 12.2299 1.03575 9.72029 1.03575 6.62455C1.03575 3.52881 3.58585 1.01923 6.73158 1.01923C9.87733 1.01923 12.4274 3.52881 12.4274 6.62455C12.4274 9.72029 9.87733 12.2299 6.73158 12.2299Z" fill="#E5E5E5"/>
      </svg>
      <svg v-if="price" width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.68457 14.8672L1.53564 13.2983C2.06201 13.77 2.65332 14.146 3.30957 14.4263C3.96582 14.6997 4.646 14.8364 5.3501 14.8364C5.80127 14.8364 6.22852 14.7476 6.63184 14.5698C7.04199 14.3921 7.37354 14.1323 7.62646 13.7905C7.88623 13.4487 8.01611 13.0317 8.01611 12.5396C8.01611 11.9653 7.82129 11.5005 7.43164 11.145C7.04883 10.7896 6.57373 10.4785 6.00635 10.2119C5.83545 10.1299 5.65771 10.0479 5.47314 9.96582C5.28857 9.88379 5.10059 9.80518 4.90918 9.72998C4.85449 9.70264 4.79639 9.67871 4.73486 9.6582C4.68018 9.6377 4.62549 9.61377 4.5708 9.58643C3.98975 9.34033 3.4292 9.06348 2.88916 8.75586C2.34912 8.44141 1.9082 8.05176 1.56641 7.58691C1.22461 7.11523 1.05371 6.51709 1.05371 5.79248C1.05371 4.82178 1.375 4.02539 2.01758 3.40332C2.66699 2.78125 3.51807 2.40527 4.5708 2.27539V0.419434H6.00635V2.24463C6.51221 2.29248 7.0249 2.3916 7.54443 2.54199C8.0708 2.68555 8.59375 2.89062 9.11328 3.15723L8.30322 4.60303C7.35303 4.06982 6.36182 3.80322 5.32959 3.80322C4.93994 3.80322 4.55029 3.87158 4.16064 4.0083C3.771 4.13818 3.44629 4.34668 3.18652 4.63379C2.92676 4.91406 2.79688 5.2832 2.79688 5.74121C2.79688 6.2334 2.96436 6.64014 3.29932 6.96143C3.64111 7.27588 4.06494 7.55615 4.5708 7.80225C4.75537 7.89111 4.94678 7.97998 5.14502 8.06885C5.3501 8.15088 5.55859 8.23633 5.77051 8.3252C5.85254 8.35254 5.93115 8.38672 6.00635 8.42773C6.62158 8.68066 7.21631 8.96777 7.79053 9.28906C8.36475 9.61035 8.83643 10.0171 9.20557 10.5093C9.57471 10.9946 9.75928 11.6235 9.75928 12.396C9.75928 13.0933 9.59863 13.7256 9.27734 14.293C8.95605 14.8535 8.51172 15.3149 7.94434 15.6772C7.38379 16.0396 6.73779 16.2651 6.00635 16.354V18.2202H4.5708V16.354C3.12842 16.2173 1.83301 15.7217 0.68457 14.8672Z" fill="#E63739"/>
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
    label2: { default: null },
    type: { default: 'text' },
    required: { default: false },
    datetext: { default: '' },
    switch: { default: false },
    select: { default: false },
    search: { default: false },
    price: { default: false },
    mask: { default: '' }
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
.input-label2 {
   font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: $text2-color;
  text-align: right;

  @media (max-width: 980px) {
    font-size: 16px;
  }
}


.input-btn {
  cursor: pointer;
}
.dateinput::-webkit-calendar-picker-indicator {
  opacity: 1;
  display: block;
  border-width: thin;
  width: 14px;
  height: 14px;
  background: url('@/assets/images/calendar-icon.svg');
}
.dateinput-select::-webkit-calendar-picker-indicator {
  opacity: 1;
  display: block;
  border-width: thin;
  width: 14px;
  height: 8px;
  background: url('@/assets/images/arrow.svg') center no-repeat;
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
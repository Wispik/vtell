<template>
  <div 
    class="switch" 
    :class="{'checked': modelValue, 'small': small, 'width-auto': label}"
    @click="clickSwitch"
  >
    <div class="switch-thumb"></div>
    <div class="switch-label" v-if="label">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean
    },
    small: {
      type: Boolean,
      default: false
    },
    label: {
      default: ''
    }
  },
  methods: {
    clickSwitch() {
      this.$emit('update:modelValue', !this.modelValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  height: 24px;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 13px;
  width: 48px;

  &.width-auto {
    width: auto;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 48px;
    position: absolute;
    left: 0;
    right: 0;
    background: $text2-color;
    border-radius: 50px;
  }

  &.checked {
    &::before {
      background: $green-color;
    }

    & > .switch-thumb{
      left: 27px;
    }
  }

  &.small {
    width: 30px;
    height: 15px;

    &::before {
      width: 30px;
    }

    & > .switch-thumb {
      left: 2px;
      width: 10px;
      height: 10px;
      top: 2px;
    }

    &.checked > .switch-thumb {
      left: 17px;
    }
  }
}
.switch-thumb {
  width: 17px;
  height: 17px;
  background: $text-color;
  position: absolute;
  left: 3px;
  top: 3px;
  border-radius: 100%;
}
.switch-label {
  text-transform: capitalize;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: $text-color;
  margin-left: 61px;
}
</style>
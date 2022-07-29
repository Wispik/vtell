<template>
  <button 
    class="button"
    :class="{'gray': gray, 'bordered': bordered, 'bordered bordered-red': borderedRed}"
    :style="{'width': compWidth, 'height': compHeight}"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: { required: true },
    gray: { default: false },
    bordered: { default: false },
    borderedRed: { default: false },
    width: { default:  null},
    height: { default:  49}
  },
  computed: {
    compWidth() {
      return this.width ? `${this.width}px` : '100%'
    },
    compHeight() {
      return `${this.height}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  font-family: 'PF BeauSans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: $text-color;
  box-shadow: 0px 4px 10px rgba(49, 15, 15, 0.25);
  border-radius: 5px;
  background: $red-color;
  cursor: pointer;
  max-width: 100%;
  user-select: none;

  &:hover {
    background: darken($red-color, 10);
  }

  &.bordered {
    background: transparent;
    border: 1px solid #FAFAFA;
    border-radius: 5px;

    &:hover {
      background: #ffffff0e;
    }

    &.bordered-red {
      background: transparent;
      border: 1px solid $red-color;
      border-radius: 5px;
      color: $red-color;

      &:hover {
        background: #ffffff0e;
      }
    }
  }

  &.gray {
    background: $bg3-color;
    box-shadow: 0px 4px 10px rgba(49, 15, 15, 0.25);
    border-radius: 5px;

    &:hover {
      background: #ffffff0e;
    }
  }
}
</style>
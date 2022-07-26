<template>
  <div class="radio-block">
    <label 
      class="radio-label"
      v-for="item in items"
      :key="item.id"  
    >
      <input 
        type="radio" 
        class="radio-input"
        :name="name"
        :checked="item.checked"
      >
      <span>{{ item.label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true },
    items: { required: true }
  }
}
</script>

<style lang="scss" scoped>
.radio-block {
   display: flex;
   flex-direction: column;
   gap: 17px; 
}
.radio-label {
  cursor: pointer;
}
.radio-label > span {
  user-select: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 16px;

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border: 1px solid $text2-color;
  }
}
.radio-input {
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + span::before {
    border: none;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSI3LjUiIHN0cm9rZT0iI0U2MzczOSIvPg0KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiNFNjM3MzkiLz4NCjwvc3ZnPg0K")
  }
}
</style>
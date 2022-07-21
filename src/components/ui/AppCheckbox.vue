<template>
  <label class="cb-label">
    <input 
      type="checkbox" 
      class="cb-input"
      :checked="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.checked)"  
    >
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: { default: '' },
    modelValue: { required: true }
  }
}
</script>

<style lang="scss" scoped>
.cb-label {
  cursor: pointer;
}
.cb-label > span {
  user-select: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHJ4PSIxLjUiIGZpbGw9IiMzMDJGMkYiIHN0cm9rZT0iI0E3QTdBNyIvPg0KPC9zdmc+")
  }
}
.cb-input {
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + span::before {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHJ4PSIxLjUiIGZpbGw9IiMzMDJGMkYiIHN0cm9rZT0iI0E3QTdBNyIvPg0KPHBhdGggZD0iTTE0Ljk5IDQuNzM3NjJDMTQuOTkgNC45NjA4MyAxNC45MTE4IDUuMTUwNTcgMTQuNzU1NiA1LjMwNjgyTDguNjk1MzEgMTEuMzY3MUw3LjU1NjkyIDEyLjUwNTVDNy40MDA2NyAxMi42NjE3IDcuMjEwOTQgMTIuNzM5OSA2Ljk4NzcyIDEyLjczOTlDNi43NjQ1MSAxMi43Mzk5IDYuNTc0NzggMTIuNjYxNyA2LjQxODUzIDEyLjUwNTVMNS4yODAxMyAxMS4zNjcxTDIuMjUgOC4zMzY5NUMyLjA5Mzc1IDguMTgwNyAyLjAxNTYyIDcuOTkwOTcgMi4wMTU2MiA3Ljc2Nzc1QzIuMDE1NjIgNy41NDQ1NCAyLjA5Mzc1IDcuMzU0ODEgMi4yNSA3LjE5ODU2TDMuMzg4MzkgNi4wNjAxNkMzLjU0NDY0IDUuOTAzOTEgMy43MzQzNyA1LjgyNTc5IDMuOTU3NTkgNS44MjU3OUM0LjE4MDggNS44MjU3OSA0LjM3MDU0IDUuOTAzOTEgNC41MjY3OSA2LjA2MDE2TDYuOTg3NzIgOC41Mjk0N0wxMi40Nzg4IDMuMDMwMDNDMTIuNjM1IDIuODczNzggMTIuODI0OCAyLjc5NTY1IDEzLjA0OCAyLjc5NTY1QzEzLjI3MTIgMi43OTU2NSAxMy40NjA5IDIuODczNzggMTMuNjE3MiAzLjAzMDAzTDE0Ljc1NTYgNC4xNjg0MkMxNC45MTE4IDQuMzI0NjcgMTQuOTkgNC41MTQ0IDE0Ljk5IDQuNzM3NjJaIiBmaWxsPSIjRTYzNzM5Ii8+DQo8L3N2Zz4NCg==")
  }
}
</style>
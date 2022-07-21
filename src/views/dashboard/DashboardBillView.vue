<template>
  <app-switch v-model="sw" :small="small"/>
  <app-input v-model="inp" label="test" datetext="акщт" type="date"/>
  <app-button text="123" width="100" />
</template>

<script>
export default {
  data() {
    return {
      sw: false,
      small: true,
      inp: ''
    }
  }
}
</script>

<style>

</style>
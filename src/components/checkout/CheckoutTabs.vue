<template>
  <div class="check-tabs">
    <router-link
      class="check-tabs__tab"
      exact-active-class="check-tabs__tab-active"
      v-for="tab in tabs"
      :key="tab.title"
      :to="{'name': tab.routeName}"
    >
      {{ tab.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      default: false
    }
  },
  data() {
    return {
      tabsBig: [
        {
          title: 'Connection Type',
          routeName: 'checkout-main'
        },
        {
          title: 'choose number',
          routeName: 'checkout-choose'
        },
        {
          title: 'cart',
          routeName: 'account-main'
        },
        {
          title: 'PURCHASE',
          routeName: 'account-main'
        }
      ],
      tabsSmall: [
        {
          title: 'Connection Type',
          routeName: 'checkout-main'
        },
        {
          title: 'transfer number',
          routeName: 'checkout-transfer'
        }
      ]
    }
  },
  computed: {
    tabs() {
      if (this.small) return this.tabsSmall
      else return this.tabsBig
    }
  }
}
</script>

<style lang="scss" scoped>
.check-tabs {
  width: 100%;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  background: $bg4-color;
}
.check-tabs__tab {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  flex: 1;
  position: relative;
  
  & + & {
    border-left: 1px solid $bg3-color;
  }

  &.check-tabs__tab-active {
    background: $red-color;
  }
}
</style>
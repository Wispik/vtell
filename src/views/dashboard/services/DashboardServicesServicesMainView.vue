<template>
  <app-tabs :tabs="tabs" :width=165 />
  <div class="services-block">
    <router-view />
  </div>
</template>

<script>
import AppTabs from '@/components/ui/AppTabs.vue'

export default {
  components: { AppTabs },
  data() {
    return {
      tabs: [
        {
          id: 1,
          title: 'Settings',
          routeName: 'dashboard-services-services'
        },
        {
          id: 2,
          title: 'Connect with us',
          routeName: 'dashboard-services-services-connect'
        },
        {
          id: 3,
          title: 'Social networks',
          routeName: 'dashboard-services-services-social'
        },
        {
          id: 4,
          title: 'Speed test',
          routeName: 'account-main'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.services-cells {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 34px;

  @media (max-width: 980px) {
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
}
.services-cell {
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 20px;
  background: $bg3-color;
  border-radius: 5px;
  cursor: pointer;
  padding-bottom: 36px;
  text-transform: capitalize;

  &:hover {
    background: darken($bg3-color, 4);
  }

  @media (max-width: 665px) {
    height: 150px;
    padding-bottom: 30px;

    & > img {
      width: 48px;
    }
  }
}
.services-block {
  @media (max-width: 980px) {
    width: calc(100vw - 60px);
  }
}
</style>
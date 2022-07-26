<template>
  <div class="dashboard-grid">
    <dashboard-menu-second :menu="menu" />
    <div class="dashboard-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import DashboardMenuSecond from '@/components/dashboard/DashboardMenuSecond.vue'
export default {
  components: { DashboardMenuSecond },
  data() {
    return {
      menu: [
        {
          title: 'Admin your phone numbers',
          routeName: 'dashboard-services'
        },
        {
          title: 'Plan Change',
          routeName: 'dashboard-services-plan'
        },
        {
          title: 'Services',
          routeName: 'dashboard-services-services'
        },
        {
          title: 'Call Forwarding',
          routeName: 'dashboard-services-call'
        }
      ]
    }
  }
}
</script>

<style>

</style>
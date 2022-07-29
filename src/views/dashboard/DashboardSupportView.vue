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
          title: 'personal Info',
          routeName: 'dashboard-support'
        },
        {
          title: 'Change Password',
          routeName: 'dashboard-support-password-change'
        }
      ]
    }
  }
}
</script>

<style>

</style>
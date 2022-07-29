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
          title: 'Itemization of Phone Calls',
          routeName: 'dashboard-bill'
        },
        {
          title: 'Monthly Bill',
          routeName: 'dashboard-bill-montly'
        },
        {
          title: 'Payment History',
          routeName: 'dashboard-bill-payment'
        },
        {
          title: 'Add Funds',
          routeName: 'dashboard-bill-funds'
        },
        {
          title: 'Autopay Setup',
          routeName: 'dashboard-bill-autopay'
        },
        {
          title: 'Previously Ordered Reports',
          routeName: 'dashboard-bill-reports'
        }
      ]
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="dashboard">
    <div class="dashboard__left">
      <dashboard-sidebar />
    </div>
    <div class="dashboard__right">
      <dashboard-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'

export default {
  components: { DashboardSidebar, DashboardHeader },

}
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
}
.dashboard__left {
  width: 120px;
}
.dashboard__right {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
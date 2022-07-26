<template>
  <div class="dashboard">
    <div class="dashboard__left only-desktop">
      <dashboard-sidebar />
    </div>
    <div class="dashboard__right">
      <dashboard-header />
      <dashboard-main-menu-mobile />
      <div class="content">
        <router-view />
      </div>
      <app-footer-main class="only-mobile" />
    </div>
  </div>
</template>

<script>
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardMainMenuMobile from '@/components/dashboard/DashboardMainMenuMobile.vue'
import AppFooterMain from '@/components/AppFooterMain.vue'


export default {
  components: { DashboardSidebar, DashboardHeader, DashboardMainMenuMobile, AppFooterMain },

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
  position: fixed;
  height: 100%;
}
.dashboard__right {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 120px;

  @media (max-width: 980px) {
    margin-left: 0;
  }
}
</style>
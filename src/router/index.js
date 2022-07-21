import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashboardMainView.vue'),
      children: [
        {
          path: '',
          name: 'dashboard-account',
          component: () => import('../views/dashboard/DashboardAccountView.vue'),
        },
        {
          path: 'bill',
          name: 'dashboard-bill',
          component: () => import('../views/dashboard/DashboardBillView.vue'),
        },
        {
          path: 'services',
          name: 'dashboard-services',
          component: () => import('../views/dashboard/DashboardServicesView.vue'),
        },
        {
          path: 'support',
          name: 'dashboard-support',
          component: () => import('../views/dashboard/DashboardSupportView.vue'),
        }
      ]
    },
    {
      path: '/account',
      component: () => import('../views/account/AccountMainView.vue'),
      children: [
        {
          path: '',
          name: 'account-main',
          component: () => import('../views/account/AccountYourView.vue'),
        },
        {
          path: 'decription',
          name: 'account-decription',
          component: () => import('../views/account/AccountDecriptionView.vue'),
        },
      ]
    },
    {
      path: '/account-pay',
      component: () => import('../views/account/AccountPaymentMainView.vue'),
      children: [
        {
          path: '',
          name: 'account-payment-main',
          component: () => import('../views/account/AccountPaymentView.vue'),
        },
        {
          path: 'apple-pay',
          name: 'account-payment-apple-pay',
          component: () => import('../views/account/AccountPaymentApplePayView.vue'),
        },
      ]
    },
    {
      path: '/number-management',
      name: 'number-management',
      component: () => import('../views/NumberManagementView.vue'),
    },
    {
      path: '/number-management/add',
      name: 'number-management-add',
      component: () => import('../views/NumberManagementAddNumberView.vue'),
    },
    {
      path: '/services',
      component: () => import('../views/services/ServicesMainView.vue'),
      children: [
        {
          path: '',
          name: 'services-settings',
          component: () => import('../views/services/ServicesSettingsView.vue'),
        },
        {
          path: 'connect',
          name: 'services-connect',
          component: () => import('../views/services/ServicesConnectView.vue'),
        },
        {
          path: 'social',
          name: 'services-social',
          component: () => import('../views/services/ServicesSocialView.vue'),
        }
      ]
    }
  ]
})

export default router

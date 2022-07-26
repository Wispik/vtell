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
          component: () => import('../views/dashboard/DashboardBillView.vue'),
          children: [
            {
              path: '',
              name: 'dashboard-bill',
              component: () => import('../views/dashboard/bill/DashboardBillItemizationView.vue')
            },
            {
              path: 'montly',
              name: 'dashboard-bill-montly',
              component: () => import('../views/dashboard/bill/DashboardBillMontlyView.vue')
            },
            {
              path: 'payment',
              name: 'dashboard-bill-payment',
              component: () => import('../views/dashboard/bill/DashboardBillPaymentView.vue')
            },
            {
              path: 'pay',
              name: 'dashboard-bill-pay',
              component: () => import('../views/dashboard/bill/DashboardBillPayView.vue')
            },
            {
              path: 'autopay',
              name: 'dashboard-bill-autopay',
              component: () => import('../views/dashboard/bill/DashboardBillAutoPayView.vue')
            },
            {
              path: 'reports',
              name: 'dashboard-bill-reports',
              component: () => import('../views/dashboard/bill/DashboardBillReportsView.vue')
            }
          ]
        },
        {
          path: 'services',
          component: () => import('../views/dashboard/DashboardServicesView.vue'),
          children: [
            {
              path: '',
              name: 'dashboard-services',
              component: () => import('@/views/dashboard/services/DashboardServicesAdminView.vue')
            },
            {
              path: 'plan',
              name: 'dashboard-services-plan',
              component: () => import('@/views/dashboard/services/DashboardServicesPlanView.vue')
            },
            {
              path: 'services',
              name: 'dashboard-services-services',
              component: () => import('@/views/dashboard/services/DashboardServicesServicesView.vue')
            },
            {
              path: 'call',
              name: 'dashboard-services-call',
              component: () => import('@/views/dashboard/services/DashboardServicesCallView.vue')
            }
          ]
        },
        {
          path: 'support',
          component: () => import('../views/dashboard/DashboardSupportView.vue'),
          children: [
            {
              path: '',
              name: 'dashboard-support',
              component: () => import('../views/dashboard/support/DashboardSupportInfoView.vue'),
            },
            {
              path: 'password',
              name: 'dashboard-support-password-change',
              component: () => import('../views/dashboard/support/DashboardSupportPasswordView.vue'),
            }
          ]
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
    },
    {
      path: '/checkout',
      component: () => import('../views/checkout/CheckoutMainView.vue'),
      children: [
        {
          path: '',
          name: 'checkout-main',
          component: () => import('../views/checkout/CheckoutConnectionView.vue'),
        },
        {
          path: 'transfer',
          name: 'checkout-transfer',
          component: () => import('../views/checkout/CheckoutTransferView.vue'),
        },
        {
          path: 'choose',
          name: 'checkout-choose',
          component: () => import('../views/checkout/CheckoutChooseView.vue'),
        },
        {
          path: 'cart',
          name: 'checkout-cart',
          component: () => import('../views/checkout/CheckoutCartView.vue'),
        }
      ]
    }
  ]
})

export default router

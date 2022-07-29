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
          meta: { breadTitle: 'Login — My Account' }
        },
        {
          path: 'bill',
          component: () => import('../views/dashboard/DashboardBillView.vue'),
          children: [
            {
              path: '',
              name: 'dashboard-bill',
              component: () => import('../views/dashboard/bill/DashboardBillItemizationView.vue'),
              meta: { breadTitle: 'Login — Bill — Itemization of Phone Calls' }
            },
            {
              path: 'montly',
              name: 'dashboard-bill-montly',
              component: () => import('../views/dashboard/bill/DashboardBillMontlyView.vue'),
              meta: { breadTitle: 'Login — Bill — Monthly Bill' }
            },
            {
              path: 'payment',
              name: 'dashboard-bill-payment',
              component: () => import('../views/dashboard/bill/DashboardBillPaymentView.vue'),
              meta: { breadTitle: 'Login — Bill — Payment History' }
            },
            {
              path: 'funds',
              name: 'dashboard-bill-funds',
              component: () => import('../views/dashboard/bill/DashboardBillAddFundsView.vue'),
              meta: { breadTitle: 'Login — Bill — Add Funds' }
            },
            {
              path: 'autopay',
              name: 'dashboard-bill-autopay',
              component: () => import('../views/dashboard/bill/DashboardBillAutoPayView.vue'),
              meta: { breadTitle: 'Login — Bill — Autopay Setup' }
            },
            {
              path: 'reports',
              name: 'dashboard-bill-reports',
              component: () => import('../views/dashboard/bill/DashboardBillReportsView.vue'),
              meta: { breadTitle: 'Login — Bill — Previously Ordered Reports' }
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
              component: () => import('@/views/dashboard/services/DashboardServicesAdminView.vue'),
              meta: { breadTitle: 'Login — Services — Admin Your Phone Numbers' }
            },
            {
              path: 'plan',
              name: 'dashboard-services-plan',
              component: () => import('@/views/dashboard/services/DashboardServicesPlanView.vue'),
              meta: { breadTitle: 'Login — Services — Plan Change' }
            },
            {
              path: 'services',
              component: () => import('@/views/dashboard/services/DashboardServicesServicesMainView.vue'),
              children: [
                {
                  path: '',
                  name: 'dashboard-services-services',
                  component: () => import('@/views/dashboard/services/DashboardServicesSettingsView.vue'),
                  meta: { breadTitle: 'Login — Services — Services — Settings' }
                },
                {
                  path: 'connect',
                  name: 'dashboard-services-services-connect',
                  component: () => import('@/views/dashboard/services/DashboardServicesConnectView.vue'),
                  meta: { breadTitle: 'Login — Services — Services — Connect with us' }
                },
                {
                  path: 'social',
                  name: 'dashboard-services-services-social',
                  component: () => import('@/views/dashboard/services/DashboardServicesSocialView.vue'),
                  meta: { breadTitle: 'Login — Services — Services — Social networks' }
                }
              ]
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
              meta: { breadTitle: 'Login — Support — Personal Info' }
            },
            {
              path: 'password',
              name: 'dashboard-support-password-change',
              component: () => import('../views/dashboard/support/DashboardSupportPasswordView.vue'),
              meta: { breadTitle: 'Login — Support — Change Password' }
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

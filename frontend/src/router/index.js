import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    // Helmut Brenner - Added Route for Login
    path: '/userlogin',
    name: 'userlogin',
    component: () => import('../components/userLogin.vue')
  },
  {
    // Afras Wadiwala - Added Route for Manage Services
    path: '/services',
    name: 'services',
    component: () => import('../components/services.vue')
  },
  {
    // Ability to add
    path: '/addService',
    name: 'addService',
    component: () => import('../components/addService.vue')
  },
  {
    // Ability to edit 
    path: '/editService/:id',
    name: 'editService',
    props: true,
    props: (route) => ({ id: route.params.id }),
    component: () => import('../components/editService.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

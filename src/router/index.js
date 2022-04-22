import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookingsListVue from '../views/bookings/BookingsList.vue'
import ViewBooking from '../views/bookings/ViewBooking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
    {
      path: '/bookings',
      component: BookingsListVue,
     
    },
    {
      path: '/bookings/:id',
      name:'ViewBooking',
      component: ViewBooking,
      props:true
    }
  ]
})

export default router

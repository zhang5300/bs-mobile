import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Class from '@/pages/Class'
import Sale from '@/pages/Sale'
import Trolley from '@/pages/Trolley'
import Mine from '@/pages/Mine'
import Membership from '@/pages/Membership'
import QRcode from '@/pages/QR-code'
import Team from '@/pages/Team'
import Commission from '@/pages/Commission'
import Encash from '@/pages/Encash'
import Apply from '@/pages/Apply'
import Commodity from '@/pages/Commodity'
import Balance from '@/pages/Balance'
import Address from '@/pages/Address'
import Buy from '@/pages/Buy'
import Pay from '@/pages/Pay'
import AddAddress from '@/pages/addAddress'
import Order from '@/pages/Order'
import OrderDetail from '@/pages/OrderDetail'
import Message from '@/pages/Message'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/sale',
      name: 'Sale',
      component: Sale
    },
    {
      path: '/trolley',
      name: 'Trolley',
      component: Trolley
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/membership',
      name: 'Membership',
      component: Membership
    },
    {
      path: '/qrcode',
      name: 'QR-code',
      component: QRcode
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/commission',
      name: 'Commission',
      component: Commission
    },
    {
      path: '/encash',
      name: 'Encash',
      component: Encash
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/commodity',
      name: 'Commodity',
      component: Commodity
    },
    {
      path: '/balance',
      name: 'Balance',
      component: Balance
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/addaddress',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/orderdetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }

  ]
})

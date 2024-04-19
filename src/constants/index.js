import { mastercard, paypal, visa } from '../assets'

const menus = [
  {
    id: 'promo',
    label: 'Promo',
    path: '/'
  },
  {
    id: 'about-us',
    label: 'About Us',
    path: '/'
  },
  {
    id: 'seller-centre',
    label: 'Seller Centre',
    path: '/'
  },
  {
    id: 'support',
    label: 'Support',
    path: '/'
  }
]

const payments = [
  {
    id: 'mastercard',
    label: 'Mastercard',
    number: '..1234',
    image: mastercard
  },
  { id: 'visa', label: 'Visa', number: '..5678', image: visa },
  { id: 'paypal', label: 'Paypal', number: '..9123', image: paypal }
]

export { menus, payments }

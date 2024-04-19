import { createSlice } from '@reduxjs/toolkit'

const loadCartFromStorage = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: loadCartFromStorage()
  },
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.products.find(
        (product) => product.id === action.payload.id
      )
      if (isItemInCart) {
        isItemInCart.quantity++
      } else {
        state.products.push(action.payload)
      }
      saveCartToStorage(state.products)
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

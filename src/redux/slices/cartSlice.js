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
    carts: loadCartFromStorage()
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.carts.find((item) => item.id === action.payload.id)
      if (cartItem) {
        cartItem.quantity++
      } else {
        state.carts.push(action.payload)
      }
      saveCartToStorage(state.carts)
    },
    increment: (state, action) => {
      const cartItem = state.carts.find((item) => item.id === action.payload.id)
      if (cartItem) {
        cartItem.quantity++
        saveCartToStorage(state.carts)
      }
    },
    decrement: (state, action) => {
      const cartItem = state.carts.find((item) => item.id === action.payload.id)
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--
        saveCartToStorage(state.carts)
      }
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload.id)
      saveCartToStorage(state.carts)
    }
  }
})

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions
export default cartSlice.reducer

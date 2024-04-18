import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [{ id: 1, qty: 1 }]
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

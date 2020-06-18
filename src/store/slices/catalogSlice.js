import { createSlice } from '@reduxjs/toolkit'

const catalogSlice = createSlice({
  name: 'catalog',
  reducers: {
    requestCatalog: state => {
      state.status = 'pending'
    },
    receiveCatalog: (state, action) => {
      state.status = !action.payload.error ? 'resolved' : 'rejected'
      state.products = action.payload.products
    }
  },
  initialState: {
    status: 'idle',
    error: false,
    products: []
  }
})

export const catalogReducer = catalogSlice.reducer
export const catalogThunks = catalogSlice.actions

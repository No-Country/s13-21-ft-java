import { configureStore } from '@reduxjs/toolkit'
import { firstSlice, secondSlice } from './slice'

export const store = configureStore({
  reducer: {
    value: firstSlice.reducer,
    otherValue: secondSlice.reducer
  }
})

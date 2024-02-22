import { createSlice } from '@reduxjs/toolkit'

export const firstSlice = createSlice({
  name: 'value',
  initialState: { myName: 'Jorge' },
  reducers: {
    saveMyName: (state, action) => {
      state.myName = action.payload
    }
  }
})

export const secondSlice = createSlice({
  name: 'otherValue',
  initialState: { points: 0 },
  reducers: {
    increasePoints: (state) => {
      state.points = state.points + 1
    }
  }
})

export const { saveMyName } = firstSlice.actions
export const { increasePoints } = secondSlice.actions

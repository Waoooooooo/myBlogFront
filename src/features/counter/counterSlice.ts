import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
interface CounterState {
  value: number
  name:string
}

const initialState: CounterState = {
  value: 1,
  name:"数字"
}

const counterSlice: any = createSlice({
  name: 'counter',
  initialState,
  reducers: {//存放了改变状态的哪部分?
    increment: state => {
      // 并不是真正的改变状态值，因为它使用了***** Immer 库
      state.value += 1
      state.name = "执行了加1的操作"
    },

    decrement: state => {
      state.value -= 1
      state.name = "执行了加1的操作"

    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

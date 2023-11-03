import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface UserState {
  id: number
  username: string
  password: string
  nickname: string
  lastOnlineTime: number | null
}

const initialState: UserState = {
  id: -1,
  username: "",
  password: "",
  nickname: "",
  lastOnlineTime: 0,
}

const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state , action: PayloadAction<UserState>)  => {

      let key : keyof UserState
      for ( key  in state) {
        state[key] = action.payload[key] as never
      }
      
    },
    logout:(state)  => {
      state =  {...initialState}
    },
  }
})


export const { login, logout } = userSlice.actions
export default userSlice.reducer

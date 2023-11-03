import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import userReducer from './features/user/userSlice'
let store =configureStore({
  reducer: {
    counter:counterReducer,
    user:userReducer,
  }

})

export default store


export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
//导出了 但是不方便  不如直接在根文件上修改

import { configureStore } from '@reduxjs/toolkit'
import counterReducers from "./slices/counter.slice"
import modalSlice, { IModal } from './slices/modal.slice'
export const store = configureStore({
  reducer: {
    counter: counterReducers,
    modal: modalSlice
  },
})
export interface IStore{
  counter: any
  modal: IModal
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
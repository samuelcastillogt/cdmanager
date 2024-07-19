import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IModal {
  value: boolean
  action: string
  text: string
}

const initialState: IModal = {
  value: false,
  action: "",
  text: ""
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    OPEN_MODAL: (state, action) => {
      state.value = true
      state.action = action.payload.action
      state.text= action.payload.text
    },
    CLOSE_MODAL: (state) =>{
      state.value = false
      state.action = ""
      state.text= ""
    }
  },
})

// Action creators are generated for each case reducer function
export const { OPEN_MODAL, CLOSE_MODAL } = ModalSlice.actions

export default ModalSlice.reducer
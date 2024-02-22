import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openprojectmodal: false,
    opencontactmodal: false

}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openProjectModal: (state) => {
        state.openprojectmodal = true
    },
    openContactModal: (state) => {
        state.opencontactmodal = true
    }
  }
});

export const { openContactModal, op } = modalSlice.actions

export default modalSlice.reducer
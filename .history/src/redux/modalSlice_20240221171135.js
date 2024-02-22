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
    },
    closeProjectModal: (state) => {
        state.openprojectmodal = false
    }, 
    closeContactModal: (state) => {
        state.opencontactmodal = false
    }
  }
});

export const { openContactModal, openProjectModal, close } = modalSlice.actions

export default modalSlice.reducer
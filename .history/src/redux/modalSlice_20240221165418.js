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
    openContactMod
  }
});

export const {} = modalSlice.actions

export default modalSlice.reducer
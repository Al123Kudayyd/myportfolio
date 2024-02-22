import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openprojectmodal: false,
    opencontactmodal: false

}

const modalSlice = createSlice({
  name: 'mod',
  initialState,
  reducers: {

  }
});

export const {} = modalSlice.actions

export default modalSlice.reducer
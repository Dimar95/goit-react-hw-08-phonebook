import { createSlice } from '@reduxjs/toolkit';
import { loginCurrentUser, loginUser, logoutUser, registerUser } from 'redux/operations/operations';


export const sliceUser = createSlice({
  name: 'userState',
  initialState: {
    token:'',
    user:{
      name: '',
      email:'',
      isLoading: false,
      error: null,
    }
  },

  reducers: {
  },

  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name
        state.user.email = action.payload.user.email
        state.token = action.payload.token
        state.user.isLoading = false;
      })
      .addCase(loginUser.pending, state => {
        state.user.isLoading = 'true';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.isLoading = false;
        state.user.error = action.payload;
      })

      .addCase(loginCurrentUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name
        state.user.email = action.payload.email
        state.user.isLoading = false;
      })
      .addCase(loginCurrentUser.pending, state => {
        state.user.isLoading = true;
      })
      .addCase(loginCurrentUser.rejected, (state, action) => {
        state.user.isLoading = false;
        state.user.error = action.payload;
      })

      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user.name = ''
        state.user.email = ''
        state.token = ''
        state.user.isLoading = false;
      })
      .addCase(logoutUser.pending, state => {
        state.user.isLoading = true;
      })
      .addCase(logoutUser.rejected, (state, {payload}) => {
        state.user.isLoading = false;
        state.user.error = payload;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name
        state.user.email = action.payload.user.email
        state.token = action.payload.token
        state.user.isLoading = false;
      })
      .addCase(registerUser.pending, state => {
        state.user.isLoading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user.isLoading = false;
        state.user.error = action.payload;
      })
  },
});

export const { OldaddContact, filterContacts } = sliceUser.actions;

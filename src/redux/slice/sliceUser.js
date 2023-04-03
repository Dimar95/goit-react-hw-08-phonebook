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
      isLogggedIn: false,
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
        state.user.isLogggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.error = action.payload;
      })


      .addCase(loginCurrentUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name
        state.user.email = action.payload.email
        state.user.isLoading = false;
        state.user.isLogggedIn = true;
      })
      .addCase(loginCurrentUser.pending, state => {
        state.user.isLoading = true;
      })
      .addCase(loginCurrentUser.rejected, (state, action) => {
        state.user.isLoading = false;
        state.user.error = action.payload;
      })


      .addCase(logoutUser.fulfilled, (state) => {
        state.user.name = ''
        state.user.email = ''
        state.token = ''
        state.user.isLogggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, {payload}) => {
        state.user.error = payload;
      })


      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name
        state.user.email = action.payload.user.email
        state.token = action.payload.token
        state.user.isLogggedIn = true;

      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user.error = action.payload;
      })
  },
});

export const { OldaddContact, filterContacts } = sliceUser.actions;

import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from 'redux/operations/operations';


export const sliceUser = createSlice({
  name: 'userState',
  initialState: {

    user:{
      name: '',
      email:'',
      token:'',
      isLoading: false,
      error: null,
    }
  },

  reducers: {
    // filterContacts(state, {payload}) {
    //   state.filter = payload;
    // },
  },

  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("🚀 ~ action:", action);
        state.user.name = action.payload.user.name
        state.user.email = action.payload.user.email
        state.user.token = action.payload.token
        state.user.isLoading = false;
      })
      .addCase(loginUser.pending, state => {
        state.user.isLoading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.isLoading = false;
        state.user.error = action.payload;
      });
  },
});

export const { OldaddContact, filterContacts } = sliceUser.actions;

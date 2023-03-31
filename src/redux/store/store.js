import { configureStore } from '@reduxjs/toolkit';
import { sliceUser } from 'redux/slice/sliceUser';
import { sliceContact } from '../slice/sliceContact';

export const store = configureStore({
  reducer: {
    phonebook: sliceContact.reducer,
    userState: sliceUser.reducer,

  },

});

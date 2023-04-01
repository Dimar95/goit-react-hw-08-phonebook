import { createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact,fetchContacts  } from 'redux/operations/operations';


export const sliceContact = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    filterContacts(state, {payload}) {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = 'fetchContacts';
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.contacts.isLoading = 'addContact';
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        )
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = 'deleteContact';
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

  },
});

export const { OldaddContact, filterContacts } = sliceContact.actions;

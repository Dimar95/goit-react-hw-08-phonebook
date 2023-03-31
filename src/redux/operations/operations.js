import {  createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

import {
  allContactsApi,
  addContactApi,
  deleteContactApi,
  loginUserApi,
} from '../contactsApi/contactsApi';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const contacts = await allContactsApi();
        return contacts;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (id, { rejectWithValue }) => {
      try {
        const contacts = await addContactApi(id);
        return contacts;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contact, { rejectWithValue }) => {
      try {
        const contacts = await deleteContactApi(contact);
        return contacts;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (UserObj, { rejectWithValue }) => {
      try {
        const user = await loginUserApi(UserObj);
        return user;
      } catch (error) {
        
        return rejectWithValue(error.message);
      }
    }
  );
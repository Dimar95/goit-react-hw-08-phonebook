import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import {
  loginUserApi,
  getContactsUserApi,
  addContactsUserApi,
  loginCurrentUserApi,
  deleteContactsUserApi,
  logoutUserApi,
  registerUserApi,
} from '../contactsApi/contactsApi';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContactsUserApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (objContact, { rejectWithValue }) => {
    try {
      const contacts = await addContactsUserApi(objContact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await deleteContactsUserApi(id);
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
      token.set(user.token);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (UserObj, { rejectWithValue }) => {
    try {
      const user = await registerUserApi(UserObj);
      token.set(user.token);
      console.log("🚀 ~ user:", user);

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loginCurrentUser = createAsyncThunk(
  'user/loginCurrentUser',
  async (userToken, { rejectWithValue }) => {
    try {
      token.set(userToken);
      const user = await loginCurrentUserApi();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUserApi',
  async (_, { rejectWithValue }) => {
    try {
      const user = await logoutUserApi();
      token.unset();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

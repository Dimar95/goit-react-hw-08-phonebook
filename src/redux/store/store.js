import { configureStore } from '@reduxjs/toolkit';
import { sliceUser } from 'redux/slice/sliceUser';
import { sliceContact } from '../slice/sliceContact';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedContacts = persistReducer(persistConfig, sliceUser.reducer);

export const store = configureStore({
  reducer: {
    userState: persistedContacts,
    phonebook: sliceContact.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
// export const store = configureStore({
//   reducer: {
//     phonebook: sliceContact.reducer,
//     userState: sliceUser.reducer,

//   },

// });

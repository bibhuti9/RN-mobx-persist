import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from '@reduxjs/toolkit';
  import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
  } from 'redux-persist';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  import likedTracksSlice from '../store/slice/likedTracks'
  
  const rootReducer = combineReducers({
    likedTracks: likedTracksSlice,
    
  });
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['likedTracks',],
    timeout: 0,
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
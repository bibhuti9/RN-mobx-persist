import {Instance, types} from 'mobx-state-tree';
import { userStore } from './store/user';
import { persist } from 'mst-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userAction } from './store/user/action';

export const Store = types
  .model('rootStore', {user: userStore,}).actions(userAction)
  export type StoreType = Instance<typeof Store>;
export const store = Store.create({});

persist('store', store, {
    storage: AsyncStorage,
    jsonify: true ,
    whitelist: ['user']  
  }).then(() => console.log('someStore has been hydrated'))
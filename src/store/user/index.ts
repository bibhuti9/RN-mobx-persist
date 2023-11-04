import {Instance, SnapshotIn, types} from 'mobx-state-tree';
export const user = types
  .model('userStore', {
    _id: types.string,
    displayName: types.maybeNull(types.string),
  })
  .views(user => ({
    get userUid(): string {
      return JSON.stringify(user);
    },
  }));

export const userStore = types.map(types.maybeNull(user));

export type userStoreSnapShot = SnapshotIn<typeof user>;
export type userStoreType = Instance<typeof user>;

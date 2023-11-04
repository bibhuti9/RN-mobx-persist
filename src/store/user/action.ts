import { StoreType } from "../..";



export function userAction({user}: StoreType) {
  async function setUser(object: {_id:string,displayName:string}) {
    console.log(object)
    await user.set(object._id, object);
  }
  function getUser() {
    const key = getUserUid();
    return user.get(key);
  }
  function getUserUid() {
    const iterator = user.keys();
    const result = iterator.next();
    return result.value;
  }
  return {setUser, getUser, getUserUid};
}

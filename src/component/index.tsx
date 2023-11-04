import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import useLike from '../../hooks/useLike';
import {useAppSelector} from '../../store/hooks';
import {store} from '..';
import {observer} from 'mobx-react';

function AsyncFunction() {
  const user = store.user;

  const {setLikeTracker} = useLike();
  const {likedTracks} = useAppSelector(globalState => globalState.likedTracks);

  const onPress = () => {
    // setLikeTracker('Fuck them');
    store.setUser({
      _id: 'rwkeljrwer',
      displayName: 'bibhuti',
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Text>{JSON.stringify(user)}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default observer(AsyncFunction);

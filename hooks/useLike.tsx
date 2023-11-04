import React from 'react';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../store/hooks';
import {likeTrack} from '../store/slice/likedTracks';

const useLike = () => {
  const dispatch = useDispatch();

  const {likedTracks} = useAppSelector(globalState => globalState.likedTracks);

  const setLikeTracker = (name: string) => {
    dispatch(likeTrack({name: name, userEmail: 'demo@gmail.com'}));
  };

  return {
    likedTracks,
    setLikeTracker,
  };
};

export default useLike;

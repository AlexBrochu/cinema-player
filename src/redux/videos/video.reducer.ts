import { AnyAction } from 'redux';
import VideoType from '../../types/video.types';
import { SELECT_VIDEO } from './video.types';

interface VideoState {
  video: VideoType
}


const INITIAL_STATE: VideoState = {
  video: {
    title:"",
    path: ""
  }, 
};

const videoReducer = (state = INITIAL_STATE,  action: AnyAction): VideoState => {
  switch (action.type) {
    case SELECT_VIDEO:
      return {
        ...state,
        video: action.payload
      }
    default:
      return state
  }
}

export default videoReducer
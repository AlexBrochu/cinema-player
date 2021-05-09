import {combineReducers} from 'redux'

import videoReducer from './videos/video.reducer'

const rootReducer = combineReducers({
  video: videoReducer,
})

export default rootReducer
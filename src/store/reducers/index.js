import {combineReducers} from 'redux'
import apiReducer from './api'
import videoReducer from './videos'

export default combineReducers({
  api: apiReducer,
  videos: videoReducer,
})
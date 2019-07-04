import { combineReducers } from 'redux'
import * as Actiontype from './actionTypes.js'
// 默认值
const initialState = {
  showStatus: false,
  song: {}, // current 播放的歌
  songs: []
}
/**
 * {type: 'SHOW_PLAYER', showStatus: true}
 * {type: 'SHOW_PLAYER', showStatus: false}
 */
// 纯函数  不依赖于参数除外的任何东西
function showStatus(showStatus = initialState.showStatus, action) {
  switch(action.type) {
    case Actiontype.SHOW_PLAYER:
      return action.showStatus
    default:
      return showStatus
  }
} 
// 改变歌曲
/**
 * {type:'CHANGE_SONG', song: {}}
 * 传入的东西
 * type
 * payload 载客
 */
function song(song = initialState.song, action) {
  switch(action.type) {
    case Actiontype.CHANGE_SONG:
      return action.song
    default:
      return song
  }
}

export default combineReducers({
  showStatus,
  song
})

// 使用 combineReducers 组合所有的reducer 然后抛出
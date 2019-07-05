import { connect } from 'react-redux'
import Player from '../components/player/Player'
import { showplayer } from '../redux/action'
const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}
// dispatch 只有两个 type payload
const mapDispatchToProps = (dispatch) => {
  return {
    showMusicPlayer: (status) => {
      dispatch(showplayer(status))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
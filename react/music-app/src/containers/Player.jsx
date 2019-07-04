import { connect } from 'react-redux'
import Player from '../components/player/Player'

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}

export default connect(mapStateToProps)(Player)
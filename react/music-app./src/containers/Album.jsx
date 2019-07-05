import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSong } from '../redux/action'
import Album from '../components/album/Album'
// container component

/**
 *  在一起就叫做 container
 * container component
 * 挪到 另外的组件中 就叫做 pure
 * pure component
 */
// const mapStateToProps = (state) => {

// }
const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSong: (song) => {
      dispatch(changeSong(song))
    }
  }
}
export default connect(null, mapDispatchToProps)(Album)
// export default Album

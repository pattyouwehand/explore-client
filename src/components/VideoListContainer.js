import React from 'react'
import { connect } from 'react-redux'
import VideoList from './VideoList'

class VideoListContainer extends React.Component {
  

  render() {
    return (
      <VideoList videos={this.props.videos} />
    )
  }
}

function mapStateToProps (state) {
  return { 
    videos: state.videos
   }
}

export default connect(mapStateToProps)(VideoListContainer)
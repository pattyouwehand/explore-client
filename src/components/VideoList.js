import React from 'react'

export default class VideoList extends React.Component {

  render(){
    const videos = this.props.videos.map(video =>
      <div key={video.id}>
        <h3>{video.title}</h3>
        <img src={video.url} alt={video.description}></img>
      </div>)
    
  return(
    <div>
        {videos}
    </div>
  )}}
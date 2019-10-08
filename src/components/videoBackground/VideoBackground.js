import React from 'react';
import VideoCover from 'react-video-cover'

class VideoBackground extends React.Component {
  state = {
      resizeNotifier: () => {},
    }
  render() {
      const videoOptions = {
        //src: '/HeaderVideo.mp4',
        src: 'https://pixabay.com/videos/id-19799/',
        autoPlay: true,
        loop: true,
        muted: true
      };
      const style = {
        width: '150vw',
        height: '150vh',
        position: 'fixed',
        margin: 'auto',
        top: '-25vh',
        left: '-25vw',
        zIndex: -2,
      };
  return (
        <div style={style} >
          <VideoCover
            videoOptions={videoOptions}
            remeasureOnWindowResize
            getResizeNotifier={resizeNotifier => {
              this.setState({
                resizeNotifier,
              });
            }}
          />
        </div>
      );
    }
  }
  export default VideoBackground;
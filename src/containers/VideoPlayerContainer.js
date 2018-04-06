import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = (component) => {
  return connect(mapStateToProps)(component);
};

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
  }
};

export default VideoPlayerContainer(VideoPlayer);

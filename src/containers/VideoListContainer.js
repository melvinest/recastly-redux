import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
};

const mapStateToProps = (state) => {
  return { videos:  state.videoList};
};

const mapDispatchToProps = { handleVideoListEntryTitleClick: changeVideo };

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer(VideoList);

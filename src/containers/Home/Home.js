import React from 'react'
import {connect} from "react-redux"
import * as videoActions from "../../store/actions/video"
import {bindActionCreators} from 'redux'
import {getYoutubeLibraryLoaded} from '../../store/reducers/api'
import {SideBar} from '../SideBar/SideBar'
import {getVideoCategoryIds} from '../../store/reducers/videos'
import HomeContent from './HomeContent/HomeContent'

class Home extends React.Component {
  state = {categoryIndex:0}

  componentDidUpdate = (prevProps) => {
    console.log('componentdidupdate', this.props, prevProps)
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      console.log('componentDidUpdate - youtubeLibraryLoaded')
      this.props.fetchMostPopularVideos()
      ///this.fetchCategoriesAndMostPopularVideos();
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
      console.log('componentDidUpdate - videoCategories')
      this.fetchVideosByCategory();
    }
  }

  fetchVideosByCategory() {
    console.log('fetchVideosByCategory')
    const categoryStartIndex = this.state.categoryIndex;
    const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
    this.props.fetchMostPopularVideosByCategory(categories);
    this.setState(prevState => {
      return {
        categoryIndex: prevState.categoryIndex + 3,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <HomeContent/>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state)
  }
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request
  const fetchVideoCategories = videoActions.categories.request
  const fetchMostPopularVideosByCategory = videoActions.mostPopularByCategory.request
  return bindActionCreators({fetchMostPopularVideos, fetchVideoCategories, fetchMostPopularVideosByCategory}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
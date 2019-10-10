import {fork, take, takeEvery, call, all, put} from 'redux-saga/effects'
import * as api from '../api/youtube-api'
import * as videoActions from '../actions/video'
import {REQUEST} from '../actions'
import {fetchEntity, ignoreErrors} from './index'

export function* fetchMostPopularVideosByCategory(categories) {
  console.log('fetchMostPopularVideosByCategory')
  const requests = categories.map(category => {
    const wrapper = ignoreErrors(api.buildMostPopularVideosRequest, 12, false, null, category);
    return call(wrapper);
  });
  try {
    const response = yield all(requests);
    yield put(videoActions.mostPopularByCategory.success(response, categories));
  } catch (error) {
    yield put(videoActions.mostPopularByCategory.failure(error));
  }
}

export function* fetchMostPopularVideos(amount, loadDescription, nextPageToken) {
  console.log('fetchMostPopularVideos')
  const request = api.buildMostPopularVideosRequest.bind(null, amount, loadDescription, nextPageToken);
  yield fetchEntity(request, videoActions.mostPopular);
}

export function* watchMostPopularVideos() {
  console.log('watchMostPopularVideos')
  while (true) {
    console.log('watchMostPopularVideos while')
    const {amount, loadDescription, nextPageToken} = yield take(videoActions.MOST_POPULAR[REQUEST]);
    console.log('watchMostPopularVideos', amount, loadDescription, nextPageToken)
    yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
  }
}

export function* watchMostPopularVideosByCategory() {
  console.log('watchMostPopularVideosByCategory')
  while(true) {
    const {categories} = yield take(videoActions.MOST_POPULAR_BY_CATEGORY[REQUEST]);
    yield fork(fetchMostPopularVideosByCategory, categories);
  }
}

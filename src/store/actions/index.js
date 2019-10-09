import request from 'superagent'
export const ALL_IMAGES = 'ALL_VIDEOS'
const baseUrl = 'http://localhost:4000'

function allImages (payload) {
  return {
    type: ALL_VIDEOS,
    payload
  }
}
export const getVideos = () => (dispatch, getState) => {
  const state = getState()
  const { videos } = state

  if (!videos.length) {
    request(`${baseUrl}/videos`)
      .then(response => {
        const action = allVideos(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}
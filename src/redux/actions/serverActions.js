import { axiosWithAuth } from '../../helpers/axiosWithAuth'
import constants from '../constants'

export const storeLogin = (userId) =>  { 
  return {type: constants.STORE_LOGIN, payload: userId}
}

export const getUserPosts = (userID) => (dispatch) => {
  dispatch({ type: constants.GETTING_USER_POSTS })
  axiosWithAuth().get(`/posts/${userID}/user`)
    .then( res => {
      console.log(res)
      dispatch({ type: constants.GOT_USER_POSTS, payload: res.data})
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: constants.ERROR_GETTING_POSTS, payload: err })
    })
}

export const getAllPosts = () => dispatch => {

  axiosWithAuth().get('/posts')
    .then( res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err)
    })
}

export const saveNewPost = (postInfo) => dispatch => {
  dispatch({ type: constants.SAVING_NEW_POST })
  axiosWithAuth().post('/api/posts', postInfo)
    .then( res => {
      console.log(res)
      dispatch({ type: constants.SAVED_NEW_POST, payload: postInfo })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: constants.S})
    })
}
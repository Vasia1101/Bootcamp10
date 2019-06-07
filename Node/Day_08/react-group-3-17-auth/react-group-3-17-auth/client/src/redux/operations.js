import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  refreshUserStart,
  refreshUserSuccess
} from './actions';
import * as selectors from './selectors';

axios.defaults.baseURL = 'http://localhost:4040';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());

  axios
    .post('/auth/signup', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);

      dispatch(signUpSuccess(data));
    })
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post('/auth/signin', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(signInSuccess(data));
    })
    .catch(error => dispatch(signInError(error)));
};

export const signOut = () => dispatch => {
  dispatch(signOutRequest());

  axios.post('/auth/signout').then(() => {
    clearAuthHeader();
    dispatch(signOutSuccess());
  });
};

export const refreshCurrentUser = () => (dispatch, getState) => {
  const token = selectors.getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  dispatch(refreshUserStart());

  axios
    .get('/auth/current')
    .then(({ data }) => dispatch(refreshUserSuccess(data.user)))
    .catch(error => {
      // dispach екшен чтобы убрать токен из state
      clearAuthHeader();
      console.log('Error while refreshing: ', error);
    });
};

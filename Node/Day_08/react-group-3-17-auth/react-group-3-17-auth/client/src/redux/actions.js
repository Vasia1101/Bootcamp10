export const actionTypes = {
  REGISTER_REQUEST: 'session/REGISTER',
  REGISTER_SUCCESS: 'session/REGISTER',
  REGISTER_ERROR: 'session/REGISTER',
  SIGN_IN_REQUEST: 'session/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'session/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'session/SIGN_IN_ERROR',
  SIGN_OUT_REQUEST: 'session/SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS: 'session/SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR: 'session/SIGN_OUT_ERROR',
  REFRESH_CURRENT_USER_START: 'session/REFRESH_CURRENT_USER_START',
  REFRESH_CURRENT_USER_SUCCESS: 'session/REFRESH_CURRENT_USER_SUCCESS'
};

export const refreshUserStart = () => ({
  type: actionTypes.REFRESH_CURRENT_USER_START
});

export const refreshUserSuccess = user => ({
  type: actionTypes.REFRESH_CURRENT_USER_SUCCESS,
  payload: {
    user
  }
});

export const registerRequest = () => ({
  type: actionTypes.REGISTER_REQUEST
});

export const registerSuccess = data => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: data
});

export const registerError = error => ({
  type: actionTypes.REGISTER_ERROR,
  payload: {
    error
  }
});

export const signInRequest = () => ({
  type: actionTypes.SIGN_IN_REQUEST
});

export const signInSuccess = data => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: data
});

export const signInError = error => ({
  type: actionTypes.SIGN_IN_ERROR,
  payload: {
    error
  }
});

export const signOutRequest = () => ({
  type: actionTypes.SIGN_OUT_REQUEST
});

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS
});
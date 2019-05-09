// import shortid from 'shortid';
import types from './noteActionTypes';

// const deleteNote = id => ({
//   type: types.DELETE,
//   payload: id,
// });

const toggleNote = id => ({
  type: types.TOGGLE_COMPLETED,
  payload: id,
});

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: types.FETCH_SUCCSESS,
  payload: notes,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const addNoteSeccsess = note => ({
  type: types.ADD_SUCCSESS,
  payload: note,
});

const deleteNoteSeccsess = id => ({
  type: types.DELETE_SUCCSESS,
  payload: id,
});

export default {
  toggleNote,
  changeFilter,
  fetchSuccess,
  fetchRequest,
  fetchError,
  addNoteSeccsess,
  deleteNoteSeccsess,
};
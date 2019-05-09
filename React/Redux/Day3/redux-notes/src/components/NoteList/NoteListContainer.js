import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteList from './NoteList';

// import { getItems } from '../../modules/notes/notesSelectors';
// import { deleteNote } from '../../modules/notes/notesActions';

import {
  notesActions,
  notesSelectors,
  notesOperation,
} from '../../modules/notes';

class NoteListContainer extends Component {
  componentDidMount() {
    this.props.fetchNote();
  }
  render() {
    return <NoteList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  notes: notesSelectors.getVisibleNotes(state),
});

const mapDispatchToProps = {
  fetchNote: notesOperation.fetchNotes,
  deleteNote: notesOperation.deleteNote,
  toggleNote: notesActions.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);

import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';

import { notesOperation } from '../../modules/notes';

const mapDispatchToProps = { addNote: notesOperation.addNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);

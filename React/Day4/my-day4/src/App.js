import React, { Component } from 'react';
import SingupForm from './SingupForm';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import v4 from 'uuid/v4';
import './App.css';

const FilterNotes = (filter, notes) => {
  return notes.filter(note => 
    note.text.toLowerCase().includes)
}
class App extends Component {
  state = {
    notes: [{id:'1', text:'some text'}, {id:'2', text:'some text'}, {id:'3', text:'some text'}]
  };
  handleAddNote = text => {
this.setState(prevState => ({
  notes: [{id:v4(), text},...prevState.notes]
}))

  }
  handleDeleteNote = id => {
    this.setState(prevState => ({
        notes: prevState.notes.filter(note => id !== note.id)
    }));
};
handleFilterChange = e => {
  this.setState(prevState => ({
      notes: prevState.notes.filter(note => id !== note.id)
  }));
};
  render() {
    const {notes, filter} = this.state;
    
    return (
      <div className="App">
        <SingupForm/>
        <NoteEditor onSubmint={this.handleAddNote}/>
        <NoteFilte filter={filter} onFilterChange={this.handleFilterChange}/>
        <NoteList notes={notes} onDeleteNote={this.handleDeleteNote}/>
      </div>
    );
  }
}

export default App;

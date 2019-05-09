import React from 'react';


const NoteList = ({notes, onDeleteNote})=>(
    <ul>
        {notes.map(({id, text}) => (
                <li key={id}> <button onClick={() => onDeleteNote(id)}>X</button><span>{text}</span></li>
            ))
        }
        </ul>
)

export default NoteList;
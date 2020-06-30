import React, { useContext, useEffect } from 'react';
import ListItem from './ListItem';
import { AppContext } from '../../../context/AppContext';

function ListArea() {
  const { fetchRequest, deleteRequest, state } = useContext(AppContext);
  const { notes } = state;

  useEffect(() => {
    fetchRequest();
  }, []);

  // const deletingItem = async (param) => {
  //   await deleteRequest(param);
  //   await console.log(param);
  // };

  return (
    <div className='list-area'>
      <ul className='list'>
        {notes.map((note) => (
          // <li key={note.id || note.name}>
          //   <h2>{note.name}</h2>
          //   <p>{note.description}</p>
          //   <button onClick={() => deleteRequest(note)}>Delete Note</button>
          //   {note.image && <img src={note.image} style={{ width: 400 }} />}
          // </li>
          <ListItem
            key={note.id || note.name}
            note={note}
            handleDelete={deleteRequest}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListArea;

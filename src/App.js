import React from // { useState, useEffect }
'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import './stylesheets/styles.scss';
// import { API, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
// import { listNotes } from './graphql/queries';
// import {
//   createNote as createNoteMutation,
//   deleteNote as deleteNoteMutation,
// } from './graphql/mutations';

import AppContextProvider from './context/AppContext';

// const initialFormSate = {
//   name: '',
//   description: '',
// };

function App() {
  // const [notes, setNotes] = useState([]);
  // const [formData, setFormData] = useState(initialFormSate);

  /* On load fetch data */
  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // /* Send a query to GraphQL API and retrieve a list of notes */
  // async function fetchNotes() {
  //   const apiData = await API.graphql({
  //     query: listNotes,
  //   });
  //   const notesFromApi = apiData.data.listNotes.items;
  //   await Promise.all(
  //     notesFromApi.map(async (note) => {
  //       if (note.image) {
  //         const image = await Storage.get(note.image);
  //         note.image = image;
  //       }
  //       return note;
  //     })
  //   );
  //   /* Update the fetchNotes function to fetch an image if there is an image associated with a note: */
  //   setNotes(apiData.data.listNotes.items);
  // }

  // /* Send mutation to GraphQL API to create a new note */
  // async function createNote() {
  //   if (!formData.name || !formData.description) return;
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: formData },
  //   });
  //   if (formData.image) {
  //     const image = await Storage.get(formData.image);
  //     formData.image = image;
  //   }
  //   setNotes([...notes, formData]);
  //   setFormData(initialFormSate);
  // }

  // /* Send mutation to GraphQL API to delete a note */
  // async function deleteNote({ id }) {
  //   const newNotesArray = notes.filter((note) => note.id !== id);
  //   setNotes(newNotesArray);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }

  // async function handleChange(e) {
  //   if (!e.target.files[0]) return;
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, image: file.name });
  //   await Storage.put(file.name, file);
  //   fetchNotes();
  // }

  return (
    <AppContextProvider>
      <>
        <div className='App'>
          <Header />
          <Main />
          {/* <main className='main-section'>
          <div className='form-fields'>
            <input
              className='field'
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder='Note name'
              value={formData.name}
            />
            <input
              className='field'
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder='Note description'
              value={formData.description}
            />
            <input type='file' onChange={handleChange} />
            <button className='btn' onClick={createNote}>
              Create Note
            </button>
          </div>
          <ul className='notes'>
            {notes.map((note) => (
              <li key={note.id || note.name}>
                <h2>{note.name}</h2>
                <p>{note.description}</p>
                <button onClick={() => deleteNote(note)}>Delete Note</button>
                {note.image && <img src={note.image} style={{ width: 400 }} />}
              </li>
            ))}
          </ul>
        </main> */}
        </div>
        {/* <GlobalStyles /> */}
      </>
    </AppContextProvider>
  );
}

export default withAuthenticator(App);

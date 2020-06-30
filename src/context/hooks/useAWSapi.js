import { useCallback, useReducer } from 'react';
import reducer, { initialState } from '../reducer/reducers';
import { setList, setFormData } from '../reducer/actions/actionCreators';

/* AWS */
import { API, Storage } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from '../../graphql/mutations';

const useAWSapi = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* FACTORIES */

  /* Send a query to GraphQL API and retrieve a list of notes */
  const fetchRequest = useCallback(async () => {
    const apiData = await API.graphql({
      query: listNotes,
    });
    const notesFromApi = apiData.data.listNotes.items;
    await Promise.all(
      notesFromApi.map(async (note) => {
        if (note.image) {
          const image = await Storage.get(note.image);
          note.image = image;
        }
        return note;
      })
    );

    /* Update the fetchNotes function to fetch an image if there is an image associated with a note: */
    dispatch(setList(apiData.data.listNotes.items));
  }, []);

  const handleFormData = useCallback(
    ({ name, description, image }) => {
      const { formData } = state;
      const newFormData = {
        ...formData,
        name,
        description,
        image,
      };
      dispatch(setFormData(newFormData));
      console.log(formData);
    },
    [state]
  );

  /* Send mutation to GraphQL API to create a new note */
  const createRequest = useCallback(async () => {
    const { notes, formData } = state;
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createNoteMutation,
      variables: { input: formData },
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }

    await dispatch(setList([...notes, formData]));
    await handleFormData(initialState.formData);
    // dispatch(setFormData(initialState.formData));
    await console.log(`Submitting: ${state}`);
  }, [handleFormData, state]);

  /* Send mutation to GraphQL API to delete a note */
  const deleteRequest = useCallback(
    async ({ id }) => {
      const { notes } = state;
      const newNotesArray = notes.filter((note) => note.id !== id);
      dispatch(setList(newNotesArray));
      await API.graphql({
        query: deleteNoteMutation,
        variables: { input: { id } },
      });
      console.log('Deleting');
    },
    [state]
  );

  const fileUpload = useCallback(
    async (e) => {
      const { formData } = state;
      if (!e.target.files[0]) return;
      const file = e.target.files[0];
      await handleFormData({ ...formData, image: file.name });
      // await dispatch(setFormData({ ...formData, image: file.name }));
      await Storage.put(file.name, file);
      await fetchRequest();
    },
    [fetchRequest, handleFormData, state]
  );

  return {
    state,
    fetchRequest,
    handleFormData,
    createRequest,
    deleteRequest,
    fileUpload,
  };
};

export default useAWSapi;

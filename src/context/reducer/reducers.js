import { SET_LIST, SET_FORM_DATA } from './actions/actionTypes';

export const initialState = {
  notes: [],
  formData: {
    name: '',
    description: '',
    image: '',
  },
};

const reducer = (state, { type, list, formdata }) => {
  switch (type) {
    case SET_LIST:
      return {
        ...state,
        notes: list,
      };
    case SET_FORM_DATA:
      return {
        ...state,
        formData: formdata,
      };
    default:
      return state;
  }
};

export default reducer;

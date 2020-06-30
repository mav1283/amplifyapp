import { SET_LIST, SET_FORM_DATA } from './actionTypes';

const setList = (param) => {
  return {
    type: SET_LIST,
    list: param,
  };
};

const setFormData = (param) => {
  return {
    type: SET_FORM_DATA,
    formdata: param,
  };
};

export { setList, setFormData };

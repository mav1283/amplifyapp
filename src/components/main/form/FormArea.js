import React, { useContext } from 'react';

import { AppContext } from '../../../context/AppContext';

function FormArea() {
  const { state, handleFormData, createRequest, fileUpload } = useContext(
    AppContext
  );

  const { formData } = state;

  const handleFormfield = async ({ target }) => {
    const { name, value } = target;
    await handleFormData({ ...formData, [name]: value });
  };

  // const resetFields = ()=>{

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    createRequest();
  };

  return (
    <div className='form-area'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Note name'
          onChange={handleFormfield}
          value={formData.name}
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          onChange={handleFormfield}
          value={formData.descriptioon}
        />
        <input type='file' onChange={fileUpload} />
        <button type='submit'>Create a note</button>
      </form>
    </div>
  );
}

export default FormArea;

import React from 'react';

function ListItem({ note, handleDelete }) {
  const { name, description, image } = note;
  return (
    <li className='list-item'>
      <div className='list-details'>
        <h2>{name}</h2>
        <p>{description}</p>
        {image && <img src={image} alt={description} />}
      </div>
      <div className='list-cta'>
        <button onClick={() => handleDelete(note)}>Delete Note</button>
      </div>
    </li>
  );
}

export default ListItem;

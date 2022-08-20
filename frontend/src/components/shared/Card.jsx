import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, poster }) => {
  return (
    <Link to={`movies/${id}`}>
      <div className='card rounded  w-28 md:w-48 truncate mx-2 '>
        <button className='flex justify-center right-0 top-1 px-2 text-slate-500 absolute hover:text-sky-600 text-3xl md:text-4xl'></button>
        <img
          className='object-cover rounded-xl shadow-md shadow-black'
          src={poster}
          alt={title}
        />
      </div>
    </Link>
  );
};

export default Card;

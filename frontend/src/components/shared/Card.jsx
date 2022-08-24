import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBookmark } from '@fortawesome/pro-solid-svg-icons';
import { faBookmark as falStar } from '@fortawesome/pro-regular-svg-icons';

const Card = ({ id, title, poster }) => {
  return (
    <Link to={`movies/${id}`}>
      <div className='card rounded  w-28 md:w-48 truncate mx-2 '>
        <button className='flex justify-center right-0 top-1 px-2 text-slate-500 absolute hover:text-sky-600 text-3xl md:text-4xl'>
          <FontAwesomeIcon icon={faBookmark} />
          <FontAwesomeIcon
            icon={faPlus}
            className='text-white absolute text-base top-1.5'
          />
        </button>
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

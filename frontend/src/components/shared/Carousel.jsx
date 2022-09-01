import { memo } from 'react';
import Card from './Card';
import useFetch from '../../hooks/useFetch';
const posterPath = 'https://image.tmdb.org/t/p/w200';

const Carousel = ({ title, url }) => {
  const { data, error, isLoading } = useFetch(url);

  const n = 16; // Or something else

  const skeleton = (
    <>
      <div className='pl-2 pb-2 text-white text-xl md:text-2xl animate-pulse bg-slate-500 mb-4 rounded-5 w-60 h-8'></div>
      <div className='flex-1 rounded-none  carousel carousel-end rounded-box'>
        {[...Array(n)].map((e, i) => (
          <div className='carousel-item'>
            <div className='card rounded-1  w-28 md:w-40 h-60 truncate mx-2 animate-pulse  bg-slate-500'></div>
          </div>
        ))}
      </div>
    </>
  );

  const loaded = (
    <>
      <h2 className='pl-2 pb-2 font-bold text-white text-xl md:text-2xl'>
        {title}
      </h2>
      <div className='flex-1 rounded-none  carousel carousel-end rounded-box'>
        {data.map((movie) => (
          <div className='carousel-item'>
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={`${posterPath}${movie.poster_path} `}
            />
          </div>
        ))}
      </div>
    </>
  );

  return <div className='mb-8'>{isLoading ? skeleton : loaded}</div>;
};

export default Carousel;

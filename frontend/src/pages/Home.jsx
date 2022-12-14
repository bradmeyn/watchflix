import Carousel from '../components/shared/Carousel';
import background from '../assets/background.webp';

const API_KEY = process.env.REACT_APP_API_KEY;

const params = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-AU',
});

const Home = () => {
  const year = Math.floor(Math.random() * 51) + 1970;
  const collections = [
    {
      title: 'Popular Now',
      url: `https://api.themoviedb.org/3/trending/movie/week?${params}`,
    },
    {
      title: 'Top Rated of All Time',
      url: `https://api.themoviedb.org/3/movie/top_rated?${params}`,
    },
    {
      title: `Biggest Movies of ${year - 1}`,
      url: `https://api.themoviedb.org/3/discover/movie?${params}&primary_release_year=${
        year - 1
      }&sort_by=revenue.desc`,
    },
    {
      title: `Biggest Movies of ${year}`,
      url: `https://api.themoviedb.org/3/discover/movie?${params}&primary_release_year=${year}&sort_by=revenue.desc`,
    },
    {
      title: `Biggest Movies of ${year + 1}`,
      url: `https://api.themoviedb.org/3/discover/movie?${params}&primary_release_year=${
        year + 1
      }&sort_by=revenue.desc`,
    },
  ];

  return (
    <>
      <div
        className='text-left py-10 md:py-15 px-6 bg-cover bg-no-repeat bg-top mb-10 '
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
        }}
      >
        <h1 className='mb-5 text-4xl md:text-7xl font-extrabold text-white text-left opacity-100'>
          <div className=''>Browse less.</div>
          <div className=''>Watch more.</div>
        </h1>
      </div>

      {collections.map((collection) => (
        <Carousel title={collection.title} url={`${collection.url}`} />
      ))}
    </>
  );
};

export default Home;

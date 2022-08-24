import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import User from './pages/User';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className='min-h-screen  '>
      <Navbar />
      <main className=' mx-auto h-full  '>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/user' element={<User />} />
          <Route path='/movies/:movieId' element={<MovieDetail />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

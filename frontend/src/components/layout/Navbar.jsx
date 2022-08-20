import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import Search from '../shared/Search';

const Navbar = () => {
  return (
    <nav className='navbar bg-base-300 px-3'>
      <div className='flex container w-full mx-auto justify-between'>
        <Link to='/' className='text-white align-middle flex items-center'>
          <div className=''>
            <img src={logo} alt='' className='w-32' />
          </div>
        </Link>
        <Search />
        <Link
          to='/user'
          className='hover:text-white align-middle flex items-center'
        ></Link>
      </div>
    </nav>
  );
};

export default Navbar;

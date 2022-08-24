import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/pro-light-svg-icons';

import Search from '../shared/Search';

const Navbar = () => {
  return (
    <nav className='navbar bg-base-300 px-3'>
      <div className='flex md:justify-between container w-full mx-auto justify-between'>
        <Link to='/' className='text-white align-middle flex items-center'>
          <div className=''>
            <img src={logo} alt='' className='w-32' />
          </div>
        </Link>
        <Search />
        <Link
          to='/user'
          className='hover:text-white align-middle flex items-center'
        >
          <FontAwesomeIcon icon={faCircleUser} className='text-3xl  mr-2' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

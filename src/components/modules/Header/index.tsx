import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuthState, useLogout } from '../../../hooks/redux';

const Header = () => {
  const { account } = useAuthState();
  const logout = useLogout();

  return (
    <div className='p-3 bg-primary'>
      <div className='flex justify-end'>
        <div
          className='flex items-center space-x-2 cursor-pointer'
          onClick={logout}
        >
          <FaSignOutAlt className='text-white' />
          <span className='text-xl font-bold'>
            {account?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

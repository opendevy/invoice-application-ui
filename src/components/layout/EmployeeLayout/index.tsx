import React, { FC, ReactNode } from 'react';
import EmployeeHeader from '../../modules/EmployeeHeader';

interface IEmployeeLayoutProps {
  children: ReactNode;
}

const EmployeeLayout: FC<IEmployeeLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <EmployeeHeader />
      <div className='flex-grow container mx-auto mt-6'>
        {children}
      </div>
    </div>
  );
};

export default EmployeeLayout;

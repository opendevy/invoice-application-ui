import React, { FC } from 'react';
import { UserModel } from '../../../../../resources/models';
import { Link } from 'react-router-dom';

interface IEmployeeItemProps {
  employeeData: UserModel;
}

const EmployeeItem: FC<IEmployeeItemProps> = ({ employeeData }) => {
  return (
    <div className='rounded-lg p-4 group bg-gray-400 cursor-pointer relative hover:shadow-xl hover:scale-y-125'>
      <Link to={`/employees/${employeeData._id}`}>
        <h3>
          {employeeData.name}
        </h3>
      </Link>
    </div>
  );
};

export default EmployeeItem;

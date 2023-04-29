import React, { FC } from "react";
import { EmployeeModel } from "../../../../resources/models";
import { FaEdit } from "react-icons/fa";
import {Link} from "react-router-dom";

interface IEmployeeItemProps {
  employeeData: EmployeeModel;
}

const EmployeeItem: FC<IEmployeeItemProps> = ({ employeeData }) => {
  return (
    <div className="rounded-lg p-4 group bg-gray-400 cursor-pointer relative hover:shadow-xl hover:scale-y-125">
      <Link to={`/employees/${employeeData._id}`}>
        <h3>
          {employeeData.name}
        </h3>
      </Link>
      {/*<div className="absolute inset-0 rounded-lg w-full h-0 group-hover:h-full group-hover:bg-black opacity-30 flex items-center justify-center" />*/}
    </div>
  );
};

export default EmployeeItem;

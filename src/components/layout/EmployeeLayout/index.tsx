import React, { FC, ReactNode } from "react";

interface IEmployeeLayoutProps {
  children: ReactNode;
}

const EmployeeLayout: FC<IEmployeeLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="container mx-auto mt-6">
        {children}
      </div>
    </div>
  );
};

export default EmployeeLayout;

import React, { FC, ReactNode } from 'react';
import Sidebar from "../../modules/Sidebar";
import Header from "../../modules/Header";

interface IFullLayoutProps {
  children: ReactNode;
}

const FullLayout: FC<IFullLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="p-3 flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullLayout;

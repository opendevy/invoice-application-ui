import React, {FC, ReactNode} from 'react';

interface IFullLayoutProps {
  children: ReactNode;
}

const FullLayout: FC<IFullLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default FullLayout;

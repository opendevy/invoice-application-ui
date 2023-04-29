import React, {FC, ReactNode} from 'react';

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AuthLayout;

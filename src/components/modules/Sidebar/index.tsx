import React, {useEffect, useState} from "react";
import {useAuthState} from "../../../hooks/redux";
import { managerSidebarItems, accountantSidebarItems, employeeSidebarItems } from "../../../constants";
import {Link, useLocation} from "react-router-dom"

const Sidebar = () => {
  const { account } = useAuthState();
  const { pathname } = useLocation();
  const [sidebarItems, setSidebarItems] = useState<any[]>([]);

  useEffect(() => {
    if (account) {
      switch (account.permission) {
        case 'manager':
          return setSidebarItems(managerSidebarItems);
        case 'accountant':
          return setSidebarItems(accountantSidebarItems);
        case 'employee':
          return setSidebarItems(employeeSidebarItems);
      }
    }
  }, [account]);

  return (
    <div className="w-72 py-3 bg-gray-200">
      <h2 className="font-bold text-center text-3xl">
        Invoice
      </h2>
      <div className="flex flex-col space-y-3 mt-4">
        {
          sidebarItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={`px-3 py-1 hover:bg-primary text-lg ${pathname === item.url && 'bg-primary'}`}
            >
              {item.title}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;

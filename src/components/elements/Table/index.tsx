import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';

export type ITableHeader = {
  label: string;
  field: string;
  render?: (data: any) => ReactNode;
};

interface ITableProps {
  headerData: ITableHeader[];
  tableData: any[];
  className?: string;
}

const Table: FC<ITableProps> = ({
  headerData,
  tableData,
  className = ''
}) => {

  return (
    <>
      <div className='relative w-full overflow-x-auto'>
        <table className={classnames(
          'relative w-full overflow-x-auto',
          className
        )}>
          <thead>
          <tr>
            {
              headerData.map((item) => (
                <th
                  key={item.field}
                  className={classnames(
                    'text-primary-font font-semibold p-4'
                  )}
                >
                  {item.label}
                </th>
              ))
            }
          </tr>
          </thead>
          <tbody>
          {
            tableData.map((data, index) => (
              <tr
                key={`k_${index * index}`}
                className="bg-white border-b border-gray-100"
              >
                {
                  headerData.map((headerItem, index) => (
                    <td key={headerItem.field} className="p-4">
                      {
                        headerItem.render ? (
                          headerItem.render(data[headerItem.field])
                        ) : (
                          <div className="text-gray-400 text-left">
                            {
                              data[headerItem.field]
                            }
                          </div>
                        )
                      }
                    </td>
                  ))
                }
                <td />
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

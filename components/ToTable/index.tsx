import React from "react";
import { useTable } from "react-table";

export const ToTable = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "World",
        col4: "World",
        col5: "World",
        col6: "World",
        col7: "World",
        col8: "World",
        col9: "World",
        col10: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
        col3: "World",
        col4: "World",
        col5: "World",
        col6: "World",
        col7: "World",
        col8: "World",
        col9: "World",
        col10: "World",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "World",
        col4: "World",
        col5: "World",
        col6: "World",
        col7: "World",
        col8: "World",
        col9: "World",
        col10: "World",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "World",
        col4: "World",
        col5: "World",
        col6: "World",
        col7: "World",
        col8: "World",
        col9: "World",
        col10: "World",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "World",
        col4: "World",
        col5: "World",
        col6: "World",
        col7: "World",
        col8: "World",
        col9: "World",
        col10: "World",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "World",
        col4: "World",
        col5: "World",
        col6: "World",
        col7: "World",
        col8: "World",
        col9: "World",
        col10: "World",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
      {
        Header: "Column 2",
        accessor: "col3",
      },
      {
        Header: "Column 2",
        accessor: "col4",
      },
      {
        Header: "Column 2",
        accessor: "col5",
        cell:<>Hellooooo</>
      },
      {
        Header: "Column 2",
        accessor: "col6",
      },
      {
        Header: "Column 2",
        accessor: "col7",
      },
      {
        Header: "Column 2",
        accessor: "col8",
      },
      {
        Header: "Column 2",
        accessor: "col9",
      },
      {
        Header: "Column 2",
        accessor: "col10",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="flex flex-col w-full p-4 mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table
              className="min-w-full divide-y divide-gray-200"
              {...getTableProps()}
            //   style={{ border: "solid 1px blue" }}
            >
              <thead
              className="bg-gray-50"
              >
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        // style={{className="min-w-full divide-y divide-gray-200"
                        //   borderBottom: 'solid 3px red',
                        //   background: 'aliceblue',
                        //   color: 'black',
                        //   fontWeight: 'bold',
                        // }}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            // style={{
                            //   padding: '10px',
                            //   border: 'solid 1px gray',
                            //   background: 'papayawhip',
                            // }}
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            <div className="text-sm text-gray-500">
                              {cell.render("Cell")}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

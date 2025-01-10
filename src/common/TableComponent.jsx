import React from 'react';
import { useTable, usePagination } from 'react-table';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TableComponent = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        usePagination
    );

    return (
        <div className="overflow-x-auto">
            <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                    {headerGroups.map(headerGroup => {
                        const { key, ...res } = headerGroup?.getHeaderGroupProps();
                        return <tr key={key}  {...res} className="bg-gray-50">
                            {headerGroup.headers.map(column => {
                                const { key, ...res } = column?.getHeaderProps();
                                <th key={key} {...res} className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                                    {column.render('Header')}
                                </th>
                            })}
                        </tr>
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        const { key, ...res } = row?.getRowProps();
                        return (
                            <tr key={key}  {...res} className="bg-white even:bg-gray-50">
                                {row.cells.map(cell => {
                                    const { key, ...res } = cell?.getCellProps();
                                    return (
                                        <td key={key}  {...res} className="border border-gray-200 px-4 py-2 text-gray-700">
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        className="px-3 py-1 border rounded-l-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                    >
                        {'<<'}
                    </button>
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="px-3 py-1 border bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                    >
                        <FaChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className="px-3 py-1 border bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                    >
                        <FaChevronRight className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                        className="px-3 py-1 border rounded-r-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                    >
                        {'>>'}
                    </button>
                </div>
                <span className="text-gray-700">
                    Page <strong>{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong>
                </span>
            </div>
        </div>
    );
};

export default TableComponent;

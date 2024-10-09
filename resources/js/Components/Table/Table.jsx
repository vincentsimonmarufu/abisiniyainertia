import React from "react";

const Table = ({ columns, data }) => {
    return (
        <table className="w-full whitespace-nowrap">
            <thead>
                <tr className="font-bold text-left">
                    {columns.map((column, key) => (
                        <th
                            key={key}
                            className="px-4 py-2 text-left text-gray-600"
                        >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, key) => (
                    <tr key={key}>
                        {columns.map((column, key) => (
                            <td key={key} className="px-4 py-2 text-gray-600">
                                {column.render
                                    ? column.render(row)
                                    : row[column.accessor]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

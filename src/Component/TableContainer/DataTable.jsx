import React from 'react';

const DataTable = (props) => {

    return (
        <table className={'table'}>
            <thead>
                <tr>
                    {
                        props.columnsTable.map((column, index) =>
                          <th key={`column_${index}`} onClick={() => props.onSort(column.field)}>
                              {column.title}
                              {
                                  props.sortField === column.field
                                  ? <small>{props.sort}</small>
                                  : null
                              }
                          </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
            {
                props.data.map((item, index) =>
                    <tr key={`row_${index}`} onClick={() => props.onRowSelect(item)}>
                        {props.columnsTable.map(({ field }) =>
                            <td key={field}>
                                {item[field]}
                            </td>
                        )}
                    </tr>
                )
            }
            </tbody>
        </table>
    )
};

export default DataTable;
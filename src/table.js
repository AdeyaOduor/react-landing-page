import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { data } from './forms';

export const ReportTable = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'StartDate',
        header: 'Start Date',
      },
      {
        accessorKey: 'EndDate',
        header: 'End Date',
      },
      {
        accessorKey: 'NumberOfLearners',
        header: 'Number of Learners',
      },
      {
        accessorKey: 'NumberOfStaff',
        header: 'Number of Staff',
      },
      {
        accessorKey: 'NumberOfWoodlot',
        header: 'Number of Woodlot',
      },
      {
        accessorKey: 'NumberOfFruitTrees',
        header: 'Number of Fruit Trees',
      },
      {
        accessorKey: 'TotalAllocatedArea',
        header: 'Total Allocated Area in Hectares',
      },
      {
        accessorKey: 'Description',
        header: 'Description',
      },
    ],
    [],
    //end
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={true}
      enableColumnFilters={true}
      enablePagination={true}
      enableSorting={true}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      muiTableProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
    />
  );
};

export default Example;

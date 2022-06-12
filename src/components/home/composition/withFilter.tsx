import React from 'react';
import Table from '@ui/table';
import Filter from '@ui/table/composition/filter';
import { mockHedaer, funcMockTableBody } from '@lib/fakerData';

const TableFilter = () => {
  const filters = [
    { title: 'age', idx: 3 },
    { title: 'createdAt', idx: 4 },
  ];
  const tableRef = React.useRef<string[][]>(funcMockTableBody(10));
  return (
    <Filter filters={filters} bodyData={tableRef.current}>
      {({ sortedBodyData }) => (
        <Table>
          <Table.Header headings={mockHedaer} />
          <Table.Body body={sortedBodyData} />
        </Table>
      )}
    </Filter>
  );
};

export default TableFilter;

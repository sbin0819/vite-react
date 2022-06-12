import React from 'react';
import Table from '@ui/table';
import Filter from '@ui/table/composition/filter';
import { mockHedaer, funcMockTableBody } from '@lib/fakerData';

const TableFilter = () => {
  const tableRef = React.useRef<string[][]>(funcMockTableBody(10));
  return (
    <Filter>
      <Table>
        <Table.Header headings={mockHedaer} />
        <Table.Body body={tableRef.current} />
      </Table>
    </Filter>
  );
};

export default TableFilter;

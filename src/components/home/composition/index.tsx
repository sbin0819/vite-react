import React from 'react';
import { Table } from '@components/ui';

import { mockHedaer, funcMockTableBody } from '@lib/fakerData';

const Home = () => {
  const tableBodyRef = React.useRef<string[][]>(funcMockTableBody(10));
  return (
    <Table>
      <Table.Header headings={mockHedaer} />
      <Table.Body body={tableBodyRef.current} />
    </Table>
  );
};

export default Home;

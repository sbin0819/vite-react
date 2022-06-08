import React from 'react';
import { Table, Tab } from '@components/ui';
import { tableData } from '@lib/mockData';
const { Item: TabItem } = Tab;

const Home = () => {
  return (
    <div>
      <Tab>
        <TabItem />
        <TabItem />
        <TabItem />
      </Tab>
      <Table>
        <Table.Header headings={tableData.headings} />
        <Table.Body body={tableData.body} />
      </Table>
    </div>
  );
};

export default Home;

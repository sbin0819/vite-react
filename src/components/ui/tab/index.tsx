import React from 'react';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}
const Tab = ({ children }: Props) => {
  return <div>{children}</div>;
};

Tab.Item = function Item() {
  return <li>item</li>;
};

export default Tab;

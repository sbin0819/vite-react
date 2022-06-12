import React from 'react';

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}
const filter = ({ children }: Props) => {
  return (
    <div>
      <div>hi</div>
      {children}
    </div>
  );
};

export default filter;

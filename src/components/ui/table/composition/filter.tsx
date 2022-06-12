import React from 'react';

interface FilterProps {
  title: string;
  idx: number;
}
interface ChildrenProps {
  sortedBodyData: string[][];
}
interface Props {
  filters: FilterProps[];
  bodyData: string[][];
  children: (sortedBodyData: ChildrenProps) => React.ReactElement;
}

const Filter = ({ children, bodyData, filters }: Props) => {
  const originData = [...bodyData];
  const [sortedBodyData, setSortedBodyData] = React.useState(() => bodyData);
  const onReset = () => {
    setSortedBodyData(originData);
  };
  const onSort = (idx: number) => {
    setSortedBodyData(originData.sort((a: any, b: any) => a[idx] - b[idx]));
  };

  return (
    <div>
      <div className="flex gap-4 mb-2">
        <button className="text-cyan-600" onClick={onReset}>
          reset
        </button>
        {filters.map((filter: FilterProps) => (
          <button
            className="text-cyan-600"
            key={filter.idx}
            onClick={() => onSort(filter.idx)}
          >
            {filter.title}
          </button>
        ))}
      </div>
      {children({ sortedBodyData })}
    </div>
  );
};

export default Filter;

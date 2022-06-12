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
  bodyData: any[][];
  children: (sortedBodyData: ChildrenProps) => React.ReactElement;
}

const Filter = ({ children, bodyData, filters }: Props) => {
  const originData = [...bodyData];
  const [sortedBodyData, setSortedBodyData] = React.useState(bodyData);
  const onSort = (idx: number) => {
    setSortedBodyData((prev) => [
      ...prev.sort((a: any[], b: any[]) => a[idx] - b[idx]),
    ]);
  };

  return (
    <div>
      <div className="flex gap-4 mb-2">
        <button
          className="text-cyan-600"
          onClick={() => setSortedBodyData(originData)}
        >
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

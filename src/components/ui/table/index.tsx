import React from 'react';

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}
export default function Table({ children }: Props) {
  return <table className="w-full">{children}</table>;
}

Table.Header = function Header({ headings }: { headings: string[] }) {
  return (
    <thead>
      <tr>
        {headings.map((text: string) => (
          <th key={text} className="p-2 border-2 border-black text-left">
            {text}
          </th>
        ))}
      </tr>
    </thead>
  );
};

Table.Body = function Body({ body }: { body: string[][] }) {
  return (
    <tbody>
      {body.map((cells: string[], index: number) => (
        <tr key={`row-${index}`} className="hover:bg-gray-300">
          {cells.map((text: string) => (
            <td key={text} className="p-2 border-2 border-black">
              {text}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

import { mockHedaer, funcMockTableBody } from '@lib/fakerData';

export default function Table() {
  const headings = mockHedaer;
  const body = funcMockTableBody(10);
  return (
    <table className="w-full">
      <thead>
        <tr>
          {headings.map((text: string) => (
            <th key={text} className="p-2 border-2 border-black text-left">
              {text}
            </th>
          ))}
        </tr>
      </thead>
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
    </table>
  );
}

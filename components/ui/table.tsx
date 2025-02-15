import React from "react";

interface TableProps {
  columns: { key: string; label: string }[]; // Cada coluna terá uma chave e um rótulo
  data: any[];
  actions?: (row: any) => JSX.Element;
  isLoading?: boolean;
}

export default function Table({ columns, data = [], actions, isLoading }: TableProps) {
  return (
    <div className="overflow-x-auto border border-gray-200 shadow-md rounded-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className=" border-gray-300">
            {columns.map((col) => (
              <th key={col.key} className="p-3 text-left uppercase text-sm">
                {col.label}
              </th>
            ))}
            {actions && <th className="p-3 text-left">Ações</th>}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="p-3 text-center">
                Carregando...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="p-3 text-center">
                Nenhum dado disponível
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-200 hover:bg-muted transition">
                {columns.map((col) => (
                  <td key={col.key} className="p-3">
                    {row[col.key]}
                  </td>
                ))}
                {actions && <td className="p-3">{actions(row)}</td>}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

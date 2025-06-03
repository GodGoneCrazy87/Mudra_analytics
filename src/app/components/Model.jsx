'use client';

import { useEffect, useState } from 'react';

export default function Model() {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    fetch('/api/get-notebook')
      .then((res) => res.json())
      .then((data) => setCells(data.cells || []))
      .catch((err) => console.error('Error loading notebook:', err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 font-mono text-sm overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-6">Model Notebook</h1>

      {cells.map((cell, index) => {
        const sourceLines = Array.isArray(cell.source)
          ? cell.source
          : typeof cell.source === 'string'
          ? [cell.source]
          : [];

        return (
          <div key={index} className="mb-6 overflow-x-hidden">
            {cell.cell_type === 'code' && (
              <div className="bg-[#1e1e1e] text-green-200 rounded p-4 whitespace-pre-wrap break-words overflow-x-hidden">
                <pre className="whitespace-pre-wrap break-words overflow-x-hidden">
                  <code>{sourceLines.join('')}</code>
                </pre>
              </div>
            )}

            {cell.cell_type === 'markdown' && (
              <div className="bg-gray-100 text-black p-4 rounded whitespace-pre-wrap break-words overflow-x-hidden">
                {sourceLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}

            {cell.outputs?.length > 0 && (
              <div className="bg-gray-800 text-white mt-2 p-3 rounded whitespace-pre-wrap break-words overflow-x-hidden">
                {cell.outputs.map((out, i) => (
                  <div key={i}>
                    {out.text ? (
                      <pre className="whitespace-pre-wrap break-words overflow-x-hidden">
                        {Array.isArray(out.text) ? out.text.join('') : out.text}
                      </pre>
                    ) : out.data?.['text/plain'] ? (
                      <pre className="whitespace-pre-wrap break-words overflow-x-hidden">
                        {Array.isArray(out.data['text/plain']) ? out.data['text/plain'].join('') : out.data['text/plain']}
                      </pre>
                    ) : (
                      <pre className="whitespace-pre-wrap break-words overflow-x-hidden">[Unsupported output]</pre>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

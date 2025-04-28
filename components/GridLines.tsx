import React from 'react'

export default function GridLines() {
  const gridLines = [10, 20, 30, 40, 50, 60, 70, 80, 90]

  const renderedGridLines = gridLines.map((line) => (
    <span
      key={line}
      style={{ left: `${line}%` }}
      className="absolute h-full w-px bg-grid-line"
    />
  ))

  return <div className="absolute left-0 top-0 -z-10 h-full w-full"> {renderedGridLines} </div>
}

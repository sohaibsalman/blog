import React from 'react'

export default function GridLines() {
  const gridLines = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const renderedGridLines = gridLines.map((line) => (
    <span
      key={line}
      style={{ left: `${line}%` }}
      className="absolute h-full w-px bg-default-grid-line"
    />
  ))

  return (
    <div className='absolute top-0 left-0 w-full h-full -z-10'>
      {renderedGridLines}
    </div>
  )
}

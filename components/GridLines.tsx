import React from 'react'

export default function GridLines() {
  const gridLines = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const renderedGridLines = gridLines.map(line => (
    <span key={line} style={{ left: `${line}%`, backgroundColor: 'rgba(255,255,255,.05)' }} className='absolute w-px h-full' />
  ));

  return (
    <div className='absolute top-0 left-0 w-full h-full -z-10'>
      {renderedGridLines}
    </div>
  )
}

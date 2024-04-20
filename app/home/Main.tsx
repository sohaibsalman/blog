import React from 'react'
import Image from '@/components/Image'

export default function Main() {
  return (
    <div className="relative h-screen">
      <Image
        className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2"
        src="/static/images/avatar.png"
        alt="sohaibsalman"
        width={750}
        height={750}
      />
      <div className="absolute top-16 z-0 w-full text-center">
        <span
          className="inline-block text-7xl font-extrabold uppercase md:mx-8 md:text-8xl lg:text-9xl"
          style={{
            color: 'transparent',
            WebkitTextStrokeColor: 'white',
            WebkitTextStrokeWidth: '1px',
          }}
        >
          Sohaib
        </span>
        <span className="inline-block text-7xl font-extrabold uppercase text-primary-50 md:text-8xl lg:text-9xl">
          Salman
        </span>
      </div>
      <div className="absolute left-[8vw] top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/75 px-8 py-5 text-4xl font-bold lg:text-5xl">
        Software Engineer
      </div>
    </div>
  )
}

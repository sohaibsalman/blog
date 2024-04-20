import React from 'react'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

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
      <div className="absolute left-[14%] top-[55%] z-20 -translate-y-1/2">
        <div className="rounded-full bg-black/75 px-10 py-6 text-4xl font-bold lg:text-4xl">
          Software Engineer
        </div>
        <div className="-ml-10 mt-5 rounded-full bg-black/75 px-10 py-6 text-4xl font-bold lg:text-4xl">
          Full-Stack Developer
        </div>
      </div>
      <div className="absolute right-0 top-[55%]">
        <div className="flex flex-col gap-8">
          <SocialIcon kind="github" href={siteMetadata.github} size={10} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={10} />
          <SocialIcon kind="skype" href={siteMetadata.skype} size={10} />
          <SocialIcon kind="upwork" href={siteMetadata.upwork} size={10} />
        </div>
      </div>
    </div>
  )
}

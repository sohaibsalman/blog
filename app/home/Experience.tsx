import Container from '@/components/Container'
import React from 'react'
import { FaArrowDown, FaArrowUp, FaRegCalendarAlt } from 'react-icons/fa'

export default function Experience() {
  const highlightClassName = 'font-bold text-primary-50'

  return (
    <Container className="bg-black">
      <div>
        <h1 className="font-semibold">My Resume</h1>
        <h2 className="my-2 text-4xl font-semibold">
          Dive Into My <span className={highlightClassName}>Work</span> &
          <span className={highlightClassName}> Education</span> Experience
        </h2>
      </div>
      <div className="mt-16 grid grid-cols-2 text-xl">
        <div className="grid grid-cols-2 gap-10 bg-gray-light md:p-16">
          <div className="border-r border-r-default-divider px-4">
            <div className="mb-14">
              <ExperienceDetail title="Software Engineer" date="2023 - Present" sub="Formulatrix" />
            </div>
            <div>
              <ExperienceDetail title="Software Engineer" date="2021 - 2023" sub="Rolustech" />
            </div>
          </div>
          <div className="px-4">
            <div className="mb-14">
              <ExperienceDetail
                title="Jr. Software Engineer"
                date="2020 - 2021"
                sub="Bistclan Solutions"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end">
          <h3 className="rounded-full bg-gray-light px-20 py-6 text-8xl uppercase">
            Study
          </h3>
          <FaArrowDown className="my-7 text-5xl text-primary-50" />
        </div>
      </div>
      <div className="grid grid-cols-2 text-xl">
        <div className="flex flex-col items-center justify-start">
          <FaArrowUp className="my-7 text-5xl text-primary-50" />
          <h3 className="rounded-full bg-gray-light px-20 py-6 text-8xl uppercase">Work</h3>
        </div>
        <div className="grid grid-cols-2 gap-10 bg-gray-light md:p-16">
          <div className="border-r border-r-default-divider px-4">
            <div className="mb-14">
              <ExperienceDetail
                title="Bachelor of Science in IT"
                date="2017 - 2021"
                sub="PUCIT, Lahore, Pakistan"
              />
            </div>
            <div>
              <ExperienceDetail
                title="Intermediate in CS"
                date="2015 - 2017"
                sub="Superior College of IT"
              />
            </div>
          </div>
          <div className="px-4">
            <div className="mb-20">
              <ExperienceDetail
                title="Matriculation in CS"
                date="2015"
                sub="The New School, Pakistan"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ExperienceDetail({ date, title, sub }: { date: string; title: string; sub: string }) {
  return (
    <>
      <p className="flex items-center gap-3 text-lg">
        <FaRegCalendarAlt className="text-primary-50" /> {date}
      </p>
      <p className="my-1 font-semibold">{title}</p>
      <p className="font-light">{sub}</p>
    </>
  )
}

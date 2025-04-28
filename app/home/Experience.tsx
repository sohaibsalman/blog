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
      <div className="mt-16 text-xl lg:grid lg:grid-cols-2">
        <div className="bg-gray-light p-3 max-sm:py-6 md:p-16">
          <div className="space-y-10 px-4">
            <div>
              <ExperienceDetail title="Software Engineer" date="2023 - Present" sub="Formulatrix" />
            </div>
            <div>
              <ExperienceDetail title="Software Engineer" date="2021 - 2023" sub="Rolustech" />
            </div>
            <div>
              <ExperienceDetail
                title="Jr. Software Engineer"
                date="2020 - 2021"
                sub="Bistclan Solutions"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end max-sm:hidden">
          <h3 className="bg-gray-light rounded-full px-20 py-6 text-8xl uppercase">Study</h3>
          <FaArrowDown className="text-primary-50 my-7 text-5xl" />
        </div>
      </div>
      <div className="text-xl max-sm:mt-5 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-start max-sm:hidden">
          <FaArrowUp className="text-primary-50 my-7 text-5xl" />
          <h3 className="bg-gray-light rounded-full px-20 py-6 text-8xl uppercase">Work</h3>
        </div>
        <div className="bg-gray-light p-3 max-sm:py-6 md:p-16">
          <div className="space-y-10 px-4">
            <div>
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
            <div>
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

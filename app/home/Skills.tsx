import React from 'react'
import SkillItem from './SkillItem'
import siteMetadata from '@/data/siteMetadata'
import Container from '@/components/Container'

export default function Skills() {
  const skills = siteMetadata.skills

  return (
    <Container>
      <h1 className="font-semibold">My Skills</h1>
      <h2 className="my-2 text-4xl font-semibold">
        Let's <span className="text-default-primary">Explore</span> The Things I{' '}
        <span className="text-default-primary">Code</span> With
      </h2>
      <p className="mt-5 text-xl">
        I love to develop things that run over the internet. I am in a quest of keeping myself up to
        date according to the new technologies and platforms, and for that I love to read tech
        articles, do certifications and get my hands dirty by working on simple ideas of my own.
        Here are some technologies that I love!
      </p>
      <div className="center mt-20 flex items-center justify-center">
        <div className="flex max-w-7xl flex-wrap gap-4">
          {skills.map((skill) => (
            <SkillItem skill={skill} key={skill.title} />
          ))}
        </div>
      </div>
    </Container>
  )
}

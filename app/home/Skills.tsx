import Image from '@/components/Image'
import React from 'react'
import SkillItem from './SkillItem'
import siteMetadata from '@/data/siteMetadata'

export default function Skills() {
  const skills = siteMetadata.skills

  return (
    <div className="py-32">
      <h1 className="text-5xl font-bold text-primary-100">Things I code with</h1>
      <p className="mt-5 text-xl">
        I love to develop things that run over the internet. I am in a quest of keeping myself up to
        date according to the new technologies and platforms, and for that I love to read tech
        articles, do certifications and get my hands dirty by working on simple ideas of my own.
        Here are some technologies that I love!
      </p>
      <div className="center mt-20 flex items-center justify-center">
        <div>
          <Image src="/static/images/3d-kid.png" alt="3d-kid" height={200} width={200} />
        </div>
        <div className="mr-14">
          <Image src="/static/images/line-vector.png" alt="vector-line" height={70} width={70} />
        </div>
        <div className="flex max-w-6xl flex-wrap gap-4">
          {skills.map((skill) => (
            <SkillItem skill={skill} key={skill.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

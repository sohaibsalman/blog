import Image from '@/components/Image'
import React from 'react'
import SkillItem from './SkillItem'

export default function Skills() {
  const skills: Skill[] = [
    {
      image: '/static/images/skills/dotnet.png',
      title: 'ASP.NET',
    },
    {
      image: '/static/images/skills/react.png',
      title: 'React',
    },
    {
      image: '/static/images/skills/nextjs.png',
      title: 'Next JS',
    },
    {
      image: '/static/images/skills/angular.png',
      title: 'Angular',
    },
    {
      image: '/static/images/skills/nodejs.png',
      title: 'Node JS',
    },
    {
      image: '/static/images/skills/django.png',
      title: 'Django',
    },
    {
      image: '/static/images/skills/javascript.png',
      title: 'Javascript',
    },
    {
      image: '/static/images/skills/typescript.png',
      title: 'Typescript',
    },
    {
      image: '/static/images/skills/csharp.png',
      title: 'C#',
    },
    {
      image: '/static/images/skills/python.png',
      title: 'Python',
    },
    {
      image: '/static/images/skills/aws.png',
      title: 'AWS',
    },
    {
      image: '/static/images/skills/docker.png',
      title: 'Docker',
    },
  ]

  return (
    <div className="py-32">
      <h1 className="text-5xl font-bold text-primary-100">Things I code with</h1>
      <p className="mt-5 text-xl">
        I love to develop things that run over the internet. I am in a quest of keeping myself up to
        date according to the new technologies and platforms, and for that I love to read tech
        articles, do certifications and get my hands dirty by working on simple ideas of my own.
        Here are some technologies that I love!
      </p>
      <div className="center mt-20 flex items-center justify-between">
        <div>
          <Image src="/static/images/3d-kid.png" alt="3d-kid" height={250} width={250} />
        </div>
        <div>
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

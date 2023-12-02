import Image from '@/components/Image'
import React from 'react'

type Props = {
  skill: Skill
}

export default function SkillItem({ skill }: Props) {
  return (
    <div
      className="h-40 w-40 rounded-3xl border border-[#353535] bg-[#1f1f1f]
      px-6 py-6 transition-all duration-75 hover:border-primary-100 hover:text-primary-100"
    >
      <div className="flex h-20 items-center justify-center">
        <Image src={skill.image} alt={skill.title} width={70} height={70} />
      </div>
      <h4 className="mt-3 text-center text-xl transition-all duration-75">{skill.title}</h4>
    </div>
  )
}

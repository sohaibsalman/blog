import React from 'react'
import Image from '@/components/Image'
import { Skill } from 'types'
import AppIcon from '@/components/icons'

type Props = {
  skill: Skill
}

export default function SkillItem({ skill }: Props) {
  return (
    <div
      className="flex h-40 w-40 flex-col items-center justify-center rounded-3xl border border-[#353535] bg-default-gray-light
      px-6 py-6 transition-all duration-75 hover:border-default-primary hover:text-default-primary"
    >
      <div className="h-16 w-16">
        <AppIcon kind={skill.icon} size={12} color={skill.color} />
      </div>
      <h4 className="mt-3 text-center text-xl transition-all duration-75">{skill.title}</h4>
    </div>
  )
}

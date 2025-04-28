import React from 'react'
import Image from '@/components/Image'
import { Skill } from 'types'
import AppIcon from '@/components/icons'

type Props = {
  skill: Skill
}

export default function SkillItem({ skill }: Props) {
  return (
    <div className="bg-gray-light hover:border-primary-50 hover:text-primary-50 flex h-40 w-40 flex-col items-center justify-center rounded-3xl border border-[#353535] transition-all duration-75 max-sm:h-25 max-sm:w-25">
      <div className="sm h-16 w-16 max-sm:h-8 max-sm:w-8">
        <AppIcon kind={skill.icon} size={12} color={skill.color} />
      </div>
      <h4 className="mt-3 text-center text-xl transition-all duration-75 max-sm:text-sm">
        {skill.title}
      </h4>
    </div>
  )
}

import { IconComponents } from '@/components/icons'
import { PlinyConfig } from 'pliny/config'

type Skill = {
  icon: keyof typeof IconComponents
  title: string
  color: string
}

type CustomConfig = Record<string, any> &
  PlinyConfig & {
    skills: Skill[]
  }

export type { Skill, CustomConfig }

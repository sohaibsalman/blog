import { PlinyConfig } from 'pliny/config'

type Skill = {
  image: string
  title: string
}

type CustomConfig = Record<string, any> &
  PlinyConfig & {
    skills: Skill[]
  }

export type { Skill, CustomConfig }

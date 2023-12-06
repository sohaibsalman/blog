import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className="relative mx-auto px-4 md:px-16">{children}</section>
}

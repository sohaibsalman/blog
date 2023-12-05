import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLElement> & {
  text: string
}

export default function Heading({ text, ...rest }: Props) {
  return <h1 className={`text-5xl font-bold text-primary-100 ${rest.className}`}>{text}</h1>
}

import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLElement> & {
  text: string
}

export default function Heading({ text, ...rest }: Props) {
  return <h1 className={`text-primary-50 text-5xl font-bold ${rest.className}`}>{text}</h1>
}

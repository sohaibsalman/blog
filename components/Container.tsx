import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  children?: React.ReactElement
}

export default function Container({ children, ...rest }: Props) {
  return <div className={`px-4 py-12 md:px-16 md:py-28 ${rest.className ?? ''}`}>{children}</div>
}

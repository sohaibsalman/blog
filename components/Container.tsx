import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {}

export default function Container({ children, ...rest }: Props) {
  return <div className={`px-4 py-12 md:p-28 ${rest.className ?? ''}`}>{children}</div>
}

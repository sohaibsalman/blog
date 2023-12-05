import React from 'react'

export default function Divider({ ...rest }: React.HtmlHTMLAttributes<HTMLElement>) {
  return <hr className={`my-10 border-default-divider ${rest.className}`} />
}

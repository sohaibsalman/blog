import React from 'react'

export default function Divider({ ...rest }: React.HtmlHTMLAttributes<HTMLElement>) {
  return <hr className={`border-default-divider my-10 ${rest.className}`} />
}

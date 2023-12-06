import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  text: string
}

export default function Button({ text, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`bg-default-primary px-8 py-6 text-2xl font-extrabold uppercase text-default-gray-dark
      transition-all duration-300 hover:bg-default-gray-dark hover:text-white ${rest.className}`}
    >
      {text}
    </button>
  )
}

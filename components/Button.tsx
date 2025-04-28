import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  size?: 'lg' | 'md' | 'sm'
  inverted?: boolean
}

export default function Button({ children, size, inverted, ...rest }: Props) {
  let classNames = ''

  if (size === 'sm') classNames += 'px-6 py-3 text-lg '
  else if (size === 'lg' || !size) classNames += 'px-8 py-6 text-2xl '

  if (inverted) classNames += 'hover:bg-black '
  else classNames += 'hover:bg-default-gray-dark '

  return (
    <button
      {...rest}
      className={`bg-primary-50 ${classNames} font-extrabold uppercase text-gray-dark cursor-pointer
      transition-all duration-300 hover:text-white ${rest.className}`}
    >
      {children}
    </button>
  )
}

import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  size?: 'lg' | 'md' | 'sm'
  inverted?: boolean
}

export default function Button({ children, size, inverted, ...rest }: Props) {
  let classNames = ''

  if (size === 'sm') classNames += 'px-6 py-3 text-lg max-sm:text-sm max-sm:px-4 max-sm-py-2 '
  else if (size === 'lg' || !size) classNames += 'px-8 py-6 text-2xl '

  if (inverted) classNames += 'hover:bg-black '
  else classNames += 'hover:bg-default-gray-dark '

  return (
    <button
      {...rest}
      className={`bg-primary-50 ${classNames} text-gray-dark cursor-pointer font-extrabold uppercase transition-all duration-300 hover:text-white ${rest.className}`}
    >
      {children}
    </button>
  )
}

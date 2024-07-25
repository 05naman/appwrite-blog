import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = '',
    textColor = 'text-white',
    className = '',
    ...props
}) 
{
  return (
    <button className={`px-4 py-2 rounded-lg mt-5 ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
    )
}

export default Button
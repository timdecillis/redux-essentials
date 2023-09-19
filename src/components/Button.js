import React from 'react'

function Button({open, setOpen, handleClick}) {
  return (
    <button onClick={handleClick}>
      {open ? 'Close' : 'Push Me'}
    </button>
  )
}

export default Button

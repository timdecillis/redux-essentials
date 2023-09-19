import React from 'react'

function Message ({open, setOpen}) {
  if (!open) {
    return null;
  }
  return (
    <div >
      Hello, world!
    </div>
  )
}

export default Message
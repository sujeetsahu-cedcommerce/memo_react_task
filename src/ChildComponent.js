import React from 'react'
import { memo } from 'react'
function ChildComponent() {
  return (
    <div>this is a ChildComponent</div>
  )
}

export default memo(ChildComponent);

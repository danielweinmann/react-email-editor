import React from 'react'
import { pickBy } from 'lodash'

const OverlayHighlight = (props) => {
  const { children, zIndex, highlighted = true } = props
  return (
    <div
      style={highlighted ? {
        position: 'relative',
        zIndex: (zIndex ? zIndex : 1001),
      } : {}}
      {...pickBy(props, (value, key) => key !== 'highlighted')}
    >
      { children }
    </div>
  )
}

export default OverlayHighlight

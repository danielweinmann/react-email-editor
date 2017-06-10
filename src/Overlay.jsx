import React from 'react'

const Overlay = (props) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: (props.zIndex ? props.zIndex : 1000),
      overflow: 'auto',
    }}
    {...props}
  >
    { props.children }
  </div>
)

export default Overlay

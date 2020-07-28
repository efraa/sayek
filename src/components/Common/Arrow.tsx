import React from 'react'

export const Arrow: React.FC<{
  color?: string
}> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="7"
    height="12"
    viewBox="0 0 7 12"
  >
    <path
      d="M6.639,6.056l-5,5a.618.618,0,0,1-.873,0l-.583-.583a.618.618,0,0,1,0-.872L4.144,5.619.18,1.637a.618.618,0,0,1,0-.872L.764.181a.618.618,0,0,1,.873,0l5,5A.618.618,0,0,1,6.639,6.056Z"
      fill={color || '#363636'}
    />
  </svg>
)

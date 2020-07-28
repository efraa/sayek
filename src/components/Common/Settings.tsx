import React from 'react'
import styled from 'styled-components'

const SettingsButton = styled.button`
  width: 40px;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Settings: React.FC<{
  color?: string
}> = ({ color }) => (
  <SettingsButton style={{ background: color }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="4"
      viewBox="0 0 14 4"
    >
      <path
        d="M8.969,7A1.969,1.969,0,1,1,7,5.031,1.968,1.968,0,0,1,8.969,7Zm2.844-1.969A1.969,1.969,0,1,0,13.781,7,1.968,1.968,0,0,0,11.813,5.031Zm-9.625,0A1.969,1.969,0,1,0,4.156,7,1.968,1.968,0,0,0,2.188,5.031Z"
        transform="translate(-0.219 -5.031)"
        fill="#363636"
      />
    </svg>
  </SettingsButton>
)

import React, { useEffect, useState } from 'react'
import { randomColor } from '../../data/colors'
import { ColorsModal } from './ColorsModal'
import {
  StyledColorPicker,
  CurrentColor,
  ColorPickerWrapper,
  ColorsHelp,
} from './Style'

interface IColorPicker extends React.HTMLProps<HTMLDivElement> {
  onChangeColor: (color: { id: number; bg: string; color: string }) => void
}

export const ColorPicker: React.FC<IColorPicker> = ({ onChangeColor }) => {
  const [isOpen, setOpen] = useState(false)
  const [color, setColor] = useState(randomColor())

  useEffect(() => {
    onChangeColor(color)
  }, [color])

  return (
    <>
      <ColorPickerWrapper>
        <StyledColorPicker onClick={() => setOpen(true)} type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.836"
            height="19.834"
            viewBox="0 0 19.836 19.834"
          >
            <path
              d="M20.91,16.664A2.412,2.412,0,0,0,19.64,16.2a1.891,1.891,0,0,1-1.167-.517,1.432,1.432,0,0,1,0-2.262l1.565-1.389a5.029,5.029,0,0,0,0-7.707A9.931,9.931,0,0,0,13.436,2a12.487,12.487,0,0,0-8.2,3.1,9.05,9.05,0,0,0,0,13.869,12.093,12.093,0,0,0,7.9,2.862h.088a11.624,11.624,0,0,0,7.686-2.707A1.744,1.744,0,0,0,20.91,16.664ZM4.893,9.851A1.653,1.653,0,1,1,6.546,11.5,1.651,1.651,0,0,1,4.893,9.851Zm2.066,6.508a1.653,1.653,0,1,1,1.653-1.653A1.651,1.651,0,0,1,6.959,16.359Zm3.306-8.316A1.653,1.653,0,1,1,11.918,6.39,1.651,1.651,0,0,1,10.265,8.043Zm3.719,11.312a2.479,2.479,0,1,1,2.479-2.479A2.48,2.48,0,0,1,13.984,19.355Zm1.24-10.744a1.653,1.653,0,1,1,1.653-1.653A1.651,1.651,0,0,1,15.223,8.611Z"
              transform="translate(-1.999 -2)"
              fill="#363636"
            />
          </svg>
        </StyledColorPicker>
        {color.bg ? (
          <CurrentColor style={{ background: color.bg }} />
        ) : (
          <ColorsHelp>Elegir color</ColorsHelp>
        )}
      </ColorPickerWrapper>
      <ColorsModal
        isOpen={isOpen}
        onCloseModal={() => setOpen(false)}
        onChangeColor={color => setColor(color)}
        currentId={color.id}
      />
    </>
  )
}

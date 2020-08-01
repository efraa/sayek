import React from 'react'
import { Colors } from '../../data/colors'

// Comps
import { Modal } from '../Modal'
import { ColorsHead, ColorsText, ColorsWrapper, Color } from './Style'
import { Messages } from '../../data/messageConstants'

interface IModal extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean
  onCloseModal: () => void
  onChangeColor: (color: { id: number; bg: string; color: string }) => void
  currentId: number
}

export const ColorsModal: React.FC<IModal> = ({
  isOpen,
  onCloseModal,
  onChangeColor,
  currentId,
}) => (
  <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
    <ColorsHead>
      <ColorsText>Elegir color de fondo</ColorsText>
    </ColorsHead>
    <ColorsWrapper>
      {Colors.map(color => (
        <Color
          key={`color-${color.id}`}
          data={color}
          onClick={() => onChangeColor(color)}
          isSelected={currentId === color.id}
        >
          {currentId === color.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.318"
              height="12.169"
              viewBox="0 0 16.318 12.169"
            >
              <path
                d="M5.542,13.964l-5.3-5.3a.816.816,0,0,1,0-1.154L1.393,6.353a.816.816,0,0,1,1.154,0L6.119,9.926l7.652-7.652a.816.816,0,0,1,1.154,0l1.154,1.154a.816.816,0,0,1,0,1.154L6.7,13.964a.816.816,0,0,1-1.154,0Z"
                transform="translate(0 -2.034)"
                fill={color.color}
              />
            </svg>
          ) : null}
        </Color>
      ))}
    </ColorsWrapper>
  </Modal>
)

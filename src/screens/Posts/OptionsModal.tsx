import React from 'react'

// Comps
import { Modal } from '../../components/Modal'
import { Messages } from '../../data/messageConstants'
import {
  OptionsHead,
  OptionsCircle,
  OptionsText,
  Options,
  OptionsItem,
  OptionsIcon,
  OptionsGoTo,
} from './Style'

interface IModal extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean
  onCloseModal: () => void
  wall: {
    id: number
    name: string
  }
}

export const OptionsModal: React.FC<IModal> = ({
  isOpen,
  onCloseModal,
  wall,
}) => (
  <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
    <OptionsHead>
      <OptionsCircle>C</OptionsCircle>
      <OptionsText>{wall.name}</OptionsText>
    </OptionsHead>
    <Options>
      <OptionsItem>
        <OptionsGoTo to="/">
          <OptionsIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.333"
              height="11.667"
              viewBox="0 0 9.333 11.667"
            >
              <path
                d="M11.083,12.25,7,9.333,2.917,12.25V2.917A1.167,1.167,0,0,1,4.083,1.75H9.917a1.167,1.167,0,0,1,1.167,1.167Z"
                transform="translate(-2.333 -1.167)"
                fill="none"
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.167"
              />
            </svg>
          </OptionsIcon>
          Ir a este muro
        </OptionsGoTo>
      </OptionsItem>
      <OptionsItem>
        <OptionsGoTo to="/">
          <OptionsIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.333"
              height="11.667"
              viewBox="0 0 9.333 11.667"
            >
              <path
                d="M11.083,12.25,7,9.333,2.917,12.25V2.917A1.167,1.167,0,0,1,4.083,1.75H9.917a1.167,1.167,0,0,1,1.167,1.167Z"
                transform="translate(-2.333 -1.167)"
                fill="none"
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.167"
              />
            </svg>
          </OptionsIcon>
          Copiar enlance
        </OptionsGoTo>
      </OptionsItem>
      <OptionsItem>
        <OptionsGoTo as="button">
          <OptionsIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.667"
              height="12.833"
              viewBox="0 0 11.667 12.833"
            >
              <g transform="translate(0.583 0.583)">
                <path
                  d="M1.75,3.5h10.5"
                  transform="translate(-1.75 -1.167)"
                  fill="none"
                  stroke="#363636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.167"
                />
                <path
                  d="M11.083,3.5v8.167a1.167,1.167,0,0,1-1.167,1.167H4.083a1.167,1.167,0,0,1-1.167-1.167V3.5m1.75,0V2.333A1.167,1.167,0,0,1,5.833,1.167H8.167A1.167,1.167,0,0,1,9.333,2.333V3.5"
                  transform="translate(-1.75 -1.167)"
                  fill="none"
                  stroke="#363636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.167"
                />
              </g>
            </svg>
          </OptionsIcon>
          Abandonar muro
        </OptionsGoTo>
      </OptionsItem>
    </Options>
  </Modal>
)

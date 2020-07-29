import React from 'react'
import { Modal as ReactModal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import './style.css'

interface IModal extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean
  onCloseModal: () => void
}

export const Modal: React.FC<IModal> = ({ isOpen, onCloseModal, children }) => (
  <ReactModal
    open={isOpen}
    blockScroll={false}
    onClose={onCloseModal}
    showCloseIcon={false}
    classNames={{
      overlay: isOpen ? 'modal-overlay--open' : 'modal-overlay--close',
    }}
  >
    {children}
  </ReactModal>
)

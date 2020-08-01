import React, { memo } from 'react'
import { ToastContainer, Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

export const AlertContainer = memo(() => (
  <ToastContainer
    position="top-center"
    autoClose={6000}
    limit={1}
    closeButton={false}
    transition={Slide}
  />
))

export const Alert = {
  info: (message: string) => toast(message),
  error: (message: string) => toast.error(message),
}

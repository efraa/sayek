import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.white};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 16px;
  min-height: calc(100vh - 100px);
  animation: ${animation} 0.3s ease-in-out;
`

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid ${({ theme: { colors } }) => colors.gray};
  border-top-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 50%;
  animation: ${loading} 1s ease-in-out infinite alternate;
`

import styled from 'styled-components'

export const StyledHead = styled.div`
  position: relative;
  height: 67px;
  min-height: 67px;
  width: 100%;
  margin-bottom: 16px;
`

export const Wrapper = styled.div`
  padding: 16px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 67px;
  min-height: 67px;
  background: white;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.black};
`

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  margin-right: 16px;
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 100%;
`

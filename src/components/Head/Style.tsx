import styled from 'styled-components'

export const StyledHead = styled.div`
  position: sticky;
  min-height: 67px;
  width: 100%;
  margin-bottom: 16px;
  background: ${({ theme: { colors } }) => colors.white};
  top: 0;
  z-index: 1;
`

export const Wrapper = styled.div`
  padding: 16px 0;
  width: 100%;
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.black};
  line-height: 20px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  width: 40px;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  background: transparent;
  border-radius: 100%;
  transform: rotate(180deg);
`

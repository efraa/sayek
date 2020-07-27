import styled from 'styled-components'

export const Item = styled.div`
  font-size: 16px;
  border-radius: 11px;
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  background-color: ${({ theme: { colors } }) => colors.whiteDark};
`

export const Text = styled.p`
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.black};
`

export const Image = styled.img`
  width: 20px;
  height: 20px;
`

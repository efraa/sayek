import styled from 'styled-components'

export const Text = styled.h3`
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.black};
  margin: 25px 20px;
`

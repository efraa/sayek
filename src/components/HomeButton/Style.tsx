import styled from 'styled-components'

export const Item = styled.div`
  font-size: 16px;
  border-radius: 11px;
  box-shadow: 0 0 6px 3px ${({ theme: { colors } }) => colors.whiteDark};
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 130px;
  margin-bottom: 16px;
`

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 100%;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.whiteDark};
`

export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.black};
`

export const Image = styled.img`
  width: 25px;
  height: 25px;
`

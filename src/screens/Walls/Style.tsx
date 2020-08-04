import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  min-height: calc(100vh - 88px);
  flex-direction: column;
  padding-bottom: 14px;
`

export const ComposeInput = styled.textarea`
  font-size: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.black};
  margin: 0;
  line-height: normal;
  border: none;
  resize: none;
  flex-grow: 1;
  min-height: 212px;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
  }

  &:hover,
  &:focus {
    outline: none !important;
  }
`

export const OptionsHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.whiteDark};
`

export const OptionsCircle = styled.div`
  height: 50px;
  width: 50px;
  min-height: 50px;
  min-width: 50px;
  border-radius: 100%;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.primary};
`

export const OptionsText = styled.p`
  color: ${({ theme: { colors } }) => colors.black};
  font-size: 14px;
`

export const Options = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 16px;
`

export const OptionsItem = styled.li`
  display: flex;
  padding: 0;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

export const OptionsGoTo = styled(Link)`
  color: ${({ theme: { colors } }) => colors.black} !important;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
  text-decoration: none !important;
  width: 100%;
`

export const OptionsIcon = styled.div`
  width: 40px;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`

export const WallsContainer = styled.div``

export const LoadMore = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const LoadMoreContent = styled.div`
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  border-radius: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  min-height: 98px;

  div:first-child {
    height: 50px;
    width: 50px;
    min-height: 50px;
    min-width: 50px;
    border-radius: 100%;
    margin-right: 16px;
  }

  div:last-child {
    min-height: 18px;
    max-width: 50%;
    width: 100%;
    border-radius: 12px;
  }
`

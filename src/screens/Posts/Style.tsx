import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Color from 'color'

export const Wrapper = styled.form`
  display: flex;
  min-height: calc(100vh - 88px);
  flex-direction: column;
  padding-bottom: 14px;
`

export const ComposeInput = styled.div`
  font-size: 18px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  line-height: normal;
  border: none;
  resize: none;
  color: ${({ color }) => color};
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  width: 100%;
  flex-direction: column;

  &:hover,
  &:focus {
    outline: none !important;
  }

  &:empty:before {
    content: attr(placeholder);
    color: ${({ color }) =>
      Color(color || 'white')
        .alpha(0.4)
        .string()};
  }

  a,
  span {
    padding: 6px;
    line-height: 40px;
    background: ${({ color }) =>
      Color(color || 'white')
        .alpha(0.15)
        .string()};
    font-size: 18px;
    border-radius: 10px;
    color: ${({ color }) => color};
    font-weight: bold;
  }
`

export const ComposeInputWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  border-radius: 16px;
  min-height: 350px;
  transition: all 0.3s ease-in-out;
`

export const ComposeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ComposeOnWall = styled.div`
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 14px;
    margin: 12px 0;
    line-height: 14px;
    border: solid 1px ${({ theme: { colors } }) => colors.gray};
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

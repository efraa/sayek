import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  min-height: calc(100vh - 100px);
  flex-direction: column;
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

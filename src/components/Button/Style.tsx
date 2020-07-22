import styled from 'styled-components'
import color from 'color'

export const StyledButton = styled.button<any>`
  font-size: 16px;
  border: 0px;
  border-color: transparent;
  padding: 16px 24px;
  line-height: normal;
  border-radius: 100px;
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: all 0.1s ease-in-out;
  background-color: ${({ secondary, disabled, theme: { colors } }) =>
    disabled
      ? colors.grayLight
      : secondary
      ? colors.secondary
      : colors.primary};

  ${({ width }) => `width: ${width || 'auto'}`};

  &,
  &:active,
  &:focus,
  &:hover,
  &:not(:disabled):active {
    outline: none;
    text-decoration: none;
    box-shadow: 0 0 0 0 transparent;
    color: ${({ secondary, disabled, theme: { colors } }) =>
      disabled ? colors.blackOdd : secondary ? colors.black : colors.white};
  }

  &:focus,
  &:focus:active {
    box-shadow: 0 0 0 4px
      ${({ secondary, disabled, theme: { colors } }) =>
        disabled
          ? 'transparent'
          : secondary
          ? color(colors.blackOdd).alpha(0.3).string()
          : color(colors.primary).alpha(0.3).string()};

    background-color: ${({ secondary, disabled, theme: { colors } }) =>
      disabled
        ? colors.grayLight
        : secondary
        ? colors.secondary
        : color(colors.primary).darken(0.1).string()};
  }

  ${({ disabled }) =>
    disabled &&
    `
    user-select: none;
    pointer-events: none;
    cursor: not-allowed;
  `}
`

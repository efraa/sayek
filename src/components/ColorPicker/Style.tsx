import styled from 'styled-components'
import color from 'color'

export const StyledColorPicker = styled.button`
  width: 60px;
  height: 60px;
  min-height: 60px;
  min-width: 60px;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CurrentColor = styled.div`
  width: 35px;
  height: 35px;
  min-height: 35px;
  min-width: 35px;
  border-radius: 100%;
  margin-left: 16px;
`

export const ColorPickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ColorsHead = styled.div`
  margin-bottom: 20px;
  text-align: center;
`
export const ColorsText = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme: { colors } }) => colors.black};
`
export const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ColorsHelp = styled.span`
  font-size: 12px;
  margin-left: 8px;
`

export const Color = styled.div<any>`
  width: 45px;
  height: 45px;
  min-height: 45px;
  min-width: 45px;
  border-radius: 100%;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: ${({ data }) => data.bg};
  box-shadow: 0 0 0 4px
    ${({ data, isSelected }) =>
      isSelected ? color(data.bg).alpha(0.3).string() : 'transparent'};
`

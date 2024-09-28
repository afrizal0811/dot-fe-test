import styled from 'styled-components'
import color from '../../constants/color'
import { Flex, Menu } from '../antd'

export const StyledNav = styled.nav`
  background-color: ${color.lavenderWeb};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1),
    10px 10px 10px rgba(0, 0, 0, 0.01);
  position: relative;
`

export const StyledContainer = styled(Flex)`
  margin: 0 auto;
  padding: 0 20px;
  maxwidth: ${(props) => props.$token.screenXL};
  padding: ${(props) =>
    props.$screens.md
      ? `0px ${props.$token.paddingLG}px`
      : `0px ${props.$token.padding}px`};
`

export const StyledMenuContainer = styled(Flex)`
  width: 100%;
`

export const StyledMenu = styled(Menu)`
  background-color: transparent;
  border-bottom: none;
  line-height: ${(props) => (props.$screens.md ? '4rem' : '3.5rem')};
  margin-left: ${(props) =>
    props.$screens.md ? '0px' : `-${props.$token.size}px`};
  width: ${(props) =>
    props.$screens.md ? 'inherit' : `${props.$token.sizeXXL}`};
`

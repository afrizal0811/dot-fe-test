import styled from 'styled-components'
import { Card, Flex } from './components/antd'
import color from './constants/color'

export const StyledFlexContainer = styled(Flex)`
  height: 100vh;
  padding: ${(props) => (props.$padding ? '20px' : '0')};
`
export const StyledCard = styled(Card)`
  background-color: ${color.lavenderWeb};
  width: ${(props) => `${props.$width}`};
  padding: 20px 10px;
  margin: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1),
    20px 20px 20px rgba(0, 0, 0, 0.01);

  .ant-card-body {
    padding: 0;
    margin: 0 10px;
  }

  .ant-card-cover {
    display: flex;
    justify-content: center;
  }
`

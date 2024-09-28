import styled from 'styled-components'
import { Card, Flex } from '../../components/antd'

export const StyledFlex = styled(Flex)`
  height: 100vh;
`
export const StyledCard = styled(Card)`
  background-color: white;
  width: 500px;
  padding: 20px 10px;
  margin: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1),
    20px 20px 20px rgba(0, 0, 0, 0.01);
  .ant-card-cover {
    display: flex;
    justify-content: center;
    margin-bottom: -25px;
  }
`

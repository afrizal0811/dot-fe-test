import { LeftOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Flex } from '../../components/antd'

export const StyledButtonContainer = styled(Flex)`
  width: 100%;
  padding: 20px 20px 0;
`

export const StyledContentContainer = styled(Flex)`
  padding: 0 15px;
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    height: 100%;
  }
`

export const StyledLeftIcon = styled(LeftOutlined)`
  font-size: 16px;
  color: black;
`

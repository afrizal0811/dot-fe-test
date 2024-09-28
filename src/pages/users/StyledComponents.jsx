import styled from 'styled-components'
import { Flex } from '../../components/antd'

export const StyledButtonContainer = styled(Flex)`
  width: 100%;
  padding: 20px 20px 0;
`

export const StyledContentContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  padding-left: 20px;
  @media (max-width: 768px) {
    height: 100%;
  }
`

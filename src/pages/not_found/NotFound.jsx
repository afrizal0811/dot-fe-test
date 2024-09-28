import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledFlexContainer } from '../../StyledComponents'
import { Button } from '../../components/antd'
import { StyledNotFoundNumber, StyledNotFoundText } from './StyledComponents'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <StyledFlexContainer
      justify='center'
      align='center'
      vertical
    >
      <StyledNotFoundNumber>404</StyledNotFoundNumber>
      <StyledNotFoundText>
        We could find the page you&apos;re looking for
      </StyledNotFoundText>
      <Button
        type='primary'
        onClick={() => {
          navigate('/')
        }}
      >
        Back to Home
      </Button>
    </StyledFlexContainer>
  )
}

export default NotFound

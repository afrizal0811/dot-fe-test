import styled from 'styled-components'

export const StyledTitle = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  text-align: center;
  font-size: ${(props) => (props.$size === 'normal' ? '20px' : '24px')};
`

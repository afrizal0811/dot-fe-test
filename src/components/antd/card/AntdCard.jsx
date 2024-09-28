import { Card } from 'antd'
import React from 'react'
import { StyledTitle } from './StyledComponents'
const AntdCard = (props) => {
  const { title, bordered, className, children, size, cover } = props

  return (
    <Card
      cover={cover}
      bordered={bordered}
      className={className}
    >
      {title && <StyledTitle $size={size}>{title}</StyledTitle>}
      {children}
    </Card>
  )
}

export default AntdCard

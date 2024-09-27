import { Card } from 'antd'
import React from 'react'
const AntdCard = (props) => {
  const { title, bordered, className, children } = props
  return (
    <Card
      title={title}
      bordered={bordered}
      className={className}
    >
      {children}
    </Card>
  )
}

export default AntdCard

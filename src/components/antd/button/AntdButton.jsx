import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const { icon, className, children, type, onClick, htmlType, width, loading } =
    props
  return (
    <Button
      className={className}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      onClick={onClick}
      type={type}
      width={width}
    >
      {children}
    </Button>
  )
}

export default AntdButton

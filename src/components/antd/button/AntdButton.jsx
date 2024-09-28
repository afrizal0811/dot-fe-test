import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const {
    icon,
    block,
    className,
    children,
    type,
    onClick,
    htmlType,
    width,
    loading,
    textColor,
  } = props
  return (
    <Button
      block={block}
      className={className}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      onClick={onClick}
      type={type}
      width={width}
      style={{ color: textColor }}
    >
      {children}
    </Button>
  )
}

export default AntdButton

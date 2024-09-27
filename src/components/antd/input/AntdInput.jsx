import { Input } from 'antd'
import React from 'react'
const AntdInput = (props) => {
  const { placeholder, value, onChange, prefix, className } = props
  return (
    <Input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      prefix={prefix}
      value={value}
    />
  )
}

export default AntdInput

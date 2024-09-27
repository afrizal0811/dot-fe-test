import { Input } from 'antd'
import React from 'react'

const AntdPassword = (props) => {
  const { placeholder, value, onChange, className } = props
  return (
    <Input.Password
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default AntdPassword

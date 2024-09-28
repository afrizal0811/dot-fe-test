import { Input } from 'antd'
import React from 'react'

const AntdPassword = (props) => {
  const { className, disabled, name, onChange, placeholder, values } = props
  return (
    <Input.Password
      className={className}
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={values}
    />
  )
}

export default AntdPassword

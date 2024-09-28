import { Input } from 'antd'
import React from 'react'

const AntdInput = (props) => {
  const { className, disabled, name, onChange, placeholder, type, values } =
    props
  return (
    <Input
      className={className}
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={values}
    />
  )
}

export default AntdInput

import { Avatar } from 'antd'
import React from 'react'

const AntdAvatar = (props) => {
  const { src, size, shape } = props
  return (
    <Avatar
      shape={shape}
      src={src}
      size={size}
    />
  )
}

export default AntdAvatar

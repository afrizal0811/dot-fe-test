import { Image } from 'antd'
import React from 'react'

const AntdImage = (props) => {
  const { width, src, items } = props
  return (
    <Image.PreviewGroup items={items}>
      <Image
        width={width}
        src={src}
      />
    </Image.PreviewGroup>
  )
}

export default AntdImage

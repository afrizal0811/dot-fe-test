import { Image } from 'antd'
import React from 'react'

const AntdImage = (props) => {
  const { width, src, isPreview } = props
  return (
    <Image
      width={width}
      src={src}
      preview={isPreview}
    />
  )
}

export default AntdImage

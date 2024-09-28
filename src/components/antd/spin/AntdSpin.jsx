import { Spin } from 'antd'
import React from 'react'

const AntdSpin = (props) => {
  const { children, tip, size, spinning } = props
  return (
    <Spin
      spinning={spinning}
      tip={tip}
      size={size}
    >
      {children}
    </Spin>
  )
}

export default AntdSpin

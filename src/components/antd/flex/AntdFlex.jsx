import { Flex } from 'antd'
import React from 'react'

const AntdFlex = (props) => {
  const { align, children, gap, justify, vertical, className } = props
  return (
    <Flex
      align={align}
      className={className}
      gap={gap}
      justify={justify}
      vertical={vertical}
    >
      {children}
    </Flex>
  )
}

export default AntdFlex

import { Menu } from 'antd'
import React from 'react'
const AntdMenu = (props) => {
  const { className, items, mode, overflowedIndicator } = props
  return (
    <Menu
      className={className}
      items={items}
      mode={mode}
      overflowedIndicator={overflowedIndicator}
    />
  )
}

export default AntdMenu

import { Menu } from 'antd'
import React from 'react'
const AntdMenu = (props) => {
  const { className, items, mode, onClick, overflowedIndicator, selectedKeys } =
    props
  return (
    <Menu
      className={className}
      items={items}
      mode={mode}
      onClick={onClick}
      overflowedIndicator={overflowedIndicator}
      selectedKeys={selectedKeys}
    />
  )
}

export default AntdMenu

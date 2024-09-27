import { Breadcrumb } from 'antd'
import React from 'react'

const AntdBreadcrumb = (props) => {
  const { items } = props
  return <Breadcrumb items={items} />
}

export default AntdBreadcrumb

import { Table } from 'antd'
import React from 'react'
const AntdTable = (props) => {
  const { bordered, className, columns, data, loading, pagination, scroll } =
    props
  return (
    <Table
      bordered={bordered}
      className={className}
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={pagination}
      scroll={scroll}
    />
  )
}

export default AntdTable

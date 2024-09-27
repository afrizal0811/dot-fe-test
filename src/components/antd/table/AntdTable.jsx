import { Table } from 'antd'
import React from 'react'
const AntdTable = (props) => {
  const { columns, data, pagination, className, loading, bordered} = props
  return (
    <Table
      className={className}
      columns={columns}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      bordered={bordered}
    />
  )
}

export default AntdTable

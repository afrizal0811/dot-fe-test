import React from 'react'
import { Table } from '../../../components/antd'
import { columns } from './usersTableConfig'

const usersTable = (props) => {
  const { data, handlePageChange, loading, total, navigate } = props

  const handleView = (record) => {
    navigate(`/users/${record.id}`)
  }

  return (
    <Table
      bordered
      columns={columns(handleView)}
      data={data}
      loading={loading}
      pagination={{
        total: total,
        onChange: (page, pageSize) => {
          handlePageChange(page, pageSize)
        },
      }}
      scroll={{
        x: 600,
      }}
    />
  )
}

export default usersTable

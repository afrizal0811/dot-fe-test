import React from 'react'
import { Button } from '../../../components/antd'

export const columns = (handleView) => [
  {
    dataIndex: 'id',
    key: 'id',
    title: 'User ID',
    width: 20,
  },
  {
    dataIndex: 'first_name',
    key: 'firstName',
    title: 'First Name',
    width: 25,
  },
  {
    dataIndex: 'last_name',
    key: 'lastName',
    title: 'Last Name',
    width: 25,
  },
  {
    dataIndex: 'email',
    key: 'email',
    title: 'Email',
    width: 25,
  },
  {
    key: 'action',
    title: 'Action',
    width: 25,
    fixed: 'right',
    render: (text, record) => (
      <Button
        onClick={() => handleView(record)}
        type='primary'
      >
        View
      </Button>
    ),
  },
]

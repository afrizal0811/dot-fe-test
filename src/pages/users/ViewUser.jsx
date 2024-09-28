import { LeftOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { StyledCard } from '../../StyledComponents'
import { apiValidation, getApi } from '../../api/handleApi'
import { Avatar, Button, Flex, Spin } from '../../components/antd'
import { usersUrl } from '../../constants/constants'
import {
  deleteLocalStorage,
  getLocalStorage,
} from '../../utilities/handleStorage'
import * as message from '../../utilities/message'
import {
  StyledButtonContainer,
  StyledContentContainer,
} from './StyledComponents'

const ViewUser = () => {
  const { params, navigate } = useOutletContext()
  const { id } = params
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!getLocalStorage('token')) {
      deleteLocalStorage()
      navigate('/')
    }
  }, [navigate])

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const url = `${process.env.REACT_APP_BASE_URL}${usersUrl}/${id}`
      const result = await getApi(url)
      const isError = apiValidation(result)
      if (isError === '') {
        setUser(result.data)
      } else {
        message.error('User not found')
        navigate('/users')
      }
      setLoading(false)
    }
    fetch()
  }, [navigate, id])

  return (
    <div>
      <StyledButtonContainer>
        <Button
          icon={<LeftOutlined />}
          onClick={() => navigate('/users')}
          type='primary'
        >
          Back
        </Button>
      </StyledButtonContainer>
      <StyledContentContainer
        justify='center'
        align='center'
      >
        <Spin
          spinning={loading}
          tip='Loading...'
        >
          <StyledCard $width='400px'>
            <Flex
              gap='middle'
              justify='center'
              align='center'
            >
              <Avatar
                shape='square'
                src={user?.avatar}
                size={100}
              />
              <Flex vertical>
                <h1>
                  {user?.first_name} {user?.last_name}
                </h1>
                <p>{user?.email}</p>
              </Flex>
            </Flex>
          </StyledCard>
        </Spin>
      </StyledContentContainer>
    </div>
  )
}

export default ViewUser

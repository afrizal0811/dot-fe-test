import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { apiValidation, postApi } from '../../api/handleApi'
import { Button, Input, Password } from '../../components/antd'
import { getLocalStorage } from '../../utilities/handleStorage'
import { StyledCard } from './StyledComponents'

const Login = () => {
  const { navigate } = useOutletContext()
  const [currToken, setCurrToken] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    if (getLocalStorage('token')) {
      navigate('/users')
    } else {
      navigate('/')
    }
    
    if (getLocalStorage('token') === currToken) {
      navigate('/users')
    }
  }, [navigate, currToken])


  const onFinish = async (values) => {
    const fetchData = async () => {
      setIsLoading(true)
      const url = `${process.env.REACT_APP_BASE_URL}/api/login`
      const response = await postApi(url, values)
      console.log('response :', response)
      if (response) {
        apiValidation(response)
        setCurrToken(response.token)
      }
      if (getLocalStorage('token') === currToken) navigate('/users')
      setIsLoading(false)
    }
    fetchData()
  }

  return (
    <StyledCard
      title='Login User'
      bordered={true}
    >
      {/* {validation ? 'Gagal' : 'Berhasil'} */}
      <Form
        autoComplete='off'
        form={form}
        layout='vertical'
        name='add-form'
        onFinish={onFinish}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: `Please input username!`,
            },
          ]}
        >
          <Input placeholder='Input Username' />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: `Please input password!`,
            },
          ]}
        >
          <Password placeholder='Input Password' />
        </Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          loading={isLoading}
        >
          Login
        </Button>
      </Form>
    </StyledCard>
  )
}

export default Login

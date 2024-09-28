import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Button, FormItem, Image, Input, Password } from '../../components/antd'
import imagePath from '../../constants/imagePath'
import getFormField from '../../utilities/getFormField'
import { getLocalStorage } from '../../utilities/handleStorage'
import * as message from '../../utilities/message'
import LoginValidation from '../../validation/LoginValidation'
import { StyledCard, StyledFlex } from './StyledComponents'
const Login = () => {
  const { navigate } = useOutletContext()
  const [form] = Form.useForm()
  const [fields, setFields] = useState([])
  const emailField = getFormField(fields, 'email')
  const passwordField = getFormField(fields, 'password')

  const { errors, handleChange, handleFinish, isLoading } = LoginValidation(
    navigate,
    emailField,
    passwordField
  )

  useEffect(() => {
    if (getLocalStorage('token')) {
      navigate('/users')
    } else {
      navigate('/')
    }
  }, [navigate])

  return (
    <StyledFlex
      justify='center'
      align='center'
    >
      <StyledCard
        cover={
          <Image
            src={imagePath.logo}
            isPreview={false}
            width={75}
          />
        }
        title='Log in to your account'
        size='large'
        bordered={true}
      >
        {errors.failedAlert && message.error(errors.failedAlert)}
        <Form
          autoComplete='off'
          fields={fields}
          form={form}
          layout='vertical'
          name='add-form'
          noValidate
          onFieldsChange={(_, allFields) => {
            setFields(allFields)
          }}
          onFinish={handleFinish}
        >
          <FormItem
            errors={errors.email}
            label='Email'
            name='email'
            fields={emailField}
          >
            <Input
              placeholder='Input your email'
              name='email'
              type='email'
              onChange={handleChange}
            />
          </FormItem>
          <FormItem
            errors={errors.password}
            label='Password'
            name='password'
            fields={passwordField}
          >
            <Password
              placeholder='Input your password'
              name='password'
              type='password'
              onChange={handleChange}
            />
          </FormItem>
          <Button
            block
            type='primary'
            htmlType='submit'
            loading={isLoading}
          >
            Login
          </Button>
        </Form>
      </StyledCard>
    </StyledFlex>
  )
}

export default Login

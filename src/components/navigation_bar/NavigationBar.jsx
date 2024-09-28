import { default as AntdCol } from 'antd/lib/col'
import React from 'react'
import imagePath from '../../constants/imagePath'
import { deleteLocalStorage } from '../../utilities/handleStorage'
import { Button, Flex, Image } from '../antd'
import {
  StyledDrawer,
  StyledLogoContainer,
  StyledMenu,
} from './StyledComponents'

const NavigationBar = (props) => {
  const { context } = props
  const { navigate } = context

  const handleClickMenu = (e) => {
    const key = e.key
    navigate(`/${key}`)
  }

  const handleLogout = () => {
    deleteLocalStorage()
    navigate('/')
  }

  const renderMenus = () => {
    const items = [
      {
        label: 'Users',
        key: 'users',
        onClick: handleClickMenu,
      },
      {
        label: 'Logout',
        key: 'logout',
        onClick: handleLogout,
      },
    ]

    return (
      <StyledMenu
        mode='horizontal'
        overflowedIndicator={
          <Button
            type='text'
            icon={<StyledDrawer />}
          ></Button>
        }
        items={items}
      />
    )
  }
  return (
    <Flex
      align='middle'
      justify='space-between'
    >
      <StyledLogoContainer>
        <Image
          src={imagePath.logoDark}
          isPreview={false}
          width={40}
        />
      </StyledLogoContainer>
      <AntdCol
        md={4}
        sm={2}
      >
        <Flex justify='end'>
          <AntdCol span={24}>{renderMenus()}</AntdCol>
        </Flex>
      </AntdCol>
    </Flex>
  )
}

export default NavigationBar

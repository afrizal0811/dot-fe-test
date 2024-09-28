import { MenuOutlined } from '@ant-design/icons'
import { Grid, theme } from 'antd'
import React from 'react'
import { deleteLocalStorage } from '../../utilities/handleStorage'
import { Button } from '../antd'
import {
  StyledContainer,
  StyledMenu,
  StyledMenuContainer,
  StyledNav,
} from './StyledComponents'
import { menuItems } from './help'
const { useToken } = theme
const { useBreakpoint } = Grid

const Navbar = (props) => {
  const { context } = props
  const { navigate } = context
  const { token } = useToken()
  const screens = useBreakpoint()

  const handleLogout = () => {
    deleteLocalStorage()
    navigate('/')
  }

  const handleClickMenu = (e) => {
    const key = e.key
    navigate(`/${key}`)
  }

  return (
    <StyledNav>
      <StyledContainer
        $token={token}
        $screens={screens}
        justify='between'
        align='center'
      >
        <StyledMenuContainer
          align='center'
          gap='middle'
        >
          <StyledMenu
            $token={token}
            $screens={screens}
            mode='horizontal'
            onClick={handleClickMenu}
            items={menuItems}
            overflowedIndicator={
              <Button
                type='text'
                icon={<MenuOutlined />}
              ></Button>
            }
          />
        </StyledMenuContainer>
        <Button
          type='primary'
          onClick={handleLogout}
        >
          Log out
        </Button>
      </StyledContainer>
    </StyledNav>
  )
}

export default Navbar

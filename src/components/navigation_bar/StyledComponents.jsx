import { MenuOutlined } from '@ant-design/icons'
import { default as AntdCol } from 'antd/lib/col'
import styled from 'styled-components'
import { Menu } from '../antd'

export const StyledDrawer = styled(MenuOutlined)`
  color: black;
  font-size: 20px !important;
`
export const StyledMenu = styled(Menu)`
  background-color: transparent;
  border-bottom: none;
  line-height: 3.5rem;
  .ant-menu-title-content {
    color: black;
    font-size: 16px;
    font-weight: 600;
  }
`
export const StyledLogoContainer = styled(AntdCol)`
  cursor: pointer;
  margin-left: 40px;
  margin-top: 10px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`

import { ConfigProvider } from 'antd'
import React from 'react'
import color from './constants/color'
const StyledConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: color.beauBlue,
            hoverBorderColor: color.beauBlue,
          },
          Button: {
            colorPrimary: color.steelBlue,
            algorithm: true,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default StyledConfig

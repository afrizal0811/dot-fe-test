import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteHandler from './RouteHandler'
import StyledConfig from './StyledConfig'
function App() {
  return (
    <div className='App'>
      <StyledConfig>
        <BrowserRouter>
          <RouteHandler />
        </BrowserRouter>
      </StyledConfig>
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import IndexedApp from './IndexedApp'
import {AppProvider} from './context'
ReactDOM.render(
  
  <React.StrictMode>

    <AppProvider>
    <IndexedApp />
    </AppProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
)

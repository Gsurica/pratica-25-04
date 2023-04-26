import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MenuAppBar } from './components/AppBar/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

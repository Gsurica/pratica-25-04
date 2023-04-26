import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Register } from '../Pages/Register'
import { MenuAppBar } from '../components/AppBar'
import { useState } from 'react'
import { SwipeableTemporaryDrawer } from '../components/Drawer'

const AppRouter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <MenuAppBar 
        setIsOpen={setIsOpen}
      />
      <SwipeableTemporaryDrawer 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRouter }
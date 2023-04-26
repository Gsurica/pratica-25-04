import { useState } from "react"
import { MenuAppBar } from "./components/AppBar"
import { SwipeableTemporaryDrawer } from "./components/Drawer"

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <MenuAppBar 
        setIsOpen={setIsOpen}
      />

      <SwipeableTemporaryDrawer 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export default App

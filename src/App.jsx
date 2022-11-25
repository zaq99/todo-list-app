import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InputUser from './component/InputUser'
import Kartu from './component/Kartu'
import Card from './component/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputUser />
      <Kartu />
      <Card />
    </>
  )
}

export default App

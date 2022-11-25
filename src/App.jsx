import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InputUser from './component/InputUser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputUser />
    </>
  )
}

export default App

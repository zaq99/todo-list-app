import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InputUser from './component/InputUser'
import ListKartu from './component/ListKartu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto text-center'>
        <InputUser />
        <ListKartu />
      </div>
    </>
  )
}

export default App

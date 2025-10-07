import { useState } from 'react'


import Inicio from '@/pages/inicio';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio></Inicio>
    </>
  )
}

export default App

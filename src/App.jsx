import React, { useState } from 'react'
import Home from './Components/Home'


function App() {
  var [menuu, setMenuu] = useState(false);
  var [menuclose, setMenuclose] = useState(false);
  return (
    <div>
      <Home menuu = {menuu} setMenuu = {setMenuu}  menuclose = {menuclose} setMenuclose = {setMenuclose} />
    </div>
  )
}

export default App
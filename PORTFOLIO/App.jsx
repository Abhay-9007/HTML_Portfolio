import {Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Account from './components/Account.jsx'
import Card from './components/Card.jsx'


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profiles' element={<Profile/>}></Route>
      <Route path='/accounts' element={<Account/>}></Route>
      <Route path='/card' element={<Card/>}></Route>
    </Routes>
      
    </>
  )
}

export default App

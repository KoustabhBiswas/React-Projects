import { useState } from 'react'
// import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/admin/Layout'
import { Caselist } from './components/admin/cases/Caselist';
import { Viewcasedtls } from './components/admin/cases/Viewcasedtls'; 
import { Addnewcase } from './components/admin/cases/Addnewcase';
 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       
        <Routes>
          <Route path='/cases' element={<Caselist />} />
          <Route path='/cases/viewcasedtls/:caseidpk' element={<Viewcasedtls />} />
          <Route path='/cases/addnewcase' element={<Addnewcase />} />
        </Routes>
        
      {/* <Layout /> */}
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"

import { ElementHomePage } from "./ElementHomePage/ElementHomePage"
import {Shop} from "./pages/Shop"
import {SingIn} from "./pages/SingIn"
import {Cart} from "./pages/Cart"
import { About } from "./pages/About"


function App() {
  

  return (
    <>

      <Routes>
        <Route path= "/Shop" element={<Shop/>}/>
        <Route path= "/About" element={<About/>}/>
        <Route path= "/" element={<ElementHomePage/>}/>
        <Route path= "/SingIn" element={<SingIn/>}/>
        <Route path= "/Cart" element={<Cart/>}/>

      </Routes>
      
  
      
     

    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Sobre from './Sobre'
import Personagens from './Personagens'
import Pagina404 from './Pagina404'

function App() {
  return (
      <BrowserRouter>
        <Header/>
                <Routes>
                    <Route path= '/' element={<Home/>}/>
                    <Route path= '/sobre' element={<Sobre/>}/>
                    <Route path= '/personagens' element={<Personagens/>}/>
                    <Route path='*' element={<Pagina404/>}/>
                </Routes>
      </BrowserRouter>
  )
}

export default App;

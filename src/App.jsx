import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/products'
import ProductDetail from './pages/productsDetail'

function App() {
  

  return (

      <BrowserRouter>

      <Routes>
        {/* <Route path="/" element = {<Home/>} /> */}
        <Route path ="/" element = {<Products />} />
        <Route path = "/products/:id" element = {<ProductDetail />}/>
      </Routes>
      
      </BrowserRouter>
    
  )
}

export default App

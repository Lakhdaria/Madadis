import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Accueil from './pages/Accueil'
import About from './pages/About'
import Blog from './pages/Blog'
import Produits from './pages/Produits'
import ProduitDetail from './pages/ProduitDetail'
import Cart from './pages/Cart'
import Header from './components/Header'
import Vision from './pages/Vision'
import Histoire from './pages/Histoire'
import Error404 from './pages/Error404'
import BlogDetails from './pages/BlogDetails'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/about' element={<About />}>
          <Route path='notre-vision' element={<Vision />} />
          <Route path='notre-histoire' element={<Histoire />} />
        </Route>
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/produits' element={<Produits />} />
        <Route path='/produits/:id' element={<ProduitDetail />} />
        <Route path='/panier' element={<Cart />} />
        <Route path='/error' element={<Error404 />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
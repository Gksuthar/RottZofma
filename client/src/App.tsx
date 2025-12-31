
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './app/layout/Layout'
import Home from './app/pages/home/Home';
import Shop from './app/pages/shop/Shop';
import About from './app/pages/about/About';
import Contact from './app/pages/contact/Contact';
import ProductDetails from './app/components/productDetails/ProductDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

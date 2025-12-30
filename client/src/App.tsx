
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './app/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Tracking from './pages/Tracking'
import Contact from './pages/Contact'
import Error404Demo from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="tracking" element={<Tracking/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<Error404Demo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

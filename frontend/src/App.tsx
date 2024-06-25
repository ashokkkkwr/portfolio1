import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'



import {BrowserRouter, Routes, Route} from "react-router-dom";


export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
       
      </Route>
    </Routes>
  </BrowserRouter>
    
    
  )
}



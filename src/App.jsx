// import Home from "./pages/Home"
// import {   Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuSection from './pages/Menus';
import EventsSection from './pages/Events';
import Header from './components/Header';
// import Header from './Header'; // Header-kaaga
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import About from './pages/About';
// import Book from './pages/Book';
// import Event from './pages/Event';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';
function App() {
  

  return (
    <>
     {/* <Home/> */}
<Router>
     <Header/> {/* Header-ka oo isticmaalaya Link components */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuSection />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/book" element={<Book />} /> */}
        <Route path="/event" element={<EventsSection />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
       
    </>
  )
}

export default App

import Home from "./pages/Home"


function App() {
  

  return (
    <>
     <Home/>
       
    </>
  )
}

// export default App



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./Header"; // Assuming your Header component is in Header.js
import Menu from "./pages/Menu";
import About from "./pages/About";
import Book from "./pages/Book";
import Event from "./pages/Event";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
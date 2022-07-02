import Home from "./components/Pages/HomePage/Home";
import Footer from "./components/Pages/General/Footer";
import Header from "./components/Pages/General/Header";
import { Route, Routes, Navigate } from "react-router-dom";
// import Tab from "./components/Pages/General/Tab";

function App() {
  return (
    <>
      <nav>
        <Header/>
        {/* <Tab/> */}
      </nav>
      <main>
      <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/category/:category' element={<Category />} />
          <Route path='/category/:category/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login-invalid' element={<LoginError />} />
          <Route path='/user' element={<UserDetails />} />
          <Route path='/info' element={<Info />} />
          <Route path='/search/:term' element={<Search />} />
          <Route path='/error' element={<Error />} />
          <Route path='/*' element={<Navigate to='/error' />} /> */}
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;

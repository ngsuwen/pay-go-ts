import Home from "./components/Pages/HomePage/Home";
import Footer from "./components/Pages/General/Footer";
import Header from "./components/Pages/General/Header";
import CustomizedTabs from "./components/Pages/General/Tab";
import Category from "./components/Pages/CategoryPage/Category";
import Product from "./components/Pages/ProductPage/Product";
import Search from "./components/Pages/SearchResult/SearchResult";
import Cart from "./components/Pages/CartPage/Cart";
import Info from "./components/Pages/MiscPage/Info";
import Error from "./components/Pages/MiscPage/Error";
import Login from "./components/Pages/LoginPage/Login";
import LoginError from "./components/Pages/LoginPage/LoginError";
import UserDetails from "./components/Pages/UserPage/UserDetails";
import { ProductData } from "./components/ProductCard";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';
import { GlobalContext } from "./globalContext";

function App() {
  const [currency, setCurrency] = useState<string>('usd $');
  const [sort, setSort] = useState<string>('price');
  const [rate, setRate] = useState<number>(1);
  const [cart, setCart] = useState<ProductData[]>([]);
  const [userId, setUserId] = useState<string>('');

  const context = {
    userId,
    setUserId,
    cart,
    setCart,
    currency,
    setCurrency,
    rate,
    setRate,
    sort,
    setSort
  }

  return (
    <>
      <GlobalContext.Provider value={context}>
      <nav>
        <Header/>
        <CustomizedTabs cart={cart}/>
      </nav>
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/category/:category/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-invalid' element={<LoginError />} />
        <Route path='/user' element={<UserDetails />} />
        <Route path='/info' element={<Info />} />
        <Route path='/search/:term' element={<Search />} />
        <Route path='/error' element={<Error />} />
        <Route path='/*' element={<Navigate to='/error' />} />
      </Routes>
      </main>
      </GlobalContext.Provider>
      <Footer/>
    </>
  );
}

export default App;

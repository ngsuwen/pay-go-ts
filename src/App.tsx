import Home from "./components/Pages/HomePage/Home";
import Footer from "./components/Pages/General/Footer";
import Header from "./components/Pages/General/Header";
import Category from "./components/Pages/CategoryPage/Category";

import { Route, Routes, Navigate } from "react-router-dom";
// import Tab from "./components/Pages/General/Tab";
import { createContext, useState } from 'react';


// export const DataContext = createContext<null | String>(null);
// export const UserContext = createContext<null | String>(null);

export const CurrencyContext = createContext<[currency:string, setCurrency:React.Dispatch<React.SetStateAction<string>>]>(null as any);
export const RateContext = createContext<[rate:number, setRate:React.Dispatch<React.SetStateAction<number>>]>(null as any);
export const SortContext = createContext<[sort:string, setSort:React.Dispatch<React.SetStateAction<string>>]>(null as any);

function App() {
  const [currency, setCurrency] = useState<string>('usd $');
  const [sort, setSort] = useState<string>('');
  const [rate, setRate] = useState<number>(1);
  // const [cart, setCart] = useState([]);
  // const [userId, setUserId] = useState(null);

  return (
    <>
      {/* <UserContext.Provider value={[userId, setUserId]}> */}
      <nav>
        <Header/>
        {/* <Tab/> */}
      </nav>
      <main>
      {/* <DataContext.Provider value={[cart, setCart]}> */}
      <CurrencyContext.Provider value={[currency, setCurrency]}>
      <SortContext.Provider value={[sort, setSort]}>
      <RateContext.Provider value={[rate, setRate]}>
      <Routes>
        <Route path='/' element={<Category />} />
        {/* <Route path='/category/:category' element={<Category />} /> */}
        {/* <Route path='/category/:category/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-invalid' element={<LoginError />} />
        <Route path='/user' element={<UserDetails />} />
        <Route path='/info' element={<Info />} />
        <Route path='/search/:term' element={<Search />} />
        <Route path='/error' element={<Error />} />
        <Route path='/*' element={<Navigate to='/error' />} /> */}
      </Routes>
      </RateContext.Provider>
      </SortContext.Provider>
      </CurrencyContext.Provider>
      {/* </DataContext.Provider> */}
      </main>
      {/* </UserContext.Provider> */}
      <Footer/>
    </>
  );
}

export default App;

import { createContext } from 'react';
import { ProductData } from "./components/ProductCard";

type GlobalContextType = { 
    userId:string,
    setUserId: (userId:string) => void,
    cart:ProductData[],
    setCart: (cart:ProductData[]) => void,
    currency:string,
    setCurrency: (currency:string) => void,
    rate:number,
    setRate: (rate:number) => void,
    sort:string,
    setSort: (sort:string) => void,
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);
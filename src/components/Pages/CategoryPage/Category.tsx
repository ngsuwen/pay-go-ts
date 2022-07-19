import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import { Grid, Container, Box, CircularProgress } from '@mui/material';
import Product from '../../ProductCard';
import SortOption from './SortOption';
import CurrencyOption from './CurrencyOption';
import { sortFunction } from './sortFunction';
import { GlobalContext } from "../../../globalContext";
import { ProductData } from "../../ProductCard";

export default function Category() {
    const context=useContext(GlobalContext);
    const params = useParams();
    const [data, setData] = useState<ProductData[]>([]);

    const products = data.map((element) => <Grid item><Product data={element} /></Grid>)

    useEffect(() => {
        const getData = async () => {
            setData([])
            try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${params.category}`);
            const data = await response.json();
            sortFunction(data, context.sort)
            // console.log(response)
            setData(data);
            } catch (err) {
                console.log(err);
            }
            // console.log(sort)
        };
        getData();
    }, [params.category, context.sort, context.currency]);

    return (
        <Container maxWidth='lg' sx={{ minHeight: '62vh' }}>
            <Box sx={{ maxWidth: 'lg', display: 'flex', justifyContent: 'flex-end' }}>
                <SortOption/>
                <CurrencyOption/>
            </Box>
            <Grid sx={{ justifyContent: 'center' }} container spacing={0.5} >
                {(data.length>0)?products:<CircularProgress color="inherit" size='2rem' />}
            </Grid>
        </Container>
    );
};
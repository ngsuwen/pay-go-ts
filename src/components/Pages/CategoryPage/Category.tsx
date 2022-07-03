import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import { Grid, Container, Box, CircularProgress } from '@mui/material';
import Product from '../../ProductCard';
import SortOption from './SortOption';
import CurrencyOption from './CurrencyOption';
import { sortFunction } from './sortFunction';
import { SortContext, CurrencyContext } from "../../../App";

export default function Category() {
    const [sort, setSort]=useContext(SortContext);
    const [currency, setCurrency]=useContext(CurrencyContext);
    const params = useParams();

    const [data, setData] = useState([]);
    const products = data.map((element) => <Grid item><Product data={element} /></Grid>)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${params.category}`);
            // const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
            const data = await response.json();
            // console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const getData = async () => {
            setData([])
            const response = await fetchData();
            console.log(sort)
            sortFunction(response, sort)
            // console.log(response)
            setData(response);
        };
        getData();
    }, [params.category, sort, currency]);

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
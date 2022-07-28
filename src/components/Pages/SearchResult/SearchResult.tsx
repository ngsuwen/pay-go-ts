import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import { Grid, Container, Box, CircularProgress } from '@mui/material';
import ProductCard from '../../ProductCard';
import SortOption from '../CategoryPage/SortOption';
import CurrencyOption from '../CategoryPage/CurrencyOption';
import { sortFunction } from '../../../utils/sortFunction';
import { GlobalContext } from "../../../globalContext";
import { ProductData } from "../../ProductCard";

export default function Search() {
    const context = useContext(GlobalContext);
    const params = useParams();
    const [data, setData] = useState<ProductData[]>([]);

    let filteredData = data.filter((element:ProductData) => element.title.toLowerCase().includes(`${params.term}`))
    const products = filteredData.map((element) => <Grid item><ProductCard data={element} key={element.id}/></Grid>)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data:ProductData[] = await response.json();
            // console.log(data);
            return data;
        } catch (err) {
            console.log(err);
            return []
        }
    };

    useEffect(() => {
        setData([])
        const getData = async () => {
            const response:ProductData[] = await fetchData();
            // console.log(sort)
            sortFunction(response, context.sort)
            // console.log(response)
            setData(response);
        };
        getData();
    }, [params.term, context.sort, context.currency]);

    return (
        <Container maxWidth='lg' sx={{minHeight:'62vh'}}>
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
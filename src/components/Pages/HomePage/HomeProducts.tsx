import { useState, useEffect } from "react";
import { Grid, Container, CircularProgress } from '@mui/material';
import ProductCard from "../../ProductCard";

export default function Products({ category }:{ category:string; }) {
    const [data, setData] = useState([]);
    const products = data.map((element) => <Grid item><ProductCard data={element} /></Grid>)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setData(response);
        };
        getData();
    }, []);


    return (
        <Container maxWidth='lg'>
            <Grid sx={{ justifyContent: 'center' }} container spacing={0.5} >
                {(data.length>0)?products:<CircularProgress color="inherit" size='2rem' />}
            </Grid>
        </Container>
    );
};
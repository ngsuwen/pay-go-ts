import { useState, useEffect } from "react";
import { Grid, Container, CircularProgress } from '@mui/material';
import ProductCard from "../../ProductCard";
import { ProductData } from "../../ProductCard";

export default function Products() {
    const [data, setData] = useState<ProductData[]>([]);
    const products = data.map((element) => <Grid item><ProductCard data={element} key={element.id}/></Grid>)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`);
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.log(err);
            }
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
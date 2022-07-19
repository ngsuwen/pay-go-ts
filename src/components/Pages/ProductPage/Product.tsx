import { useState, useEffect, useContext, useRef } from "react";
import { useParams } from 'react-router-dom'
import { Alert, Snackbar, IconButton, Box, Container, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import QtySelector from "./QtySelector";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ImageZoom from "./ImageZoom";
import { CurrencyContext, RateContext } from "../../../App";
import { GlobalContext } from "../../../globalContext";
import { ProductData } from "../../ProductCard";

export default function Product() {
    const params = useParams();
    const [data, setData] = useState<ProductData>({
        id: 0,
        category: '',
        description: '',
        image: '',
        price: 0,
        title: '',
        amount: 0
    });
    const context = useContext(GlobalContext);
    const [currency] = useContext(CurrencyContext);
    const [alert, setAlert] = useState(false);
    const qtyRef = useRef<HTMLInputElement>(null);
    const [rate] = useContext(RateContext);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    const addToCart = () => {
        const index = context.cart.findIndex((element) => element.title === data.title)
        if (index === -1) {
            if (qtyRef.current && qtyRef.current.value === '') {
                data.quantity = 1
            } else if (qtyRef.current) {
                data.quantity = Number(qtyRef.current.value)
            }
            context.setCart([...context.cart, data])
        } else {
            if (qtyRef.current && qtyRef.current.value === '') {
                context.cart[index].quantity += 1
                context.setCart([...context.cart])
            } else if (qtyRef.current){
                context.cart[index].quantity += Number(qtyRef.current.value)
                context.setCart([...context.cart])
            }
        }
        setAlert(true)
    }

    const handleClose = () => {
        setAlert(false)
    };

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setData(response);
        };
        getData();
    }, [params.category]);

    return (
        <Container maxWidth='lg'>
            <Card sx={{ padding: '0px 5% 5%', boxShadow: 'none' }}>
                {data.image ?
                    <>
                        <CardContent sx={{ padding: '5%' }}>
                            <ImageZoom image={data.image} />
                        </CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography sx={{ padding: 1 }} variant="h6" fontWeight='bold'>
                                    {data.title}
                                </Typography>
                                <Typography sx={{ padding: 1, fontStyle: 'italic' }} variant="subtitle1" color="text.secondary" >
                                    Rating: {data.rating ? data.rating.rate : ''}/5
                                </Typography>
                                <Typography sx={{ padding: 1 }} variant="subtitle1" color="text.secondary" >
                                    <Typography variant="subtitle2" fontWeight='bold'>
                                        DESCRIPTION:
                                    </Typography>
                                    {data.description}
                                </Typography>
                                <Typography sx={{ padding: 1 }} variant="subtitle1" color="text.secondary" fontWeight='bold'>
                                    {currency ? currency.toUpperCase() : 'USD $'}{rate ? Number(data.price * rate).toFixed(2) : Number(data.price).toFixed(2)}
                                </Typography>
                                <Typography sx={{ padding: 1 }} variant="subtitle1" color="text.secondary">
                                    Quantity:<br />
                                </Typography>
                                <QtySelector qtyRef={qtyRef} />
                                <IconButton aria-label="add to shopping cart">
                                    <AddShoppingCartIcon onClick={addToCart} />
                                </IconButton>
                            </CardContent>
                        </Box>
                    </>
                    : <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress color="inherit" size='2rem' /></Box>}
            </Card>
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={alert} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Added to cart!
                </Alert>
            </Snackbar>
        </Container >
    );
};
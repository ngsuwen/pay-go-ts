import { useContext } from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom"
import { GlobalContext } from "../globalContext";

export type ProductData = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
    [key: string]: any;
  }
  
export default function ProductCard({ data, key }:{ data: ProductData, key:number}) {
    const context = useContext(GlobalContext);

    return (
        <Link style={{textDecoration:'none'}} to={`/category/${data.category}/${data.id}`}>
            <Card style={{
                width: 220,
                minHeight: 330,
                margin: 5
            }} sx={{
                boxShadow: 0
            }}>
                <CardActionArea sx={{
                    '&:hover': { opacity: 0.7 },
                    '.MuiCardActionArea-focusHighlight': {
                        bgcolor: 'white',
                    }
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItem: "center",
                            justifyContent: "center",
                            height: 200
                        }}
                    >
                        <CardMedia
                            style={{
                                maxWidth: 150,
                                maxHeight: 200,
                                objectFit: 'scale-down'
                            }}
                            component='img'
                            image={data.image}
                            alt={data.title}
                        />
                    </Box>
                    <CardContent>
                        <Typography textAlign='center' gutterBottom variant="subtitle2" component="div">
                            {data.title}
                        </Typography>
                        <Typography textAlign='center' variant="subtitle2" color="text.secondary">
                            {/* {currency?currency.toUpperCase():'USD $'}{rate?Number(data.price*rate).toFixed(2):Number(data.price).toFixed(2)} */}
                            {context.currency.toUpperCase()}{Number(data.price*context.rate).toFixed(2)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};
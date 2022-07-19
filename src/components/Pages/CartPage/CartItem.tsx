import { useContext } from 'react';
import { ListItem, ListItemAvatar, ListItemText, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RateContext } from '../../../App';
import { GlobalContext } from '../../../globalContext';
import { ProductData } from "../../ProductCard";

export default function CartItem({ data }:{data: ProductData}) {
    const context = useContext(GlobalContext);
    const [rate] = useContext(RateContext);

    const deleteHandler=()=>{
        const filteredCart = context.cart.filter((list)=>list!==data)
        context.setCart(filteredCart)
    }

    return (
        <>
            <ListItem>
                <ListItemAvatar sx={{ padding: '2%', flex:'0 200px' }} >
                    <img style={{width:'100%'}} src={data.image} />
                </ListItemAvatar>
                <ListItemText sx={{ paddingLeft: '7%', minWidth:'300px', flex:'0 600px' }} primary={data.title} />
                <Typography sx={{ paddingLeft: '7%', minWidth:'25px', flex:'0 100px' }} color="text.secondary">{data.quantity}</Typography>
                <Typography sx={{ paddingLeft: '2%', minWidth:'125px' }} color="text.secondary">{context.currency?context.currency.toUpperCase():'USD $'}{rate?Number(data.price*rate).toFixed(2):Number(data.price).toFixed(2)}</Typography>
                <IconButton >
                    <DeleteIcon onClick={deleteHandler}/>
                </IconButton>
            </ListItem>

        </>
    )
}
import { useContext, useState } from 'react';
import { Box, List, Container, ListItem, Typography, Button, Grid, Divider, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import CartItem from './CartItem';
import { GlobalContext } from '../../../globalContext';

export default function Cart() {
    const [open, setOpen] = useState<boolean>(false);
    const context = useContext(GlobalContext);

    const cartItemList = context.cart.map((item) =>
        <CartItem data={item} key={item.id} />)

    let totalCost:number = 0
    const calTotalCost = () => context.cart.forEach(item => totalCost += item.quantity * item.price * (context.rate ? context.rate : 1))
    calTotalCost()

    const openHandler = () => {
        setOpen(true)
        context.setCart([])
    }

    const closeHandler = () => {
        setOpen(false)
    }

    return (
        <Container maxWidth='lg' sx={{ minHeight: '62vh' }}>
            <List
                sx={{
                    justifyContent: 'center',
                }}
            >
                <ListItem>
                    <Typography sx={{ paddingLeft: '2%', paddingBottom: '2%' }} variant='h6' fontWeight="bold" color="text.secondary">Products</Typography>
                </ListItem>
                <Divider />
                <Box sx={{ maxWidth: 'lg', overflow: 'auto' }}>
                    {cartItemList}
                </Box>
                <Divider />
                <ListItem >
                    <Grid container direction="column" spacing={3} >
                        <Grid item />
                        <Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Typography fontWeight='bold' color="text.secondary">Total Cost: {context.currency ? context.currency.toUpperCase() : 'USD $'}{Number(totalCost).toFixed(2)}</Typography>
                        </Grid><Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button sx={{ color: "text.secondary", fontSize: 12 }} variant="outlined" color='inherit' onClick={openHandler}>Check out</Button>
                        </Grid>
                        <Grid item />
                    </Grid>
                </ListItem>
            </List>
            <Dialog
                open={open}
                onClose={closeHandler}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <DialogContentText>
                        Thank you for shopping with us!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={closeHandler} sx={{ color: "text.secondary", fontSize: 12 }}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}
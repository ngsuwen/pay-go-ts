import { useState, useEffect, useContext } from "react";
import { Grid, Divider, Container, Box, Typography, CircularProgress } from '@mui/material';
import { GlobalContext } from "../../../globalContext";

interface Address {
    city: string;
    number: number;
    street: string;
    zipcode: string;
}

interface Name {
    firstname: string;
    lastname: string;
}

type UserData = {
    address: Address;
    name: Name;
    phone: number;
    email: string;
}

export default function UserDetails() {
    const [data, setData] = useState<UserData | null>(null)
    const context = useContext(GlobalContext)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/`);
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    };
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            const filter = response.filter((element:any)=>(element.username===context.userId))
            console.log(filter)
            setData(filter[0])
        };
        getData();
    }, [context.userId]);

    return (
        <Container maxWidth='lg' sx={{ minHeight: '62vh' }}>
                {data ?
                    <>
                        <Typography variant='body1' fontWeight='bold'>Personal Profile</Typography>
                        <Divider />
                        <Grid container rowSpacing={1} sx={{ marginTop: 2, marginBottom: 3, marginLeft: 2 }}>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Name:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{`${data.name.firstname} ${data.name.lastname}`}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Email:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{data.email}</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant='body1' fontWeight='bold'>Shipping Address</Typography>
                        <Divider />
                        <Grid container rowSpacing={1} sx={{ marginTop: 2, marginBottom: 3, marginLeft: 2 }}>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">City:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{data.address.city}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Street:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{`${data.address.number} ${data.address.street}`}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Zipcode:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{data.address.zipcode}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Phone:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{data.phone}</Typography>
                            </Grid>
                        </Grid>
                    </>
                    :<Box sx={{ display: 'flex', justifyContent: 'center' }} ><CircularProgress color="inherit" size='2rem' /></Box>}
        </Container>
    );
};
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button, Container } from '@mui/material';
// import { Link } from 'react-router-dom';

type CarouselData = {
    image: string;
    name: string;
    description: string;
    link: string;
}

const CCard = ({ data }:{ data:CarouselData}) => {
    console.log(data.image)
    console.log(data.name)
    return (
        <Grid item xs={4}>
            <Card sx={{
                borderRadius: 0, 
                boxShadow: '0px 2px 4px #aaaaaa'}}>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        draggable="false"
                        component="img"
                        height="450"
                        image={data.image}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            bgcolor: '#e0e0e0',
                            opacity: 0.8,
                            color: 'black',
                            padding: '2%',
                        }}
                    >
                        <Typography variant="subtitle1">{data.name}</Typography>
                    </Box>

                </Box>
            </Card>
        </Grid>
    )
}

const ViewMore = ({ data }:{ data:CarouselData }) => {
    console.log(data.name)
    console.log(data.link)
    return (
        <Grid item xs={4}>
            <CardContent sx={{ 
                backgroundColor:'#e0e0e0', 
                height: 410, 
                boxShadow: '0px 2px 4px #aaaaaa' }}>
                <Typography sx={{ marginTop: '40%' }} variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {data.description}
                </Typography>
                {/* <Link style={{textDecoration:'none'}} to={`/category/${data.link}`}> */}
                <Button sx={{
                    bgcolor: '#e0e0e0',
                    color: 'black',
                    border: '2px solid black',
                    marginTop: '10%',
                    '&:hover':{
                        color: 'black',
                        bgcolor: 'white',
                        border: '2px solid white'}
                }}

                    variant="outlined">
                    Shop Now
                </Button>
                {/* </Link> */}
            </CardContent>
        </Grid>
    )
}

const forLoop = ( num: number, arr:CarouselData[]) => {
    console.log('pass forLoop()')
    let carouselArr: React.ReactElement[] = []
    for (let i = 0; i < 3; i++) {
        if (num === i) {
            carouselArr.push(<ViewMore data={arr[i]} />)
        } else {
            carouselArr.push(<CCard data={arr[i]} />)
        }
    }
    console.log(carouselArr)
    return carouselArr
}

const Item = ({ num, arr }:{ num: number, arr:CarouselData[]}) => {
    let loopData = forLoop(num, arr)
    console.log(loopData)
    return (
        <Grid container spacing={0}>
            {loopData}
        </Grid>
    );
};

export default function ProductCarousel() {

    return (
        <Container maxWidth='lg'>
            <Carousel>
                <Item num={0} arr={dataArray1} />
                <Item num={1} arr={dataArray2} />
                <Item num={2} arr={dataArray3} />
            </Carousel>
        </Container>
    );
}

const dataArray1 = [{ image:'', name: 'ELECTRONICS', description: 'Electronics is Forever', link: 'electronics' }, { image: 'https://source.unsplash.com/featured/?macbook', name: 'Macbook', description:'', link: '' }, { image: 'https://source.unsplash.com/featured/?laptop', name: 'Laptop', description:'', link: '' }]
const dataArray2 = [{ image: 'https://source.unsplash.com/featured/?diamond', name: 'Diamond', description:'', link: '' }, { image:'', name: 'JEWELRY', description: 'Sexier than Diamond', link: 'jewelery' }, { image: 'https://source.unsplash.com/featured/?bracelet', name: 'Bracelet', description:'', link: '' }]
const dataArray3 = [{ image: 'https://source.unsplash.com/featured/?dress', name: 'Dress', description:'', link: '' }, { image: 'https://source.unsplash.com/featured/?blouse', name: 'Blouse', description:'', link: '' }, { image:'', name: 'FASHION', description: 'Trending with Us', link: "women's%20clothing" }]
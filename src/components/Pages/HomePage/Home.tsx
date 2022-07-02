import { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import Carousel from './Carousel';
import Products from './HomeProducts';

const Heading = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

export default function Home() {
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <>
            {width >= 650 ?
                <Carousel /> : console.log('less')}
            <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center' }}>
                <Heading>{"New Products"}</Heading>
            </Box>
            <Products category="men's%20clothing" />
            <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center' }}>
                <Heading>{"Top Selling"}</Heading>
            </Box>
            <Products category="men's%20clothing" />
        </>
    );
}
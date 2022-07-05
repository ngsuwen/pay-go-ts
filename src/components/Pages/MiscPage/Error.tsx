import { Container, Box, Typography } from '@mui/material';

export default function Error(){
    return(
        <Container maxWidth='lg' >
            <Box sx={{ display: 'flex', minHeight:'58vh', justifyContent:'center', alignItems:'center' }}>
                <Typography variant="h6" fontWeight='bold'>Page Not Found</Typography>
            </Box>
        </Container>
    )
}
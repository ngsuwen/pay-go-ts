import { AppBar, Container, Toolbar, Typography, Divider } from '@mui/material';

export default function Footer() {
    return (
        <AppBar sx={{bgcolor: 'white', boxShadow: 'none', marginBottom:5}} position="static">
          <Container sx={{display:'flex', justifyContent:'center'}}>
            <Toolbar>
              <Typography variant="h5" color="#757575">
                WEBSTORE 
              </Typography>
            </Toolbar>
          </Container>
          <Divider/>
        </AppBar>
    )
}
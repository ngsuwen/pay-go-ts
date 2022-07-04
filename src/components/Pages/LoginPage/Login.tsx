import React, { useState, useRef, useContext } from 'react';
import { Button, TextField, Typography, Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginAuth } from './LoginAuth'
import { UserContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const userLogin = useRef<HTMLInputElement>();
    const userPassword = useRef<HTMLInputElement>();
    const [userId, setUserId] = useContext(UserContext)

    // console.log(userId)

    const handleClickShowPassword = () => {
        setShowPassword(showPassword ? false : true)
    };

    async function clickHandler() {
        let checkUserAuth;
        if (userLogin.current && userPassword.current){
            checkUserAuth = await loginAuth(userLogin.current.value, userPassword.current.value)
        }
        if (checkUserAuth){
            const token = checkUserAuth[0]
            setUserId(token?checkUserAuth[1] : null)
            navigate(token?'/user':'/login-invalid')
        }
    }

    return (
        <Box sx={{ minHeight: '62vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 3 }}>
                <Typography variant="h5" color="#757575">
                    Login
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField sx={{ width: 500 }} label="User Login" variant="outlined" inputRef={userLogin} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                    <InputLabel >
                        Password
                    </InputLabel>
                    <OutlinedInput
                        inputRef={userPassword}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                <Button sx={{
                    backgroundColor: "#757575",
                    '&:hover': {
                        backgroundColor: "#757575"
                    }
                }}
                    variant="contained" disableElevation onClick={clickHandler}>Sign In</Button>
            </Box>
        </Box>
    )
}
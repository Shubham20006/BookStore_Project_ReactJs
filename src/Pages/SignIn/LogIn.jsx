import React, { useEffect } from 'react'
import "./LogIn.css"
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { login } from '../../Services/UserService';
import OnlineBook from "D:/React/BookStore/bookstore/src/Pages/OnlineBook.png"
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, Navigate } from 'react-router-dom';
import { getCartItems } from '../../Services/DataServices';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
function LogIn({ checkLogin }) {

    const goOnSignup = () => {
        checkLogin()
    }

    const [loginObj, setLoginObj] = React.useState({ email: "", password: "" });
    const [errorObj, setErrorObj] = React.useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
    });

    const takeEmail = (event) => {
        setLoginObj((prevState) => ({ ...prevState, email: event.target.value }));
    };
    const takePassword = (event) => {
        setLoginObj((prevState) => ({ ...prevState, password: event.target.value }));
    };
    const submit = async () => {
        let emailTest = emailRegex.test(loginObj.email);
        let passwordTest = passwordRegex.test(loginObj.password);

        if (emailTest === false) {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: true,
                emailHelper: "enter correct email",
            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: false,
                emailHelper: "",
            }));
        }

        if (passwordTest === false) {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: true,
                passwordHelper: "enter correct password",
            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: false,
                passwordHelper: "",
            }));
        }

        if (emailTest === true && passwordTest === true) {
            let response = await login(loginObj);
            console.log(response);
            localStorage.setItem("token", response.data.result.accessToken);
          
        }
    }


    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid className='viewport' container  >

            <Item className='MainBox' xs={12} sm={6} md={4} lg={3}>
                <div><img src={OnlineBook} alt="" />
                </div>
                <div id='shopingtxt'>ONLINE BOOK SHOPPING</div>
            </Item>

            <Item className="Paper" elevation={2} xs={12} sm={6} md={4} lg={3}>
                <div className='innerpaper'>
                    <div className='contenthead'>
                        <div className='loghead'>
                            <div id='log1'>LOGIN</div>
                            <div id='dash1'></div>
                        </div>
                        <div id='sign1' onClick={goOnSignup} >SIGNUP</div>
                    </div>
                    <div className='eachbox' >
                        <div id='inputemail'>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Email Id"
                                variant="outlined"
                                required
                                size='small'
                                error={errorObj.emailError}
                                helperText={errorObj.emailHelper}
                                onChange={takeEmail}
                            /></div>
                        <FormControl id='inputpass' sx={{ m: 1, width: '600px' }} variant="outlined">
                            <OutlinedInput
                                fullWidth
                                size='small'
                                id="fullwidth"
                                onChange={takePassword}
                                error={errorObj.passwordError}
                                helpertext={errorObj.passwordHelper}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                }
                                placeholder="Password*"
                            />
                        </FormControl>
                        <div id='FPass'>Forgot password?</div>
                    </div>
                    <div className='innerpaper2'>

                        <div id='BT1'><Link to="/dashboard"><button onClick={submit} id='Bt1'>LOGIN</button> </Link></div>

                        <div>--------OR--------</div>
                        <div className='BT2'>
                            <button className='Btn' id='Bt2'>Facebook</button>
                            <button className='Btn' id='Bt3'>Google</button>
                        </div>
                    </div>

                </div>

            </Item>
        </Grid>

    )

}

export default LogIn

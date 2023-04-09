import React from 'react'
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { signup } from '../../Services/UserService';
import "./SignUp.css"
import OnlineBook from "D:/React/BookStore/bookstore/src/Pages/OnlineBook.png"
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const NameRegex = /^[A-Z]{1}[A-Za-z]{2,}$/;
const EmailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
const passRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
const mobRegex = /^[0-9]{10}$/;
function SignUp({checkSignup}) {

  const goOnLogin=()=>{
    checkSignup()
  }

    const [signUpObj, setSignupObj] = React.useState({ fullName: "", email: "", password: "", phone: "" });
    const [errObj, setErrObj] = React.useState({
        NameError: false,
        NameHelper: "",
        emailError: false,
        emailHelper: "",
        passError: false,
        passHelper: "",
        phoneError: false,
        phoneHelper: "",
    });
    const takeFullName = (event) => {
        setSignupObj((prev) => ({ ...prev, fullName: event.target.value }));
    };
    const takeEmail = (event) => {
        setSignupObj((prev) => ({ ...prev, email: event.target.value }));

    };
    const takePass = (event) => {
        setSignupObj((prev) => ({ ...prev, password: event.target.value }));

    };
    const takePhone = (event) => {
        setSignupObj((prev) => ({ ...prev, phone: event.target.value }));
    };

    const Submit1 = async () => {
        let nameTest = NameRegex.test(signUpObj.fullName);
        let emailTest = EmailRegex.test(signUpObj.email);
        let passTest = passRegex.test(signUpObj.password);
        let phoneTest = mobRegex.test(signUpObj.phone);



        if (nameTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                NameError: true,
                NameHelper: "Enter correct Full Name",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                NameError: false,
                NameHelper: "",
            }));
        }

        if (emailTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                emailError: true,
                emailHelper: "Enter correct Email",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                emailError: false,
                emailHelper: "",
            }));
        }

        if (passTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                passError: true,
                passHelper: "Enter correct Password",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                passError: false,
                passHelper: "",
            }));
        }

        if (phoneTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                phoneError: true,
                phoneHelper: "Enter correct Mobile number",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                phoneError: false,
                phoneHelper: "",
            }));
        }


        if (nameTest === true && emailTest === true && passTest === true && phoneTest === true) {
            let response = await signup(signUpObj)
            console.log(response);
        }


    };



    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid className='viewport1' container  >
            <Item className='MainBox1' xs={12} sm={6} md={4} lg={3}>
                <div><img src={OnlineBook} alt="" />
                </div>
                <div id='shopingtxt1'>ONLINE BOOK SHOPPING</div>
            </Item>

            <Item className="Paper2" elevation={2} xs={12} sm={6} md={4} lg={3}>
                <div className='PaperSignup'>
                    <div className='contenthead1'>
                        <div id='log2' onClick={goOnLogin}>LOGIN</div>
                        <div className='signhead'>
                            <div id='sign2'>SIGNUP</div>
                            <div id='dash2'></div>
                        </div>

                    </div>
                    <div className='box1' >
                        <div className='Each1' id='inputFname'>

                            <TextField
                                fullWidth
                                id="fullWidth1"
                                type={'text'}
                                label="Full Name"
                                variant="outlined"
                                required
                                size='small'
                                onChange={takeFullName}
                                error={errObj.NameError}
                                helpertext={errObj.NameHelper}
                            />
                        </div>
                        <div className='Each1' id='inputEmail'>

                            <TextField
                                fullWidth
                                id="fullwidth2"
                                type={'email'}
                                label="Email Id"
                                variant="outlined"
                                required
                                size='small'
                                onChange={takeEmail}
                                error={errObj.emailError}
                                helpertext={errObj.emailHelper}
                            />
                        </div>
                        <FormControl className='Each1' id='inputPass' sx={{ m: 1, width: '600px' }} variant="outlined">
                            <OutlinedInput
                                fullWidth
                                size='small'
                                id="fullwidth3"
                                onChange={takePass}
                                error={errObj.passError}
                                helpertext={errObj.passHelper}
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
                        <div className='Each1' id='inputNum'>

                            <TextField
                                fullWidth
                                id="fullwidth4"
                                type={'number'}
                                label="Mobile Number"
                                variant="outlined"
                                required
                                size='small'
                                onChange={takePhone}
                                error={errObj.phoneError}
                                helpertext={errObj.phoneHelper}
                            />
                        </div>
                        <div className='Each1' id='SignupBt'><button id='Signupbutton' type="submit" onClick={Submit1}>Signup</button></div>
                    </div>

                </div>

            </Item>

        </Grid>
    )

}

export default SignUp

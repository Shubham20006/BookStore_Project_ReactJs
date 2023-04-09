
import React, { useState } from 'react'
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./AddressDetail.css"

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const TextRegex = /^[A-Z]{1}[A-Za-z]{2,}$/;
const mobRegex = /^[0-9]{10}$/;





function AddressDetail({ setSummaryToggle, summaryToggle }) {

  const [AdrsObj, setAdrsObj] = useState({ fullName: "", phone: "", address: "", city: "", state: "" });
  const [errObj, setErrObj] = useState({
    NameError: false,
    NameHelper: "",
    phoneError: false,
    phoneHelper: "",
    cityError: false,
    cityHelper: "",
    stateError: false,
    stateHelper: "",

  });
  const takeFullName = (event) => {
    setAdrsObj((prev) => ({ ...prev, fullName: event.target.value }));
  };
  const takePhone = (event) => {
    setAdrsObj((prev) => ({ ...prev, phone: event.target.value }));
  };
  const takeAddress = (event) => {
    setAdrsObj((prev) => ({ ...prev, address: event.target.value }));

  };
  const takeCity = (event) => {
    setAdrsObj((prev) => ({ ...prev, city: event.target.value }));

  };
  const takeState = (event) => {
    setAdrsObj((prev) => ({ ...prev, state: event.target.value }));

  };


  const Submit = async () => {
    let nameTest = TextRegex.test(AdrsObj.fullName);
    let phoneTest = mobRegex.test(AdrsObj.phone);
    let cityTest = TextRegex.test(AdrsObj.email);
    let stateTest = TextRegex.test(AdrsObj.password);

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

    if (cityTest === false) {
      setErrObj((prevState) => ({
        ...prevState,
        cityError: true,
        cityHelper: "Enter correct City",
      }));
    } else {
      setErrObj((prevState) => ({
        ...prevState,
        cityError: false,
        cityHelper: "",
      }));
    }

    if (stateTest === false) {
      setErrObj((prevState) => ({
        ...prevState,
        stateError: true,
        stateHelper: "Enter correct state",
      }));
    } else {
      setErrObj((prevState) => ({
        ...prevState,
        stateError: false,
        stateHelper: "",
      }));
    }


  };


  return (
    <Grid container className='AddressDetailGridBoxOuter'>
      <Item className='customer' xs={12} sm={6} md={4} lg={3}>
        <div id='customer1'>Customer Details</div>
      </Item>
      <Grid container className='NamePassBox' >

        <Item className='NamePassBox1' xs={12} sm={6} md={4} lg={3}>

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
            helperText={errObj.NameHelper}

          />
        </Item>
        <Item className='NamePassBox2' xs={12} sm={6} md={4} lg={3}>

          <TextField
            fullWidth
            id="fullwidth2"
            type={'number'}
            label="Mobile Number"
            variant="outlined"
            required
            size='small'
            onChange={takePhone}
            error={errObj.phoneError}
            helperText={errObj.phoneHelper}
          />
        </Item>


      </Grid>
      <Item className='AddressDetailBox' xs={12} sm={6} md={4} lg={3}>
        <div className='AddressDetail1'>

          <TextField
            fullWidth
            id="fullWidth1"
            type={'text'}
            label="Address"
            variant="outlined"
            required
            size='large'
            onChange={takeAddress}

          />
        </div>
      </Item>
      <Grid container className='CityStateBox' >

        <Item className='CityStateBox1' xs={12} sm={6} md={4} lg={3}>

          <TextField
            fullWidth
            id="fullWidth1"
            type={'text'}
            label="City/Town"
            variant="outlined"
            required
            size='small'
            onChange={takeCity}
            error={errObj.cityError}
            helperText={errObj.cityHelper}

          />
        </Item>
        <Item className='CityStateBox2' xs={12} sm={6} md={4} lg={3}>

          <TextField
            fullWidth
            id="fullwidth2"
            type={'text'}
            label="State"
            variant="outlined"
            required
            size='small'
            onChange={takeState}
            error={errObj.stateError}
            helperText={errObj.stateHelper}
          />
        </Item>


      </Grid>
      <Item className='RadioAddress' xs={12} sm={6} md={4} lg={3}>
        <FormControl className='radioaddress1'>
          <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
          <RadioGroup
            row
            className='RadioGroup'
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Home" control={<Radio />} label="Home" />
            <FormControlLabel value="Work" control={<Radio />} label="Work" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Item>
      <Item className='AddressButton' xs={12} sm={6} md={4} lg={3}>
        {
          summaryToggle ? " " :
            <div id='AdrsBtn'><button onClick={() => { setSummaryToggle(true); Submit() }}>CONTINUE</button></div>

        }
      </Item>
    </Grid>

  )
}

export default AddressDetail


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
import { userAddress } from '../../Services/DataServices';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));


const citystate_Regex = /(^[A-Za-z]{2,})/;

function AddressDetail({ setSummaryToggle, summaryToggle }) {

  const [AdrsObj, setAdrsObj] = useState({ addressType: "", fullAddress: "", city: "", state: "" });
  const [errObj, setErrObj] = useState({
    cityError: false,
    cityHelper: "",
    stateError: false,
    stateHelper: "",

  });


  const takeAddress = (event) => {
    setAdrsObj((prev) => ({ ...prev, fullAddress: event.target.value }));

  };
  const takeCity = (event) => {
    setAdrsObj((prev) => ({ ...prev, city: event.target.value }));

  };
  const takeState = (event) => {
    setAdrsObj((prev) => ({ ...prev, state: event.target.value }));

  };
  const takeAddressType = (event) => {
    setAdrsObj((prev) => ({ ...prev, addressType: event.target.value }));

  };


  const Submit = async () => {
    let cityTest = citystate_Regex.test(AdrsObj.city);
    let stateTest = citystate_Regex.test(AdrsObj.state);

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
    if (cityTest === true && stateTest === true) {
      let response = await userAddress(AdrsObj);
      console.log(response);
      setSummaryToggle(true);

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
            onChange={takeAddressType}
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
            <div id='AdrsBtn'><button onClick={() => Submit()}>CONTINUE</button></div>

        }
      </Item>
    </Grid>

  )
}

export default AddressDetail

import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getCartItems } from '../../Services/DataServices';
import "./MyCart.css"
import MyCartData from './MyCartData';
import AddressDetail from './AddressDetail';
import OrderSummary from './OrderSummary';




const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));


function MyCart({ setToggleCart, setOrderSuccessfullToggle }) {


    const [cartData, setCartData] = useState([])
    const [addressToggle, setAddressToggle] = useState(false)
    const [summaryToggle, setSummaryToggle] = useState(false)
    const getMyCartItem = async () => {
        let response = await getCartItems()
        let cartItem = response.data.result
        setCartData(cartItem)
    }
    useEffect(() => {
        getMyCartItem()
        console.log(cartData)
    }, [])

    return (
        <Grid container className='MyCartGridOuterBox'>

            <Item className='MyCartBox' xs={12} sm={6} md={4} lg={3}>
                <div ><span id='carthome' onClick={() => setToggleCart(false)}>Home/</span><span id='mycart'>MyCart</span></div>
            </Item>
            <Item className='CartdataBox' xs={12} sm={6} md={4} lg={3}>
                <div className='CartBox'>
                    <div className='cartbox1' >
                        <div>My cart({cartData.length})</div>
                        <div><select id="MyCartSelect">
                            <option >Use Current Location</option></select></div>
                    </div>
                    <div id='cartbox2'> {cartData.map((cartInfo) => (<MyCartData getMyCartItem={getMyCartItem} cartItem={cartInfo} cartInfo={cartInfo.product_id} />))}</div>
                    {
                        addressToggle ? "" : <div className='MYcartbtn'><button onClick={() => setAddressToggle(true)}>PLACE ORDER</button></div>
                    }
                </div>
            </Item >
            <Item className='AddressdataBox' xs={12} sm={6} md={4} lg={3}>
                {
                    addressToggle ?
                        <div className='AddressdataBox1'>
                            <div className='addressDetailBoxx' >
                                <div id='adrDetail'><AddressDetail setSummaryToggle={setSummaryToggle} summaryToggle={summaryToggle} /></div>
                            </div>
                        </div> :
                        <div className='AddressBox'>
                            <div id='addressbox'>
                                <div id='addressbox1'>Address Details</div>
                            </div>
                        </div>

                }
            </Item>
            <Item className='SummeryDetailBox' xs={12} sm={6} md={4} lg={3}>
                {
                    summaryToggle ?

                        <div className='summerydetailbox1'>
                            <div className='summerydetailbox2'>
                                <div id='summery'>Order summery</div>
                                <div id='orderdetailbox1'>
                                    {cartData.map((cartInfo) => (<OrderSummary cartInfo={cartInfo.product_id} />))}
                                </div>
                                <div className='CheckoutButton'>
                                    <div id='CheckoutBtn'><button onClick={() => setOrderSuccessfullToggle(true)}>CHECKOUT</button></div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='SummeryBox'>
                            <div id='summerybox'>
                                <div id='summerybox1'>Order Summery</div>
                            </div>
                        </div>
                }
            </Item>


        </Grid>
    )
}

export default MyCart


import React from 'react'
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import "./Footer.css"

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
}));
function Footer() {
    return (
        <Grid container className='footerbox' >
            <Item id='FooterItem' xs={12} sm={6} md={4} lg={3} >
                <span>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</span>
            </Item>
        </Grid>
    )
}

export default Footer

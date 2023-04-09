import React, { useState } from 'react'
import Header from '../Header/Header'
import { getBooks } from '../../Services/DataServices'
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import "./Dashboard.css"
import BookCart from '../BookCart/BookCart';
import BookDetails from '../BookDetails/BookDetails';
import Footer from '../Footer/Footer';
import MyCart from '../MyCart/MyCart';
import OrderPlaced from '../OrderPlaced/OrderPlaced';


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

function Dashboard() {

    const [book, setbook] = useState([])
    const [toggle, setToggle] = React.useState(true)
    const [bookInfo, setBookInfo] = React.useState()
    const [togglecart, setToggleCart] = useState(false)
    const [orderSuccessfullToggle, setOrderSuccessfullToggle] = useState(false)

    const loaddata = async () => {
        let response = await getBooks()
        console.log(response)
        let arr = response.data.result
        setbook(arr)
    }

    React.useEffect(() => {
        loaddata()
    }, [])

    const bookData = (data) => {
        setBookInfo(data)
    }

    return (
        <Grid className='bxx' >
            <Item className='DashHeader' xs={12} sm={6} md={4} lg={3}>
                <Header setToggleCart={setToggleCart} />
            </Item>
            <Item xs={12} sm={6} md={4} lg={3}>
                {
                    orderSuccessfullToggle ?
                        <OrderPlaced setToggle={setToggle} setToggleCart={setToggleCart} setOrderSuccessfullToggle={setOrderSuccessfullToggle} /> :
                        <Item > {
                            togglecart ?
                                <MyCart setOrderSuccessfullToggle={setOrderSuccessfullToggle} setToggleCart={setToggleCart} />
                                : <Item>
                                    {toggle ?
                                        <div className='bxx2'>
                                            <div className='gridbox'>
                                                <Grid className='grid' container spacing={2} >

                                                    {
                                                        book.map((bookobj) => (<BookCart setToggle={setToggle} bookData={bookData} bookobj={bookobj} />))
                                                    }

                                                </Grid>
                                            </div>
                                        </div> : <BookDetails setToggle={setToggle} bookInfo={bookInfo} />}
                                </Item>
                        }</Item>
                }
            </Item>

            <Item className="Dashboard_Footer" xs={12} sm={6} md={4} lg={3}>
                <Footer />
            </Item>
        </Grid>
    )
}

export default Dashboard

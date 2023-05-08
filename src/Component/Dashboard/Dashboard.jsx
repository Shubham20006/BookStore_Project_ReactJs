import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { getBooks } from '../../Services/DataServices'
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import "./Dashboard.css"
import BookCart from '../BookCart/BookCart';
import BookDetails from '../BookDetails/BookDetails';
import Footer from '../Footer/Footer';
import Pagination from '@mui/material/Pagination';


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

function Dashboard() {

    const [book, setbook] = useState([])
    const [toggle, setToggle] = useState(true)
    const [bookInfo, setBookInfo] = useState()
    const [numOfPages, setNumOfPages] = useState(0)
    const [bookLimit, setBookLimit] = useState(8)
    const [searchBook, setSearchBook] = useState("");
    const [filterData, setFilterData] = useState(false);
    const [filterToggle, setFilterToggle] = useState(false);

    const loaddata = async () => {
        let response = await getBooks()
        console.log(response)
        let arr = response.data.result;
        let num = Math.ceil(arr?.length / 8);
        setNumOfPages(num)
        setbook(arr.slice(0, bookLimit))
    }
    const setPage = async (event, pagenum) => {
        let response = await getBooks()
        // console.log(response)
        let arr = response.data.result
        setbook(arr.slice(bookLimit * (pagenum - 1), bookLimit * pagenum))
    }

    useEffect(() => {
        loaddata()
    }, [])

    //Search Item
    useEffect(() => {
        setFilterData(
            book.filter(
                (bookObject) =>
                    bookObject.author.toLowerCase().includes(searchBook.toLowerCase()) ||
                    bookObject.bookName.toLowerCase().includes(searchBook.toLowerCase())
            )
        );
        if (searchBook.length !== 0) {
            setFilterToggle(true);
        } else {
            setFilterToggle(false);
            loaddata()
        }
        // console.log(filterData);
    }, [searchBook]);

    const bookData = (data) => {
        setBookInfo(data)
    }

    return (
        <Grid className='bxx' >
            <Item className='DashHeader' xs={12} sm={6} md={4} lg={3}>
                <Header setSearchBook={setSearchBook} />
            </Item>
            <Item>
                {
                    toggle ?
                        <div className='bxx2'>
                            <div className='gridbox'>
                                <Grid className='grid' container spacing={2} >

                                    {
                                        filterToggle ? filterData.map((bookobj) => (<BookCart setToggle={setToggle} bookData={bookData} bookobj={bookobj} />))
                                            : book.map((bookobj) => (<BookCart setToggle={setToggle} bookData={bookData} bookobj={bookobj} />))
                                    }

                                </Grid>
                            </div>
                            <Item className='pagination'>
                                <Pagination onChange={setPage} color='primary' count={numOfPages} />
                            </Item> 
                        </div> :
                        <BookDetails setToggle={setToggle} bookInfo={bookInfo} />
                }
            </Item>

            <Item className="Dashboard_Footer" xs={12} sm={6} md={4} lg={3}>
                <Footer />
            </Item>
        </Grid>
    )
}

export default Dashboard

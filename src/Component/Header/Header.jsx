import * as React from 'react';
import "./Header.css"
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import book from "D:/React/BookStore/bookstore/src/Component/Header/education.png"
import cartpng from "D:/React/BookStore/bookstore/src/Component/Header/supermarket.png"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',

    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
    },
}));


const deleteToken=()=>{
    localStorage.removeItem("token")
}

export default function Header({setSearchBook}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',

            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <div className='prfmenu'>
                <MenuItem onClick={handleMenuClose}>
                    <div className='prfmn1' >
                        <div id='m1'>Welcome</div>
                        <div id='m2'>To access account and manage tokens</div>
                    </div>
                </MenuItem>
                <MenuItem className='prfmenu1'>
                   <Link to="/">
                   <div id='m3' onClick={deleteToken} >LOGOUT</div>
                   </Link>
                </MenuItem>
                <MenuItem className='prfmn2'>
                    <div id='m4'><CardGiftcardIcon /> My Orders</div>
                </MenuItem>
                <MenuItem className='prfmn3'>
                    <div id='m5'><FavoriteBorderOutlinedIcon /> Wishlist</div>
                </MenuItem>
            </div>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" >
                    <CardGiftcardIcon />
                </IconButton>
                <p>My orders</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                >
                    <FavoriteBorderOutlinedIcon />
                </IconButton>
                <p>Wishlist</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar className='HeaderContent'>
                    <div className='head1'>
                        <div className='im1'>
                            <img src={book} alt="" />
                        </div>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            className='H1'
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Bookstore
                        </Typography>
                        <Search className='srchbox1'>
                            <SearchIconWrapper>
                                <SearchIcon id="Srch" />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                onChange={(event)=>setSearchBook(event.target.value)} 
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box className="endbox" sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton id='prof1' size="small" edge="end"
                                aria-controls={menuId}
                                aria-haspopup="true" onClick={handleProfileMenuOpen} >
                                <PersonOutlineOutlinedIcon id="prsonpng" />
                                <div>Profile</div>
                            </IconButton>
                            <Link to="/mycart">
                                <IconButton id='prof2' size="small" edge="end"
                                    aria-controls={menuId}
                                    aria-haspopup="true"

                                >

                                    <img src={cartpng} alt="" />
                                    <div>Cart</div>
                                </IconButton>

                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
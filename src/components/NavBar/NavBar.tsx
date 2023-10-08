import React from 'react';
import {AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button} from "@mui/material";
import logo from '../../assets/logo_white.png';
import styles from './NavBar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import NavBarMobile from "./NavBarMobile";

const pages = ['Home', 'About', 'Events', 'Contact'];

function NavBar(){

    const navigate = useNavigate();

    const [hamburger, setHamburger] = React.useState<null | HTMLElement>(null);

    const handleOpenHamburger = (event: React.MouseEvent<HTMLElement>) => {
        setHamburger(event.currentTarget);
    }

    const handleCloseHamburger = () => {
        setHamburger(null);
    }

    // function handleOpenHamburger() {
    //     const mobile = document.getElementById("navBarMobile")!;
    //
    //     if (mobile.style.display === 'none') {
    //         mobile.style.display = 'block';
    //     }
    //     else {
    //         mobile.style.display = 'none';
    //     }
    //
    // }

    function navigateTo(page : string) {
        const lowerPage = page.toLowerCase();

        if (lowerPage === 'home') {
            navigate("/");
        }
        else {
            navigate("/" + lowerPage);
        }
    }

    return (
        <AppBar position='sticky' style={{boxShadow: "none"}}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters className={styles.navBarContainer}>

                    {/*Big Screen*/}
                    <div className={styles.titleContainer}>
                        <img src={logo} className={styles.unicornLogoBig} alt="Unicorn Company Logo"/>
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'playfair display',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontWeight: 900,
                                fontSize: 25,
                                paddingLeft: 2
                            }}
                        >
                            McGill | Ventures
                        </Typography>
                    </div>

                    {/*Small Screen Hamburger*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenHamburger}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/*<div id="navBarMobile">*/}
                        {/*    <NavBarMobile />*/}
                        {/*</div>*/}
                        <Menu
                            id="menu-appbar"
                            anchorEl={hamburger}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(hamburger)}
                            onClose={handleCloseHamburger}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseHamburger}>
                                    <Typography textAlign="center" className={styles.navBarPages} onClick={() => navigateTo(page)}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*Small Screen Title*/}
                    <div className={styles.titleContainer}>
                        <img src={logo} className={styles.unicornLogoSmall} alt="Unicorn Company Logo"/>
                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'playfair display',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontWeight: 900,
                                fontSize: 25
                            }}
                            className={styles.companyName}>
                            McGill | Ventures
                        </Typography>
                    </div>

                    {/*Big Screen Nav Bar*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end'}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => navigateTo(page)}
                                href=''
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    textTransform: 'capitalize',
                                    fontSize: 18,
                                    marginRight: 3,
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '5px',
                                    }}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;
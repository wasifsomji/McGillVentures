import React from 'react';
import {AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button} from "@mui/material";
import logo from './../assets/unicorn_logo.png';
import baseStyles from './../styles/Base.module.scss';
import styles from './../styles/NavBar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'About', 'Events', 'Contact'];

function NavBar(){

    const [hamburger, setHamburger] = React.useState<null | HTMLElement>(null);

    const handleOpenHamburger = (event: React.MouseEvent<HTMLElement>) => {
        setHamburger(event.currentTarget);
    }

    const handleCloseHamburger = () => {
        setHamburger(null);
    }

    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <img src={logo} className={baseStyles.UnicornLogo} alt="Unicorn Company Logo"/>

                    {/*Big Screen*/}
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
                                    <Typography textAlign="center" className={styles.navBarPages}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*Small Screen Title*/}
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
                        className={styles.CompanyName}>
                        McGill | Ventures
                    </Typography>

                    {/*Big Screen Nav Bar*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end'}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseHamburger}
                                href=''
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    textTransform: 'capitalize',
                                    fontSize: 18,
                                    marginRight: 3}}
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
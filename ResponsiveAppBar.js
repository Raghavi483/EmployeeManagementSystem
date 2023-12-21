import * as React from 'react';
import './ResponsiveAppBar.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Footer from './Footer';


const pages = ['Home','Product','About','Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 200,
  height: 200,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: '#e0e0e0', 
  fontSize: '20px',
}));
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='body'>
    <div >
    <div>
    <AppBar position="fixed" style={{backgroundColor:'rgb(69,139,162)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              
            }}
          >
           <img src="logo1.jpg"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            People
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color:'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <div className='btn'>
          <Button variant="outlined" style={{background:'white'}}><Link to='/Login'>LOGIN</Link></Button>
          <Button variant="outlined" style={{background:'white'}}><Link to='/Signup'>SIGNUP</Link></Button>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="/broken-image.jpg" />             
               </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div><br/><br/><br/>
    <div className='back'><br/><br/><br/>
     <img src='https://www.pockethrms.com/wp-content/uploads/2022/03/New-Banners-PNG_Employee-Management-768x590.png'/>
      <h1>Enhance Productivity with</h1> <h1>Employee Management System</h1><br/>
<p>With Pocket HRMS Get Advanced Tools For Employee<br/> Management And Inspire The Best Performance In Your Staff.</p>
<br/><br/><br/><br/><br/>
    </div><br/>
    <div className='col'>
    <div className='car'>
    <Card sx={{ width: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://assets-global.website-files.com/621f6320a4c8a1030a6a2d65/6242a345162e550aea7e1f01_we360%20in_Dashboard.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Business Leaders
          </Typography>
          <Typography variant="body2" color="text.secondary">
Stay on top of every movement, activity and  anywhere, any device with reduced time-to-insight. A team with strong, skilled leadership is  likely to  productive than one.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className='car'>
    <Card sx={{ width:270  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://assets-global.website-files.com/621f6320a4c8a1030a6a2d65/6242a346fd2e782f753f5cc9_we360%20in_Reports.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Human Resources
          </Typography>
          <Typography variant="body2" color="text.secondary">
A robust, easy-to-use performance solution for HR. Stay aligned with employee work habits to help plan better activities and improve results with minimal effort.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='car'>
    <Card sx={{ width: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://assets-global.website-files.com/621f6320a4c8a1030a6a2d65/63f2f79085872ad243a04a8b_My%20Zen%20punch%20in.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Employees
          </Typography>
          <Typography variant="body2" color="text.secondary">
A transparent, friendly companion to help employees evolve, educate and engage. Our insights inspire everyone to perform and lead to a better employee-HR relationship.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    </div>

    <div className='pap'>
    <Stack direction="row" spacing={4}>
      <DemoPaper variant="elevation" ><TableRowsRoundedIcon></TableRowsRoundedIcon><br/>Increase employee data visibility across regions</DemoPaper>
      <DemoPaper variant="elevation"><GppGoodOutlinedIcon></GppGoodOutlinedIcon><br/>Guarantee secure data management and employee privacy</DemoPaper>
      <DemoPaper variant="elevation"><SettingsSuggestOutlinedIcon></SettingsSuggestOutlinedIcon><br/>Customize and manage your workforce in your preferred way</DemoPaper>
      <DemoPaper variant="elevation"><ContactsOutlinedIcon></ContactsOutlinedIcon><br/>Empower your employees with self-service portals</DemoPaper>
      <DemoPaper variant="elevation"><MobileFriendlyOutlinedIcon></MobileFriendlyOutlinedIcon><br/>Access your database quickly and easily from your mobile device</DemoPaper>
    </Stack>
    </div>
    <Footer/>
    </div>
    </div>
  );
}
export default ResponsiveAppBar;






import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'

function Header() {
    const projectInfo="Resuma helps you quickly create professional resumes with smart templates and easy editing tools"

  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'green'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <img className='w-10' src="r1.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'}>Resuma</Link>
          </Typography>
        <Tooltip title={projectInfo} ><Button color="inherit">Login</Button></Tooltip >
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
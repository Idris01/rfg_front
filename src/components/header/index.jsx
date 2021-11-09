import React from 'react';
import {
  AppBar,
  InputBase,
  Toolbar,
  ThemeProvider,
  Badge,
  IconButton,
  Typography,
  Link,
} from '@mui/material';
import {
  Search,
  ShoppingCart,
} from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
          justifyContent: 'center',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <Typography>Refidas</Typography>
          </Link>
          <InputBase
            outlined
            startAdornment={<Search color="white" />}
          />
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="secondary" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;

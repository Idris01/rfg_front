import {
  AppBar,
  Toolbar,
  Grid,
  Badge,
  Link,
} from '@mui/material';
import {
  ShoppingCart,
  AccountCircle,
  Apps as Category,
  Home,
} from '@mui/icons-material';
import {
  makeStyles,
} from '@mui/styles';

const styles = makeStyles({
  mobileMenuBar: {
    backgroundColor: 'black',
    position: 'fixed',
    top: 'auto',
    bottom: '0',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& .MuiToolbar-root': {
      width: '100%',
    },
    '& .MuiGrid-item': {
      textAlign: 'center',
      color: '#ffff',
      '& .MuiLink-root': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transform: 'scale(0.9)',
        color: '#ffff',
      },
      '& .label': {
        fontSize: '80%',
        fontWeight: 'light',
        textTransform: 'capitalize',
      },
      '& .MuiBadge-badge': {
        backgroundColor: 'red',
      },
    },
    '@media screen and (min-width:800px)': {
      display: 'none',
    },
  },
});

function MobileMenu() {
  const { mobileMenuBar } = styles();
  return (
    <AppBar
      className={mobileMenuBar}
    >
      <Toolbar>
        <Grid container>
          <Grid item xs={3}>
            <Link to="/">
              <Home />
              <span className="label">home</span>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/">
              <Badge badgeContent={6}>
                <ShoppingCart />
              </Badge>
              <span className="label">cart</span>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/">
              <Category />
              <span className="label">categories</span>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/">
              <AccountCircle />
              <span className="label">account</span>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MobileMenu;

import { PropsWithChildren, useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Woman from "@mui/icons-material/Woman";
import AppThemeProvider from "./AppThemeProvider";
import Head from "next/head";
import Link from "next/link";
import { styled } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const siteTitle = "Real Estate Invoicing";

type AppBarProps = { title: string };

const ResponsiveAppBar = ({ children }: PropsWithChildren<AppBarProps>) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const ContainerLayout = styled("div")(
    ({ theme }) =>
      `display: flex;
flex-direction: column;
min-height: 100vh;
background-color: ${theme.palette.background.paper};
color: ${theme.palette.text.primary}
`
  );

  return (
    <AppThemeProvider>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="E-girl services" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ContainerLayout>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Woman fontSize="large" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

              <Link href="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "cursive",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "24px",
                    margin:"2rem"
                  }}
                >
                  Jim's e-girl services
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                    <MenuItem key={"page"} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">owo</Typography>
                    </MenuItem>
                </Menu>
              </Box>

              <Woman sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} fontSize="large" />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "cursive",
                  fontWeight: 800,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  padding: "2rem"
                }}
              >
                Jim's e-girl services
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

              </Box>

              <Box sx={{ flexGrow: 0 }}>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth="lg" sx={{ paddingTop: 5, flexGrow: 1 }}>
          {children}
        </Container>
        <div>
          <AppThemeProvider.ToggleDarkMode />
        </div>
      </ContainerLayout>
    </AppThemeProvider>
  );
};
export default ResponsiveAppBar;

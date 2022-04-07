import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import Link from "@mui/material/Link";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: "#c8a97e", color: "black" }}>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Foody.pk
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pr: "40px" }}>
              <Typography
                gutterBottom
                variant="p"
                sx={{ fontWeight: "bold", margin: "auto", ml: "40px" }}
                component="div"
              >
                Home
              </Typography>

              <Link
                gutterBottom
                variant="p"
                sx={{ fontWeight: "bold", margin: "auto", ml: "40px" }}
                component="div"
                to="home/payments"
              >
                Payments
              </Link>
              <Link
                to="home/payments"
                variant="subtitle1"
                color="text.secondary"
              >
                Payments
              </Link>
              <Typography
                gutterBottom
                variant="p"
                sx={{ fontWeight: "bold", margin: "auto", ml: "40px" }}
                component="div"
              >
                Login
              </Typography>

              <Typography
                gutterBottom
                variant="p"
                sx={{ fontWeight: "bold", margin: "auto", ml: "40px" }}
                component="div"
              >
                Admin
              </Typography>

              <Typography
                gutterBottom
                variant="p"
                sx={{ fontWeight: "bold", margin: "auto", ml: "40px" }}
                component="div"
              >
                About Us
              </Typography>

              {/* <Button variant="outlined">Login</Button> */}
              {/* <Typography gutterBottom variant="h5" component="div">
                Login
              </Typography> */}
              {/* <Typography
                gutterBottom
                variant="h5"
                sx={{ mx: "20px" }}
                component="div"
              >
                Login
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Login
              </Typography> */}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}

import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Container from "../../customers/container";

export default function PersonList() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              style={{
                color: "black",
                fontFamily: "montserrat",
                marginRight: "4rem",
                textAlign: "left",
              }}
            >
              Customers <ArrowForwardIosIcon /> Edit Profile for Victor Bent
            </Typography>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                style={{ background: "black", fontFamily: "montserrat" }}
              >
                <AddIcon />
                Add Customers
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Container />
    </div>
  );
}

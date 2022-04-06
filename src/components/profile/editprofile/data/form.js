import React from "react";
import Logo from "../../../../images/Ash-Read.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Form() {
  return (
    <div className="form-fullpage">
      <div className="form-data">
        <div className="form-inputs">
          <img className="form-logo" src={Logo} alt="form logo" />
          <TextField
            style={{ marginTop: "2rem" }}
            id="outlined-basic"
            rows={3}
            multiline
            label="Email Address"
            variant="outlined"
          />
        </div>
        <div className="form-inputs">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: "2.5rem" }}
              id="outlined-basic"
              rows={3}
              multiline
              label="Email Address"
              variant="outlined"
            />
          </Box>
        </div>
        <div className="form-inputs">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: "2.5rem" }}
              id="outlined-basic"
              rows={3}
              multiline
              label="Email Address"
              variant="outlined"
            />
          </Box>
        </div>
      </div>
      <div className="form-button">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              fontWeight: "bold",
              fontFamily: "montserrat",
            }}
          >
            Create Order{" "}
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              fontWeight: "bold",
              fontFamily: "montserrat",
            }}
          >
            Edit Profile
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Form;

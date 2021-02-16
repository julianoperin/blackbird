import React from "react";
import "./Header.css";

import {
  TextField,
  ThemeProvider,
  createMuiTheme,
  MenuItem,
} from "@material-ui/core";

const Header = () => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">Dictionary</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" />
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            helperText="Please select your currency"
          >
            <MenuItem>english</MenuItem>
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;

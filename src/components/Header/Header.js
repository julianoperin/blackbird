import React from "react";
import "./Header.css";

import categories from "../../data/category";

import {
  TextField,
  ThemeProvider,
  createMuiTheme,
  MenuItem,
} from "@material-ui/core";

const Header = ({ category, setCategory }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  console.log("test:", category, setCategory);

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
            helperText="Please select your language"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <MenuItem key={item.label} value={item.label}>
                {item.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;

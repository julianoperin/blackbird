import React from "react";
import "./Header.css";

import categories from "../../data/category";

import {
  TextField,
  ThemeProvider,
  createMuiTheme,
  MenuItem,
} from "@material-ui/core";

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">Dictionary</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Search Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            id="standard-select-currency"
            select
            label="Select"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
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

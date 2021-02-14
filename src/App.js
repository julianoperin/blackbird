import "./App.css";
import axios from "axios";

import React, { useEffect, useState } from "react";

const App = () => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/plane`
      );
      setMeanings(data.data);
      console.log(meanings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, []);

  return <div></div>;
};

export default App;

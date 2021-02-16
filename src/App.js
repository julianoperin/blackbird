import "./App.css";
import axios from "axios";

import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";

import { Container } from "@material-ui/core";

const App = () => {
  const [category, setCategory] = useState("en");
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

  return (
    <div style={{ height: "100vh", background: "#282c34", color: "#fff" }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
        />
      </Container>
    </div>
  );
};

export default App;

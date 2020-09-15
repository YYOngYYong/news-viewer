import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
};

export default App;

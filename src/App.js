import React, { useCallback, useState } from "react";
import axios from "axios";
import "./App.css";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;

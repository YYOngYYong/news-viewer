import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async 사용하는 내부 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3706736d52da4f97b8505197e1ae8f74`
        );
        setArticle(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기중
  if (loading) {
    return <NewsListBlock>로딩중.....</NewsListBlock>;
  }
  if (!article) {
    return null;
  }

  //article 값이 있을때만
  return (
    <NewsListBlock>
      {article.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

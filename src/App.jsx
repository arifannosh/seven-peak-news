import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { NewsContextProvider } from "../contexts/NewsContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsPage from "./components/News";
import NewsDetail from "./components/NewsDetails";
const API_KEY = "be64f159-93ca-4e94-a1a0-c120837f7b1b";
const API_BASE_URL = `https://content.guardianapis.com/search?format=json&show-fields=starRating,headline,trailText,body,thumbnail,short-url&from-date=2015-02-16&api-key=${API_KEY}`;
const API_BASE_URL_NEWS = `${API_BASE_URL}&page-size=8`;
const API_BASE_URL_SPORT_NEWS = `${API_BASE_URL}&page-size=3&section=sport`;

const App = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [articleDetails, setArticleDetails] = useState({});
  const [showArticle,setShowArticle]=useState(false);
  const [sortingQuery, setSortingQuery] = useState("newest");
  const [filteredNewsItems, setFilteredNewsItems] = useState([]);
  const [sportsNewsItems, setSportNewsItems] = useState([]);

  const fetchNews = useCallback(async (sq, qq) => {
    try {
      setLoading(true);
      setArticleDetails({});
       setShowArticle(false);
      setNewsItems([]);
      const apiresult = await axios.get(
        `${API_BASE_URL_NEWS}&order-by=${sq || sortingQuery}&q=${qq || ""}`
      );
      if (apiresult?.status === 200) {
        setNewsItems(apiresult.data.response.results);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const fetchSportsNews = useCallback(async (sq) => {
    try {
      setLoading(true);
      setSportNewsItems([]);
      const apiresult = await axios.get(
        `${API_BASE_URL_SPORT_NEWS}&order-by=${sq || sortingQuery}`
      );
      if (apiresult?.status === 200) {
        setSportNewsItems(apiresult.data.response.results);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const filteredNews = useMemo(() => {
  //   return newsItems.filter((item) =>
  //     item.webTitle.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }, [newsItems, searchQuery]);
  const gotoDetails = (item) => {
    setSearchQuery("");
    setArticleDetails(item);
    setShowArticle(true);
  };
  useEffect(() => {
    if (newsItems.length > 0) {
      fetchNews(sortingQuery);
      fetchSportsNews(sortingQuery);
    }
  }, [sortingQuery]);
  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchNews(sortingQuery, searchQuery);
    }
  }, [searchQuery]);
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);
  useEffect(() => {
    fetchSportsNews();
  }, [fetchSportsNews]);

  return (
    <NewsContextProvider
      value={{
        newsItems,
        sportsNewsItems,
        setNewsItems,
        sortingQuery,
        setSortingQuery,
        isLoading,
        setLoading,
        fetchNews,
        setSearchQuery,
        searchQuery,
        filteredNewsItems,
        setFilteredNewsItems,
        gotoDetails,
        articleDetails,
        setShowArticle,
      }}
    >
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <div className="pr-24 pl-24">
          {showArticle && articleDetails ? (
            <NewsDetail />
          ) : (
            <NewsPage key={filteredNewsItems.length} />
          )}
        </div>
        <Footer />
      </div>
    </NewsContextProvider>
  );
};

export default App;

import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { useState } from "react";
import type { Article } from "./types/types";
import ArticleContent from "./components/ArticleContent";
import { useFetchHeadlines, useFetchSearch } from "./hooks/useFetchNews";

export default function App() {
  const [category, setCategory] = useState("general");
  const [keyword, setKeyword] = useState("");
  const { articles: headlineArticles, loading: headlineLoading, error: headlineError } = useFetchHeadlines(category);
  const {articles: searchArticles, loading: searchedLoading, error: searchedError} = useFetchSearch(keyword);

  const isSearching = keyword.trim().length > 0;
  const articles = isSearching ? searchArticles : headlineArticles;



  const categories = [
    "business",
    "science",
    "sports",
    "health",
    "technology",
    "entertainment",
  ];

  {
    (headlineLoading) && <h1>loading..</h1>;
  }
  {
    (headlineError) && <h1>Error: {headlineError}</h1>;
  }

  return (
    <div className="flex flex-col min-h-screen p-10 text-stone-700">
      <Header />
      <Navbar categories={categories} onSelectCategory={setCategory} onSearch={setKeyword} />
      <main className="mx-auto">
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

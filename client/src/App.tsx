import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { useState } from "react";
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
    <div className="min-h-screen p-10 lg:px-20 xl:px-30 2xl:px-50 text-stone-700">
      <Header />
      <Navbar categories={categories} onSelectCategory={((category) => {
        setKeyword("")
        setCategory(category)
      })} onSearch={setKeyword} />
      <main className="">
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

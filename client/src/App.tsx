import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import useFetchHeadlines from "./hooks/useFetchHeadlines";
import { useState } from "react";
import type { Article } from "./types/types";
import ArticleContent from "./components/ArticleContent";

export default function App() {
  const [category, setCategory] = useState("general");
  const { articles, loading, error } = useFetchHeadlines(category);

  const categories = [
    "business",
    "science",
    "sports",
    "health",
    "technology",
    "entertainment",
  ];

  {
    loading && <h1>loading..</h1>;
  }
  {
    error && <h1>Error: {error}</h1>;
  }

  return (
    <div className="flex flex-col min-h-screen p-10 text-stone-700">
      <Header />
      <Navbar categories={categories} onSelectCategory={setCategory} />
      <main className="mx-auto">
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

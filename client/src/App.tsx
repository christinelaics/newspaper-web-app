import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import useFetchNews from "./hooks/useFetchNews";
import { useState } from "react";
import type { Article } from "./types/types";
import ArticleContent from "./components/ArticleContent";

export default function App() {
  const [category, setCategory] = useState("general");
  const {articles, loading, error} = useFetchNews(category);
  
  const categories = [
    "business",
    "health",
    "entertainment",
    "general",
    "science",
    "sports",
    "technology",
  ];

  {loading && <h1>loading..</h1>}
  {error && <h1>Error: {error}</h1>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar categories={categories} onSelectCategory={setCategory} />
      <main className="flex-1 container mx-auto p-4">
        <ArticleList articles={articles} />
      </main>
      
      
    </div>
  );
}

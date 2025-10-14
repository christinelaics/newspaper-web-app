import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

export default function App() {
const categories = ["business", "health", "entertainment", "general", "science", "sports", "technology"];
const handleCategoryChange = (category: string) => {
  console.log("Selected category: ", category)
}
  return (
    <div>
      <Header />
      <Navbar categories={categories} onSelectCategory={handleCategoryChange} />
      <ArticleList />
    </div>
  )
}
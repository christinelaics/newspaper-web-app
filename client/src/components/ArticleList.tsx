import ArticleCard from "./ArticleCard"
import type { Article } from "../types/types"

interface ArticleListProps {
    articles: Article[],
}

export default function ArticleList({articles}: ArticleListProps) {
    const articlesWithImages = articles.filter(
        (article) => article.urlToImage && article.urlToImage.trim() !== ""
    )
    return(
        <div>
            {articlesWithImages.map((article, index) => (
                <ArticleCard key={index} article={article}/>
            ))}
        </div>
    )
}
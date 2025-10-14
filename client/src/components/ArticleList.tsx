import ArticleCard from "./ArticleCard"
import type { Article } from "../types/types"

interface ArticleListProps {
    articles: Article[]
}

export default function ArticleList({articles}: ArticleListProps) {
    return(
        <div>
            {articles.map((article, index) => (
                <ArticleCard key={index} article={article}/>
            ))}
        </div>
    )
}
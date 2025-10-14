import type { Article } from "../types/types"

interface ArticleCardProps {
    article: Article
}

export default function ArticleCard({article}: ArticleCardProps) {
    return (
        <div>
            <img src={article.urlToImage} alt={article.title} />
            <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>{article.publishedAt.split("T")[0]}</p>
            </div>
        </div>
    )
}
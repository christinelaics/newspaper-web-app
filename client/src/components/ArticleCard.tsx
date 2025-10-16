import type { Article } from "../types/types"

interface ArticleCardProps {
    article: Article,
}

export default function ArticleCard({article}: ArticleCardProps) {
    const previewContent = article.content 
    ? article.content.slice(0, article.content.lastIndexOf(" ", 190)) + "..."
    : "No content available"
    return (
        <div>
            <img src={article.urlToImage} alt={article.title} />
            <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>{previewContent}</p>
                <p>{article.publishedAt.split("T")[0]}</p>

                <a 
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                >
                    Read Full Article</a>
            </div>
        </div>
    )
}
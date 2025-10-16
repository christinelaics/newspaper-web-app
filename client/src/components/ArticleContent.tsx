import type { Article } from "../types/types";

interface ArticleContentProps {
    article: Article,
    onBack: () => void
}

export default function ArticleContent({article, onBack}: ArticleContentProps) {
    return (
        <div>
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
            <p>{article.publishedAt}</p>
            {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} />
            )}
            <p>{article.content}</p>
            <p>author: {article.author}</p>
        </div>
    )
}
import ArticleCard from "./ArticleCard"
import { mockArticles } from "../data/mockNews"

export default function ArticleList() {
    return(
        <div>
            {mockArticles.map((article, index) => (
                <ArticleCard key={index} article={article}/>
            ))}
        </div>
    )
}
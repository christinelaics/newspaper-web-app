import type { Article } from "../types/types";

interface CardProps {
  article: Article;
}

export default function FeaturedCard({ article }: CardProps) {
  const descriptionTrimmed =
  article?.content && article?.description && article.description.length > 190
    ? article.content.slice(0, article.content.lastIndexOf(" ", 190)) + "..."
    : article?.content || "No content available";

  return (
    <div className="py-6 border-b-1 border-stone-700 domine lg:border-none md:grid md:grid-cols-2 md:grid-flow-dense md:gap-5">
      <img
        className="border-2 border-stone-700 sepia contrast-150 brightness-80 mb-4"
        src={article.urlToImage}
        alt={article.title}
      />
      
      <div className="pb-4">
        <h2 className="font-bold pb-2 text-red-800">TRENDING NOW:</h2>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h3 className="pb-4 text-stone-700 uppercase font-bold text-2xl hover:underline md:text-xl lg:text-base lg:pb-2">
          {article.title.split("- ")[0]}
        </h3>
      </a>
        <p className="pb-4 text-stone-600 hidden lg:block lg:text-sm lg:pb-2">{descriptionTrimmed}</p>
        {/* <p className="font-light text-sm">{previewContent}</p> */}
        <div className="flex font-light text-stone-500 text-sm">
          <p className="pr-1 font-light text-stone-500">
            {article.publishedAt.split("T")[0]}
          </p>
          -
          <p className="pl-1">
            By {article.author} - {article.source.name}
          </p>
        </div>
      </div>
    </div>
  );
}

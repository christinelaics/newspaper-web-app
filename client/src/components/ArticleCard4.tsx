import type { Article } from "../types/types";

interface CardProps {
  article: Article;
}

export default function ArticleCard4({ article }: CardProps) {
  const descriptionTrimmed =
    (article.description !== null && article.description.length > 190) 
      ? article.description.slice(0, article.description.lastIndexOf(" ", 190)) + "..."
      : "No content available";
  return (
    <div className="py-6 border-b-1 border-stone-700 domine lg:border-none md:grid md:grid-cols-2 md:grid-flow-dense md:gap-5">
      <img
        className="border-2 border-stone-700 sepia contrast-150 brightness-80 mb-4 lg:order-2"
        src={article.urlToImage}
        alt={article.title}
      />
      <div className="lg:col-span-full lg:order-1">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="pb-4 text-stone-700 uppercase font-bold text-2xl hover:underline md:text-xl lg:text-base lg:pb-2 lg:order-first">
            {article.title.split("- ")[0]}
          </h3>
        </a>
      </div>

      <div className="pb-4 lg:order-3">
        <p className="pb-4 text-stone-600 hidden lg:block lg:text-sm lg:pb-2">
          {descriptionTrimmed}
        </p>
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

import type { Article } from "../types/types";

interface CardProps {
  article: Article;
}

export default function ArticleCard({ article }: CardProps) {
  const previewContent = article.content
    ? article.content.slice(0, article.content.lastIndexOf(" ", 190)) + "..."
    : "No content available";

  return (
    <div className="py-6 border-b-1 border-stone-700 domine lg:border-none md:grid md:grid-cols-2 md:grid-flow-dense md:gap-5">
      <img
        className="border-2 border-stone-700 sepia contrast-150 brightness-80 mb-4"
        src={article.urlToImage}
        alt={article.title}
      />
      
      <div className="pb-4">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h3 className="pb-4 text-stone-700 uppercase font-bold text-2xl hover:underline md:text-xl">
          {article.title.split("- ")[0]}
        </h3>
      </a>
        <p className="pb-4 text-stone-600 hidden lg:block">{article.description}</p>
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

// export default function ArticleCard({ article }: ArticleCardProps) {
//   const previewContent = article.content
//     ? article.content.slice(0, article.content.lastIndexOf(" ", 190)) + "..."
//     : "No content available";
//   return (
//     <div className="my-6 border-b-4 border-stone-700 domine">
//       <img className="border-2 border-stone-500 sepia contrast-90 brightness-80"src={article.urlToImage} alt={article.title} />
//       <div className="py-4">

//         <a href={article.url} target="_blank" rel="noopener noreferrer">
//           <h3 className="pb-4 text-stone-700 uppercase font-bold text-2xl hover:underline">{article.title.split("- ")[0]}</h3>
//         </a>
//         <p className="pb-4 text-stone-600">{article.description}</p>
//         {/* <p className="font-light text-sm">{previewContent}</p> */}
//         <div className="flex font-light text-stone-500 text-sm">
//           <p className="pr-1 font-light text-stone-500">{article.publishedAt.split("T")[0]}</p>
//           -
//           <p className="pl-1">By {article.author} - {article.source.name}</p>
//         </div>
//       </div>
//       <hr className="mb-1 text-stone-600" />
//     </div>
//   );
// }

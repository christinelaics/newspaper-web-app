import ArticleCard from "./ArticleCard";
import type { Article } from "../types/types";
import FeaturedCard from "./FeaturedCard";
import ArticleCard2 from "./ArticleCard2";
import ArticleCard3 from "./ArticleCard3";
import ArticleCard4 from "./ArticleCard4";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  const articlesWithImages = articles.filter(
    (article) => article.urlToImage && article.urlToImage.trim() !== ""
  );

  const featured = articlesWithImages[0];
  const second = articlesWithImages[1];
  const third = articlesWithImages[2];
  const fourth = articlesWithImages[3];
  const fifth = articlesWithImages[4];
  const sixth = articlesWithImages[5];
  const seventh = articlesWithImages[6];
  const eighth = articlesWithImages[7];
  const ninth = articlesWithImages[8];
  const others = articlesWithImages.slice(9);

  return (
    <section className="grid lg:grid-cols-3 grid-flow-dense gap-4">
      <div className="md:col-span-full md:border-b-1 lg:col-span-1 lg:border-none lg:col-span-2">
        {featured && (
          <div className="">
            <FeaturedCard article={featured} />
          </div>
        )}
      </div>

      <div className="lg:flex lg:flex-col lg:pt-6">
        {second && (
          <div className="lg:border-l-1 lg:pl-4">
            <ArticleCard2 article={second} />
          </div>
        )}
        {third && (
          <div className="lg:border-l-1 lg:pl-4">
            <ArticleCard2 article={third} />
          </div>
        )}
        {fourth && (
          <div className="lg:border-l-1 lg:pl-4">
            <ArticleCard2 article={fourth} />
          </div>
        )}
      </div>

      <div className="lg:col-span-3 lg:border-b-1">
        <div className="lg:flex lg:gap-4">
          {fifth && (
            <div className="lg:basis-1/3">
              <ArticleCard3 article={fifth} />
            </div>
          )}

          {sixth && (
            <div className="lg:basis-1/3">
              <ArticleCard3 article={sixth} />
            </div>
          )}
          {seventh && (
            <div className="lg:basis-1/3">
              <ArticleCard3 article={seventh} />
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-full lg:gap-5 lg:flex lg:border-b-1">
        {eighth && (
          <div className="lg:basis-1/2">
            <ArticleCard4 article={eighth} />
          </div>
        )}
        {ninth && (
          <div className="lg:basis-1/2">
            <ArticleCard4 article={ninth} />
          </div>
        )}
      </div>

      <div className="col-span-full">
        {others.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}

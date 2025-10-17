import { useState, useEffect } from "react";
import axios from "axios";
import type { Article } from "../types/types";

interface UseFetchResults {
    articles: Article[],
    loading: boolean,
    error: string | null
}

export default function useFetchHeadlines(category: string, page=1, pageSize=20):UseFetchResults {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!category) return;
        setLoading(true);
        setError(null);
        const controller = new AbortController();

        axios
        .get("/api/top-headlines", {
            params: {category, page, pageSize },
            signal: controller.signal,
        })
        .then((res) => {
            setArticles(res.data?.articles ?? [])
        })
        .catch((err) => {
            if (axios.isCancel(err)) return;
            if (err.name === "CancelledError") return;
            setError(err?.response?.data?.error ?? err.message ?? "Failed to load news");
        })
        .finally(() => {
            setLoading(false)
        })

        return () => {
            controller.abort();
        }
    }, [category, page, pageSize]);
    return {articles, loading, error}
}
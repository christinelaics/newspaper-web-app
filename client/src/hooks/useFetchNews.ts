import { useState, useEffect } from "react";
import axios from "axios";
import type { Article } from "../types/types";

interface UseFetchProps {
    articles: Article[],
    loading: boolean,
    error: string | null
}

export function useFetchHeadlines(category: string, page=1, pageSize=20):UseFetchProps {
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

export function useFetchSearch(keyword: string, pageSize = 20, page = 1): UseFetchProps {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!keyword.trim()) {
            setArticles([]);
            return
        }

        const controller = new AbortController();
        const fetchArticles = async () => {
            setLoading(true)
            setError(null)

            try {
                const res = await axios.get("/api/search", {
                    params: {q: keyword, pageSize, page},
                    signal: controller.signal,
                });
                setArticles(res.data?.articles ?? []);
            } catch (err: any) {
                if (axios.isCancel(err) || err.name === "CanceledError") return;
                setError(err?.response?.data?.error ?? err.message ?? "Failed to load results");
            } finally {
                setLoading(false);
            }
        };

        fetchArticles()
        return () => {
            controller.abort();
        }
    }, [keyword, page, pageSize]);

    return { articles, loading, error }

}



        // axios
        // .get("/api/search", {
        //     params: {keyword, page, pageSize},
        //     signal: controller.signal,
        // })
        // .then((res) => {
        //     setArticles(res.data?.articles ?? [])
        // })
        // .catch((err) => {
        //     if (axios.isCancel(err)) return;
        //     if (err.name === "CancelledError") return;
        //     setError(err?.response?.data?.error ?? err.message ?? "Failed to load news");
        // })
        // .finally(() => {
        //     setLoading(false)
        // })
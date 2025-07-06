'use client';

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function MarkdownRenderer({ path }: { path: string }) {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (!path) return;

        fetch(path)
            .then((res) => res.text())
            .then((text) => setContent(text))
            .catch((err) => console.error("Error loading markdown:", err));
    }, [path]);

    if (!content) {
        return <p className="text-center text-gray-500">Loading…</p>;
    }

    return (
        <div
            className="markdown-body mx-auto mt-12 bg-white p-6 rounded shadow"
            style={{ maxWidth: "80vw" }}
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

'use client';

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function MarkdownRenderer({ path , showMd , setShowMd }: { path: string , showMd: string , setShowMd: (md: string) => void }) {
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
            className="markdown-body mx-auto mt-12 h-[85vh] overflow-auto overscroll-contain bg-white p-6 rounded shadow absolute top-28  z-20"
            style={{ maxWidth: "85vw" }}
        >
            <button className="absolute top-0 right-2 text-xl text-white px-3 pt-1 transition-all duration-500 hover:cursor-pointer hover:text-gray-300 hover:bg-red-400 rounded-b-sm" onClick={() => setShowMd("")}>X</button>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

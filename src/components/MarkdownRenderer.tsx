'use client';

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import 'github-markdown-css/github-markdown.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function MarkdownRenderer({
    path,
    showMd,
    setShowMd,
}: {
    path: string;
    showMd: string;
    setShowMd: (md: string) => void;
}) {
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
        <AnimatePresence>
            {showMd && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="
            fixed inset-0 z-40 bg-black/50 backdrop-blur-sm p-4
            flex justify-center
            overflow-y-auto
          "
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="
                            relative lg:max-w-[85vw] max-w-[90vw] w-full mt-[7rem]
                             h-[80vh] overflow-auto
                            rounded-lg shadow-2xl
                            bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 border border-gray-400

                            "
                    >
                        {/* Floating Close Button */}
                        <div className="sticky top-0 z-10 flex justify-end">
                            <button
                                className="text-xl text-white px-3 pt-1 transition-all duration-500 hover:cursor-pointer hover:text-gray-300 hover:bg-red-500 rounded-b-sm"
                                onClick={() => setShowMd("")}
                            >
                                X
                            </button>
                        </div>

                        {/* Markdown Content */}
                        <div className="markdown-body p-8" 
                            style={{
                            
                            background: 'transparent',   
                            color: "#f0f0f0",                          
                        }}>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
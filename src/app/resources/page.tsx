'use client';

import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { resources } from '../config/index';
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default function ResourcesPage() {
  const [selectedPath, setSelectedPath] = useState<string>("");

  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center relative z-20 pt-32 pb-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              <span className='text-6xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent'>
                COPS Resources
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col w-[380px] rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20">
                  <FaBook className="h-10 w-10 text-[#4aacfc]" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {resource.title}
                </h3>

                <p className="mb-1 text-sm text-gray-300">
                  <span className="font-semibold text-yellow-400">Author:</span> {resource.author.join(", ")}
                </p>

                <p className="mb-1 text-sm text-gray-300">
                  <span className="font-semibold text-yellow-400">Topics:</span> {resource.topics.join(", ")}
                </p>

                <p className="mb-1 text-sm text-gray-300">
                  <span className="font-semibold text-yellow-400">Tags:</span> {resource.tags.join(", ")}
                </p>

                {resource.vertical && (
                  <span className="w-fit mt-3 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300">
                    {resource.vertical}
                  </span>
                )}

                <button
                  onClick={() => setSelectedPath(resource.filePath)}
                  className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Start Exploring
                </button>
              </div>
            ))}
          </div>

          
        </div>
        {selectedPath && (
            <MarkdownRenderer path={selectedPath} />
          )}
      </div>
    </div>
  );
}

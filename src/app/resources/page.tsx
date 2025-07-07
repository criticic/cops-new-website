'use client';

import { Component, useState } from "react";
import { BiCodeBlock } from 'react-icons/bi';
import { HiOutlineShare } from 'react-icons/hi';
import { BiChip } from 'react-icons/bi';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { resources } from '../config/index';
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { IconType } from "react-icons";

export default function ResourcesPage() {
  const [selectedPath, setSelectedPath] = useState<string>("");

  const iconColor: Record<string, string> = {
    "SDG": "text-blue-400",
    "IG": "text-green-400",
    "CPG": "text-red-400",
    "Infosec": "text-yellow-400",
  };
  const resourceBG: Record<string, string> = {
    "SDG": "bg-blue-400/10",
    "IG": "bg-green-400/10",
    "CPG": "bg-red-400/10",
    "Infosec": "bg-yellow-400/10",
  };

  const iconSrc: Record<string, IconType> = {
    "SDG": BiCodeBlock,
    "IG": BiChip,
    "CPG": HiOutlineShare,
    "Infosec": AiOutlineSecurityScan,
  };

  return (
    <div className='min-h-screen flex flex-col items-center relative'>
      <div className=' relative z-20 pt-32 pb-20'>
        <div className='mx-auto max-w-full px-4 sm:px-6 lg:px-4'>
          <div className='mb-12 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              <span className='font-agency-fb text-6xl font-bold bg-gradient-to-r from-blue-200 to-violet-200 bg-clip-text text-transparent'>
                COPS : Resources
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className={`flex flex-col items-start gap-2 w-[600px] h-[450px] rounded-lg border border-white/20 ${resourceBG[resource.vertical] || 'bg-white/10'} p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:${resourceBG[resource.vertical] || 'bg-white/15'} hover:shadow-lg`}
              >
                <div className=" mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20">
                  {(() => {
                    const Icon = iconSrc[resource.vertical];
                    return Icon ? (
                      <Icon className={`h-12 w-12 ${iconColor[resource.vertical] || 'text-white'}`} />
                    ) : null;
                  })()}
                </div>

                <h3 className="mb-2 text-3xl font-semibold text-white">
                  {resource.title}
                </h3>

                <p className="mb-1 text-lg text-gray-300">
                  <span className="font-semibold text-yellow-400">Author:</span> {resource.author.join(", ")}
                </p>

                <div>
                  <ul className="list-disc pl-6 line-clamp-3 mb-2">
                    {resource.topics.map((topic) => (
                      <li key={topic} className="text-lg text-start font-mono text-teal-300">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-1">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="mr-2 inline-block rounded-full bg-indigo-500/50 px-3 py-1 text-sm text-white">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPath(resource.filePath)}
                  className="mt-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Start Exploring
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedPath && (
        <MarkdownRenderer path={selectedPath} showMd={selectedPath} setShowMd={setSelectedPath} />
      )}
    </div>
  );
}

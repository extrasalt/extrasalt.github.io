import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import "./index.css";
import { twMerge } from "tailwind-merge";
import { Skeleton } from "./components/ui/skeleton";

import resume from '../assets/resume.md'

export function Resume() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(resume);
      const text = await res.text();
      setMarkdown(text);
      setLoading(false);
    };
    fetchMarkdown();
  }, []);

  const customComponents  = {
    h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4 mt-6" {...props} />,
    h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mb-4 mt-6" {...props} />,
    h3: ({node, ...props}) => <h3 className="text-xl font-semibold mb-4 mt-6" {...props} />,
    p: ({node, ...props}) => <p className="mb-4" {...props} />,
    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
    ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
    li: ({node, ...props}) => <li className="mb-2" {...props} />,
    a: ({node, ...props}) => (
        <a
            {...props}
            className={twMerge(
                "text-blue-500 hover:text-blue-700 transition-colors duration-200",
                props.className
            )}
        />
    ),
    code: ({node, inline, className, children, ...props}) => {
      const trimmedChildren = String(children).trim();
      return inline ? (
          <code {...props} className={twMerge("rounded-md bg-gray-100 px-[0.2em] py-[0.1em] font-mono text-sm text-red-600 dark:bg-gray-800 dark:text-red-400", className)}>{trimmedChildren}</code>
      ) : (
          <code {...props} className={twMerge("rounded-md bg-gray-100 px-2 py-1 font-mono text-sm text-red-600 dark:bg-gray-800 dark:text-red-400", className)}>{trimmedChildren}</code>
      );
    },
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex max-w-4xl mx-auto">
      <div className="container mx-auto w-[100%] p-8 relative z-10">
       <main className="grid gap-12">
          <section id="resume">
                {loading ? (
                    <div className="flex flex-col justify-between h-[70vh] w-full space-y-4">
                      <Skeleton className="h-10 w-100 rounded-lg" />
                      <Skeleton className="h-1/3 w-full rounded-lg" />
                      <Skeleton className="h-10 w-100 rounded-lg" />
                      <Skeleton className="h-1/3 w-full rounded-lg" />
                      <Skeleton className="h-10 w-100 rounded-lg" />
                      <Skeleton className="h-1/3 w-full rounded-lg" />
                    </div>
                ) : (
                    <ReactMarkdown components={customComponents}>
                      {markdown}
                    </ReactMarkdown>
                )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Resume;
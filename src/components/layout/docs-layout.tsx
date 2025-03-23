import React from "react";
import Layout from "./Layout";

interface DocLayoutProps {
  children: React.ReactNode;
}

export default function DocLayout({ children }: DocLayoutProps) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
        <aside className="hidden md:block">
          {/* Sidebar navigation will go here */}
        </aside>
        <article className="prose dark:prose-invert max-w-none">
          {children}
        </article>
      </div>
    </Layout>
  );
}

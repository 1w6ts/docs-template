import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Doc, DocMetadata } from "@/types/docs";

const docsDirectory = path.join(process.cwd(), "src/content/docs");

export function getAllDocSlugs(): string[] {
  const fileNames = fs.readdirSync(docsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getDocBySlug(slug: string): Doc {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags,
  };
}

export function getAllDocs(): DocMetadata[] {
  const slugs = getAllDocSlugs();
  const docs = slugs
    .map((slug) => getDocBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return docs.map(({ slug, title, description, date, tags }) => ({
    slug,
    title,
    description,
    date,
    tags,
  }));
}

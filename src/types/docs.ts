export interface DocMetadata {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  slug: string;
}

export interface Doc extends DocMetadata {
  content: string;
}

"use client";

import * as React from "react";
import Link from "next/link";

export interface RecentArticle {
  id: string;
  name: string;
  nationality?: string;
  lastUpdated?: string;
  type?: "article" | "case";
}

interface RecentArticlesProps {
  articles: RecentArticle[];
}

function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

const PLACEHOLDER_ROWS = 6;

export function RecentArticles({ articles }: RecentArticlesProps) {
  if (articles.length === 0) {
    // The list is picked client-side; hold its space so the page does not jump.
    return (
      <ul className="border-t border-border" aria-hidden="true">
        {Array.from({ length: PLACEHOLDER_ROWS }, (_, i) => (
          <li key={i} className="h-[61px] border-b border-border" />
        ))}
      </ul>
    );
  }

  return (
    <ul className="border-t border-border">
      {articles.slice(0, 10).map((article) => (
        <li key={article.id} className="border-b border-border">
          <Link
            href={article.type === "case" ? `/c/${article.id}` : `/a/${article.id}`}
            className="group grid grid-cols-1 items-baseline gap-x-6 gap-y-1 py-4 transition-[padding] duration-300 ease-out hover:ps-2 sm:grid-cols-[minmax(0,1fr)_auto]"
          >
            <span className="min-w-0 truncate text-lg text-foreground">{article.name}</span>
            <span className="flex items-baseline gap-3 font-mono text-xs text-muted-foreground">
              {article.nationality && <span>{article.nationality}</span>}
              {article.lastUpdated && (
                <time dateTime={article.lastUpdated}>{getRelativeTime(article.lastUpdated)}</time>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

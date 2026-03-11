"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, Scale } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export interface SearchItem {
  id: string;
  name: string;
  nationality?: string;
  summary?: string;
  type?: "article" | "case";
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: SearchItem[];
}

export function SearchDialog({ open, onOpenChange, items }: SearchDialogProps) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const filteredItems = React.useMemo(() => {
    if (!search) return items.slice(0, 15);

    const lowerSearch = search.toLowerCase();
    return items
      .filter(
        (item) =>
          item.name.toLowerCase().includes(lowerSearch) ||
          item.nationality?.toLowerCase().includes(lowerSearch)
      )
      .slice(0, 15);
  }, [items, search]);

  const articles = filteredItems.filter((item) => item.type !== "case");
  const cases = filteredItems.filter((item) => item.type === "case");

  const handleSelect = (item: SearchItem) => {
    const path = item.type === "case" ? `/c/${item.id}` : `/a/${item.id}`;
    router.push(path);
    onOpenChange(false);
    setSearch("");
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search"
      description="Search for articles and legal cases"
    >
      <CommandInput placeholder="Search articles and cases..." value={search} onValueChange={setSearch} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {articles.length > 0 && (
          <CommandGroup heading="Articles">
            {articles.map((item) => (
              <CommandItem
                key={`article-${item.id}`}
                value={`article-${item.id}`}
                onSelect={() => handleSelect(item)}
                className="cursor-pointer"
              >
                <Search className="mr-2 h-4 w-4" />
                <span className="font-medium">{item.name}</span>
                {item.nationality && (
                  <span className="ml-auto text-xs text-muted-foreground">{item.nationality}</span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {cases.length > 0 && (
          <CommandGroup heading="Legal Cases">
            {cases.map((item) => (
              <CommandItem
                key={`case-${item.id}`}
                value={`case-${item.id}`}
                onSelect={() => handleSelect(item)}
                className="cursor-pointer"
              >
                <Scale className="mr-2 h-4 w-4" />
                <span className="font-medium">{item.name}</span>
                {item.nationality && (
                  <span className="ml-auto text-xs text-muted-foreground">{item.nationality}</span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}

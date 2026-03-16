"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Scale } from "lucide-react";
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
  type?: "case";
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

  const handleSelect = (item: SearchItem) => {
    router.push(`/c/${item.id}`);
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
      description="Search legal cases"
    >
      <CommandInput placeholder="Search cases..." value={search} onValueChange={setSearch} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {filteredItems.length > 0 && (
          <CommandGroup heading="Legal Cases">
            {filteredItems.map((item) => (
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

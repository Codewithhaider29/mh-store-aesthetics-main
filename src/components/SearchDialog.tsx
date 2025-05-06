import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Search } from 'lucide-react';
import data from '../data/searchData.json'; // ⬅️ Import JSON file

interface SearchItem {
  id: string;
  name: string;
  category: string;
  url: string;
}

interface SearchDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SearchDialog = ({ open, setOpen }: SearchDialogProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>(data);

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(data);
    }
  }, [searchQuery]);

  const handleSelect = (item: SearchItem) => {
    setOpen(false);
    navigate(item.url);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search for products and pages..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {results.length > 0 && (
          <>
            <CommandGroup heading="Products">
              {results
                .filter(item => item.category !== 'Pages')
                .map(item => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => handleSelect(item)}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span>{item.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{item.category}</span>
                  </CommandItem>
                ))}
            </CommandGroup>

            <CommandGroup heading="Pages">
              {results
                .filter(item => item.category === 'Pages')
                .map(item => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => handleSelect(item)}
                  >
                    {item.name}
                  </CommandItem>
                ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;

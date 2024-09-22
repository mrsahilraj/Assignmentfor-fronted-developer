import { useState } from 'react';

const useSearch = (items) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return { searchTerm, setSearchTerm, filteredItems };
};

export default useSearch;

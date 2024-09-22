import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setSearchTerm } from './redux/itemsSlice';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';



const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const searchTerm = useSelector((state) => state.items.searchTerm);

  const handleSearchChange = (term) => {
    dispatch(setSearchTerm(term));
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Item Filter App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default App;

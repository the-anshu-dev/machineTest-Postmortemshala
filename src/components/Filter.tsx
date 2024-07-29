"use client";
import { useEffect, useState } from "react";
import { Card, Flex, Input, Button } from "antd";

const FilterPage = () => {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const allItems = [
    "Abhi",
    "Deva",
    "Anshu",
    "Nikhil",
    "Vikash",
    "Pardeep",
    "Ansh",
    "Ani",
    "Atul",
    "Amna",
  ];
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      setFilteredResults(
        filteredItems.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm, filteredItems]);

  const moveToSelected = (item: string) => {
    setFilteredItems((prevItems) => prevItems.filter((i) => i !== item));
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const moveToFiltered = (item: string) => {
    setSelectedItems((prevItems) => prevItems.filter((i) => i !== item));
    setFilteredItems((prevItems) => [...prevItems, item]);
  };

  
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((old) => old + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <Input placeholder="Search by name" onChange={handleSearch} />
      {searchTerm && (
        <>
          {filteredResults.length > 0 && <div>Filtered Data</div>}
          <div>
            {filteredResults.map((item, index) => (
              <Button key={index} onClick={() => moveToSelected(item)}>
                {item}
              </Button>
            ))}
          </div>
        </>
      )}
      {selectedItems.length > 0 && (
        <>
          <div>Selected Data:</div>
          <div>
            {selectedItems.map((item, index) => (
              <Button key={index} onClick={() => moveToFiltered(item)}>
                {item}
              </Button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FilterPage;

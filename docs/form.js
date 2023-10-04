import React, { useState } from 'react';

function Form() {
  const [inputText, setInputText] = useState('');
  const [tableData, setTableData] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [searchResult, setSearchResult] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddRow = () => {
   if (inputText.trim() !== '') {
      if (tableData.includes(inputText)) {
        setSearchResult(`${inputText} is already present`);
      } else {
        setTableData([...tableData, inputText]);
        setInputText('');
        setSearchResult('');
        setCount(count + 1);
      }
    }
  };

  const handleRemoveRow = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
    setCount(count - 1);
  };

  const handleClearAll = () => {
    setTableData([]);
    setCount(0);
  };
     const handleSort = () => {
    const sortedData = [...tableData];
    if (sortOrder === 'ascending') {
      sortedData.sort((a, b) => a.localeCompare(b));
      setSortOrder('descending');
    } else {
      sortedData.sort((a, b) => b.localeCompare(a));
      setSortOrder('ascending');
    }
    setTableData(sortedData);
  };
  const handleSearch = () => {
    const isPresent = tableData.includes(inputText);
    setSearchResult(isPresent ? `${inputText} is present` : `${inputText} is not present`);
  };

  const handleRandomSelect = () => {
    if (tableData.length > 0) {
      const randomIndex = Math.floor(Math.random() * tableData.length);
      setSelectedName(tableData[randomIndex]);
    }
  };

  return (
    <div>
      <h1>Names</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddRow}>Add</button>
      <button onClick={handleClearAll}>Clear All</button>
      <button onClick={handleSort}>
        Sort {sortOrder === 'ascending' ? 'Ascending' : 'Descending'}
      </button>
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleRandomSelect}>Random</button>
      <p>{searchResult}</p>
      <p>Count: {count}</p>
      {selectedName && <p>Randomly Selected Name: {selectedName}</p>}
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((text, index) => (
            <tr key={index}>
              <td>{text}</td>
              <td>
                <button onClick={() => handleRemoveRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;

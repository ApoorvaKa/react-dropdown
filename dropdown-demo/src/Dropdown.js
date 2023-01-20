import React, { useState, useEffect } from 'react';
import { Checkbox } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Dropdown.css';

function Dropdown({ list, multiSelect = true }) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleOption = option => {
    if(multiSelect) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(o => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
    else {
      setSelectedOption(option);
      setOpen(false);
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if(!selectAll) setSelectedOptions([...list])
    else setSelectedOptions([])
  };

  const DropdownSelector = () =>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
  }}>
      <label>
        Select Option 
      </label>            
      <ArrowDropDownIcon fontSize ='large'/> 
    </div>

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setOpen(!open)}>
        {multiSelect ? (selectedOptions.length === 0 ? <DropdownSelector/> : selectedOptions.join(', ')) : (selectedOption || <DropdownSelector/>)}
      </button>
      {open && (
        <ul className="dropdown-content">
          {multiSelect && (
            <li>
              <Checkbox checked={selectAll} onChange={handleSelectAll}/>
              Select All/Unselect All
            </li>
          )}
          {list.map((option, index) => (
            <li key={index} onClick={() => toggleOption(option)} className={(multiSelect ? selectedOptions : [selectedOption]).includes(option) || selectAll ? 'selected' : ''}>
              {multiSelect && <Checkbox checked={selectAll || selectedOptions.includes(option)} onChange={() => toggleOption(option)} disabled={selectAll}/>}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

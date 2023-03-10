import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Dropdown.css';

function Dropdown({ list, multiSelect = true, title }) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleOption = option => {
    if(multiSelect) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(o => o !== option));
        setSelectAll(false);
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

  const DropdownSelector = () => {
    return(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <label>
          {title}
        </label>            
        <ArrowDropDownIcon fontSize ='large'/> 
      </div>
    )
  }

  // This determines the text of the placeholder could be ternary operator for fewer lines as shown
  // (multiSelect ? (selectedOptions.length === 0 ? <DropdownSelector/> : selectedOptions.join(', ')) : (selectedOption || <DropdownSelector/>)
  const Placeholder = () => {
    if (multiSelect) {
      if (selectedOptions.length === 0) {
        return <DropdownSelector/>
      }else {
        return selectedOptions.join(', ')
      }
    } else {
      if (selectedOption) {
        return selectedOption
      } else {
        return <DropdownSelector/>
      }
    }
  }

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setOpen(!open)}>
        {Placeholder()}
      </button>
      {open && (
        <ul className="dropdown-content">
          {multiSelect && (
            <li>
              <Checkbox 
                checked={selectAll} 
                onChange={handleSelectAll}
              />
              {selectAll ? "Unselect All" : "Select All"}
            </li>
          )}
          {list.map((option, index) => (
            <li key={index} onClick={() => toggleOption(option)}>
              {multiSelect && <Checkbox checked={selectedOptions.includes(option)} onChange={() => toggleOption(option)} />}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

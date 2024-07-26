import React, { useState } from 'react';

function SearchBar() {
    const [searchText, setSearchText] = useState('');

    const handleChange = e => {
        setSearchText(e.target.value);
    };

    return (
        <div>
            <input type='text' value={searchText} onChange={handleChange}/>
            <br/><br/>
            <button>Search</button>
        </div>
    );
}

export default SearchBar;
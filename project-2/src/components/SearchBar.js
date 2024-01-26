import React from 'react'

function SearchBar({searchQuery, setSearchQuery}) {
  return (
    
    <div>
      
      <form className="formClass">
        <input type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder='Search here...'
        />
      </form>
      
    </div>
  )
}
export default SearchBar;
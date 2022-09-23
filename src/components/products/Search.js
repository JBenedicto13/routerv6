import React from 'react';

function Search() {
  return (
    <div className='search'>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
        <datalist id="datalistOptions">
            <option value="San Francisco"/>
            <option value="New York"/>
            <option value="Seattle"/>
            <option value="Los Angeles"/>
            <option value="Chicago"/>
        </datalist>
    </div>
  )
}

export default Search
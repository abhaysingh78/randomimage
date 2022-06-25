import React, { useEffect, useState } from "react";
import "../Home/home.css";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState();
  const [show, setShow] = useState(false);

  const fetchApi = async e => {
    e.preventDefault();
    let result = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=yourapi&count=30`
    );
    result = await result.json();
    setSearch(result.results);

    if (search) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    if (query === "") {
      setShow(false);
    }
  }, [query]);

  return (
    <>
      <form onSubmit={fetchApi}>
        <div className='search-box'>
          <input
            type='search'
            onChange={e => setQuery(e.target.value)}
            value={query}
            className='input-searchs'
            placeholder='Type to Search...'
          />
        </div>
      </form>

      <div className='photos'>
        {show && search.length > 0 && <h4>Search Related</h4>}
        {show && search.length > 0 && <hr />}
        {show &&
          search.length > 0 &&
          search.map((item, i) => (
            <>
              <img
                src={item.urls.regular}
                alt='img'
                className='search'
                key={i}
              />
            </>
          ))}
        {show && search.length > 0 && <hr />}
      </div>
    </>
  );
};

export default Search;

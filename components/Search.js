import React from 'react';
import Videos from '../components/Videos';

function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSearchTerm(event.target.search.value);
        }}
      >
        <label htmlFor="search"></label>
        <input
          type="search"
          aria-label="Search videos"
          placeholder="Search videos"
          name="search"
          //   onSubmit={(e) => {
          //     setSearchTerm(e.target.search.value);
          //   }}
        />

        <button type="submit">Search</button>
      </form>

      <Videos searchTerm={searchTerm} />
    </article>
  );
}

export default Search;

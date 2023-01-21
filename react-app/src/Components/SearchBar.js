import React, { useState } from 'react';
import "./SearchBar.css";
import axios from 'axios';

// function SearchBar() {
//   const [query, setQuery] = useState('');
//   const [result, setResult] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get(`https://www.amiiboapi.com/api/amiibo/?name=${query}`);
//       setResult(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search for an amiibo character" />
//         <button type="submit">Search</button>
//       </form>
//       {result && (
//         <div>
//           <h2>{result.amiibo[0].name}</h2>
//           <img src={result.amiibo[0].image} alt={result.amiibo[0].name} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;

function SearchBar() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://www.amiiboapi.com/api/amiibo/?name=${query}`);
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="search">
      <form className="searchInputs" onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search for Amiibo Character..." />
        <button type="submit">Search</button>
      </form>
      {result && (
        <div>
          <p>{result.amiibo.length} characters match your search for "{query}"</p>
          {result.amiibo.map(amiibo => (
            <div key={amiibo.tail}>
              <h2>{amiibo.name}</h2>
              <h3>{amiibo.amiiboSeries}</h3>
              <img src={amiibo.image} alt={amiibo.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
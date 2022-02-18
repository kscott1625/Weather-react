import React from 'react';
const api = {
  key: '056d803b7fda4d93889c479f4278b0ee',
  base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search.." />
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './navbar';

const App = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <a href="#" className="btn btn-outline-secondary btn-lg up-arrow" role="button">&uarr;</a>
    </div>
  );
}

export default App;
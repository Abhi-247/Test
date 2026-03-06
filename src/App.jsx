/* global __BUILD_DATE__ */
import React from 'react';

const App = () => {
  return (
    <div>
      {/* This will show the date from the file in BOTH dev and prod */}
      

<h1>Version 1.0 || Build {__BUILD_DATE__}</h1>
    </div>
  )
}

export default App;
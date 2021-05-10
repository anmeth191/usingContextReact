import React from 'react'
import Navbar  from './components/Navbar';
import Content from './components/Content';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
  return (
    <div className="App">
      <div>
    <ThemeContextProvider>
    <Navbar />
    <Content />
    </ThemeContextProvider>
    </div>
    </div>
  );
}

export default App;

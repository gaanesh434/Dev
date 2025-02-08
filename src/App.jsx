import React, { useState } from "react";
import Nav from "./Components/Nav";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState('light');

  const bgColor = theme === 'light' ? 'white' : 'black';

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Nav theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;

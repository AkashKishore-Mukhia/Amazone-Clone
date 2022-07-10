import React from "react";
import './App.css';
import Header  from './Header';
import Alert  from './Alert'
import Home from './Home'
function App() {
  return (
    //BEM
    <div className="App">
        <Alert/>
        <Header/>
        <Home/>
      {/* header */}
      {/* Home */}
    </div>
  );
}

export default App;

import React from 'react';
import '../assets/css/App.css';


import SearchInput from "../components/SearchInput";
import Footer from "../components/global/Footer";


function App() {
  return (
    <div className="App">
        <SearchInput/>
        <Footer/>
    </div>
  );
}

export default App;

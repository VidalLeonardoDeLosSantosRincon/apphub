import React from 'react';
import '../assets/css/App.css';


import SearchInput from "../components/SearchInput";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";


function App() {
  return (
    <div className="App">
        <Header/>
        <SearchInput/>
        <Footer/>
    </div>
  );
}

export default App;

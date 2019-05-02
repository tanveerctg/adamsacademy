import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import PopularSubjects from './Components/PopularSubjects/PopularSubjects';

function App() {

  return (
    <div className="App" >
      <Layout>
        <Home />
        <PopularSubjects />
      </Layout>
    </div>
  );
}

export default App;


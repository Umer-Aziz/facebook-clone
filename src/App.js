import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';


function App() {
  const user ="umer";
  return (
    
    <div className="app">
    {!user ? <h1>Login page</h1> :(
     <>
      <Header />
     <div className="app_body">
     <Sidebar/>
    <Feed/>
    <Widgets/>
     </div>
     </>
    )}
    
    </div>
    
  );
}

export default App;

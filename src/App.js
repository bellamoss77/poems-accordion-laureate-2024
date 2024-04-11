//import { useState } from 'react';
import './App.css';
import Accordion from './accordion';
import PageTitle from './pageTitle';
import Description from './description';
import PoetryHeader from './poetryHeader';
import VisualArtHeader from './visualArtHeader';


function App() {
  
  
  return (
    <div className="App">
      <PageTitle />
      <Description />
      <PoetryHeader />
      <Accordion />
      <VisualArtHeader />
    </div>
  );
}

export default App;

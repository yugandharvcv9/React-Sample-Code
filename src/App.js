import React from 'react';
import './App.css';
import CounterHook from './components/CounterHook';
import Counter1 from './components/Counter1';
import ArrayCounter from './components/ArrayCounter';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
     <CounterHook></CounterHook>
     <Counter1></Counter1>
     <ArrayCounter></ArrayCounter>
     <DataFetching></DataFetching>
    </div>
  );
}

export default App;

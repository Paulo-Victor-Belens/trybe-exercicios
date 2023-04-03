import React from 'react';
import './App.css';

const actionBtn1 = () => {
  console.log('actionBtn1');
};

const actionBtn2= () => {
  console.log('actionBtn2');
};

const actionBtn3 = () => {
  console.log('actionBtn3');
};

function App() {
  return (
    <section className="container-buttons">
      <button className="btn1" onClick={actionBtn1}>1</button>
      <button className="btn2" onClick={actionBtn2}>2</button>
      <button className="btn3" onClick={actionBtn3}>3</button>
    </section>
  );
}

export default App;

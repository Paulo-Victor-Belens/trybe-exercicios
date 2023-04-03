import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.actionBtn1 = this.actionBtn1.bind(this);
    this.actionBtn1 = this.actionBtn2.bind(this);
    this.actionBtn1 = this.actionBtn3.bind(this);
  }
  actionBtn1 = () => {
    console.log('actionBtn1');
  };
  
  actionBtn2 = () => {
    console.log('actionBtn2');
  };
  
  actionBtn3 = () => {
    console.log(this);
    console.log('actionBtn3');
  };
  render() {
  return (
    <section className="container-buttons">
      <button className="btn1" onClick={this.actionBtn1}>1</button>
      <button className="btn2" onClick={this.actionBtn2}>2</button>
      <button className="btn3" onClick={this.actionBtn3}>3</button>
    </section>
  );
}
}

export default App;

import React from 'react';
import Buttons from './Buttons';

class App extends React.Component {

  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}

export default App;

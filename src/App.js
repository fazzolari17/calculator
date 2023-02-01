/* eslint-disable no-eval */
import './App.css';
import React from 'react';
import CalculatorContainer from './components/CalculatorContainer';
import Footer from './components/Footer';

function App() {
  const [calc, setCalc] = React.useState('');
  const [result, setResult] = React.useState('');
  const [decimalAllowed, setDecimalAllowed] = React.useState(true);

  const ops = ['/', '*', '+', '-'];
  const decimal = '.';

  console.log('CALC::', calc);

  const updateCalc = value => {
    if (value === '-' && calc === '') {
      setCalc(value);
    }
    else if (ops.includes(value) && calc === '-') {
      return;
    }
    else if ((ops.includes(value) && calc === '')) {
      return;
    }
    else if ((ops.includes(value) && ops.includes(calc.slice(-1)))) {
      if (value === '-') {
        setCalc(calc + value)
      } else {
        let filtered = calc.match(/(\*|\+|\/|-)?(\.|-)?\d+/g).join('');
        setCalc(filtered + value)
        return;
      }
    }
    else if (calc[0] === '0' && calc.length < 2) {
      return;
    } 
    else if (value === decimal && !decimalAllowed) {
      return;
    } 
    else {
      setCalc(calc + value)
    }

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString())
    setResult(calc )
  };

  const handleClear = () => {
    setCalc('');
    setResult('');
    setDecimalAllowed(true);
  };

 

  
 

  const handleClick = (event) => {
    const value = event.target.value;
    
    if (value === '.') {
      setDecimalAllowed(false);
    };

    if (ops.includes(value)) {
      setDecimalAllowed(true);
    }

    if (value === 'AC') {
      handleClear();
    } else if (value === '=') {
      calculate();
    } 
    else {
      updateCalc(value);
    };
  }
  

  return (
    <div className="App">
      <CalculatorContainer
        calc={calc}
        result={result}
        handleClick={handleClick}
      />
      <Footer />
      </div>
  );
}

export default App;

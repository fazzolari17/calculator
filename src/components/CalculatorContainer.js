import { buttonInfo } from "../buttonInfo";

const CalculatorContainer = ({ handleClick, calc, result }) => {

  const buttons = buttonInfo.map(({ id, value }) => (
    <button
      key={id}
      className="key"
      id={id}
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  )) 

  return (
    <div className="calculator">
      <div className="keyContainer">
        <div className="formulaScreen">{result || '0'}</div>
        <div className="outputScreen" id="display">{calc || '0'}</div>
        {buttons}
      </div>
    </div>
  )
};

export default CalculatorContainer;
import React, { useState } from 'react';
import './ButtonPanel.css';

const ButtonPanel = () => {
  const [output, setOutput] = useState('');

  const generateRandomNumbersArray = (length = 10) => {
    const arr = Array.from({ length }, () => Math.floor(Math.random() * 100));
    return arr;
  };

  const generateRandomStringsArray = (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const arr = Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length)));
    return arr;
  };

  const generateRandomJsonObject = () => {
    const obj = {
      name: `Name${Math.floor(Math.random() * 100)}`,
      age: Math.floor(Math.random() * 100),
      city: `City${Math.floor(Math.random() * 100)}`
    };
    return obj;
  };

  const generateCustomArray = (type, length) => {
    return type === 'numbers' ? generateRandomNumbersArray(length) : generateRandomStringsArray(length);
  };

  const generateJsonArrayObject = (type, length) => {
    const array = generateCustomArray(type, length).map((value, index) => ({
      id: index + 1,
      value: value
    }));
    return array;
  };

  const handleButtonClick = (action) => {
    switch (action) {
      case 'randomNumbersArray':
        setOutput(JSON.stringify(generateRandomNumbersArray(), null, 2));
        break;
      case 'randomStringsArray':
        setOutput(JSON.stringify(generateRandomStringsArray(), null, 2));
        break;
      case 'randomJsonObject':
        setOutput(JSON.stringify(generateRandomJsonObject(), null, 2));
        break;
      case 'customArray':
        const arrayType = prompt('Enter array type (numbers/strings):', 'numbers');
        const arrayLength = parseInt(prompt('Enter array length:', '10'), 10);
        setOutput(JSON.stringify(generateCustomArray(arrayType, arrayLength), null, 2));
        break;
      case 'jsonArrayObject':
        const jsonArrayType = prompt('Enter array type (numbers/strings):', 'numbers');
        const jsonArrayLength = parseInt(prompt('Enter array length:', '10'), 10);
        setOutput(JSON.stringify(generateJsonArrayObject(jsonArrayType, jsonArrayLength), null, 2));
        break;
      default:
        break;
    }
  };

  return (
    <div className="button-panel">
      <button onClick={() => handleButtonClick('randomJsonObject')}>Generate Random JSON Object</button>
      <button onClick={() => handleButtonClick('customArray')}>Generate Custom Array</button>
      <button onClick={() => handleButtonClick('jsonArrayObject')}>Generate Array JSON </button>
      <pre>{output}</pre>
    </div>
  );
};

export default ButtonPanel;

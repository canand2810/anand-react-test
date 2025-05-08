import React from 'react';
import { Rnd } from 'react-rnd';

const FloatingInput = ({ inputValue, setInputValue, onKeyPress }) => {
  return (
    <Rnd
      default={{
        x: window.innerWidth / 2 - 150,
        y: window.innerHeight - 100,
        width: 300,
        height: 50,
      }}
      minWidth={200}
      minHeight={40}
      dragGrid={[10, 10]}
      resizeGrid={[10, 10]}
      bounds="window"
      style={{
        position: 'fixed',
        zIndex: 1000,
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Type and press Enter to open modal"
        style={{
          width: '100%',
          height: '100%',
          padding: '12px 20px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontSize: '14px',
          outline: 'none',
          backgroundColor: 'white',
          boxSizing: 'border-box',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none'
        }}
      />
    </Rnd>
  );
};

export default FloatingInput; 
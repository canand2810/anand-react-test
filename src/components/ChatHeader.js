import React from 'react';

const ChatHeader = ({ onClose }) => {
  return (
    <div style={{
      padding: '15px 20px',
      borderBottom: '1px solid #eee',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      touchAction: 'none',
      flexShrink: 0
    }}>
      <h3 style={{ margin: 0, fontSize: '18px' }}>Chat Assistant</h3>
      <button 
        onClick={onClose}
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          color: '#666',
          padding: '5px 10px',
          touchAction: 'manipulation'
        }}
      >
        ×
      </button>
    </div>
  );
};

export default ChatHeader; 
import React from 'react';

const ChatInput = ({ inputValue, setInputValue, onChatSubmit }) => {
  return (
    <div style={{
      padding: '10px',
      borderTop: '1px solid #eee',
      backgroundColor: '#fff'
    }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={onChatSubmit}
        placeholder="Type your message..."
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px',
          outline: 'none'
        }}
      />
    </div>
  );
};

export default ChatInput; 
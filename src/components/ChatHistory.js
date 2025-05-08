import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const ChatHistory = ({ chatHistory, chatContainerRef }) => {
  return (
    <div 
      ref={chatContainerRef}
      style={{
        flex: 1,
        padding: '10px',
        overflowY: 'auto',
        backgroundColor: '#fff',
        WebkitOverflowScrolling: 'touch',
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        scrollBehavior: 'smooth'
      }}
    >
      {chatHistory.map((chat, index) => (
        <div key={index}>
          <div
            style={{
              marginBottom: '4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <div style={{
              padding: '4px 8px',
              maxWidth: '90%',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {chat.type === 'user' && (
                <FontAwesomeIcon 
                  icon={faArrowRightToBracket} 
                  style={{ color: '#000' }} 
                />
              )}
              <span style={{ 
                fontWeight: chat.type === 'user' ? 'bold' : 'normal',
                fontSize: '14px',
                color: '#000'
              }}>
                {chat.message}
              </span>
            </div>
          </div>
          {chat.type === 'bot' && index < chatHistory.length - 1 && (
            <div style={{
              borderBottom: '1px solid #eee',
              margin: '4px 0'
            }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory; 
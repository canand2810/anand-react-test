import React, { useState, useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import ChatHeader from './components/ChatHeader';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import ChatFooter from './components/ChatFooter';
import FloatingInput from './components/FloatingInput';

const ResizableModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const chatContainerRef = useRef(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [modalHeight, setModalHeight] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll to bottom when chat history updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Adjust modal height based on content
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const maxHeight = window.innerHeight - 40;
      const newHeight = Math.min(contentHeight, maxHeight);
      setModalHeight(newHeight);
    }
  }, [chatHistory, windowSize.height]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsOpen(true);
    }
  };

  const handleChatSubmit = (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      // Add user message to chat history
      setChatHistory(prev => [...prev, { type: 'user', message: inputValue }]);
      
      // TODO: Add API call here to get response
      // For now, adding a mock response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { type: 'bot', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }]);
      }, 1000);
      
      setInputValue('');
    }
  };

  return (
    <div>
      <FloatingInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onKeyPress={handleKeyPress}
      />

      {isOpen && (
        <Rnd
          ref={modalRef}
          default={{
            x: (window.innerWidth - 300) / 2,
            y: 20,
            width: 400,
            height: modalHeight,
          }}
          minWidth={350}
          minHeight={400}
          dragGrid={[10, 10]}
          resizeGrid={[10, 10]}
          bounds="window"
          style={{
            position: 'fixed',
            border: '1px solid #ccc',
            backgroundColor: 'white',
            zIndex: 1000,
            boxSizing: 'border-box',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            touchAction: 'none',
            transition: 'height 0.3s ease-in-out',
            height: modalHeight
          }}
        >
          <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <ChatHeader onClose={toggleModal} />
            <ChatHistory 
              chatHistory={chatHistory}
              chatContainerRef={chatContainerRef}
            />
            <ChatInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              onChatSubmit={handleChatSubmit}
            />
            <ChatFooter />
          </div>
        </Rnd>
      )}
    </div>
  );
};

export default ResizableModal;

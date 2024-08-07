import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
    setInput('');
    simulateBotResponse();
  };

  const simulateBotResponse = () => {
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: 'Hello, how can I help you?', sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      <button
        className={`fixed bottom-24 right-16 bg-saffron-500 hover:bg-saffron-600
           text-white font-bold py-30 px-40 rounded-full transition-transform transform ${
          isOpen ? 'rotate-180' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : <i className="fa-solid fa-robot"></i>}
      </button>
      {isOpen && (
        <div className="fixed bottom-36 right-20 w-96 bg-gray-800 shadow-2xl p-4 rounded-lg">
          <div className="chat-header text-saffron-500 text-xl font-bold mb-2">Chatbot</div>
          <div className="chat-messages h-64 overflow-y-auto p-2 space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message p-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-700 text-white self-start'
                }`}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 text-white bg-gray-700 rounded-l-lg focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

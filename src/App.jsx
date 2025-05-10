import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // Fetch data from the Flask backend
  useEffect(() => {
    fetch('https://legendary-telegram-97777p995wqwcxjp6-5000.app.github.dev/api/greet')  // Correct external URL
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">React + Flask</h1>
      <p className="mt-4 text-lg text-gray-700">{message || 'Loading...'}</p>
    </div>
  );
}

export default App;

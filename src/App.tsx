import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://legendary-telegram-97777p995wqwcxjp6-5000.app.github.dev/api/greet')  // Correct external URL
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">React + Flask</h1>
      <p className="mt-4 text-lg text-gray-700">{message || 'Loading...'}</p>
    </div>
  );
}

export default App;

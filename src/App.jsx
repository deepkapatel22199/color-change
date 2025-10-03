import { useState } from 'react';
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white');
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-500"
      style={{ backgroundColor: bgColor }}>
        <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg">Background Color Change</h1>
        <button onClick={changeBackgroundColor}
        className="px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">Change Me</button>
      </div>
    </>
  )
}

export default App

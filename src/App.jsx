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
      <div className="app" style={{ backgroundColor: bgColor }}>
        <h1 class="text-3xl font-bold underline">Background Color Change</h1>
        <button onClick={changeBackgroundColor}>Change Me</button>
      </div>
    </>
  )
}

export default App

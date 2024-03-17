import { useState } from 'react'
import ChatRoom from './components/ChatRoom'
import Navbar from './components/Navbar'

function App() {

  const [audioUrl, setAudioUrl] = useState(null);

  const url = 'http://34.29.93.36:5000/infer';

  const handleTextsubmission = async (text) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      console.log(audioUrl);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error('Error fetching audio:', error);
    }
  };

  const messages = [
    {
        id: 1,
        sender: 'Human',
        data: 'This is a text'
    },
    {
        id: 2,
        sender: 'Bot',
        data: 'a wav file'
    },
    {
        id: 3,
        sender: 'Human',
        data: 'This is a text'
    },
    {
      id: 4,
      sender: 'Bot',
      data: 'This is a demo text'
    },
    {
      id: 5,
      sender: 'Bot',
      data: 'This is a demo text two'
    }
]

  return (
    <div>
      <Navbar />
      <ChatRoom messages={messages} onformSubmission={handleTextsubmission}/>
    </div>
  )
}

export default App

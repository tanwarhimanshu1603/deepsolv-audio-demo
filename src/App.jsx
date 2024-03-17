import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ChatRoom from './components/ChatRoom'
import Navbar from './components/Navbar'

function App() {

  const [messages,setMessages] = useState([]);

  const [loader,setLoader] = useState(false);


  const url = 'http://34.29.93.36:5000/infer';

  const getAudio = async (text) => {
    try {
      setLoader(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text }),
      });
      const data = await response.json();
      const result = data.output_audio_url;

      // Store the audio URL in the data property of the message object
      const newMessage = {
        id: uuidv4(),
        sender: 'Bot',
        data: result
      };

      setMessages(prevMessages => [...prevMessages, newMessage]); // Update messages state
    } catch (error) {
      console.error('Error fetching audio response:', error);
    }
    setLoader(false);
  }

  const handleTextsubmission = (text) => {
    // Store the user's text message in the data property of the message object
    const newUserMessage = {
      id: uuidv4(),
      sender: 'Human',
      data: text
    };

    setMessages(prevMessages => [...prevMessages, newUserMessage]); // Update messages state
    getAudio(text); // Fetch audio for the user's text message
  };

  

  return (
    <div>
      <Navbar />
      <ChatRoom messages={messages} onformSubmission={handleTextsubmission} loader={loader}/>
    </div>
  )
}

export default App

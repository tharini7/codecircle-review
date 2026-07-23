import './App.css'

import { useState, useEffect } from 'react';
import socket from './socket';

function App() {
  const [role, setRole] = useState('landing'); // 'landing' | 'host' | 'scholar'
  const [room, setRoom] = useState(null);
  const [activity, setActivity] = useState(null);
  const [responses, setResponses] = useState([]);
  const [sampleAnswer, setSampleAnswer] = useState(null);
  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  

  useEffect(() => {
    socket.on('room-created', (roomData) => {
      setRoom(roomData);
      setRole('host');
    });

    socket.on('joined-room', (roomData) => {
      setRoom(roomData);
      setRole('scholar');
    });

    socket.on('scholar-join', (scholars) => {
      setRoom((prev) => prev ? { ...prev, scholars } : prev);
    });

    socket.on('activity-started', (newActivity) => {
      setActivity(newActivity);
      setResponses([]);
      setSampleAnswer(null);
      setAnswer('');
    });

    socket.on('responses-updated', (updatedResponses) => {
  setResponses(updatedResponses);
});

    socket.on('answer-revealed', (sample) => {
      setSampleAnswer(sample);
    });

    socket.on('join-error', (message) => {
      alert(message);
    });

    socket.on('room-ended', () => {
  alert('The host ended the session.');
  setRole('landing');
  setRoom(null);
  setActivity(null);
  setResponses([]);
  setSampleAnswer(null);
});
    

    return () => {
    socket.off('room-created');
    socket.off('joined-room');
    socket.off('scholar-join');
    socket.off('activity-started');
    socket.off('new-response');
    socket.off('answer-revealed');
    socket.off('join-error');
  };

  }, []);

  const createRoom = () => socket.emit('create-room');

  const joinRoom = () => {
    socket.emit('join-room', { code: joinCode.toUpperCase(), name });
  };

  const nextActivity = () => {
    socket.emit('next-activity', { code: room.code });
  };

  const revealAnswer = () => {
    socket.emit('reveal-answer', { code: room.code });
  };

  const submitAnswer = () => {
    socket.emit('submit-answer', { code: room.code, answer });
    setAnswer('');
  };

  const goHome = () => {
    setRole('landing');
    setRoom(null);
    setActivity(null);
    setResponses([]);
    setSampleAnswer(null);
  };

  const endRoom = () => {
    socket.emit('end-room', { code: room.code });
    goHome();
  };

  if (role === 'landing') {
    return (
      <div>
        <h1>CodeCircle Review</h1>
        <button onClick={createRoom}>Host a Room</button>
        <hr />
        <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Room code" value={joinCode} onChange={(e) => setJoinCode(e.target.value)} />
        <button onClick={joinRoom}>Join Room</button>
      </div>
    );
  }

  if (role === 'host') {
    return (
      <div>
        <h1>Room Code: {room.code}</h1>
        <h3>Scholars: {room.scholars.map((s) => s.name).join(', ')}</h3>
        <button onClick={nextActivity}>Next Activity</button>
        <button onClick={revealAnswer}>Reveal Answer</button>
        <button onClick={goHome}>← Back to Home</button>
      <button onClick={endRoom}>End Game</button>

        {activity && (
          <div>
            <h2>{activity.prompt}</h2>
            {activity.code && <pre>{activity.code}</pre>}
          </div>
        )}

        {sampleAnswer && <p><strong>Sample Answer:</strong> {sampleAnswer}</p>}

        <h3>Responses ({responses.length})</h3>
        <ul className="response-list">
  {responses.map((r, i) => <li key={i}><strong>{r.name}:</strong> {r.answer}</li>)}
</ul>
      </div>
    );
  }

  if (role === 'scholar') {
    return (
      <div>
        <h1>Room: {room.code}</h1>
        {activity ? (
          <div>
            <h2>{activity.prompt}</h2>
            {activity.code && <pre>{activity.code}</pre>}
            {activity.type === 'this-or-that' ? (
  <div>
    <button onClick={() => { socket.emit('submit-answer', { code: room.code, answer: activity.optionA }); setAnswer(activity.optionA); }}>
      {activity.optionA}
    </button>
    <button onClick={() => { socket.emit('submit-answer', { code: room.code, answer: activity.optionB }); setAnswer(activity.optionB); }}>
      {activity.optionB}
    </button>
    {answer && <p>You chose: {answer}</p>}
  </div>
) : (
  <div>
    <input value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Your answer" />
    <button onClick={submitAnswer}>Submit</button>
  </div>
)}
            {sampleAnswer && <p><strong>Sample Answer:</strong> {sampleAnswer}</p>}
          </div>
        ) : (
          <p>Waiting for host to start an activity...</p>
        )}
      </div>
    );
  }
}

export default App;
/*
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected: ', socket.id);
    })
  }, []);


  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/
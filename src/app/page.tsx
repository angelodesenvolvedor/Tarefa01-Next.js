// pages/index.js
import { useState } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

interface IconePlayPauseProps {
  playing: boolean;
}

function IconePlayPause({ playing }: IconePlayPauseProps) {
  if (playing) {
    return (
      <div>
        <FaPauseCircle size={32} />
        <span>Executando</span>
      </div>
    );
  } else {
    return (
      <div>
        <FaPlayCircle size={32} />
        <span>Pausado</span>
      </div>
    );
  }
}

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <main>
      <IconePlayPause playing={playing} />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Pausar' : 'Reproduzir'}
      </button>
    </main>
  );
}
import React, { useState, useRef } from 'react';
import '../style/Musicas.css';

function Musicas(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayerRef = useRef(null);

  const playPause = () => {
    const audioPlayer = audioPlayerRef.current;

    if (!audioPlayer) {
      return;
    }

    if (isPlaying) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      setIsPlaying(false);
    } else {
      const allAudioPlayers = document.querySelectorAll('audio');
      allAudioPlayers.forEach(player => {
        if (player !== audioPlayer) {
          player.pause();
          player.currentTime = 0;
        }
      });

      audioPlayer.play();
      setIsPlaying(true);
    }

    props.setCurrentTrack({
      name: props.track.name,
      img: props.track.img,
      artistName: props.track.artistName,

    })


  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (

    <div className='musicas' onClick={playPause}>
      <div className='img'><img src={props.track.img} style={{ width: '30px', height: '30px' }} alt="" /></div>
      <div className='nomes'>
        <div className='nome'>{props.track.name}</div>
        <div className='nomebanda'>{props.track.artistName}</div>
      </div>
      <div className='play' onClick={playPause}>
        {isPlaying ? (
          <box-icon name='pause' color='#ffffff'></box-icon>
        ) : (
          <box-icon name='play' color='#ffffff'></box-icon>
        )}
      </div>
      <div className='favoritar'>
        {isPlaying ? (
          <box-icon name='deezer' type='logo' color='#5cda58'></box-icon>
        ) : (
          <box-icon name='deezer' type='logo' color='#ffffff'></box-icon>
        )}
      </div>

      <audio ref={audioPlayerRef} src={props.track.preview} onPause={handlePause}></audio>
    </div>
  );
}

export default Musicas;

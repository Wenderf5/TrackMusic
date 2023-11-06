import '../style/FtMusicamobile.css';

function FtMusicamobile(props) {
  return (
    <div className='navBarbottom'>
      <div className='imgmobilemusica'>
        {props.currentTrack && (
          <img src={props.currentTrack.img} alt={props.currentTrack.name} style={{ width: '40px', height: '75%'  }} />
        )}
      </div>
      <div className='musicNameMobile'>{props.currentTrack && props.currentTrack.name}</div>
    </div>
  );
}

export default FtMusicamobile;

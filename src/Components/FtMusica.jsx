import '../style/FtMusica.css'
function FtMusica(props) {
    return (
        <div className='bloco10'>
           <div className='bandaName'>{props.currentTrack && props.currentTrack.name}</div>
            <div className='blocoMusica'>
                {props.currentTrack && (
                    <img className='imgmusica' src={props.currentTrack.img} alt={props.currentTrack.name} style={{width: "100%", height: "100%", borderRadius:"10px"}}/>)}
            </div>
            <div className='musicName'>{props.currentTrack && props.currentTrack.artistName}</div>
        </div>
    )
}
export default FtMusica
import React, { useState, useEffect } from 'react';
import './style/app.css'
import Pesquisa from './Components/Pesquisa'
import Musicas from './Components/Musicas'
import FtMusica from './Components/FtMusica'
import FtMusicamobile from './Components/FtMusicamobile';

function App() {

    const [artistName, setArtistName] = useState("Black sabah");
    const [meuArray, setMeuArray] = useState([]);
    const [currentTrack, setCurrentTrack] = useState([]);
    const handleChange = (e) => {
        setArtistName(e.target.value);
    };

    useEffect(() => {
        CallApi();
    }, []);

    function CallApi() {
        const appId = '641661';
        const appSecret = '775f1c363eee73b902c11b2fbc40133e';
        const accessToken = `${appId}:${appSecret}`;
        const searchEndpoint = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`;

        const requestOptions = {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-RapidAPI-Key': '145cdbf4a7mshc71f9b1c1cc64dcp1b5e56jsn4134986c0b17',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            },
        };

        fetch(searchEndpoint, requestOptions)
            .then(response => response.json())
            .then(data => {
                const tracks = data.data.map(track => ({
                    name: track.title,
                    preview: track.preview,
                    img: track.album.cover_big,
                    artistName: track.artist.name,
                }));
                setMeuArray(tracks);
            })
    }

    return (
        <div>
            <div className='navbar'>
                <div className='titulo1'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAZRJREFUaEPtWG1ugzAMxQIicYqtJ9l6kq0nmXqSticZu0l3CqR8yJWltKo0DZMAASLzN06M37OfnUCR2QeZxVNIQGtnVBgShhIjICmXGPBgd8JQMGSJNwhDqQDXWn8CwInzZ63dNU1zvdutliEJyFMkDHE5PdV6dinXdd1rVVUfHEDW2ssmRIEL5L/10TVEqcE5d861zyhy9rRODJVl+c7ZKqXOzzajAjLGkMNvzmlRFPu6rtsBdg+TRWpIAgqgSBiaorFml3KkREOyKFTh7ioXc/YolRviMLXNqIB8r/jifhoALiTbvme9MfY/1FsonRGRnRScc8fJJoXQGjLGUM/qbZaIeFZKHTahchJQ6htrlimHiOy9HwAOXhTIlhs4W6ohLwrs2c65/WSiwKnbEuujZHuJH+Z8/glIa30CgN47DiJelVK7TdSQBBRwwVukDwlDa2fIF3rvAImIvzRAhj41+fnspU+pYs9e/ds2J8+zPWPFOp5rX/6NdS7kUp0rDKVCOtaPMBSLXKp9wlAqpGP9ZMfQDatQt0RwoWDYAAAAAElFTkSuQmCC" /><h1>Track Music</h1></div>
            </div>
            <div className='blocoPrincipal'>
                <Pesquisa handleChange={handleChange} CallApi={CallApi} />
                <div className='resultado'>Resultados da pesquisa :</div>
                <div id='123' className='musicasBloco'>
                    {meuArray.map((track, index) => (
                        <Musicas key={index} track={track} setCurrentTrack={setCurrentTrack} />
                    ))}
                </div>
            </div>
            <div className='bloco2'>
                <FtMusica currentTrack={currentTrack} />
            </div>
            <FtMusicamobile currentTrack={currentTrack} />

        </div>
    )
}

export default App;

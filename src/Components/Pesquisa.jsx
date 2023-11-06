import '../style/Pesquisa.css';

function Pesquisa (props){

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          props.CallApi();
        }
    }

    return(
        <div className='bloco1'>
            <input onChange={props.handleChange} onKeyPress={handleKeyPress} className='pesquisa' type="text" placeholder='Pesquise uma musica...'/>
            <button className='lupa' onClick={props.CallApi}><box-icon name='search' color='#fffefe' ></box-icon></button>
        </div>
    )
}
export default Pesquisa


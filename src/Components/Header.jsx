import meme1 from '../assets/smilingbucktooth.jpg'
function Header(){
    return(
        <header className='header'>
        <img src = {meme1} className='header-image'/>
        <h2 className='header-title'>Meme Generator</h2>
        <h4 className='header-project'>React Course - project 3</h4>
        </header>
    )
}
export default Header
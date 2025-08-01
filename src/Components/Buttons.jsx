
import { useEffect, useState } from 'react'

function Button() {
   const [memeDatas,setMemeData] = useState([])
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  })
   useEffect( ()=>{
      async function getMemes(){
      const res = await fetch(`https://api.imgflip.com/get_memes`)
      const data  = await res.json()
    setMemeData(data.data.memes)
      }
         getMemes()
         

   },[])
  function getMemeImage() {
    
    const randomNumber = Math.floor(Math.random() * memeDatas.length)
    const url = memeDatas[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type='text'
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='meme--img' alt="meme" />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Button

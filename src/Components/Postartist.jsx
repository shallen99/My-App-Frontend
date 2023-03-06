import React, {useState} from 'react'

function Postartist() {
    const [artistName, setArtistName] = useState("")
    const [songName, setSongName] = useState("")
    const [genre, setGenre] = useState("")
  
    const handleSubmit = (event) => {
    event.preventDefault()
    fetch ('http://localhost:9292/artists/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        artist_name : artistName,
        song_name : songName,
        genre : genre
      })
    })
      .then(res=>res.json())
      .then(data=>console.log(data))
  
  };
  console.log(artistName)
  return (

    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label className="form-label"></label>
        <input onChange={e=>setArtistName (e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Artist Name"/>
    </div>
    <div className="mb-3">
        <label className="form-label"></label>
        <input onChange={e=>setSongName (e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Song Title"/>
    </div>
    <div className="mb-3">
        <label className="form-label"></label>
        <input onChange={e=>setGenre (e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Genre"/>
    </div>
    <div className="mb-3">
        <label className="form-label"></label>
        <input  type="submit" className="form-control btn btn-primary" id="exampleFormControlInput1" placeholder="Submit"/>
    </div>
</form>

    
  )
}

export default Postartist
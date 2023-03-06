
function Artist ({artist}) {
  return (
    <div>
     <div className="card mb-3">
        <div className="card-body">
        <h5 className="card-title">{artist.artist_name}</h5>
        <p className="card-text">{artist.song_name}</p>
        
        <a href="#" className="btn btn-primary">{artist.genre}</a>
      </div>
    </div> 
    </div>
  )
}

export default Artist
import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";

function UpdateArtist() {
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");
  const [genre, setGenre] = useState("");
  
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:9292/artists/${id}` )
      .then((r) => r.json())
      .then((data) => {
        const {artistName, songName, genre,} = data
        setArtistName(artistName);
        setSongName(songName);
        setGenre(genre);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/artists/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artistName,
        songName,
        genre,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setArtistName(data.artistName);
        setSongName(data.songName);
        setGenre(data.genre);
        navigate("/");
        document.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <h3>Update Artist</h3>
        <div className="mb-3">
          <label className="form-label">Artist Name</label>
          <input
            className="form-control"
            name="artistName"
            value={artistName}
            placeholder="Type Here"
            onChange={(e) => setArtistName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Song Name</label>
          <input
            className="form-control"
            name="songName"
            value={songName}
            placeholder="Type Here"
            onChange={(e) => setSongName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input
            className="form-control"
            name="genre"
            value={genre}
            placeholder="Type Here"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm m-4">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateArtist;
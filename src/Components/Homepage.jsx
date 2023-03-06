
function Homepage() {

  const [artists, setArtists] = useState()

  useEffect(()=>{
    fetch("http://localhost:9292/artists", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    }).then(r=>r.json())
    .then((response)=>{
      console.log (response)
      setArtists(response)
    })

  }, [])
  return (
    <div>


     <div className ="container">
      <h1 className='py-3'>Artists {artists && artists.length}</h1>
       <div className="row" >
        <div className ="col-sm-8">
       {
        artists && artists.map((artist)=>(
          <Artist artist={artist} key = {artist.id} />
        ))
       }
           
         </div>
    
   </div>

         <div className ="col-sm-4">
          One of two columns
         </div>
     </div>
   </div>
  )
}

export default Homepage
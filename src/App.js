import {BrowserRouter, Routes, Route} from "react-router-dom"
import Outlook from './Components/Outlook';
import Homepage from './Components/Homepage';
import Postartist from './Components/Postartist';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element = {<Outlook />} >
        <Route index element = {<Homepage />} />
        <Route path ='/postartist' element = {<Postartist />} />
        <Route path ='/artists/update' element = {<UpdateArtist />} />
      </Route>
     </Routes>
    </BrowserRouter>
   
    

  );
}

export default App;

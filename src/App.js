import { useState, useEffect } from "react";
import Gallery from './Components/Gallery';
import Button from './Components/Button';


function App() {
  // Purpose: the id for the art in the met API
  let [artId,setArtId] = useState(12720);

  // The fetched data od saidart index
  let [data,setData] = useState({});

  // purpose:handle index iteration
  const handleIterate =(e) => {
  setArtId(artId + Number(e.target.value))
  }

// this will run when the app component is rendered
useEffect(() => {
    document.title='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    // makin the response into a json
    .then(response => response.json())
    // setting our data state variable to saud json data
    .then(resData => setData(resData))
    
}, [artId]);


  return (
    <div>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <Button handleIterate ={handleIterate} />
      </div>
  );
}

export default App;

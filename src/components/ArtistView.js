//imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//component
function ArtistView() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  return (
    <div>
      <h2>The artist id passed was: {id}</h2>
      <p>Artist data will go here</p>
    </div>
  );
}

//export
export default ArtistView;

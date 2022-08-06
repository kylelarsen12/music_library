//imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//component
function AlbumView() {
  const [albumData, setAlbumData] = useState([]);
  const { id } = useParams();

  return (
    <div>
      <p>Data will go here</p>
      <h2>The id passed was {id}</h2>
    </div>
  );
}

//export
export default AlbumView;

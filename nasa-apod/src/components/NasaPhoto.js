import React, { useState, useEffect } from "react";
import '../App.css';

// const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {

  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
                // we'll update the KEYHERE soon!
        `https://api.nasa.gov/planetary/apod?api_key=JLZXWg0pqHv8BejuDL6TJVBFQNfPfmkBVmRthlcs`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div/>;

  return (
    <div className="nasa-photo">
      {/* <table>
        <tr>
          <td style={{width:"20%"}}>
         */}
  <img
    src={photoData.url}
    alt={photoData.title}
    className="photo"
  />
{/* </td> */}
<td style={{width:"50%"}}>
<div>
<h1>{photoData.title}</h1>
<h5 className="date">Dated : {photoData.date}</h5>
<p className="explanation"><h5>Description:</h5>{photoData.explanation}</p>
</div>
</td>
{/* </tr> */}
{/* </table> */}
  </div>
  
  );
}
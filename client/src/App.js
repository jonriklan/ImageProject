
import {useState, useEffect} from 'react';
const API_BASE = "http://localhost:3001";

function App() {
const[images, setImages] = useState([]);
const [popupActive, setPopupActive] = useState(false);
const [newImage, setNewImage] = useState("");

useEffect(()=>{
  GetImages();
  console.log(images);
}, [])

const GetImages = ()=>{
  const data = fetch(API_BASE + "/images").then(res =>res.json())
  .then(data=>setImages(data))
  .catch(err=>console.error("Error: " , err));

  
}



  return (
    <div className="App">
      <h1>Welcome, Jon</h1>
      <h4>Your Images</h4>

      <div className = "images">
        {images.map(image=>(
          <div className = "image">
            <div className = "title">{image.title}</div>
            <div className = "picture">
              <img src = {image.img}/>
            </div>
            <div className = "author">{image.author}</div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;

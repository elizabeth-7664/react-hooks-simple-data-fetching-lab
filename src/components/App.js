// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State for the dog image URL
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    // Fetch a random dog image from the Dog CEO API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL to the state
        setLoading(false); // Set loading to false once the image is fetched
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false); // In case of an error, stop the loading state
      });
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show "Loading..." while fetching the image
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Show the dog image once loaded
      )}
    </div>
  );
}

export default App;


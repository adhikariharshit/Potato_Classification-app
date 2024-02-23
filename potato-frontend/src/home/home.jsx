import React, { useState, useRef } from 'react';
import './home.css';
import img from "./leaficon-bg.png";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [prediction, setPrediction] = useState("");
  const fileInputRef = useRef(null); // Reference to the file input element

  const onSelectFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));

    // Call prediction function here
    predictImage(file);
  };

  const clearData = () => {
    setSelectedFile(null);
    setPreview(null);
    setPrediction("");
    fileInputRef.current.value = null; // Clear the value of the file input
  };

  const predictImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Prediction failed');
      }

      const data = await response.json();
      if (data && data.class && data.confidence) {
        setPrediction(`Label: ${data.class}\nConfidence: ${(data.confidence * 100).toFixed(2)}%`);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error predicting image:', error);
    }
  };

  return (
    <>
      {/* Header Section */}
      <header className='header-sec'>
        <div className='heads-name'>
          <div className='head-icon'>
            <img src={img} alt="leaf img" />
          </div>
          <div className='head-name'>
            <h1>Potato Leaf Classifier</h1>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className='main-sec'>
        <div className='button-image'>
          <div className='drop-image'>
            <div className="dropzone-container">
              <input type="file" onChange={onSelectFile} ref={fileInputRef} />
              <p>Drag and drop an image <span>of a potato plant leaf to classify</span></p>
            </div>
            <div className='dropzone'>
              {preview && (
                <div className="image-preview-container">
                  <img src={preview} alt="uploaded" className="image-preview" />
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="clear-button-container">
              <button className="clear-button" onClick={clearData}>Clear</button>
            </div>
          </div>
        </div>
        <div className='Prediction'>
          {prediction && (
              <div className="prediction-container">
                <h2>Prediction:</h2>
                <p>
                  <span>
                    {prediction.split('\n').map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </span>
                </p>
              </div>
            )}
        </div>
      </section>
    </>
  );
};

export default Home;

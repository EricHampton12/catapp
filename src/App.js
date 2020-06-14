import React, { useState } from 'react';
import './App.css';

const apiKey = '4924de20-6257-498d-a219-95620eed426e';
const url = 'https://api.thecatapi.com/v1/images/search';
const breedsURl = ('https://api.thecatapi.com/v1/breeds?limit=10');

function App() {


  const [catUrl, setCatUrl] = useState('https://api.thecatapi.com/v1/breeds?limit=10');



  const getCat = () => {
    // console.log('Hello cat');

    fetch(url)
      .then((res) => res.json())
      .then((cats) => {
        console.log('Cats ', cats);
        const catUrl = cats[0].url;

        setCatUrl(catUrl);
      })
      .catch((error) => {
        console.log('Error ', error);
      });
  }



  console.log('Cat URL: ', catUrl);


  return (
    
    <div className="container-fluid justify-content-center">
      <div className="App">

        <h1 className="text-center text-light">The Cat App</h1>

        <img src={catUrl} alt="" />

        <button className="btn-clear ml-4 mt-5 text-dark align-center" onClick={getCat}>View new Cat</button>
      </div>
    </div>
  );
}




export default App;

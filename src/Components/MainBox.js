import React, { useEffect, useState } from 'react';
import '../App.css';
export default function MainBox() {
  const [quote,setQuote]=useState("");
  const [author,setAuthor]=useState("");
  const [copyText,setCopyText]=useState("Copy");
  const copyFunction=()=>{
    navigator.clipboard.writeText(quote);
    setCopyText("Copied");
    setTimeout(() => {
      setCopyText("Copy");
    }, 3000);
  }
  const getURL=()=>{
    setCopyText("Copy");
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {setQuote(data.content)
          setAuthor(data.author)});
   }
   useEffect(()=>{
    getURL();
   },[])
 

  return (
    <div className='MainBox'>
      <h1>Quote</h1>
      <h3><span style={{color:"red"}}>" </span>{quote}<span style={{color:"red"}}> "</span></h3>
      <h5>Author:- {author}</h5>
    <div className="buttonMainBox">
      <button onClick={getURL}>
        Next
      </button>
      <button onClick={copyFunction}>
        {copyText}
      </button>
    </div>
    </div>
  )
}

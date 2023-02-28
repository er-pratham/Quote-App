import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Header(props) {
    return (
    <div className='Header'>
        <div className="leftHeader">
      <a href="/">
      <h1>Quote App</h1>
      </a>
      <FormatQuoteIcon style={{color:"palegreen"}}/>
      </div>
      <div className="rightHeader">
        <button onClick={()=>{props.dsplyConfig()}}>About</button>
      </div>
    </div>
  )
}

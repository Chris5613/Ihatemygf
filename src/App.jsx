import React, { useState } from "react";
import "./index.css";

export default function App() {

  const [count, setCount] = useState(0);
  const [width,setWidth] = useState(150)
  const [height,setHeight] = useState(100)

  const gifs = [
    "https://media.tenor.com/p96XUHeS4q8AAAAi/peach-and-goma-goma.gif",
    "https://media.tenor.com/nyldlvA52xYAAAAi/dudu-dance.gif",
    "https://media.tenor.com/nExzTp9VCiUAAAAi/bubu-dudu.gif",
    "https://i.pinimg.com/originals/0a/31/6b/0a316bf1711b3ebf87b425a2a095f6c8.gif",
    "https://media.tenor.com/0imRtuzqccIAAAAi/bubu-dudu-flower-gift.gif",
    "https://media.tenor.com/Pbv3D2Gk_uYAAAAj/dudu-bubu.gif",
    "https://media.tenor.com/URGPvftREVwAAAAj/dhiren1234.gif",
    "https://media.tenor.com/z3CNbYIb7wsAAAAj/tkthao219-bubududu.gif",
    "https://media.tenor.com/N7GiO8UsfooAAAAj/bubu-dudu-heart.gif",
    "https://media.tenor.com/gNYCnviHZl8AAAAj/tkthao219-bubududu.gif",
    "https://media.tenor.com/enNRZJBnCQ0AAAAj/cartoons.gif",
    "https://media.tenor.com/R1oVKTn0f0UAAAAj/tkthao219-bubududu.gif"
  ];

  const title = [
    "Will you be my valentine?",
    "How about now?",
    "Wow so rude, how about now?",
    "Are you sure?",
    "Pleaseeeeeee?",
    "Nowwwww?",
    "Do you not love me",
    "I'll find someone else!!",
    "LOVE ME HOE",
    "I GOT OTHER HOES ON SPEED DIAL 😎😎😎",
    "LUNA LOVES ME MORE",
    "You're going to regret it!"
  ]

  const upcount = () => {
    if (count < 11) { 
      setCount(count + 1);
      setWidth(width + 10);
      setHeight(height + 10);
    }
  };

  const reset = () => {
    setCount(0)
    setHeight(100)
    setWidth(150)
  }

  let content;

  if (count < 11) {
    content = (
      <div className="main-container">
        <img src={gifs[count % gifs.length]} alt="animated character" width={300} />
        <h1>{title[count % title.length]}</h1>
        <div className="btn-container">
          <button className="btn1" style={{ width: `${width}px`, height: `${height}px` }}>Yes</button>
          <button className="btn2" onClick={upcount}>No</button>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="App">
        <img src="https://media.tenor.com/q9jVc0C7wYQAAAAi/dudu-dudu-run.gif" alt="bye" width={500} />
        <h1>LEAVING FOR GREATER AND BETTER THINGS</h1>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}
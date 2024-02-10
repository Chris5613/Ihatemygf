import React, { useState,useEffect } from "react";
import "./index.css";
import confetti from 'canvas-confetti';

export default function App() {

  const [count, setCount] = useState(0);
  const [width,setWidth] = useState(150)
  const [height,setHeight] = useState(100)
  const [clicked, setClicked] = useState(false)

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
    if (count < title.length - 1) {
      setCount(count + 1);
      setWidth(width + 10);
      setHeight(height + 10);
    }
  };

  const reset = () => {
    setCount(0);
    setWidth(150);
    setHeight(100);
    setClicked(false); // Ensure to reset clicked state as well
  };

  const launchConfetti = () => {
    setClicked(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!clicked) { // Only auto-launch confetti if "Yes" hasn't been clicked
        launchConfetti();
      }
    }, 4000); // Launch confetti every 4000 milliseconds (4 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [clicked]); // Add `clicked` as a dependency to re-evaluate the effect when it changes

  let content;

  if (clicked) {
    content = (
      <div>
        <img src="https://i.pinimg.com/originals/ae/f5/00/aef5000829c04e91f0259d58727459a3.gif" alt="" />
        <img src="https://media.tenor.com/AxWycUyxz34AAAAM/bubu-dudu-kiss.gif" alt="" />
        <img src="https://i.pinimg.com/originals/f5/e0/a5/f5e0a5e748b2dc73bdec6ba0aca0a083.gif" alt="" />
        <img src="https://media.tenor.com/wcDQ5VaLa9MAAAAi/bubu-dudu.gif" width={300} alt="" />
        <img src="https://i.pinimg.com/originals/54/15/c2/5415c2d447f1b6dd848001a29ff1f19b.gif" width={300} alt="" />
        <img src="https://media.tenor.com/wcDQ5VaLa9MAAAAi/bubu-dudu.gif" width={300} alt="" />

        <h1>THAT'S WHAT I THOUGHT PUSSY</h1>
        <h1>I LOVE YOUUUUUUUUU</h1>
      </div>
      
    )
  } else if (count < title.length) {
    content = (
      <div className="main-container">
        <img src={gifs[count]} alt="animated character" width={300} />
        <h1>{title[count]}</h1>
        <div className="btn-container">
          <button className="btn1" onClick={launchConfetti} style={{ width: `${width}px`, height: `${height}px` }}>Yes</button>
          <button className="btn2" onClick={upcount}>No</button>
        </div>
      </div>
    );
  } else {
    content = (
      <div>
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
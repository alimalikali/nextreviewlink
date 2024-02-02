
import { useState } from "react";

export default function Sharelinkbutton() {
  const [clicked , setClicked] = useState(false);
  const handleclick=()=>{
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(()=> setClicked(false), 1500)

  }
  return (
    <button onClick={handleclick} className="border-2 p-7 "> 
      {clicked? 'copied' : 'share link'}
    </button>
  );
}


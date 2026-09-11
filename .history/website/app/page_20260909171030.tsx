"use client";

import {useEffect ,useState} from "react";

export default function Home(){
  const [load , setload] = useState(false);
  const [enter , setenter] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setload(true);
    }, 1000)
  },[])
  const handle =() =>{
    setenter(true);

  }
  setTimeout(()=>{
    setenter(false);
  }, 1000)
  return(
    <main className = "relative h-scrren min-h-[650px] w-screen overflow-hidden bg-[#08070a] text-[#4f4f4f]"> 
    
    {/* background */}



    <div className="pointer-events-none absolute insert-0 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#08070a] via-[#08070a] to-[#08070a]"></div>
      <div className="abosolute -right-32 -top-44 h-[420px] w-[420px] animate-pulse rounded-full bg-[#9b5f70]/25 blur-[100px]">
      </div>
    </main>
  )
}
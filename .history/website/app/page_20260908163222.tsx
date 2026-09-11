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
    </main>
  )
}
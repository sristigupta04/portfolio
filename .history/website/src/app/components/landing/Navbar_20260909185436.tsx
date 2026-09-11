"use client";

import {useState} from "react";

const navItems =[
    {label:"work",href:"#work"},
    {label:"about",href:"#about"},
    {label:"experience",href:"#experience"},
    {label:"contact",href:"#contact"}
];
export default function Navbar() {
  const [open, setopen] = useState(false);
  const handle =() =>{
    setopen(!open);
  }

}
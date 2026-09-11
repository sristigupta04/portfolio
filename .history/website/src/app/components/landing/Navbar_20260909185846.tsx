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
 return (
    <header className="navbar">
        <div className="inner">
            <a href="#top" className="navbar-logo" onClick={handle}>
                sristi <span>✦</span>
            </a>
            <nav className="navbar-links" aria-label="Main Navigation">
                {navItems.map((item) => (
                    <a key={item.label} href={item.href} onClick={handle}>
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    </header>
 )
}
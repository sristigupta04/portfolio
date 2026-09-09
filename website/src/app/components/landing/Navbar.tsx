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
                {navItems.map((item,index) => (
                    <a key={item.label} href={item.href} onClick={handle}>
                    className={`navbar-link${index=== 0?"navbar-link-active":""}`}
                    </a>
                ))}
            </nav>
            <button type="button" className={`navbar-menu${open? "navbar-menu": ""}`}
            onClick={()=>setopen((current)=> !current)}
            aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >  <span />
          <span /></button>
        </div>
        <div className={`navbar-dropdown${open? "navbar-dropdown-open": ""}`}>
            {navItems.map((item) => (
                <a key={item.label} href={item.href}   className="mobile-menu-link" onClick={handle}>
                    {item.label}
                </a>
            ))}
        </div>
    </header>
 )
}
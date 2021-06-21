import React,{useState,useEffect} from 'react';
import "./Nav.css";

const Nav= ()=> {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 50){
                handleShow(true);
            }else{
                handleShow(false);
            }
            
        });
        return () => {
            window.removeEventListener("scroll",()=>{})
        }
    }, [])
    
    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <a href="https://www.netflix.com">
            <img
                alt="Netflix logo"
                src="https://raw.githubusercontent.com/jackjona123/cosflix/assets/Netflix_logo.svg.png"
                className="nav__logo"
            />
            
            <img
                alt="User logged"
                src="https://raw.githubusercontent.com/jackjona123/cosflix/assets/avatar2.png"
                className="nav__avatar"
            />
            </a>
        </nav>
    )
}

export default Nav

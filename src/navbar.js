import { useState } from "react";

const Navbar = () => {
    const [name,setName] = useState("Yes?");
    const handleClick = () => {
        setName("Nooooo"); 
    }
    return ( 
        <nav className = "navbar">
            <h1>Beem</h1>
            <a href="https://beem.africa">Home</a>
            <a href="https://beem.africa/beem-engage/" style = {{
                color: "white",
                backgroundColor: "#33b1ba",
                borderRadius: '8px'
            }}>Beem Engage</a>
            <button onClick={handleClick}>{name}</button>
        </nav>
     );
}
 
export default Navbar;
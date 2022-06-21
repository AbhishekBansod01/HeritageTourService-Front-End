import React from "react";
import './Header.css'

function Header() {
    return (
        <nav>
            <div class='fixed3'>
                <h1><h1><b><font face="Algerian" ><h1><b>Heritage Tour Service</b></h1></font></b></h1></h1>
                <div class="imgdiv">
                    <img src={require('./logo99.png')} alt='cap' />
                </div>
            </div>
        </nav>
    )
}
export default Header;
import React from "react"
import "./Contact.css"

function Contact() {
    return (
        <div>
            <div class="div54">
                <img className="bird" src={require('./bird.gif')} alt='cap' />

                <h1><h2>Contact Us</h2></h1><br />

                <h2>Head Office :</h2>
                <h2>#1133/B, 101st and 102nd floor,
                    300 feet Service Road,
                    Vijaynagar, Bengaluru - 560040</h2>
                <h2>
                    Branch Office :</h2>
                <h2>#73, 53rd Floor,
                    Ward Number 65-54-1001,
                    Bank Officers / Official Colony,
                    BTM Layout 101st Stage,
                    Bangalore, India - 560076</h2>
            </div>
            <div class="divcontact"><h2>Have Queries?</h2>
                <h3>Get in Touch</h3><div> <img className="tele" src={require('./tel.gif')} alt='cap' /></div>
                <h3>Email : queries@asandas.com</h3>
                <h3>Contact No. : + 91 7868XXXXXX</h3><br /><br /><br /></div>


        </div>

    )
}

export default Contact;